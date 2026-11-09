import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { ArrowLeft } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import Wordmark from './Wordmark.jsx'
import Traveller from '../assets/img/Traveller 1.png'

export default function AuthShell({ title, subtitle, children }) {
  const { t } = useTranslation()
  const { locale } = useParams()
  const home = `/${locale}`

  return (
    <div className="flex min-h-dvh bg-white">
      <aside className="relative hidden w-[46%] flex-col overflow-hidden bg-cream p-12 lg:flex">
        <Link to={home} aria-label="Jadoo" className="relative z-10 w-max text-navy">
          <Wordmark className="text-3xl" />
        </Link>

        <p className="relative z-10 mt-16 max-w-md text-[40px] leading-[1.1] font-extrabold tracking-[-0.03em] text-navy">
          {t('hero.titlePre')} <span className="text-brand">{t('hero.titleHighlight')}</span> {t('hero.titlePost')}
        </p>

        <div aria-hidden="true" className="absolute bottom-0 start-[22%] h-[46%] w-[60%] rounded-t-full bg-peach" />
        <img src={Traveller} alt="" className="absolute bottom-0 start-[14%] w-[66%] max-w-[480px] select-none rtl:-scale-x-100" />
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-20 items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link to={home} aria-label="Jadoo" className="text-navy lg:hidden">
            <Wordmark className="text-[28px]" />
          </Link>
          <Link
            to={home}
            className="hidden items-center gap-2 rounded-full px-1 text-[15px] font-medium text-slate transition-colors hover:text-navy lg:inline-flex"
          >
            <ArrowLeft className="size-4 rtl:-scale-x-100" />
            {t('auth.backHome')}
          </Link>
          <LanguageSwitcher />
        </header>

        <main className="flex flex-1 items-center justify-center px-5 py-12 sm:px-8">
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <h1 className="text-4xl font-extrabold tracking-[-0.03em] text-navy">{title}</h1>
            <p className="mt-3 mb-10 text-slate">{subtitle}</p>
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  )
}
