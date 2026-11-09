import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { CheckCircle2, Mail, Send } from 'lucide-react'

const Subscribtion = () => {
  const { t } = useTranslation()
  const [sent, setSent] = useState(false)

  return (
    <section aria-labelledby="letter-title" className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="relative isolate overflow-hidden rounded-[40px] bg-navy px-6 py-16 text-center sm:px-12 lg:py-20">
          {/* concentric rings: a radar sweep over the destinations */}
          <div aria-hidden="true" className="absolute -end-40 -top-40 -z-10">
            {[520, 400, 280].map((s) => (
              <span
                key={s}
                className="absolute end-0 top-0 rounded-full border border-white/[0.07]"
                style={{ width: s, height: s, transform: `translate(${(520 - s) / -2}px, ${(520 - s) / 2}px)` }}
              />
            ))}
          </div>
          <span aria-hidden="true" className="absolute -bottom-24 -start-24 -z-10 size-72 rounded-full bg-brand/15" />

          <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-brand text-white shadow-[0_20px_40px_-16px_rgba(242,106,46,0.8)]">
            <Mail className="size-7" />
          </span>
          <h2
            id="letter-title"
            className="mx-auto mt-8 max-w-2xl text-[clamp(1.9rem,1.2rem+2.2vw,3rem)] leading-[1.12] font-extrabold tracking-[-0.03em] text-white"
          >
            {t('subscription.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">{t('subscription.text')}</p>

          <div className="mx-auto mt-10 max-w-xl" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              {sent ? (
                <motion.p
                  key="thanks"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-medium text-white"
                  initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                >
                  <CheckCircle2 className="size-5 text-brand" />
                  {t('subscription.thanks')}
                </motion.p>
              ) : (
                <motion.form
                  key="form"
                  className="flex flex-col gap-2 rounded-[28px] bg-white p-2 sm:flex-row sm:rounded-full"
                  exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.12 } }}
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                >
                  <label htmlFor="newsletter-email" className="sr-only">{t('subscription.emailLabel')}</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder={t('subscription.placeholder')}
                    className="min-w-0 flex-1 rounded-full bg-transparent px-5 py-3 text-base text-navy placeholder:text-slate/70 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="press inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-brand px-7 font-semibold text-white hover:bg-brand-deep"
                  >
                    {t('subscription.button')}
                    <Send className="size-4 rtl:-scale-x-100" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribtion
