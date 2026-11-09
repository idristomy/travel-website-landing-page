import { useState } from 'react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const STORIES = [
  { key: 'mike', name: 'Mike Taylor', initials: 'MT', tone: 'bg-brand' },
  { key: 'chris', name: 'Chris Thomas', initials: 'CT', tone: 'bg-[#2f8f84]' },
]

const Testimonials = () => {
  const { t } = useTranslation()
  const { locale } = useParams()
  const rtl = locale === 'ar'
  const [index, setIndex] = useState(0)
  const go = (step) => setIndex((i) => (i + step + STORIES.length) % STORIES.length)

  const control =
    'press grid size-12 cursor-pointer place-items-center rounded-full border border-navy/15 bg-white text-navy hover:border-brand hover:bg-brand hover:text-white'

  return (
    <section id="testimonials" className="scroll-mt-20 bg-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <div>
          <SectionHeading title={t('testimonials.title')} />

          <div className="mt-10 flex items-center gap-3">
            <button type="button" onClick={() => go(-1)} aria-label={t('testimonials.prev')} className={control}>
              <ArrowLeft className="size-5 rtl:-scale-x-100" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label={t('testimonials.next')} className={control}>
              <ArrowRight className="size-5 rtl:-scale-x-100" />
            </button>
            <div className="ms-3 flex gap-2" aria-live="polite">
              {STORIES.map((s, i) => (
                <span key={s.key} className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-brand' : 'w-2 bg-navy/20'}`} />
              ))}
              <span className="sr-only">{t('testimonials.count', { current: index + 1, total: STORIES.length })}</span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[340px] sm:min-h-[320px]">
          {STORIES.map((story, i) => {
            const top = i === index
            return (
              <motion.figure
                key={story.key}
                aria-hidden={!top}
                className="absolute inset-x-0 top-0 rounded-[32px] bg-white p-8 shadow-[0_40px_80px_-40px_rgba(24,30,75,0.45)] sm:p-10"
                initial={false}
                animate={
                  top
                    ? { x: 0, y: 0, scale: 1, opacity: 1, zIndex: 2 }
                    : { x: rtl ? -36 : 36, y: 40, scale: 0.92, opacity: 0.55, zIndex: 1 }
                }
                transition={{ duration: 0.55, ease: [0.77, 0, 0.175, 1] }}
              >
                <Quote className="size-9 fill-brand text-brand rtl:-scale-x-100" />
                <blockquote className="mt-5 text-xl leading-relaxed font-medium text-navy">
                  <p>{t(`testimonials.${story.key}.quote`)}</p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className={`grid size-12 place-items-center rounded-full text-sm font-bold text-white ${story.tone}`}>
                    {story.initials}
                  </span>
                  <div className="flex-1">
                    <p className="font-bold text-navy">{story.name}</p>
                    <p className="text-sm text-slate">{t(`testimonials.${story.key}.place`)}</p>
                  </div>
                  <div className="flex gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }, (_, s) => (
                      <Star key={s} className="size-4 fill-[#f5b31b] text-[#f5b31b]" />
                    ))}
                  </div>
                </figcaption>
              </motion.figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
