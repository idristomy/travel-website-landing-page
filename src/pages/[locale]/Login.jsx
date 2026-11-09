import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa6'
import AuthShell from '../../Components/AuthShell.jsx'

const inputClass =
  "w-full rounded-2xl border border-line bg-white px-4 py-3.5 text-navy placeholder:text-slate/60 transition-colors hover:border-navy/30 focus:border-brand focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/15"
const labelClass = "mb-2 block text-sm font-semibold text-navy"

function Login() {
  const { t } = useTranslation()
  const { locale } = useParams()
  const [showPw, setShowPw] = useState(false)

  return (
    <AuthShell title={t('auth.login.title')} subtitle={t('auth.login.subtitle')}>
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="login-email" className={labelClass}>{t('auth.login.email')}</label>
          <input id="login-email" type="email" autoComplete="email" required
            placeholder={t('auth.login.emailPlaceholder')} className={inputClass} />
        </div>

        <div>
          <label htmlFor="login-password" className={labelClass}>{t('auth.login.password')}</label>
          <div className="relative">
            <input
              id="login-password"
              type={showPw ? 'text' : 'password'}
              autoComplete="current-password"
              required
              placeholder={t('auth.login.passwordPlaceholder')}
              className={`${inputClass} pe-11`}
            />
            <button
              type="button"
              onClick={() => setShowPw((s) => !s)}
              aria-label={showPw ? t('auth.hidePassword') : t('auth.showPassword')}
              className="absolute inset-y-0 end-0 grid cursor-pointer place-items-center px-4 text-slate hover:text-navy"
            >
              {showPw ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-[15px]">
          <label className="flex cursor-pointer items-center gap-2.5 text-slate">
            <input type="checkbox" className="size-4 accent-[#f26a2e]" />
            {t('auth.login.remember')}
          </label>
          <a href="#" className="font-semibold text-brand hover:text-brand-deep">{t('auth.login.forgot')}</a>
        </div>

        <button
          type="submit"
          className="press w-full cursor-pointer rounded-full bg-brand py-4 text-base font-semibold text-white shadow-[0_18px_36px_-16px_rgba(242,106,46,0.75)] hover:bg-brand-deep"
        >
          {t('auth.login.submit')}
        </button>

        <div className="flex items-center gap-3 text-[13px] text-slate">
          <span className="h-px flex-1 bg-line" />
          {t('auth.or')}
          <span className="h-px flex-1 bg-line" />
        </div>

        <div className="flex gap-3">
          <button type="button" className="press inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border border-line py-3 text-[15px] font-semibold text-navy hover:border-navy/30 hover:bg-cream">
            <FcGoogle className="text-lg" /> Google
          </button>
          <button type="button" className="press inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border border-line py-3 text-[15px] font-semibold text-navy hover:border-navy/30 hover:bg-cream">
            <FaFacebookF className="text-[#1877F2]" /> Facebook
          </button>
        </div>
      </form>

      <p className="mt-8 text-center text-[15px] text-slate">
        {t('auth.login.noAccount')}{' '}
        <Link to={`/${locale}/signup`} className="font-semibold text-brand hover:text-brand-deep">
          {t('auth.login.signupLink')}
        </Link>
      </p>
    </AuthShell>
  )
}

export default Login
