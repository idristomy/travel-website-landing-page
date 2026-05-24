import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Globe } from 'lucide-react'
import { LANGUAGES } from '../i18n/config'

export default function LanguageSwitcher({ up = false }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()
  const { locale } = useParams()
  const current = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0]

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const switchTo = (code) => {
    const segments = location.pathname.split('/')
    segments[1] = code
    navigate(segments.join('/') || `/${code}`)
    setOpen(false)
  }

  return (
    <div className="relative" ref={ref}>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        aria-label="Select language"
        aria-expanded={open}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-amber-400 hover:bg-amber-50 text-sm font-medium transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      >
        <Globe className="w-4 h-4 text-amber-600" />
        <span className="text-gray-700">{current.label}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.ul
            className={`absolute end-0 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 ${up ? 'bottom-full mb-2' : 'mt-2'}`}
            initial={{ opacity: 0, scale: 0.95, y: up ? 10 : -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: up ? 10 : -10 }}
            transition={{ duration: 0.18 }}
          >
            {LANGUAGES.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => switchTo(lang.code)}
                  className={`w-full px-4 py-3 text-start text-sm flex items-center justify-between transition-colors cursor-pointer ${
                    current.code === lang.code
                      ? 'bg-amber-50 text-amber-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>{lang.name}</span>
                  <span className="text-xs font-semibold uppercase">{lang.code}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
