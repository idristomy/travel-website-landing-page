import Italy from '../assets/img/italy.png'
import UK from '../assets/img/england.jpg'
import Europe from '../assets/img/country.png'
import icon from '../assets/img/Duration icon.png'
import Decore from '../assets/img/Decore 2.png'
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
      delay: i * 0.3,
      ease: "easeOut"
    }
  })
};

const Destinations = () => {
    const Boxes = [
        {
            img: Italy, 
            location: 'Rome, Italy',
            duration: '10 Days Trip',
            price: '$5,42k'
        },
        {
            img: UK, 
            location: 'London, UK',
            duration: '12 Days Trip',
            price: '$4,2k'
        },
        {
            img: Europe,
            location: 'Full Europe',
            duration: '28 Days Trip',
            price: '$15k'
        }
    ]

    return(
        <div className="container mx-auto text-center pt-20 md:pt-30 relative overflow-hidden" id='destinations'>
            {/* Animated Background Orbs */}
            <motion.div 
                className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-500/10 blur-3xl -top-20 left-20"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Floating Particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"
                    style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                    }}
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Top Selling Badge */}
            <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 mb-3"
                variants={TitleVariants}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: true,
                    amount: 0.3
                }}
            >
                <motion.span 
                    className="w-2 h-2 bg-orange-500 rounded-full"
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
                <span className="text-sm lg:text-base text-orange-700 font-semibold tracking-wider">TOP SELLING</span>
            </motion.div>

            {/* Title with Gradient */}
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
                Top{" "}
                <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                        Destinations
                    </span>
                    {/* Animated underline */}
                    <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                    />
                </span>
            </motion.h2>

            <div className="relative grid sm:grid-cols-3 gap-10 lg:gap-0 items-center justify-center py-20 text-gray-700 font-semibold">
                {/* Animated Decore */}
                <motion.img 
                    src={Decore} 
                    alt="" 
                    className='absolute right-0 -z-10 hidden lg:block md:translate-x-15 xl:translate-0 2xl:-translate-x-10' 
                    initial={{
                        opacity: 0,
                        rotate: -20,
                        scale: 0.8
                    }}
                    whileInView={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1
                    }}
                    transition={{
                        delay: 0.9,
                        duration: 0.8
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3
                    }}
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 5, 0]
                    }}
                    style={{
                        transition: {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                />

                {Boxes.map((Box, index) => (
                    <motion.div 
                        key={index} 
                        className='group max-w-80 mx-auto rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer relative'
                        variants={BoxVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={index}
                        whileHover={{ 
                            y: -15,
                            scale: 1.03,
                            transition: { duration: 0.3 }
                        }}
                    >
                        {/* Image Container with Overlay Effect */}
                        <div className="relative max-h-80 overflow-hidden">
                            <motion.img 
                                src={Box.img} 
                                alt="" 
                                className='object-cover min-h-80 w-full'
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            />
                            
                            {/* Gradient Overlay on Hover */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            />

                            {/* Floating Badge */}
                            <motion.div
                                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-orange-600 shadow-lg"
                                initial={{ scale: 0, rotate: -45 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                                viewport={{ once: true }}
                            >
                                Popular
                            </motion.div>

                            {/* Explore Button appears on hover */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ y: 20 }}
                                whileHover={{ y: 0 }}
                            >
                                <motion.button
                                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold shadow-lg"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Explore Now
                                </motion.button>
                            </motion.div>
                        </div>

                        {/* Card Content */}
                        <div className="p-5 bg-white relative">
                            {/* Decorative Corner */}
                            <motion.div
                                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-200/40 to-transparent rounded-bl-3xl"
                                initial={{ scale: 0, rotate: 45 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.7 + index * 0.2 }}
                                viewport={{ once: true }}
                            />

                            <div className="flex justify-between items-center mb-4">
                                <motion.h3 
                                    className="text-lg font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500 group-hover:bg-clip-text transition-all duration-300"
                                >
                                    {Box.location}
                                </motion.h3>
                                <motion.p 
                                    className="text-orange-600 font-bold text-lg"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {Box.price}
                                </motion.p>
                            </div>

                            <motion.div 
                                className="flex items-center gap-3 text-gray-600"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.img 
                                    src={icon} 
                                    alt=""
                                    animate={{
                                        rotate: [0, 360]
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                                <p className="text-sm">{Box.duration}</p>
                            </motion.div>

                            {/* Rating Stars */}
                            <motion.div 
                                className="flex items-center gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ y: 10 }}
                                whileHover={{ y: 0 }}
                            >
                                {[...Array(5)].map((_, i) => (
                                    <motion.svg
                                        key={i}
                                        className="w-4 h-4 text-amber-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1 + i * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </motion.svg>
                                ))}
                            </motion.div>
                        </div>

                        {/* Glow effect on hover */}
                        <motion.div
                            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-400/0 to-amber-400/0 group-hover:from-orange-400/20 group-hover:to-amber-400/20 pointer-events-none transition-all duration-500"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Destinations