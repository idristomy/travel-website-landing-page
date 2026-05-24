import profile from '../assets/img/profile.png';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const cardVariants = {
  top: {
    x: 0, y: 0, scale: 1, opacity: 1, zIndex: 2,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  bottom: {
    x: 40, y: 50, scale: 0.9, opacity: 0.5, zIndex: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const titleVariants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const testimonialData = [
  { img: profile, key: 'mike', name: 'Mike Taylor' },
  { img: profile, key: 'chris', name: 'Chris Thomas' },
];

const Testimonials = () => {
  const { t } = useTranslation();
  const [topIndex, setTopIndex] = useState(0);

  const handleNext = () =>
    setTopIndex((prev) => (prev + 1) % testimonialData.length);

  const handlePrev = () =>
    setTopIndex((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));

  return (
    <section className="container mx-auto py-20 px-4 grid lg:grid-cols-2 gap-10 items-center" id="testimonials">
      <div>
        <motion.p
          className="text-gray-500 font-bold tracking-widest uppercase text-sm mb-2"
          variants={titleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {t('testimonials.eyebrow')}
        </motion.p>

        <motion.h2
          className="text-[#181E4B] text-2xl sm:text-4xl lg:text-5xl font-bold"
          variants={titleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {t('testimonials.title')}
        </motion.h2>

        <div className="flex gap-3 mt-12">
          {testimonialData.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === topIndex ? 'bg-[#181E4B]' : 'bg-[#181E4B]/30'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-center min-h-[320px]">
        {testimonialData.map((item, index) => {
          const isTop = index === topIndex;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              initial={false}
              animate={isTop ? 'top' : 'bottom'}
              className="absolute bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-100"
            >
              <p className="text-[#5E6282] mb-6 text-base leading-relaxed">
                {t(`testimonials.${item.key}.quote`)}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="rounded-full w-14 h-14 object-cover"
                />
                <div>
                  <h4 className="text-[#181E4B] font-bold">{item.name}</h4>
                  <h5 className="text-[#5E6282] text-sm">{t(`testimonials.${item.key}.place`)}</h5>
                </div>
              </div>
            </motion.div>
          );
        })}

        <div className="absolute -bottom-12 right-0 flex sm:top-1/2 sm:-translate-y-1/2 sm:flex-col gap-4">
          <motion.button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white shadow-lg border border-gray-200 text-gray-500 hover:bg-orange-500 hover:text-white transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label={t('testimonials.prev')}
          >
            <IoIosArrowUp className="text-xl" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="p-3 rounded-full bg-white shadow-lg border border-gray-200 text-gray-500 hover:bg-orange-500 hover:text-white transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label={t('testimonials.next')}
          >
            <IoIosArrowDown className="text-xl" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
