import Book from '../../Components/Book.jsx'
import Destinations from '../../Components/Destinations.jsx'
import Footer from '../../Components/Footer.jsx'
import Header from '../../Components/Header.jsx'
import Hero from '../../Components/Hero.jsx'
import Intro from '../../Components/Intro.jsx'
import Services from '../../Components/Services.jsx'
import Subscribtion from '../../Components/Subscirbtion.jsx'
import Testimonials from '../../Components/Testimonials.jsx'
import { AnimatePresence } from 'motion/react'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { scrollToId } from '../../lib/scrollTo.js'

const INTRO_KEY = 'jadoo:intro-seen'

function shouldPlayIntro() {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    if (window.location.hash) return false
    return sessionStorage.getItem(INTRO_KEY) !== '1'
  } catch {
    return false
  }
}

function Home() {
  const { t, i18n } = useTranslation()
  const [intro, setIntro] = useState(shouldPlayIntro)
  const [city, setCity] = useState('rome')
  const [pick, setPick] = useState(null)

  const endIntro = useCallback(() => {
    setIntro(false)
    try {
      sessionStorage.setItem(INTRO_KEY, '1')
    } catch {
      /* storage unavailable: the intro simply plays again next visit */
    }
  }, [])

  useEffect(() => {
    document.title = t('meta.title')
  }, [t, i18n.language])

  useEffect(() => {
    if (!intro) return
    const root = document.documentElement
    root.style.overflow = 'hidden'
    return () => {
      root.style.overflow = ''
    }
  }, [intro])

  const onFind = ({ city: chosen }) => {
    setPick(chosen === 'any' ? null : chosen)
    scrollToId(chosen === 'any' ? 'destinations' : `trip-${chosen}`)
  }

  return (
    <>
      <AnimatePresence>{intro && <Intro key="intro" onDone={endIntro} />}</AnimatePresence>

      <Header intro={intro} />
      <main id="main" className="overflow-x-clip">
        <Hero intro={intro} city={city} onCityChange={setCity} onFind={onFind} />
        <Destinations pick={pick} />
        <Services />
        <Book />
        <Testimonials />
        <Subscribtion />
      </main>
      <Footer />
    </>
  )
}

export default Home
