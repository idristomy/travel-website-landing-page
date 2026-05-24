import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import ar from './locales/ar.json'
import zh from './locales/zh.json'

export const SUPPORTED_LOCALES = ['en', 'ar', 'zh']
export const RTL_LOCALES = ['ar']

export const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ar', label: 'AR', name: 'العربية' },
  { code: 'zh', label: '中文', name: '中文' },
]

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
    zh: { translation: zh },
  },
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: SUPPORTED_LOCALES,
  interpolation: { escapeValue: false },
})

export default i18n
