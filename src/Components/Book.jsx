import { motion } from 'motion/react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CreditCard, Heart, MapPin, Plane } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { TRIPS, formatPrice } from '../data/trips.js'

const EASE_OUT = [0.23, 1, 0.32, 1]
const STEPS = [
  { key: 'choose', icon: MapPin, tone: 'bg-[#f5b31b]' },
  { key: 'draft', icon: CreditCard, tone: 'bg-brand' },
  { key: 'deposit', icon: Plane, tone: 'bg-[#2f8f84]' },
]
const DAYS = ['d1', 'd2', 'd3', 'd4']

// The one scroll moment: the itinerary writes itself in, line by line.
const sheet = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }
const line = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT } },
}

const Book = () => {
  const { t } = useTranslation()
  const { locale } = useParams()
  const rome = TRIPS[0]

  return (
    <section id="book" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1320px] items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10">
        <div>
          <SectionHeading title={t('book.title')} />

          <ol className="mt-12 space-y-4">
            {STEPS.map(({ key, icon: Icon, tone }) => (
              <li key={key} className="flex gap-5 rounded-3xl p-4 transition-colors hover:bg-cream">
                <span className={`grid size-14 shrink-0 place-items-center rounded-2xl text-white ${tone}`}>
                  <Icon className="size-6 rtl:-scale-x-100" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy">{t(`book.${key}.title`)}</h3>
                  <p className="mt-1 max-w-[44ch] leading-relaxed text-slate">{t(`book.${key}.desc`)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] pb-28">
          <span aria-hidden="true" className="absolute -end-6 -top-6 size-40 rounded-full bg-peach" />

          <motion.article
            aria-label={t('book.doc.title')}
            className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_40px_80px_-40px_rgba(24,30,75,0.5)]"
            variants={sheet}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="relative h-44">
              <img src={rome.cover} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <span className="absolute start-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-navy backdrop-blur">
                {t('book.doc.meta')}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <motion.div variants={line} className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-extrabold tracking-tight text-navy">{t('book.doc.title')}</h3>
                <span aria-hidden="true" className="grid size-10 place-items-center rounded-full bg-peach text-brand">
                  <Heart className="size-4 fill-current" />
                </span>
              </motion.div>

              <ol className="relative mt-6 space-y-4 before:absolute before:inset-y-2 before:start-[7px] before:w-px before:bg-line">
                {DAYS.map((key, i) => (
                  <motion.li key={key} variants={line} className="relative flex gap-4">
                    <span className={`relative mt-1.5 size-[15px] shrink-0 rounded-full border-[3px] border-white ${i === 0 ? 'bg-brand' : 'bg-navy/20'}`} />
                    <div>
                      <p className="text-xs font-semibold text-brand">{t('book.doc.dayLabel', { count: i + 1 })}</p>
                      <p className="text-[15px] text-navy">{t(`book.doc.${key}`)}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>

              <motion.div variants={line} className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-cream px-4 py-3">
                <p className="text-sm text-slate">{t('book.doc.balance')}</p>
                <p className="tabular text-sm font-bold text-navy">
                  {t('book.doc.deposit')} {formatPrice(400, locale)}
                </p>
              </motion.div>
            </div>
          </motion.article>

          {/* Ongoing trip progress, kept from the original design */}
          <motion.div
            className="absolute bottom-0 start-0 w-[260px] rounded-3xl bg-white p-4 shadow-[0_30px_60px_-30px_rgba(24,30,75,0.55)] sm:-start-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE_OUT }}
          >
            <div className="flex items-center gap-3">
              <img src={rome.photo} alt="" loading="lazy" className="size-12 rounded-full object-cover" />
              <div>
                <p className="text-xs text-slate">{t('book.ongoing')}</p>
                <p className="font-bold text-navy">{t('book.tripToRome')}</p>
              </div>
            </div>
            <p className="mt-3 text-sm font-semibold text-navy">
              <span className="text-brand">40%</span> {t('book.completed')}
            </p>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-cream">
              <motion.div
                className="h-full origin-left rounded-full bg-brand rtl:origin-right"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8, ease: EASE_OUT }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Book
