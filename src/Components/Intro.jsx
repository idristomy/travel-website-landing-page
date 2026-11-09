import { useEffect, useState } from 'react'
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Plane } from 'lucide-react'
import { TRIPS } from '../data/trips.js'

const CURTAIN = [0.76, 0, 0.24, 1]
const EASE_OUT = [0.23, 1, 0.32, 1]
const STEP = 300 // ms each city holds
const TOTAL = 1900 // counter run, ms

// Once-per-session preloader: city names flick past on a navy panel while a counter runs to 100,
// the wordmark lands, then the panel lifts away on a curved edge to reveal the hero.
export default function Intro({ onDone }) {
  const { t } = useTranslation()
  const words = [...TRIPS.map((trip) => ({ label: t(`cities.${trip.key}.name`), img: trip.cover })), { label: 'Jadoo', img: null }]
  const [index, setIndex] = useState(0)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => String(Math.round(v)).padStart(3, '0'))
  const progress = useTransform(count, (v) => v / 100)

  useEffect(() => {
    const controls = animate(count, 100, { duration: TOTAL / 1000, ease: [0.65, 0, 0.35, 1] })
    const timers = words.slice(1).map((_, i) => setTimeout(() => setIndex(i + 1), 280 + STEP * (i + 1)))
    const done = setTimeout(onDone, TOTAL + 250)
    const onKey = (e) => ['Escape', 'Enter', ' '].includes(e.key) && onDone()
    window.addEventListener('keydown', onKey)
    return () => {
      controls.stop()
      timers.forEach(clearTimeout)
      clearTimeout(done)
      window.removeEventListener('keydown', onKey)
    }
    // words only change with language, which cannot change while the intro is up
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onDone, count])

  const last = index === words.length - 1

  return (
    <motion.div
      className="fixed inset-0 z-[60] bg-navy text-white"
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.95, ease: CURTAIN } }}
      onClick={onDone}
    >
      {/* curved trailing edge: bulges while the panel rests, flattens as it lifts */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-full h-[16vh] w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          fill="#181e4b"
          initial={{ d: 'M0 0 L100 0 Q50 100 0 0 Z' }}
          exit={{ d: 'M0 0 L100 0 Q50 0 0 0 Z', transition: { duration: 0.95, ease: CURTAIN } }}
        />
      </svg>

      <div className="flex h-full flex-col items-center justify-center px-6">
        <div className="relative h-[1.15em] overflow-hidden text-[clamp(3.5rem,2rem+7vw,8rem)] leading-none font-extrabold tracking-tight">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={words[index].label}
              className="flex items-center gap-[0.12em] whitespace-nowrap"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: last ? 0.6 : 0.32, ease: EASE_OUT }}
              dir={last ? 'ltr' : undefined}
            >
              {words[index].img ? (
                <img
                  src={words[index].img}
                  alt=""
                  className="me-[0.12em] h-[0.78em] w-[1.15em] rounded-[0.22em] object-cover"
                />
              ) : (
                <span className="me-[0.14em] grid h-[0.78em] w-[0.78em] place-items-center rounded-full bg-brand">
                  <Plane className="size-[0.4em] rtl:-scale-x-100" />
                </span>
              )}
              {words[index].label}
              <span
                className={`inline-block size-[0.16em] translate-y-[0.32em] rounded-full ${last ? 'bg-brand' : 'bg-white/30'}`}
              />
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 px-6 pb-8 sm:px-10 lg:px-14">
        <div className="flex items-end justify-between gap-6">
          <p className="max-w-[24ch] text-sm text-white/60 sm:text-base">{t('intro.line')}</p>
          <motion.p className="tabular text-5xl font-extrabold tracking-tight text-white sm:text-7xl" dir="ltr">
            {rounded}
          </motion.p>
        </div>
        <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-white/10">
          <motion.div className="h-full origin-left rounded-full bg-brand rtl:origin-right" style={{ scaleX: progress }} />
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onDone()
        }}
        className="absolute end-6 top-6 rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition-colors hover:border-white hover:text-white sm:end-10"
      >
        {t('intro.skip')}
      </button>
    </motion.div>
  )
}
