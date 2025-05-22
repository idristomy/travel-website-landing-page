import Par from '../assets/img/par.png'
import AirPlane from '../assets/img/Airplane.png'
import Mic from '../assets/img/Mic.png'
import Sitting from '../assets/img/Sitting.png'
import Stars from '../assets/img/Stars.png'
import { motion } from 'motion/react'

const TitleVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
}

const BoxVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.3, // stagger effect
      ease: "easeOut"
    }
  })
};


const Services = () => {
  const Boxes = [
    {
      icon: Par,
      title: 'Calculated Weather',
      desc: 'Built Wicket longer admire do barton vanity itself do in it.',
      boxstyle: 'w-10 h-10 top-8 -right-4 absolute bg-amber-200/60 -z-10 rounded-br-2xl rounded-bl-md',
    },
    {
      icon: AirPlane,
      iconStyle: 'w-20',
      title: 'Best Flights',
      desc: 'Engrossed listening. Park gate sell they west hard for the.',
      boxstyle: 'w-10 h-10 absolute bg-amber-200/60 -z-10 rounded-br-2xl rounded-bl-md right-7 top-5',
      style: 'py-10 rounded-3xl shadow-md shadow-gray-200/50',
    },
    {
      icon: Mic,
      iconStyle: 'h-20',
      title: 'Local Events',
      desc: 'Barton vanity itself do in it. Preferred to many it engrossed listening.',
      boxstyle: 'w-12 h-12 top-0 -right-8 absolute bg-amber-200/60 -z-10 rounded-br-lg rounded-tl-lg rounded-tr-2xl',
    },
    {
      icon: Sitting,
      title: 'Customization',
      desc: 'We deliver outsourced aviation services for military customers.',
      boxstyle: 'w-10 h-10 top-5 -right-4 absolute bg-amber-200/60 -z-10 rounded-br-2xl rounded-bl-md',
    },
  ];

  return (
    <div className="relative pt-10 md:pt-20" id='services'>
      <img src={Stars} alt="" className='absolute hidden lg:block lg:right-5 2xl:right-20 3xl:w-50'/>
      <div className="container mx-auto text-center py-10 px-4">
        <motion.h1 className="text-lg text-gray-700 font-semibold mb-3"
          variants={TitleVariants}
          initial= "hidden"
          whileInView= "show"
          viewport={{
            once: true,
            amount: 0.3
          }}

        >CATEGORY</motion.h1>
        <motion.h2 className="text-[#181E4B] text-2xl sm:text-4xl lg:text-5xl font-serif font-bold"
          variants={TitleVariants}
          initial= "hidden"
          whileInView= "show"
          viewport={{
            once: true,
            amount: 0.3
          }}
        >
          We Offer Best Services
        </motion.h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-20 pt-20 relative">
          {/* Decorative background element */}
          <div className="absolute hidden bg-orange-700/70 w-[120px] h-[120px] bottom-0 lg:block lg:translate-x-60 xl:translate-x-70  2xl:translate-x-85 translate-y-10 -z-10 rounded-br-lg rounded-t-3xl"></div>

          {Boxes.map((Box, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center justify-center bg-white z-10 ${Box.style}`}
              variants={BoxVariants}
              initial= "hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <div className="relative h-[100px]">
                <div className={Box.boxstyle}></div>
                <img src={Box.icon} alt="" className={Box.iconStyle} />
              </div>
              <h3 className="font-semibold sm:text-xl text-gray-800">{Box.title}</h3>
              <p className="text-gray-500 w-36 sm:w-40 mt-3 text-sm sm:text-base">
                {Box.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
