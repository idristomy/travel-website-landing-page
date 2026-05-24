import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa6'
import AuthShell from '../../Components/AuthShell.jsx'

const inputClass =
  "w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus:border-orange-400 transition"
const labelClass = "block text-sm font-medium text-gray-700 mb-1.5"

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
              aria-label={showPw ? 'Hide password' : 'Show password'}
              className="absolute inset-y-0 end-0 px-3 grid place-items-center text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              {showPw ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-400" />
            {t('auth.login.remember')}
          </label>
          <a href="#" className="font-medium text-orange-500 hover:text-orange-600">{t('auth.login.forgot')}</a>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-lg shadow-orange-500/30 hover:from-orange-600 hover:to-amber-600 transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
        >
          {t('auth.login.submit')}
        </button>

        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="h-px flex-1 bg-gray-200" />
          {t('auth.or')}
          <span className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="flex gap-3">
          <button type="button" className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-50 transition text-sm font-medium text-gray-700 cursor-pointer">
            <FcGoogle className="text-lg" /> Google
          </button>
          <button type="button" className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-50 transition text-sm font-medium text-gray-700 cursor-pointer">
            <FaFacebookF className="text-[#1877F2]" /> Facebook
          </button>
        </div>
      </form>

      <p className="text-center text-sm text-gray-500 mt-8">
        {t('auth.login.noAccount')}{' '}
        <Link to={`/${locale}/signup`} className="font-semibold text-orange-500 hover:text-orange-600">
          {t('auth.login.signupLink')}
        </Link>
      </p>
    </AuthShell>
  )
}

export default Login
