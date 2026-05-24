import Italy from '../assets/img/italy.png'
import UK from '../assets/img/england.jpg'
import Europe from '../assets/img/country.png'
import { motion } from 'motion/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IoLocationSharp, IoStar, IoHeart, IoHeartOutline, IoArrowForward } from 'react-icons/io5'
import { FiClock } from 'react-icons/fi'

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" }
  })
}

const cards = [
  {
    img: Italy, key: 'rome', days: 10, price: '$5.42k', rating: '4.8',
    grad: 'from-orange-500 to-rose-500', chip: 'bg-orange-50 text-orange-600', glow: 'shadow-orange-500/30',
  },
  {
    img: UK, key: 'london', days: 12, price: '$4.2k', rating: '4.9',
    grad: 'from-cyan-500 to-blue-600', chip: 'bg-cyan-50 text-cyan-600', glow: 'shadow-cyan-500/30',
  },
  {
    img: Europe, key: 'europe', days: 28, price: '$15k', rating: '5.0',
    grad: 'from-violet-500 to-fuchsia-600', chip: 'bg-violet-50 text-violet-600', glow: 'shadow-violet-500/30',
  },
]

function DestinationCard({ card, index }) {
  const { t } = useTranslation()
  const [saved, setSaved] = useState(false)
  const city = t(`destinations.${card.key}.city`)
  const country = t(`destinations.${card.key}.country`)
  const duration = `${card.days} ${t('destinations.daysTrip')}`

  return (
    <motion.article
      className="group relative rounded-[28px] overflow-hidden bg-white shadow-[0_22px_50px_-22px_rgba(24,30,75,0.30)] hover:shadow-[0_34px_60px_-18px_rgba(24,30,75,0.40)] transition-shadow duration-300 text-left"
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
      whileHover={{ y: -12 }}
    >
      {/* top accent bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${card.grad}`} />

      <div className="relative h-72 overflow-hidden">
        <img
          src={card.img}
          alt={`${city}, ${country}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* sunset scrim for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181E4B]/80 via-[#181E4B]/10 to-transparent" />

        {/* save / heart */}
        <button
          onClick={() => setSaved((s) => !s)}
          aria-label={saved ? t('destinations.unsave') : t('destinations.save')}
          aria-pressed={saved}
          className="absolute top-4 left-4 grid place-items-center w-10 h-10 rounded-full bg-white/85 backdrop-blur text-rose-500 shadow-md cursor-pointer transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
        >
          {saved ? <IoHeart className="text-lg" /> : <IoHeartOutline className="text-lg" />}
        </button>

        {/* price pill */}
        <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur text-sm font-extrabold text-[#181E4B] shadow-md">
          {card.price}
        </div>

        {/* location + rating over image */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
          <div>
            <div className="flex items-center gap-1 text-xs font-medium text-white/85">
              <IoLocationSharp className="text-amber-300" />
              {country}
            </div>
            <h3 className="text-2xl font-bold leading-tight drop-shadow-sm">{city}</h3>
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 text-[#181E4B] text-xs font-bold shadow">
            <IoStar className="text-amber-400" />
            {card.rating}
          </div>
        </div>
      </div>

      {/* body */}
      <div className="flex items-center justify-between gap-3 p-5">
        <span className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl ${card.chip} text-sm font-semibold`}>
          <FiClock />
          {duration}
        </span>
        <button
          className={`group/btn inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r ${card.grad} text-white text-sm font-semibold shadow-lg ${card.glow} cursor-pointer transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#181E4B]/40`}
        >
          {t('destinations.explore')}
          <IoArrowForward className="transition-transform group-hover/btn:translate-x-0.5 rtl:rotate-180" />
        </button>
      </div>
    </motion.article>
  )
}

const Destinations = () => {
  const { t } = useTranslation()
  return (
    <section className="container mx-auto text-center pt-20 md:pt-28 pb-20 relative overflow-x-clip px-4" id="destinations">
      <motion.p
        className="text-gray-500 font-bold tracking-widest uppercase text-sm mb-2"
        variants={titleVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {t('destinations.eyebrow')}
      </motion.p>

      <motion.h2
        className="text-[#181E4B] text-2xl sm:text-4xl lg:text-5xl font-bold"
        variants={titleVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {t('destinations.title')}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto pt-16">
        {cards.map((card, index) => (
          <DestinationCard key={card.location} card={card} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Destinations
