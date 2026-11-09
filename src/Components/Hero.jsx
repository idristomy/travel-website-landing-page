import { useMemo, useState, useSyncExternalStore } from 'react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArrowRight, CalendarDays, ChevronDown, MapPin, Minus, Plane, Play, Plus, Search, Star, Users } from 'lucide-react'
import Traveller from '../assets/img/Traveller 1.png'
import { TRIPS, formatPrice } from '../data/trips.js'

const EASE_OUT = [0.23, 1, 0.32, 1]

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.15 + i * 0.08, ease: EASE_OUT } }),
}
const pop = {
  hidden: { opacity: 0, y: 16, scale: 0.94 },
  show: (i = 0) => ({ opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, delay: 0.6 + i * 0.12, ease: EASE_OUT } }),
}

const NARROW = '(max-width: 639px)'
const subscribeNarrow = (cb) => {
  const mq = window.matchMedia(NARROW)
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}
const useNarrow = () => useSyncExternalStore(subscribeNarrow, () => window.matchMedia(NARROW).matches, () => false)

function useMonths(locale) {
  const narrow = useNarrow()
  return useMemo(() => {
    const fmt = new Intl.DateTimeFormat(locale, { month: narrow ? 'short' : 'long', year: 'numeric' })
    const now = new Date()
    return Array.from({ length: 12 }, (_, i) => {
      const d = new Date(now.getFullYear(), now.getMonth() + 1 + i, 1)
      return { value: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`, label: fmt.format(d) }
    })
  }, [locale, narrow])
}

// Gentle idle drift for the floating cards (transform only; MotionConfig drops it under reduced motion)
const drift = (delay, distance = 6) => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay },
})

// Organic corner outline, anchored to the top-right of a 600 x 600 box
const CORNER =
  'M600 0 V560 C 528 566 474 514 452 430 C 428 336 344 306 258 276 C 156 240 64 206 34 116 C 22 78 18 38 22 0 Z'

const cardShadow = 'shadow-[0_24px_48px_-24px_rgba(24,30,75,0.45)]'

function Field({ icon: Icon, label, htmlFor, children }) {
  return (
    <div className="relative flex items-center gap-3 rounded-2xl px-4 py-3 transition-colors focus-within:bg-cream hover:bg-cream">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-peach text-brand">
        <Icon className="size-[18px]" />
      </span>
      <div className="min-w-0 flex-1">
        <label htmlFor={htmlFor} className="block text-xs font-medium text-slate">{label}</label>
        {children}
      </div>
    </div>
  )
}

const selectClass =
  'mt-0.5 w-full cursor-pointer appearance-none truncate bg-transparent pe-6 text-[15px] font-semibold text-navy outline-none'

const Hero = ({ intro, city, onCityChange, onFind }) => {
  const { t } = useTranslation()
  const { locale } = useParams()
  const months = useMonths(locale)
  const [month, setMonth] = useState(months[2].value)
  const [travellers, setTravellers] = useState(2)
  const state = intro ? 'hidden' : 'show'
  const rome = TRIPS[0]
  const rtl = locale === 'ar'

  const submit = (e) => {
    e.preventDefault()
    onFind({ city, month, travellers })
  }

  return (
    <section id="home" className="relative isolate flex min-h-svh flex-col overflow-hidden pt-20">
      {/* Corner shape: a redrawn take on the original Jadoo corner blob. It stays in the top corner
          and never sits behind the traveller. Thin orange arcs radiate from the corner inside it. */}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        preserveAspectRatio="none"
        className="pointer-events-none absolute end-0 top-0 -z-10 h-[22svh] w-[58vw] sm:h-[24svh] sm:w-[42vw] lg:h-[24svh] lg:w-[36vw] lg:max-w-[620px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: intro ? 0 : 1 }}
        transition={{ duration: 1.1, ease: EASE_OUT }}
      >
        <defs>
          <clipPath id="hero-corner">
            <path d={CORNER} />
          </clipPath>
        </defs>
        <g transform={rtl ? 'matrix(-1 0 0 1 600 0)' : undefined}>
          <path d={CORNER} fill="#fff1e6" />
          <g clipPath="url(#hero-corner)" fill="none" stroke="#f26a2e" strokeOpacity="0.16">
            {[170, 290, 410, 530].map((r) => (
              <circle key={r} cx="600" cy="0" r={r} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
            ))}
          </g>
          <circle cx="600" cy="0" r="120" fill="#ffe2cf" />
        </g>
      </motion.svg>

      <div className="mx-auto flex w-full max-w-[1320px] flex-1 flex-col px-5 pb-5 sm:px-8 lg:px-10 lg:pb-6">
        <div className="grid flex-1 items-center gap-8 pt-8 lg:min-h-0 lg:grid-cols-12 lg:grid-rows-[minmax(0,1fr)] lg:gap-6 lg:pt-2">
          <div className="lg:col-span-6">
            <motion.h1
              variants={rise}
              initial="hidden"
              animate={state}
              custom={1}
              className="text-[clamp(2.4rem,min(5.4vw,9.5svh),5.25rem)] leading-[1.05] font-extrabold tracking-[-0.035em] text-navy"
            >
              {t('hero.titlePre')}{' '}
              <span className="relative inline-block whitespace-nowrap text-brand">
                {t('hero.titleHighlight')}
                <svg
                  className="absolute -bottom-[0.16em] left-0 h-[0.3em] w-full overflow-visible"
                  viewBox="0 0 200 20"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M3 14 C 50 4, 140 4, 197 12"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: intro ? 0 : 1 }}
                    transition={{ duration: 0.7, delay: 0.75, ease: EASE_OUT }}
                  />
                </svg>
              </span>{' '}
              {t('hero.titlePost')}
            </motion.h1>

            <motion.p
              variants={rise}
              initial="hidden"
              animate={state}
              custom={2}
              className="mt-[clamp(0.9rem,2.8svh,1.6rem)] max-w-[46ch] text-base leading-relaxed text-slate sm:text-lg"
            >
              {t('hero.desc')}
            </motion.p>

            <motion.div
              variants={rise}
              initial="hidden"
              animate={state}
              custom={3}
              className="mt-[clamp(1.25rem,4.5svh,2.5rem)] flex flex-wrap items-center gap-x-7 gap-y-4"
            >
              <a
                href="#destinations"
                onClick={(e) => {
                  e.preventDefault()
                  onFind({ city: 'any' })
                }}
                className="press group inline-flex h-14 items-center gap-3 rounded-full bg-brand ps-7 pe-2 text-base font-semibold text-white shadow-[0_18px_36px_-16px_rgba(242,106,46,0.75)] hover:bg-brand-deep"
              >
                {t('hero.findOut')}
                <span className="grid size-10 place-items-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
                  <ArrowRight className="size-[18px] rtl:-scale-x-100" />
                </span>
              </a>

              <button type="button" className="press group inline-flex cursor-pointer items-center gap-3 rounded-full text-base font-semibold text-navy">
                <span className="relative grid size-14 place-items-center rounded-full bg-navy text-white transition-colors duration-300 group-hover:bg-brand">
                  <span aria-hidden="true" className="absolute -inset-1.5 rounded-full border border-navy/15" />
                  <Play className="ms-0.5 size-5 fill-current" />
                </span>
                {t('hero.playDemo')}
              </button>
            </motion.div>
          </div>

          {/* The original traveller on a clear ground; trip details float on the free side */}
          <div className="relative mx-auto aspect-square w-full max-w-[540px] lg:col-span-6 lg:aspect-auto lg:h-full lg:min-h-[320px] lg:max-w-none">
            <motion.img
              src={Traveller}
              alt=""
              className="absolute bottom-0 start-[8%] w-[84%] select-none object-contain object-bottom rtl:-scale-x-100 lg:start-[6%] lg:h-[84%] lg:w-[88%]"
              initial={{ opacity: 0, y: 40 }}
              animate={intro ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: EASE_OUT }}
              draggable="false"
            />

            <motion.span
              aria-hidden="true"
              className="absolute end-[4%] top-[4%] grid size-12 place-items-center rounded-full bg-navy text-white shadow-[0_16px_32px_-14px_rgba(24,30,75,0.6)]"
              variants={pop}
              initial="hidden"
              animate={state}
              custom={0}
            >
              <Plane className="size-5 -rotate-12 rtl:-scale-x-100" />
            </motion.span>

            {/* Next departure */}
            <motion.div variants={pop} initial="hidden" animate={state} custom={1} className="absolute start-0 top-[22%] hidden sm:block">
              <motion.div
                {...drift(0)}
                className={`flex w-[232px] items-center gap-3 rounded-2xl border border-white bg-white/90 p-2.5 pe-4 backdrop-blur ${cardShadow}`}
              >
                <img src={rome.photo} alt="" className="size-14 rounded-xl object-cover" />
                <div className="min-w-0">
                  <p className="text-[11px] font-medium text-slate">{t('hero.nextTrip')}</p>
                  <p className="truncate text-sm font-bold text-navy">
                    {t('cities.rome.name')}, {t('cities.rome.country')}
                  </p>
                  <p className="tabular text-xs text-slate">
                    {t('destinations.days', { count: rome.days })} · {formatPrice(rome.price, locale)}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Travellers going */}
            <motion.div variants={pop} initial="hidden" animate={state} custom={2} className="absolute bottom-[10%] start-0">
              <motion.div
                {...drift(1.2)}
                className={`flex items-center gap-3 rounded-full border border-white bg-white/90 py-2 ps-2 pe-5 backdrop-blur ${cardShadow}`}
              >
                <div className="flex -space-x-2 rtl:space-x-reverse">
                  {[['AM', 'bg-brand'], ['TK', 'bg-navy'], ['LS', 'bg-[#2f8f84]']].map(([initials, bg]) => (
                    <span key={initials} className={`grid size-8 place-items-center rounded-full text-[11px] font-bold text-white ring-2 ring-white ${bg}`}>
                      {initials}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-semibold text-navy">{t('hero.going')}</p>
              </motion.div>
            </motion.div>

            {/* Rating */}
            <motion.div variants={pop} initial="hidden" animate={state} custom={3} className="absolute end-0 top-[48%] hidden sm:block">
              <motion.div {...drift(0.6, 5)} className={`rounded-2xl border border-white bg-white/90 px-4 py-3 backdrop-blur ${cardShadow}`}>
                <div className="flex items-center gap-1.5">
                  <Star className="size-4 fill-brand text-brand" />
                  <span className="tabular text-lg font-extrabold text-navy">4.9</span>
                </div>
                <p className="text-[11px] font-medium text-slate">{t('hero.rating')}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Booking bar */}
        <motion.form
          onSubmit={submit}
          aria-label={t('hero.finder.label')}
          variants={rise}
          initial="hidden"
          animate={state}
          custom={5}
          className="relative z-10 mx-auto mt-8 grid w-full max-w-5xl gap-1 rounded-[28px] border border-line bg-white p-2.5 shadow-[0_40px_80px_-40px_rgba(24,30,75,0.45)] sm:grid-cols-2 lg:mt-3 lg:grid-cols-[1.25fr_1.15fr_1fr_auto]"
        >
          <Field icon={MapPin} label={t('hero.finder.where')} htmlFor="finder-where">
            <select id="finder-where" value={city} onChange={(e) => onCityChange(e.target.value)} className={selectClass}>
              {TRIPS.map((trip) => (
                <option key={trip.key} value={trip.key}>
                  {t(`cities.${trip.key}.name`)}, {t(`cities.${trip.key}.country`)}
                </option>
              ))}
              <option value="any">{t('hero.finder.anywhere')}</option>
            </select>
            <ChevronDown aria-hidden="true" className="pointer-events-none absolute end-4 top-1/2 size-4 -translate-y-1/2 text-slate" />
          </Field>

          <Field icon={CalendarDays} label={t('hero.finder.when')} htmlFor="finder-when">
            <select id="finder-when" value={month} onChange={(e) => setMonth(e.target.value)} className={selectClass}>
              {months.map((m) => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
            <ChevronDown aria-hidden="true" className="pointer-events-none absolute end-4 top-1/2 size-4 -translate-y-1/2 text-slate" />
          </Field>

          <Field icon={Users} label={t('hero.finder.who')} htmlFor="finder-who">
            <div className="mt-0.5 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setTravellers((n) => Math.max(1, n - 1))}
                disabled={travellers <= 1}
                aria-label={t('hero.finder.fewer')}
                className="press grid size-7 cursor-pointer place-items-center rounded-full border border-line text-navy hover:border-navy disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Minus className="size-3.5" />
              </button>
              <output id="finder-who" aria-live="polite" className="tabular w-5 text-center text-[15px] font-semibold text-navy">
                {travellers}
              </output>
              <button
                type="button"
                onClick={() => setTravellers((n) => Math.min(12, n + 1))}
                disabled={travellers >= 12}
                aria-label={t('hero.finder.more')}
                className="press grid size-7 cursor-pointer place-items-center rounded-full border border-line text-navy hover:border-navy disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Plus className="size-3.5" />
              </button>
            </div>
          </Field>

          <button
            type="submit"
            className="press inline-flex min-h-14 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-navy px-8 text-base font-semibold text-white hover:bg-brand"
          >
            <Search className="size-[18px]" />
            {t('hero.finder.submit')}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Hero
