import { useEffect, useState } from 'react'
import { Link as RouterLink, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Menu, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import Wordmark from './Wordmark.jsx'
import { scrollToId } from '../lib/scrollTo.js'

const EASE_OUT = [0.23, 1, 0.32, 1]
const SECTIONS = ['destinations', 'services', 'book', 'testimonials']

// Tracks which section sits under the masthead so the nav pill can follow it
function useActiveSection() {
  const [active, setActive] = useState(null)
  useEffect(() => {
    const onScroll = () => {
      let current = null
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return active
}

const Header = ({ intro }) => {
  const { t } = useTranslation()
  const { locale } = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection()

  const navLinks = SECTIONS.map((id) => ({ to: id, label: t(`nav.${id === 'book' ? 'book' : id}`) }))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false)
    document.documentElement.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen])

  const go = (id) => (e) => {
    e.preventDefault()
    setIsOpen(false)
    setTimeout(() => scrollToId(id, 0), 0)
  }

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled || isOpen ? 'bg-white/85 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-xl' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -12 }}
      animate={intro ? { opacity: 0, y: -12 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE_OUT, delay: intro ? 0 : 0.1 }}
    >
      <a
        href="#main"
        className="absolute start-4 top-3 z-[70] -translate-y-24 rounded-full bg-navy px-4 py-2 text-sm text-white focus:translate-y-0"
      >
        {t('nav.skip')}
      </a>

      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <a href="#home" onClick={go('home')} aria-label="Jadoo" className="text-navy">
          <Wordmark className="text-[30px]" />
        </a>

        <nav aria-label="Primary" className="hidden rounded-full border border-line bg-white/70 p-1 backdrop-blur lg:block">
          <ul className="flex items-center">
            {navLinks.map((link) => {
              const isActive = active === link.to
              return (
                <li key={link.to} className="relative">
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-navy"
                      transition={{ type: 'spring', duration: 0.45, bounce: 0.15 }}
                    />
                  )}
                  <a
                    href={`#${link.to}`}
                    onClick={go(link.to)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors ${
                      isActive ? 'text-white' : 'text-slate hover:text-navy'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <RouterLink to={`/${locale}/login`} className="rounded-full px-4 py-2.5 text-[15px] font-semibold text-navy transition-colors hover:text-brand">
            {t('nav.login')}
          </RouterLink>
          <RouterLink
            to={`/${locale}/signup`}
            className="press group inline-flex h-11 items-center gap-2 rounded-full bg-navy ps-5 pe-4 text-[15px] font-semibold text-white hover:bg-brand"
          >
            {t('nav.signup')}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
          </RouterLink>
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? t('nav.close') : t('nav.menu')}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="press grid size-11 cursor-pointer place-items-center rounded-full bg-navy text-white"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 top-20 bottom-0 flex flex-col justify-between overflow-y-auto bg-white px-5 pt-4 pb-8 sm:px-8 lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
          >
            <nav aria-label="Primary">
              <ul>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.to}
                    className="border-b border-line"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.04 + i * 0.04, ease: EASE_OUT }}
                  >
                    <a
                      href={`#${link.to}`}
                      onClick={go(link.to)}
                      className="flex items-center justify-between py-5 text-2xl font-bold tracking-tight text-navy"
                    >
                      {link.label}
                      <ArrowRight className="size-5 text-brand rtl:-scale-x-100" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-10 grid grid-cols-2 gap-3">
              <RouterLink
                to={`/${locale}/login`}
                onClick={() => setIsOpen(false)}
                className="press inline-flex h-12 items-center justify-center rounded-full border border-navy/20 text-base font-semibold text-navy"
              >
                {t('nav.login')}
              </RouterLink>
              <RouterLink
                to={`/${locale}/signup`}
                onClick={() => setIsOpen(false)}
                className="press inline-flex h-12 items-center justify-center rounded-full bg-brand text-base font-semibold text-white"
              >
                {t('nav.signup')}
              </RouterLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
