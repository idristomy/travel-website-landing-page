import Traveller from "../assets/img/Traveller 1.png"
import { IoIosPlayCircle } from "react-icons/io";
import Decor from '../assets/img/Decore.png'
import AirPlane from '../assets/img/Airplane.png'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'

const textVariants = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.15 + i * 0.12, ease: "easeOut" }
    })
}

const Hero = ({ start = true }) => {
    const { t } = useTranslation()

    return (
        <section className="relative overflow-hidden pt-28 lg:pt-32" id="home">
            <img
                src={Decor}
                className="absolute -z-10 top-0 end-0 h-[60vh] max-h-[640px] hidden md:block pointer-events-none select-none rtl:-scale-x-100"
                alt=""
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container mx-auto px-4 lg:px-20">
                <div className="flex flex-col justify-center text-center items-center lg:items-start lg:text-start gap-5 py-10">
                    <motion.p
                        className="text-orange-500 font-semibold tracking-wide uppercase text-sm lg:text-base"
                        variants={textVariants}
                        initial="hidden"
                        animate={start ? "show" : "hidden"}
                        custom={0}
                    >
                        {t('hero.eyebrow')}
                    </motion.p>

                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-5xl xl:text-7xl font-bold text-[#181E4B] leading-tight"
                        variants={textVariants}
                        initial="hidden"
                        animate={start ? "show" : "hidden"}
                        custom={1}
                    >
                        {t('hero.titlePre')}{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-orange-500">{t('hero.titleHighlight')}</span>
                            <motion.svg
                                className="absolute left-1/2 -translate-x-1/2 -bottom-2 md:-bottom-3 w-[116%] max-w-none -z-0 pointer-events-none overflow-visible"
                                viewBox="0 0 220 26"
                                fill="none"
                                aria-hidden="true"
                            >
                                <motion.path
                                    d="M7 14 C 65 24, 150 24, 213 13"
                                    stroke="#FB8B24"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={start ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                                    transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                                />
                            </motion.svg>
                        </span>{" "}
                        {t('hero.titlePost')}
                    </motion.h1>

                    <motion.p
                        className="text-[#5E6282] text-sm md:text-base max-w-md"
                        variants={textVariants}
                        initial="hidden"
                        animate={start ? "show" : "hidden"}
                        custom={2}
                    >
                        {t('hero.desc')}
                    </motion.p>

                    <motion.div
                        className="flex items-center gap-5 mt-2"
                        variants={textVariants}
                        initial="hidden"
                        animate={start ? "show" : "hidden"}
                        custom={3}
                    >
                        <motion.button
                            className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('hero.findOut')}
                        </motion.button>

                        <motion.button
                            className="group inline-flex items-center gap-2 cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <IoIosPlayCircle className="text-5xl text-orange-500 group-hover:text-orange-600 transition-colors" />
                            <span className="text-sm font-medium text-gray-700">{t('hero.playDemo')}</span>
                        </motion.button>
                    </motion.div>
                </div>

                <div className="hidden lg:block relative">
                    <motion.img
                        src={Traveller}
                        alt=""
                        className="relative z-10 w-full"
                        initial={{ opacity: 0, x: 80 }}
                        animate={start ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    />

                    <motion.div
                        className="absolute top-12 left-2 w-28 -z-0"
                        initial={{ opacity: 0, x: -180, y: 200, rotate: -28 }}
                        animate={start ? { opacity: 1, x: 0, y: 0, rotate: -12 } : { opacity: 0, x: -180, y: 200, rotate: -28 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    >
                        <motion.img
                            src={AirPlane}
                            alt=""
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>

                    <motion.div
                        className="absolute top-4 right-8 w-20 -z-0"
                        initial={{ opacity: 0, x: -240, y: 260, rotate: -28 }}
                        animate={start ? { opacity: 1, x: 0, y: 0, rotate: -12 } : { opacity: 0, x: -240, y: 260, rotate: -28 }}
                        transition={{ duration: 1.1, delay: 0.5, ease: "easeOut" }}
                    >
                        <motion.img
                            src={AirPlane}
                            alt=""
                            animate={{ y: [0, -16, 0], x: [0, 6, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
