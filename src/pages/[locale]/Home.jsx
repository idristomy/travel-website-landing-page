import Book from '../../Components/Book.jsx';
import Companies from '../../Components/Companies.jsx';
import Destinations from '../../Components/Destinations.jsx';
import Footer from '../../Components/Footer.jsx';
import Header from '../../Components/Header.jsx';
import Hero from '../../Components/Hero.jsx';
import Services from '../../Components/Services.jsx';
import Subscribtion from '../../Components/Subscirbtion.jsx';
import Testimonials from '../../Components/Testimonials.jsx';
import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ROUTE = "M 60 520 C 280 470, 430 180, 940 110"
// FontAwesome "plane" solid glyph (nose points +X / right), viewBox 0 0 576 512
const PLANE = "M482.3 192c34.2 0 93.7 29 93.7 64s-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.7 0-49-171.6C162.8 10.2 170.5 0 181.1 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"

function Home() {
  const { t } = useTranslation()
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='relative overflow-hidden'>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#181E4B]"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 600"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
            >
              <motion.path
                d={ROUTE}
                stroke="#FF7A45"
                strokeWidth="3"
                strokeDasharray="10 12"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.85 }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
              />
              <motion.circle
                cx="60" cy="520" r="7" fill="#FF7A45"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.circle
                cx="940" cy="110" r="7" fill="#FF7A45"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.85, duration: 0.3 }}
              />
              <g opacity="0">
                <g transform="scale(0.1)">
                  <path transform="translate(-288 -256)" fill="#FFFFFF" d={PLANE} />
                </g>
                <animate attributeName="opacity" from="0" to="1" dur="0.3s" fill="freeze" />
                <animateMotion
                  dur="1.1s"
                  fill="freeze"
                  rotate="auto"
                  path={ROUTE}
                  calcMode="spline"
                  keyTimes="0;1"
                  keyPoints="0;1"
                  keySplines="0.42 0 0.58 1"
                />
              </g>
            </svg>

            <motion.div
              className="relative z-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            >
              <h1 dir="ltr" className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                Jadoo<span className="text-orange-500">.</span>
              </h1>
              <motion.p
                className="text-white/70 mt-3 tracking-[0.3em] uppercase text-xs md:text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.4 }}
              >
                {t('hero.eyebrow')}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Header />
      <Hero start={!showSplash} />
      <Services />
      <Destinations />
      <Book />
      <Testimonials />
      <Companies />
      <Subscribtion />
      <Footer />
    </div>
  )
}

export default Home
