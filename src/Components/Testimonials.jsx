import profile from '../assets/img/profile.png';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const TestimonialsVariants = {
  top: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    zIndex: 2,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  bottom: {
    x: 40,
    y: 50,
    scale: 0.85,
    opacity: 0.6,
    zIndex: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const TitleVariants = {
  hidden: {
    opacity: 0,
    x: -50
  },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: i
    }
  })
};

const BadgePulseVariants = {
  animate: {
    scale: [1, 1.3, 1],
    opacity: [1, 0.7, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const OrbVariants = {
  animate: (delay) => ({
    scale: [1, 1.2, 1],
    opacity: [0.2, 0.4, 0.2],
    transition: {
      duration: delay === 0 ? 8 : 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }
  })
};

const DotPulseVariants = {
  animate: (index) => ({
    scale: [1, 1.2, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: index * 0.3
    }
  })
};

const QuoteMarkVariants = {
  animate: {
    opacity: [0.3, 0.5, 0.3],
    scale: [1, 1.1, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const StarVariants = {
  hidden: { scale: 0, rotate: -180 },
  show: (i) => ({
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.4 + i * 0.1,
      type: "spring",
      stiffness: 200
    }
  })
};

const ProfileTextVariants = {
  hidden: { opacity: 0, x: -10 },
  show: (delay) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: delay
    }
  })
};

const OnlineIndicatorVariants = {
  animate: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const CornerDecorVariants = {
  hidden: { scale: 0, rotate: 45 },
  show: {
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.5
    }
  }
};

const ProgressDotVariants = {
  active: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.5
    }
  },
  inactive: {
    scale: 1
  }
};

const Testimonials = () => {
  const [topIndex, setTopIndex] = useState(0);

  const handleNext = () => {
    setTopIndex((prev) => (prev + 1) % 2);
  };

  const handlePrev = () => {
    setTopIndex((prev) =>
        prev === 0 ? testimonialData.length - 1 : prev - 1
    );
  }

  const testimonialData = [
    {
      img: profile,
      paragraph:
        "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
      title: "Mike Taylor",
      place: "Lahore, Pakistan",
    },
    {
      img: profile,
      paragraph:
        "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
      title: "Chris Thomas",
      place: "CEO of Red Button",
    },
  ];

  return (
    <div className="container mx-auto py-20 px-4 grid lg:grid-cols-2 gap-10 relative overflow-hidden" id='testimonials'>
      {/* Animated Background Orbs */}
      <motion.div 
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-yellow-400/10 to-orange-500/10 blur-3xl -top-20 right-20"
        variants={OrbVariants}
        animate="animate"
        custom={0}
      />

      <motion.div 
        className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-500/10 blur-3xl bottom-0 left-0"
        variants={OrbVariants}
        animate="animate"
        custom={1}
      />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => {
        const particleVariants = {
          animate: {
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
            transition: {
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }
          }
        };
        
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            variants={particleVariants}
            animate="animate"
          />
        );
      })}

      <div className="relative z-10">
        {/* Testimonials Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 mb-3"
          variants={TitleVariants}
          initial="hidden"
          whileInView="show"
          custom={0.5}
          viewport={{
            once: true,
            amount: 0.3
          }}
        >
          <motion.span 
            className="w-2 h-2 bg-orange-500 rounded-full"
            variants={BadgePulseVariants}
            animate="animate"
          />
          <span className="text-sm lg:text-base text-orange-700 font-semibold tracking-wider">TESTIMONIALS</span>
        </motion.div>

        {/* Title with Gradient */}
        <motion.h2 
          className="text-[#181E4B] text-2xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4"
          variants={TitleVariants}
          initial="hidden"
          whileInView="show"
          custom={0}
          viewport={{
            once: true,
            amount: 0.3
          }}
        >
          What People Say{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              About Us
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

        {/* Animated Dots Indicator */}
        <motion.div 
          className="flex gap-5 mt-20"
          initial={{
            x: -100
          }}
          whileInView={{
            x: 0
          }}
          transition={{
            duration: 0.5
          }}
          viewport={{
            once: true,
            amount: 0.3
          }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-[#181E4B]' : 'bg-[#181E4B]/50'}`}
              initial={{
                x: -32 * index
              }}
              whileInView={{
                x: 0
              }}
              
              viewport={{
                once: true,
                amount: 0.3
              }}
              animate={{
                scale: [1, 1.2, 1]
              }}
              transition={{
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Testimonial Cards */}
      <div className="relative flex items-center justify-center min-h-[300px]">
        {/* Decorative Quote Mark */}
        <motion.div
          className="absolute -top-10 left-10 text-9xl font-serif text-orange-200 z-0 select-none"
          variants={QuoteMarkVariants}
          animate="animate"
        >
          "
        </motion.div>

        {testimonialData.map((item, index) => {
          const isTop = index === topIndex;
          return (
            <motion.div
              key={index}
              variants={TestimonialsVariants}
              initial={isTop ? 'bottom' : 'top'}
              animate={isTop ? 'top' : 'bottom'}
              className="absolute bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-100 overflow-hidden group"
            >
              {/* Gradient Border Effect on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-400/0 to-amber-400/0 group-hover:from-orange-400/10 group-hover:to-amber-400/10 rounded-2xl transition-all duration-500 pointer-events-none"
              />

              {/* Star Rating */}
              <motion.div 
                className="flex gap-1 mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: isTop ? 1 : 0, y: isTop ? 0 : -10 }}
                transition={{ delay: 0.3 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ 
                      scale: isTop ? 1 : 0, 
                      rotate: isTop ? 0 : -180 
                    }}
                    transition={{ 
                      delay: 0.4 + i * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                ))}
              </motion.div>

              {/* Quote Text */}
              <motion.p 
                className="text-[#5E6282] mb-6 text-base leading-relaxed italic relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: isTop ? 1 : 0.6 }}
                transition={{ delay: 0.2 }}
              >
                {item.paragraph}
              </motion.p>

              {/* Profile Section */}
              <div className="flex items-center gap-4 relative z-10">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <img 
                    src={item.img} 
                    alt="profile" 
                    className="rounded-full w-14 h-14 object-cover border-2 border-orange-200" 
                  />
                  {/* Online Indicator */}
                  <motion.div
                    className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                    variants={OnlineIndicatorVariants}
                    animate="animate"
                  />
                </motion.div>

                <div>
                  <motion.h4 
                    className="text-[#181E4B] font-bold text-lg"
                    variants={ProfileTextVariants}
                    initial="hidden"
                    animate={isTop ? "show" : "hidden"}
                    custom={0.3}
                  >
                    {item.title}
                  </motion.h4>
                  <motion.h5 
                    className="text-[#5E6282] text-sm"
                    variants={ProfileTextVariants}
                    initial="hidden"
                    animate={isTop ? "show" : "hidden"}
                    custom={0.4}
                  >
                    {item.place}
                  </motion.h5>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-200/30 to-transparent rounded-bl-3xl"
                variants={CornerDecorVariants}
                initial="hidden"
                animate={isTop ? "show" : "hidden"}
              />
            </motion.div>
          );
        })}

        {/* Navigation Buttons */}
        <div className="absolute -bottom-10 flex sm:right-0 sm:top-30 sm:flex-col gap-4">
          <motion.button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "#f97316",
              borderColor: "#f97316"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <IoIosArrowUp className="text-2xl text-gray-600 hover:text-white transition-colors" />
          </motion.button>
          
          <motion.button
            onClick={handleNext}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "#f97316",
              borderColor: "#f97316"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <IoIosArrowDown className="text-2xl text-gray-600 hover:text-white transition-colors" />
          </motion.button>
        </div>

        {/* Progress Indicator */}
        <motion.div 
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 sm:hidden"
        >
          {testimonialData.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === topIndex 
                  ? 'w-8 bg-gradient-to-r from-orange-500 to-amber-500' 
                  : 'w-2 bg-gray-300'
              }`}
              variants={ProgressDotVariants}
              animate={index === topIndex ? "active" : "inactive"}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;