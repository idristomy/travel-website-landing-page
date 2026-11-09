import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import IstanbulCover from '../assets/img/photos/istanbul-cover.webp'
import RomeStreet from '../assets/img/photos/rome-street.webp'
import RomeCover from '../assets/img/photos/rome-cover.webp'
import KyotoCover from '../assets/img/photos/kyoto-cover.webp'

// Each service owns a photograph; the one under the pointer (or keyboard focus) fills the frame.
const ITEMS = [
  { key: 'flights', photo: IstanbulCover },
  { key: 'rooms', photo: RomeStreet },
  { key: 'hosts', photo: RomeCover },
  { key: 'flex', photo: KyotoCover },
]

const EASE_OUT = [0.23, 1, 0.32, 1]

const Services = () => {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="scroll-mt-20 bg-navy py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-5">
          <SectionHeading tone="dark" title={t('services.title')} intro={t('services.intro')} />

          <div className="relative mt-10 hidden aspect-[4/5] overflow-hidden rounded-[32px] bg-white/5 lg:block">
            <AnimatePresence initial={false}>
              <motion.img
                key={ITEMS[active].key}
                src={ITEMS[active].photo}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: EASE_OUT }}
              />
            </AnimatePresence>
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-navy/80 px-5 py-4 backdrop-blur-md">
              <p className="text-lg font-bold">{t(`services.${ITEMS[active].key}.title`)}</p>
            </div>
          </div>
        </div>

        <ul className="self-end lg:col-span-7">
          {ITEMS.map(({ key }, i) => {
            const isActive = i === active
            return (
              <li key={key} className="border-t border-white/10 last:border-b">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className="group grid w-full cursor-pointer grid-cols-[1fr_auto] items-center gap-6 py-8 text-start lg:py-10"
                >
                  <span>
                    <span
                      className={`block text-[clamp(1.6rem,1.1rem+1.6vw,2.6rem)] leading-tight font-extrabold tracking-[-0.03em] transition-colors duration-300 ${
                        isActive ? 'text-brand' : 'text-white group-hover:text-white'
                      }`}
                    >
                      {t(`services.${key}.title`)}
                    </span>
                    <span
                      className={`mt-3 block max-w-[48ch] leading-relaxed transition-colors duration-300 ${
                        isActive ? 'text-white/80' : 'text-white/50'
                      }`}
                    >
                      {t(`services.${key}.desc`)}
                    </span>
                  </span>
                  <span
                    className={`grid size-14 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                      isActive ? 'rotate-0 border-brand bg-brand text-white' : '-rotate-45 border-white/20 text-white/60'
                    }`}
                  >
                    <ArrowUpRight className="size-6 rtl:-scale-x-100" />
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Services
