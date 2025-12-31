import React from "react"
import { useState, useEffect } from "react"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import { Globe } from "lucide-react"
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

const NavbarVariants = {
    hidden: {
        opacity: 0,
        y: -20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1]
        }
    }
}

const Header = () => {
    const [isOpenLanguageButton, setIsOpenLanguageButton] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeLinks, setActiveNavLinks] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            setScrolled(scroll > 50);
            
            if(scroll < 100){
                setActiveNavLinks('home')
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        {link: 'home', label: 'Home'},
        {link: 'services', label: 'Services'},
        {link: 'destinations', label: 'Destinations'},
        {link: 'book', label: 'Booking'},
        {link: 'testimonials', label: 'Testimonials'}
    ]

    const languages = [
        { code: 'EN', name: 'English' },
        { code: 'AR', name: 'العربية' },
        { code: 'CN', name: '中文' }
    ]

    const [selectedLang, setSelectedLang] = useState(languages[0]);

    return(
        <motion.nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-md shadow-md'
            }`}
            variants={NavbarVariants}
            initial="hidden"
            animate="show"
        >
            <div className="w-full container mx-auto flex justify-between items-center px-4 lg:px-20 lg:h-20 h-16">
                <div className="mr-20 relative">
                    <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.5,
                                type: 'spring',
                                stiffness: 100
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                                Jadoo
                            </div>
                        </motion.div>
                    </Link>
                </div>

                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className='md:hidden p-2 transition duration-300 hover:bg-amber-50 rounded-lg'
                >
                    <motion.div
                        initial={false}
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isOpen ? <HiX className="size-7 text-amber-600"/> : <HiMenuAlt3 className="size-7 text-gray-700"/>}
                    </motion.div>
                </button>

                <div className="hidden md:flex md:gap-6 lg:gap-10 items-center">
                    {navLinks.map((NavLink, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                        >
                            <Link
                                to={NavLink.link}
                                smooth={true}
                                spy={true}
                                duration={500}
                                activeClass="text-amber-600"
                                onSetActive={() => setActiveNavLinks(NavLink.link)}
                                className={`relative text-sm lg:text-base font-medium cursor-pointer transition-colors duration-300 ${
                                    activeLinks === NavLink.link ? "text-amber-600" : "text-gray-600 hover:text-amber-500"
                                }`}
                            >
                                <motion.span
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {NavLink.label}
                                    {activeLinks === NavLink.link && (
                                        <motion.div
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500"
                                            layoutId="underline"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </motion.span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="hidden md:flex gap-3 lg:gap-6 items-center">
                    <motion.a 
                        className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors duration-300" 
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Login
                    </motion.a>
                    
                    <motion.button 
                        className="px-4 lg:px-6 py-2.5 font-semibold rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a className="text-sm" href="#">Sign Up</a>
                    </motion.button>

                    <div className="relative">
                        <motion.button 
                            className='flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-amber-400 hover:bg-amber-50 text-sm font-medium transition-all duration-300'
                            onClick={() => setIsOpenLanguageButton(!isOpenLanguageButton)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Globe className="w-4 h-4 text-amber-600" />
                            <span className="text-gray-700">{selectedLang.code}</span>
                        </motion.button>

                        <AnimatePresence>
                            {isOpenLanguageButton && (
                                <motion.div
                                    className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {languages.map((lang, index) => (
                                        <motion.button
                                            key={lang.code}
                                            className={`w-full px-4 py-3 text-left text-sm flex items-center justify-between transition-colors ${
                                                selectedLang.code === lang.code 
                                                    ? 'bg-amber-50 text-amber-600 font-medium' 
                                                    : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                            onClick={() => {
                                                setSelectedLang(lang);
                                                setIsOpenLanguageButton(false);
                                            }}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            whileHover={{ x: 4 }}
                                        >
                                            <span>{lang.name}</span>
                                            <span className="text-xs font-semibold">{lang.code}</span>
                                        </motion.button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
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
                            {navLinks.map((NavLink, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={NavLink.link}
                                        smooth={true}
                                        spy={true}
                                        duration={500}
                                        className={`block py-3 px-4 rounded-lg transition-colors cursor-pointer ${
                                            activeLinks === NavLink.link 
                                                ? 'text-amber-600 bg-amber-50 font-semibold' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                        onClick={() => {
                                            setActiveNavLinks(NavLink.link);
                                            setIsOpen(false);
                                        }}
                                    >
                                        {NavLink.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex gap-3 items-center justify-between py-4 border-t border-gray-200">
                            <div className="flex gap-3 items-center">
                                <a className="text-sm font-medium text-gray-600" href="#">Login</a>
                                <button className="px-4 py-2 font-semibold rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm">
                                    Sign Up
                                </button>
                            </div>
                            
                            <div className="relative">
                                <button 
                                    className='flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-sm font-medium'
                                    onClick={() => setIsOpenLanguageButton(!isOpenLanguageButton)}
                                >
                                    <Globe className="w-4 h-4 text-amber-600" />
                                    {selectedLang.code}
                                </button>
                                
                                <AnimatePresence>
                                    {isOpenLanguageButton && (
                                        <motion.div
                                            className="absolute right-0 bottom-full mb-2 w-36 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                        >
                                            {languages.map((lang) => (
                                                <button
                                                    key={lang.code}
                                                    className={`w-full px-3 py-2 text-left text-sm flex items-center justify-between ${
                                                        selectedLang.code === lang.code 
                                                            ? 'bg-amber-50 text-amber-600 font-medium' 
                                                            : 'text-gray-700 hover:bg-gray-50'
                                                    }`}
                                                    onClick={() => {
                                                        setSelectedLang(lang);
                                                        setIsOpenLanguageButton(false);
                                                    }}
                                                >
                                                    <span className="text-xs">{lang.name}</span>
                                                    <span className="text-xs font-semibold">{lang.code}</span>
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Header