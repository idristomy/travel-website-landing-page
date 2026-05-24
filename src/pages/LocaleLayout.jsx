import { useEffect } from 'react'
import { Outlet, useParams, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LOCALES, RTL_LOCALES } from '../i18n/config'

function LocaleLayout() {
  const { locale } = useParams()
  const { i18n } = useTranslation()

  const isValid = SUPPORTED_LOCALES.includes(locale)

  useEffect(() => {
    if (!isValid) return
    i18n.changeLanguage(locale)
    document.documentElement.lang = locale
    document.documentElement.dir = RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr'
  }, [locale, isValid, i18n])

  if (!isValid) return <Navigate to="/en" replace />

  return <Outlet />
}

export default LocaleLayout
