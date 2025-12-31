import Destination from '../assets/img/Destination icon.png'
import Payment from '../assets/img/Payment icon.png'
import Reach from '../assets/img/Reach icon.png'
import Greece from '../assets/img/cover.jpg'
import sub from '../assets/img/Subscribe icon.png'
import Istanbul from '../assets/img/turkey.png'
import { FaRegHeart, FaRegMap } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { IoPaperPlane } from "react-icons/io5";
import { GiTreeBranch } from "react-icons/gi";
import { motion } from 'framer-motion'

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
}

const BoxVariants = {
  hidden: {
    opacity: 0,
    x: -100
  },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.5,
      ease: "easeOut"
    }
  })
};

const Book = () => {
    const Boxes = [
        {
            icon: Destination,
            title: 'Choose Destination',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
            color: 'from-amber-400 to-orange-500'
        },
        {
            icon: Payment,
            title: 'Make Payment',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
            color: 'from-red-400 to-pink-500'
        },
        {
            icon: Reach,
            title: 'Reach Airport on Selected Date',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
            color: 'from-blue-400 to-cyan-500'
        }
    ]

    return (
        <div className="grid lg:grid-cols-2 lg:gap-20 container mx-auto pt-30 px-4 overflow-x-hidden sm:overflow-x-visible relative" id='book'>
            {/* Animated Background Orbs */}
            <motion.div 
                className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-500/10 blur-3xl top-0 -left-20"
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

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full"
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

            <div className="relative z-10">
                {/* Easy and Fast Badge */}
                <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 mb-3"
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
                    <span className="text-sm lg:text-base text-gray-700 font-semibold tracking-wider">EASY AND FAST</span>
                </motion.div>

                {/* Title with Gradient */}
                <motion.h2 
                    className="text-[#181E4B] text-2xl sm:text-4xl lg:text-5xl font-serif font-bold max-w-xl mb-8"
                    variants={TitleVariants}
                    initial="hidden"
                    whileInView="show"
                    custom={0}
                    viewport={{
                        once: true,
                        amount: 0.3
                    }}
                >
                    Book Your Next Trip In{" "}
                    <span className="relative inline-block">
                        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                            3 Easy Steps
                        </span>
                        {/* Animated underline */}
                        <motion.div
                            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1.5 }}
                        />
                    </span>
                </motion.h2>

                {/* Steps */}
                {Boxes.map((box, index) => (
                    <motion.div 
                        key={index} 
                        className="group flex items-start gap-5 my-10 cursor-pointer"
                        variants={BoxVariants}
                        initial="hidden"
                        whileInView="show"
                        custom={index}
                        viewport={{
                            once: true,
                            amount: 0.3
                        }}
                        whileHover={{ x: 10 }}
                    >
                        {/* Icon Container with Gradient Background */}
                        <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Gradient Circle Background */}
                            <motion.div
                                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${box.color} flex items-center justify-center shadow-lg`}
                                animate={{
                                    boxShadow: [
                                        "0 10px 30px rgba(0,0,0,0.1)",
                                        "0 15px 40px rgba(0,0,0,0.2)",
                                        "0 10px 30px rgba(0,0,0,0.1)"
                                    ]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.5
                                }}
                            >
                                <motion.img 
                                    src={box.icon} 
                                    alt="" 
                                    className="w-10 h-10"
                                    animate={{
                                        y: [0, -5, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.3
                                    }}
                                />
                            </motion.div>

                            {/* Step Number */}
                            <motion.div
                                className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-200 font-bold text-sm text-gray-700"
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.5 + index * 0.5, type: "spring" }}
                                viewport={{ once: true }}
                            >
                                {index + 1}
                            </motion.div>
                        </motion.div>

                        <div>
                            <motion.h3 
                                className="text-gray-800 font-bold text-lg mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300"
                            >
                                {box.title}
                            </motion.h3>
                            <motion.p 
                                className="text-sm text-gray-600 leading-relaxed"
                                initial={{ opacity: 0.8 }}
                                whileHover={{ opacity: 1 }}
                            >
                                {box.desc}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Card Section */}
            <div className="relative my-auto mx-auto py-10">
                <motion.div 
                    className="absolute w-50 h-50 bg-blue-600/70 rounded-full blur-3xl -z-99 top-0 right-5"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.7, 0.5]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div 
                    className="p-5 shadow-xl max-w-max rounded-3xl bg-white relative overflow-hidden group"
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                >
                    {/* Card Glow Effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/10 group-hover:to-purple-400/10 rounded-3xl transition-all duration-500"
                    />

                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-2xl">
                        <motion.img 
                            src={Greece} 
                            alt="" 
                            className="rounded-2xl"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                        />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                    </div>

                    <h3 className="py-3 text-lg font-bold text-gray-800">Trip To Greece</h3>
                    <p className="text-gray-500 font-medium text-sm">14-29 June | by Robbing jone</p>
                    
                    {/* Icon Row */}
                    <div className="flex gap-3 py-3">
                        {[GiTreeBranch, FaRegMap, IoPaperPlane].map((Icon, i) => (
                            <motion.div 
                                key={i}
                                className='bg-gray-200 hover:bg-gradient-to-br hover:from-blue-400 hover:to-purple-400 p-2 rounded-full transition-all duration-300 cursor-pointer'
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                custom={i}
                            >
                                <Icon className="group-hover:text-white" />
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-gray-600 font-medium flex gap-3 items-center text-sm">
                            <FaBuilding className="text-gray-500" />
                            24 People going
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }}
                            animate={{
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <FaRegHeart className='size-5 text-red-500 cursor-pointer' />
                        </motion.div>
                    </div>
                </motion.div>
                
                {/* Ongoing Trip Card */}
                <motion.div 
                    className="mt-5 md:mt-0 md:absolute py-3 pl-3 pr-9 rounded-2xl shadow-xl z-20 bg-white bottom-0 right-0 md:-translate-y-20 md:translate-x-30 group cursor-pointer"
                    initial={{
                        x: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.5
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                >
                    {/* Glow on hover */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-purple-400/0 group-hover:from-indigo-400/20 group-hover:to-purple-400/20 rounded-2xl transition-all duration-500"
                    />

                    <div className="flex gap-3 relative z-10">
                        <motion.img 
                            src={Istanbul} 
                            alt="" 
                            className="rounded-full w-14 h-14 object-cover border-2 border-indigo-200"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                        />
                        <div>
                            <h4 className="text-gray-500 font-medium text-sm">Ongoing</h4>
                            <h5 className="text-lg font-bold text-gray-800">Trip to Rome</h5>
                        </div>
                    </div>

                    <div className="w-40 ml-17 mt-2">
                        <p className="font-semibold text-sm mb-1">
                            <span className="text-indigo-700">40%</span> Completed
                        </p>
                        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div 
                                className="absolute top-0 left-0 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                                initial={{
                                    width: 0,
                                }}
                                whileInView={{
                                    width: "40%"
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.5,
                                    ease: "easeOut"
                                }}
                                viewport={{
                                    once: true,
                                    amount: 1
                                }}
                            >
                                {/* Progress Bar Shine Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    animate={{
                                        x: ['-100%', '100%']
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: 1.5
                                    }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Book