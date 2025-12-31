import Par from '../assets/img/par.png'
import AirPlane from '../assets/img/Airplane.png'
import Mic from '../assets/img/Mic.png'
import Sitting from '../assets/img/sitting.png'
import Stars from '../assets/img/Stars.png'
import { motion } from 'framer-motion'

const TitleVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .8,
      delay: .5,
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
      delay: i * 0.3,
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
    <div className="relative pt-10 md:pt-20 overflow-hidden" id='services'>
      {/* Animated Background Orbs */}
      <motion.div 
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-500/10 blur-3xl top-20 left-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated Stars */}
      <motion.img 
        src={Stars} 
        alt="" 
        className='absolute hidden lg:block lg:right-5 2xl:right-20 3xl:w-50'
        animate={{
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="container mx-auto text-center py-10 px-4">
        {/* Category Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 mb-3"
          variants={TitleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.3
          }}
        >
          <motion.span 
            className="w-2 h-2 bg-gray-600 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <span className="text-sm lg:text-base text-gray-700 font-semibold tracking-wider">CATEGORY</span>
        </motion.div>

        {/* Main Title with Gradient */}
        <motion.h2 
          className="text-[#181E4B] text-2xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4"
          variants={TitleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.3
          }}
        >
          We Offer{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Best Services
            </span>
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.5 }}
            />
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-20 pt-20 relative">
          {/* Decorative background element with animation */}
          <motion.div 
            className="absolute hidden bg-orange-700/70 w-[120px] h-[120px] bottom-0 lg:block lg:translate-x-60 xl:translate-x-70 2xl:translate-x-85 translate-y-10 -z-10 rounded-br-lg rounded-t-3xl"
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
          />

          {Boxes.map((Box, index) => (
            <motion.div
              key={index}
              className={`group flex flex-col items-center justify-center bg-white z-10 hover:shadow-xl transition-all duration-300 cursor-pointer ${Box.style}`}
              variants={BoxVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              {/* Icon Container with Hover Effect */}
              <motion.div 
                className="relative h-[100px] mb-4"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                {/* Animated decorative box */}
                <motion.div 
                  className={Box.boxstyle}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                />
                
                {/* Icon with floating animation */}
                <motion.img 
                  src={Box.icon} 
                  alt="" 
                  className={Box.iconStyle}
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-full blur-xl -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Title with gradient on hover */}
              <motion.h3 
                className="font-semibold sm:text-xl text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500 group-hover:bg-clip-text transition-all duration-300"
              >
                {Box.title}
              </motion.h3>

              {/* Description */}
              <motion.p 
                className="text-gray-500 w-36 sm:w-40 mt-3 text-sm sm:text-base"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {Box.desc}
              </motion.p>

              {/* Hover indicator arrow */}
              <motion.div
                className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: -10 }}
                whileHover={{ y: 0 }}
              >
                <svg 
                  className="w-6 h-6 text-orange-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;