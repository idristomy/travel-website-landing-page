import Traveller from "../assets/img/Traveller 1.png"
import { IoIosPlayCircle } from "react-icons/io";
import Decor from '../assets/img/Decore.png'
import AirPlane from '../assets/img/Airplane.png'
import Line from '../assets/img/Line Decore.png'
import { motion, useCycle, useInView } from 'framer-motion'
import { useEffect, useRef } from "react";

const MoveRightVariants = {
    Desktop: {
        opacity: [0, 1],
        x: [-50, 0],
        transition: {
            duration: 2,
            delay: 2.5,
            ease: "easeInOut",
        }
    },
    Mobile: {
        opacity: [0, 1],
        y: [50, 0],
        transition: {
            duration: 1,
            delay: 2.5,
            ease: "easeInOut",
        }
    }
}

const MoveLeftVariants = {
    hidden: {
        opacity: 0,
        x: 500
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.2,
            delay: 2.9,
            ease: "easeOut"
        }
    }
}

const AirPlaneVariants = {
    hidden: {
        opacity: 0,
        x: "-100vw",
        rotate: 30,
        y: "100vw"
    },
    show: (customDelay) => ({
        opacity: 1,
        x: 0,
        rotate: -10,
        y: 0,
        transition: {
            duration: 2,
            delay: customDelay,
            ease: "easeOut",
            staggerChildren: 0.5
        }
    })
}

const Hero = () => {
    const [Animation, cycleAnimation] = useCycle("Desktop", "Mobile")
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        const isDesktop = window.innerWidth > 768
        cycleAnimation(isDesktop ? 0 : 1)
    }, [])

    return(
        <div className="relative overflow-hidden mt-10" id="home" ref={ref}>
            {/* Animated Background Orbs */}
            <motion.div 
                className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-500/20 blur-3xl -top-20 -left-20"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            
            <motion.div 
                className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-500/10 blur-3xl bottom-20 right-20 hidden lg:block"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            <div className="absolute w-50 h-50 rounded-full bg-amber-500/30 blur-3xl -translate-40 top-40 hidden md:block"></div>
            <img src={Decor} className='absolute -z-1 top-0 right-0 h-150' alt="" />

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full hidden lg:block"
                    style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-20 container mx-auto px-4 lg:px-20">
                <motion.div className="flex flex-col justify-center my-15 text-center items-center lg:items-start lg:text-start gap-5"
                    variants={MoveRightVariants}
                    animate={Animation}
                >
                    {/* Badge with pulse */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200"
                        animate={{
                            boxShadow: [
                                "0 0 0 0 rgba(251, 146, 60, 0)",
                                "0 0 0 10px rgba(251, 146, 60, 0)",
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 3
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
                        <p className="text-orange-700 text-sm lg:text-base font-semibold">Best Destinations around the world</p>
                    </motion.div>

                    <div className="relative">
                        <p className="text-4xl md:text-6xl lg:text-5xl xl:text-7xl font-serif font-bold text-[#181E4B]">
                            Travel,{" "}
                            <span className="relative inline-block pr-4">
                                <span className="relative z-10 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                                    enjoy
                                </span>
                                {/* Animated SVG Underline */}
                                <motion.svg
                                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full"
                                    viewBox="0 0 200 12"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                    transition={{ duration: 1, delay: 3.5, ease: "easeInOut" }}
                                >
                                    <motion.path
                                        d="M0 6 Q50 0, 100 6 T200 6"
                                        stroke="url(#gradient)"
                                        strokeWidth="3"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#f97316" />
                                            <stop offset="100%" stopColor="#f59e0b" />
                                        </linearGradient>
                                    </defs>
                                </motion.svg>
                            </span>{" "}
                            and live a new and full life.
                        </p>
                    </div>
                    <p className="text-[#5E6282] text-sm md:text-base">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                    
                    <div className="flex gap-5">
                        {/* Primary Button with Gradient Hover */}
                        <motion.button 
                            className="group relative px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-semibold shadow-lg shadow-orange-500/30 overflow-hidden"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <a href="#" className="relative z-10">Find out more</a>
                        </motion.button>

                        {/* Play Demo Button */}
                        <motion.button 
                            className="group inline-flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-orange-50 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                animate={{ 
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{ 
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <IoIosPlayCircle className="text-5xl text-orange-700 group-hover:text-orange-600 transition-colors"/>
                            </motion.div>
                            <a href="#" className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Play Demo</a>
                        </motion.button>
                    </div>
                </motion.div>

                <div className="hidden lg:block lg:relative">
                    {/* Floating Animation for Traveller */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 3.5
                        }}
                    >
                        <motion.img src={Traveller}
                            variants={MoveLeftVariants}
                            initial="hidden"
                            animate="show"
                        />
                    </motion.div>

                    {/* Rotating Dashed Circle */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border-2 border-dashed border-orange-300/40 rounded-full -z-10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Airplane 1 with floating effect */}
                    <motion.div
                        className="absolute top-10"
                        variants={AirPlaneVariants}
                        initial="hidden"
                        animate="show"
                        custom={2.8}
                    >
                        <motion.img 
                            src={AirPlane} 
                            alt=""
                            animate={{
                                x: [0, 30, 0],
                                y: [0, -20, 0],
                                rotate: [-10, -5, -10]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 5
                            }}
                        />
                    </motion.div>

                    {/* Airplane 2 with floating effect */}
                    <motion.div
                        className="absolute top-10 -right-5 -z-1"
                        variants={AirPlaneVariants}
                        initial="hidden"
                        animate="show" 
                        custom={2.5}
                    >
                        <motion.img 
                            src={AirPlane} 
                            alt=""
                            animate={{
                                x: [0, -20, 0],
                                y: [0, 15, 0],
                                rotate: [-10, -15, -10]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 5.5
                            }}
                        />
                    </motion.div>
                </div>                      
            </div>
        </div>
    )
}

export default Hero
