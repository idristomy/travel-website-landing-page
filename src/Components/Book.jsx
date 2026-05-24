import Destination from '../assets/img/Destination icon.png'
import Payment from '../assets/img/Payment icon.png'
import Reach from '../assets/img/Reach icon.png'
import Greece from '../assets/img/cover.jpg'
import Istanbul from '../assets/img/turkey.png'
import { FaRegHeart, FaRegMap } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { IoPaperPlane } from "react-icons/io5";
import { GiTreeBranch } from "react-icons/gi";
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'

const titleVariants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const stepVariants = {
  hidden: { opacity: 0, x: -40 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" }
  })
}

const Book = () => {
  const { t } = useTranslation()
  const steps = [
    { icon: Destination, key: 'choose', color: 'bg-amber-400' },
    { icon: Payment, key: 'payment', color: 'bg-red-400' },
    { icon: Reach, key: 'reach', color: 'bg-blue-400' },
  ]

  return (
    <section className="grid lg:grid-cols-2 lg:gap-20 container mx-auto pt-24 px-4" id="book">
      <div>
        <motion.p
          className="text-gray-500 font-bold tracking-widest uppercase text-sm mb-2"
          variants={titleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {t('book.eyebrow')}
        </motion.p>

        <motion.h2
          className="text-[#181E4B] text-2xl sm:text-4xl lg:text-5xl font-bold max-w-xl mb-8"
          variants={titleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {t('book.title')}
        </motion.h2>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-5 my-8"
            variants={stepVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            <div className={`shrink-0 w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center shadow-md`}>
              <img src={step.icon} alt="" className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-gray-800 font-bold mb-1">{t(`book.${step.key}.title`)}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{t(`book.${step.key}.desc`)}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative my-12 lg:my-auto mx-auto">
        <motion.div
          className="p-5 shadow-xl max-w-xs rounded-3xl bg-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -8 }}
        >
          <div className="overflow-hidden rounded-2xl">
            <img src={Greece} alt={t('book.tripToGreece')} loading="lazy" decoding="async" className="rounded-2xl w-full" />
          </div>
          <h3 className="py-3 text-lg font-bold text-gray-800">{t('book.tripToGreece')}</h3>
          <p className="text-gray-400 font-medium text-sm">{t('book.greeceMeta')}</p>

          <div className="flex gap-3 py-3">
            {[GiTreeBranch, FaRegMap, IoPaperPlane].map((Icon, i) => (
              <div key={i} className="bg-gray-100 p-2 rounded-full text-gray-500">
                <Icon />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <p className="text-gray-500 font-medium flex gap-2 items-center text-sm">
              <FaBuilding className="text-gray-400" />
              {t('book.peopleGoing')}
            </p>
            <FaRegHeart className="size-5 text-red-500 cursor-pointer" />
          </div>
        </motion.div>

        <motion.div
          className="mt-5 lg:mt-0 lg:absolute py-3 pl-3 pr-8 rounded-2xl shadow-xl bg-white bottom-6 lg:-left-16"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex gap-3 items-center">
            <img src={Istanbul} alt="" loading="lazy" decoding="async" className="rounded-full w-12 h-12 object-cover" />
            <div>
              <h4 className="text-gray-400 font-medium text-sm">{t('book.ongoing')}</h4>
              <h5 className="font-bold text-gray-800">{t('book.tripToRome')}</h5>
            </div>
          </div>

          <div className="w-40 ml-15 mt-2">
            <p className="font-semibold text-sm mb-1">
              <span className="text-orange-500">40%</span> {t('book.completed')}
            </p>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-2 bg-orange-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Book
