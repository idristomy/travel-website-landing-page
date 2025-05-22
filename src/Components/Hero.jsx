import Traveller from "../assets/img/Traveller 1.png"
import { IoIosPlayCircle } from "react-icons/io";
import Decor from '../assets/img/Decore.png'
import AirPlane from '../assets/img/AirPlane.png'
import Line from '../assets/img/Line Decore.png'
import { motion, useCycle } from 'motion/react'
import { useEffect } from "react";


const MoveRightVariants = {
    Desktop: {
        opacity: [0, 1],
        x: [ -50 , 0],
        transition: {
            duration: 2,
            delay: 2.5,
            ease: "easeInOut",
            
        }
    },
    Mobile:{
        opacity: [0, 1],
        y: [ 50 , 0],
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
        x: 50
        },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .5,
            delay: 2.9,
            ease: "easeInOut"
        }
    }
}

const AirPlaneVarinats = {
    hidden: {
        opacity: 0,
        x: "-100vw",
        rotate: 30,
        y: "100vw"
    },
    show: (customDelay) => ({
        opacity :1,
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

useEffect(() => {
  const isDesktop = window.innerWidth > 768
  cycleAnimation(isDesktop ? 0 : 1)
}, [])


    return(
        <div className="relative" id="home">
            <div className="absolute w-50 h-50 rounded-full bg-amber-500/30 blur-3xl -translate-40 top-40 hidden md:block"></div>
            <img src={Decor} className='absolute -z-1 top-0 right-0 h-150 ' alt="" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-20 container mx-auto px-4 lg:px-20">
                <motion.div className="flex flex-col justify-center my-15 text-center items-center lg:items-start lg:text-start gap-5"
                    variants={MoveRightVariants}
                    
                    animate= {Animation}
                >
                    <p className="text-orange-700 text-lg font-medium">Best Destinations around the world</p>
                        <div className="relative">
                            <p className="text-4xl md:text-6xl lg:text-5xl xl:text-7xl font-serif font-bold text-[#181E4B]">Travel, 
                            
                                <span className="pr-4">
                                     enjoy
                                     <img src={Line} alt="" className="absolute md:left-55 md:w-80  lg:w-60 lg:left-40 lg:top-10 xl:left-60 xl:top-15 xl:w-auto -z-10 hidden md:block"/>
                                </span> 
                                     and live a new and full life
                        </p>
                        </div>
                    <p className="text-[#5E6282] text-sm md:text-base">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                    <div className="flex gap-5">
                        <button className="bg-orange-400 hover:bg-orange-400/70 text-white py-2 px-4 rounded-lg shadow-orange-400/80 shadow-lg cursor-pointer">
                            <a href="#">Find out more</a>
                        </button>
                        <button className="inline-flex items-center gap-2 cursor-pointer hover:scale-105">
                            <IoIosPlayCircle className="text-5xl text-orange-700 "/>
                            <a href="#" className="text-sm">Play Demo</a>
                        </button>
                    </div>
                </motion.div>
                <div className="hidden lg:block lg:relative">
                    <motion.img  src={Traveller}
                    variants={MoveLeftVariants}
                    initial= "hidden"
                    animate= "show"
                    
                    />
                    <motion.img src={AirPlane} alt="" className="absolute top-10"
                        variants={AirPlaneVarinats}
                        initial= "hidden"
                        animate= "show"
                        custom={2.8}
                    />
                    <motion.img src={AirPlane} alt="" className="absolute top-10 -right-5 -z-1"
                        variants={AirPlaneVarinats}
                        initial= "hidden"
                        animate= "show" 
                        custom={2.5}                 
                    />
                </div>                      
            </div>
        </div>
    )
}

export default Hero