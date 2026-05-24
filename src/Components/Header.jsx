import { useState, useEffect } from "react"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher.jsx'

const navVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] } }
}

const Header = () => {
    const { t } = useTranslation()
    const { locale } = useParams()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { link: 'home', label: t('nav.home') },
        { link: 'services', label: t('nav.services') },
        { link: 'destinations', label: t('nav.destinations') },
        { link: 'book', label: t('nav.booking') },
        { link: 'testimonials', label: t('nav.testimonials') },
    ]

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-md shadow-md'
            }`}
            variants={navVariants}
            initial="hidden"
            animate="show"
        >
            <div className="w-full container mx-auto flex justify-between items-center px-4 lg:px-20 lg:h-20 h-16">
                <ScrollLink to="home" smooth duration={500} className="cursor-pointer text-2xl lg:text-3xl font-bold text-[#181E4B]">
                    <span dir="ltr">Jadoo<span className="text-orange-500">.</span></span>
                </ScrollLink>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    className='md:hidden p-2.5 transition duration-300 hover:bg-amber-50 rounded-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500'
                >
                    {isOpen ? <HiX className="size-7 text-amber-600" /> : <HiMenuAlt3 className="size-7 text-gray-700" />}
                </button>

                <div className="hidden md:flex md:gap-6 lg:gap-10 items-center">
                    {navLinks.map((navLink) => (
                        <ScrollLink
                            key={navLink.link}
                            to={navLink.link}
                            smooth
                            spy
                            duration={500}
                            activeClass="text-orange-600"
                            className="relative text-sm lg:text-base font-medium cursor-pointer text-gray-600 hover:text-orange-500 transition-colors duration-300"
                        >
                            {navLink.label}
                        </ScrollLink>
                    ))}
                </div>

                <div className="hidden md:flex gap-3 lg:gap-5 items-center">
                    <RouterLink
                        to={`/${locale}/login`}
                        className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors duration-300"
                    >
                        {t('nav.login')}
                    </RouterLink>

                    <RouterLink
                        to={`/${locale}/signup`}
                        className="px-4 lg:px-6 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-orange-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        {t('nav.signup')}
                    </RouterLink>

                    <LanguageSwitcher />
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="bg-white/95 backdrop-blur-xl mx-auto px-4 md:hidden shadow-lg"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="container space-y-1 w-full font-medium py-4 border-t border-gray-200">
                            {navLinks.map((navLink) => (
                                <ScrollLink
                                    key={navLink.link}
                                    to={navLink.link}
                                    smooth
                                    spy
                                    duration={500}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                                >
                                    {navLink.label}
                                </ScrollLink>
                            ))}
                        </div>

                        <div className="flex gap-3 items-center justify-between py-4 border-t border-gray-200">
                            <div className="flex gap-3 items-center">
                                <RouterLink to={`/${locale}/login`} onClick={() => setIsOpen(false)} className="text-sm font-medium text-gray-600">
                                    {t('nav.login')}
                                </RouterLink>
                                <RouterLink
                                    to={`/${locale}/signup`}
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white"
                                >
                                    {t('nav.signup')}
                                </RouterLink>
                            </div>
                            <LanguageSwitcher up />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Header
