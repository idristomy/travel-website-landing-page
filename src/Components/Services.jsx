import Par from '../assets/img/par.png'
import AirPlane from '../assets/img/Airplane.png'
import Mic from '../assets/img/Mic.png'
import Sitting from '../assets/img/sitting.png'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" }
  })
}

const Services = () => {
  const { t } = useTranslation()
  const boxes = [
    {
      icon: Par,
      key: 'weather',
      iconBg: 'from-sky-100 to-cyan-50',
      bar: 'from-sky-400 to-cyan-500',
    },
    {
      icon: AirPlane,
      key: 'flights',
      iconBg: 'from-orange-100 to-amber-50',
      bar: 'from-orange-400 to-amber-500',
      featured: true,
    },
    {
      icon: Mic,
      key: 'events',
      iconBg: 'from-violet-100 to-fuchsia-50',
      bar: 'from-violet-400 to-fuchsia-500',
    },
    {
      icon: Sitting,
      key: 'customization',
      iconBg: 'from-emerald-100 to-teal-50',
      bar: 'from-emerald-400 to-teal-500',
    },
  ]

  return (
    <section className="pt-16 md:pt-24" id="services">
      <div className="container mx-auto text-center py-10 px-4">
        <motion.p
          className="text-gray-500 font-bold tracking-widest uppercase text-sm mb-2"
          variants={titleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {t('services.eyebrow')}
        </motion.p>

        <motion.h2
          className="text-[#181E4B] text-2xl sm:text-4xl lg:text-5xl font-bold"
          variants={titleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {t('services.title')}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
          {boxes.map((box, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden flex flex-col items-center text-center px-6 py-8 rounded-3xl bg-white transition-shadow duration-300 ${
                box.featured ? 'shadow-xl shadow-gray-200/70' : 'hover:shadow-xl hover:shadow-gray-200/60'
              }`}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              whileHover={{ y: -8 }}
            >
              <div className={`mb-5 grid place-items-center w-20 h-20 rounded-2xl bg-gradient-to-br ${box.iconBg} transition-transform duration-300 group-hover:scale-105`}>
                <img src={box.icon} alt="" className="h-11" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-3">{t(`services.${box.key}.title`)}</h3>
              <p className="text-gray-500 text-sm max-w-[14rem]">{t(`services.${box.key}.desc`)}</p>
              <span
                className={`absolute bottom-0 left-0 h-1.5 bg-gradient-to-r ${box.bar} transition-all duration-300 ${
                  box.featured ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
