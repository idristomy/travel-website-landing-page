import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Check, ChevronDown } from 'lucide-react'
import { LANGUAGES } from '../i18n/config'

export default function LanguageSwitcher({ up = false }) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()
  const { locale } = useParams()
  const current = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0]

  useEffect(() => {
    if (!open) return
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const switchTo = (code) => {
    const segments = location.pathname.split('/')
    segments[1] = code
    navigate((segments.join('/') || `/${code}`) + location.hash)
    setOpen(false)
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={`${t('nav.language')}: ${current.name}`}
        aria-expanded={open}
        aria-haspopup="true"
        className="press flex h-11 cursor-pointer items-center gap-1.5 rounded-full border border-line bg-white px-4 text-[14px] font-semibold text-navy hover:border-navy/40"
      >
        {current.label}
        <ChevronDown
          aria-hidden="true"
          className={`size-3.5 text-slate transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            className={`absolute end-0 z-50 w-48 overflow-hidden rounded-2xl border border-line bg-white p-1.5 shadow-[0_24px_48px_-20px_rgba(24,30,75,0.35)] ${
              up ? 'bottom-full mb-2 origin-bottom-right rtl:origin-bottom-left' : 'mt-2 origin-top-right rtl:origin-top-left'
            }`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.1 } }}
            transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
          >
            {LANGUAGES.map((lang) => {
              const active = current.code === lang.code
              return (
                <li key={lang.code}>
                  <button
                    type="button"
                    lang={lang.code}
                    onClick={() => switchTo(lang.code)}
                    aria-current={active ? 'true' : undefined}
                    className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3.5 py-2.5 text-start text-[15px] font-medium hover:bg-cream ${active ? 'text-brand' : 'text-navy'}`}
                  >
                    {lang.name}
                    {active && <Check aria-hidden="true" className="size-4" />}
                  </button>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
