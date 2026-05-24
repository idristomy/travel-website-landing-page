import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import PlayStore from '../assets/img/Play Store.png'
import GooglePlay from '../assets/img/Google Play.png'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'

const FooterVariants = {
    hidden: {
        y: 30,
        opacity: 0
    },
    show: (i) =>  ({
        opacity: 1,
         y: 0 ,
         transition: {
            duration: 0.5,
            delay: i * 0.2,
            ease: "easeOut"
         }
    })
}


const Footer = () => {
    const { t } = useTranslation()

    const footerColumns = [
        { title: 'company', links: ['about', 'careers', 'mobile'] },
        { title: 'contact', links: ['help', 'press', 'affiliates'] },
        { title: 'more', links: ['airlineFees', 'airline', 'lowFare'] },
    ]

    return(
        
        <footer className="relative overflow-hidden">

            <div className="container mx-auto py-10 px-4 lg:px-0">

                <div className="grid grid-cols-1  xl:grid-cols-10 gap-10">

                    {/* Logo */}

                    <motion.div className="flex flex-col gap-5  xl:col-span-2"
                        initial= {{
                            opacity: 0,
                            y: 30
                        }}
                        whileInView={{
                            opacity : 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.4,
                            ease: 'linear'
                        }}
                        viewport={{
                            once: true, amount: 0.8
                        }}
                    >
                        <p dir="ltr" className="text-4xl font-semibold w-max">Jadoo.</p>
                        <p className="text-sm text-gray-500 font-semibold">{t('footer.tagline')}</p>
                    </motion.div>

                    {/* Footer Links */}

                    <div className="xl:col-span-6 xl:mx-auto">

                        <div className="grid grid-cols-3  lg:gap-30">
                            {
                                footerColumns.map((col, index) =>(
                                    <motion.div key={col.title} className="flex flex-col gap-5 "
                                        variants={FooterVariants}
                                        initial= "hidden"
                                        whileInView= 'show'
                                        custom={index}
                                        viewport={{
                                            once: true,
                                            amount: 1
                                        }}
                                    >
                                        <h5 className="font-bold text-lg">{t(`footer.${col.title}`)}</h5>
                                        <ul className="space-y-2">
                                            {
                                                col.links.map((link) =>(
                                                    <li key={link}>
                                                        <a href="#" className="text-sm text-gray-500 font-semibold hover:text-orange-500 transition-colors">{t(`footer.${link}`)}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>

                    {/* Social Media Links */}

                    <motion.div className="xl:col-span-2"
                        initial= {{
                                opacity: 0,
                                y: 30
                            }}
                            whileInView={{
                                opacity : 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.4,
                                delay: 0.8,
                                ease: 'linear'
                            }}
                            viewport={{
                                once: true, amount: 0.8
                            }}
                    >
                        <div className="flex items-center gap-5">
                            <motion.a href="#" aria-label="Facebook" className="rounded-full shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                                whileHover={{ scale: 1.2 }}
                            >
                                <TiSocialFacebook className="size-9"/>
                            </motion.a>
                            <motion.a href="#" aria-label="Instagram" className="rounded-full shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                                whileHover={{ scale: 1.2 }}
                            >
                                <FaInstagram className="p-2 size-10 rounded-full shadow-md"/>
                            </motion.a>
                            <motion.a href="#" aria-label="Twitter" className="rounded-full shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                                whileHover={{ scale: 1.2 }}
                            >
                                <FaTwitter className="p-2 size-10 rounded-full shadow-md"/>
                            </motion.a>
                        </div>
                        <h5 className="font-bold text-gray-700 text-lg pt-3 pl-3">{t('footer.discover')}</h5>
                        <div className="flex gap-2 pt-5">
                            <motion.img src={PlayStore} alt="" 
                                className="cursor-pointer"
                                whileHover={{
                                    scale: 1.2
                                }}
                            />
                            <motion.img src={GooglePlay} alt="" 
                                className="cursor-pointer"
                                whileHover={{
                                    scale: 1.2
                                }}
                            />
                        </div>
                    </motion.div>

                </div>
                <div className="">

                    <div className="mt-5 pt-5 flex justify-center items-center border-t border-gray-300">
                        <p>{t('footer.rights')}</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer