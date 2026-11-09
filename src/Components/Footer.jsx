import { useTranslation } from 'react-i18next'
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import Wordmark from './Wordmark.jsx'

const COLUMNS = [
  { title: 'company', links: ['about', 'careers', 'press'] },
  { title: 'help', links: ['faq', 'write', 'terms', 'privacy'] },
]

const SOCIAL = [
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: FaInstagram },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: FaFacebookF },
  { label: 'X', href: 'https://x.com/', icon: FaXTwitter },
]

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-[1320px] px-5 pt-16 pb-10 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Wordmark className="text-4xl text-navy" />
            <p className="mt-5 max-w-[34ch] text-slate">{t('footer.tagline')}</p>
            <ul className="mt-6 flex gap-3">
              {SOCIAL.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="press grid size-11 place-items-center rounded-full border border-line text-navy hover:border-brand hover:bg-brand hover:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:col-span-7 lg:grid-cols-3">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={t(`footer.${col.title}`)}>
                <h2 className="text-base font-bold text-navy">{t(`footer.${col.title}`)}</h2>
                <ul className="mt-4 space-y-1">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="inline-block py-1.5 text-slate transition-colors hover:text-brand">
                        {t(`footer.${link}`)}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-sm text-slate lg:flex-row lg:items-baseline lg:justify-between lg:gap-10">
          <p>{t('footer.rights')}</p>
          <p className="max-w-[90ch] text-xs lg:text-end">{t('footer.credits')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
