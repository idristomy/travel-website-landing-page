import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { IoArrowBack } from 'react-icons/io5'
import LanguageSwitcher from './LanguageSwitcher'
import Traveller from '../assets/img/Traveller 1.png'

const PLANE = "M482.3 192c34.2 0 93.7 29 93.7 64s-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.7 0-49-171.6C162.8 10.2 170.5 0 181.1 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"

export default function AuthShell({ title, subtitle, children }) {
  const { t } = useTranslation()
  const { locale } = useParams()
  const home = `/${locale}`

  return (
    <div className="min-h-dvh flex bg-white">
      {/* Brand panel */}
      <div className="hidden lg:flex w-[45%] relative overflow-hidden bg-gradient-to-br from-[#181E4B] via-[#272c63] to-orange-500 text-white p-12 flex-col justify-between">
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 600 800" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M -20 700 C 200 650, 250 300, 620 120" stroke="#FFD9C2" strokeWidth="2" strokeDasharray="8 12" strokeLinecap="round" />
          <g transform="translate(540 150) scale(0.08) rotate(-20)">
            <path transform="translate(-288 -256)" fill="#FFFFFF" d={PLANE} />
          </g>
          <circle cx="-20" cy="700" r="6" fill="#FFD9C2" />
        </svg>

        <Link to={home} dir="ltr" className="relative z-10 text-3xl font-bold tracking-tight w-max">
          Jadoo<span className="text-orange-400">.</span>
        </Link>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold leading-tight max-w-sm">
            {t('hero.titlePre')} <span className="text-orange-300">{t('hero.titleHighlight')}</span> {t('hero.titlePost')}
          </h2>
          <p className="text-white/70 mt-4 max-w-xs">{t('hero.desc')}</p>
        </div>

        <img
          src={Traveller}
          alt=""
          className="absolute bottom-0 end-0 w-2/3 max-w-xs opacity-90 pointer-events-none select-none"
        />
      </div>

      {/* Form side */}
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-6 lg:px-12">
          <Link to={home} dir="ltr" className="text-2xl font-bold text-[#181E4B] lg:hidden">
            Jadoo<span className="text-orange-500">.</span>
          </Link>
          <div className="hidden lg:block" />
          <div className="flex items-center gap-4">
            <Link
              to={home}
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-orange-500 transition-colors"
            >
              <IoArrowBack className="rtl:rotate-180" />
              {t('auth.backHome')}
            </Link>
            <LanguageSwitcher />
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-6 pb-12">
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h1 className="text-3xl font-bold text-[#181E4B]">{title}</h1>
            <p className="text-gray-500 mt-2 mb-8">{subtitle}</p>
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  )
}
