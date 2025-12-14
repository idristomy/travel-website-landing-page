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
import { motion } from 'motion/react'


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
      delay: i * 0.5, // stagger effect
      ease: "easeOut"
    }
  })
};

const Book = () => {

    const Boxes = [
        {
            icon : Destination,
            title: 'Choose Destination',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
        },
        {
            icon : Payment,
            title: 'Make Payment',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
        },
        {
            icon : Reach,
            title: 'Reach Airport on Selected Date',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
        }
    ]

    return (

      <div className="grid lg:grid-cols-2 lg:gap-20 container mx-auto  pt-30 px-4 overflow-x-hidden sm:overflow-x-visible" id='book'>
        <div>
          <motion.h1 className="text-lg text-gray-700 font-semibold mb-3"
                variants={TitleVariants}
                initial= "hidden"
                whileInView= "show"
                custom={0.5}
                viewport={{
                once: true,
                amount: 0.3
                }}
          >Easy and Fast</motion.h1>
          {/* Changed w-130 to max-w-xl for responsive max width */}
          <motion.h2 className="text-[#181E4B] text-2xl sm:text-4xl lg:text-5xl font-serif font-bold max-w-xl"
            variants={TitleVariants}
                initial= "hidden"
                whileInView= "show"
                custom={0}
                viewport={{
                once: true,
                amount: 0.3
                }}
          >
            Book Your Next Trip In 3 Easy Steps
          </motion.h2>
          {Boxes.map((box, index) => (
            <motion.div key={index} className="flex items-center gap-5 my-10"
              variants={BoxVariants}
              initial= "hidden"
              whileInView= "show"
              custom={index}
              viewport={{
                once: true,
                amount: 0.3
              }}
            >
              <img src={box.icon} alt="" />
              <div>
                <h3 className="text-gray-700 font-semibold">{box.title}</h3>
                <p className="text-sm">{box.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>


        <div className="relative my-auto mx-auto py-10 ">

          <div className="absolute w-50 h-50 bg-blue-600/70 rounded-full blur-3xl -z-99 top-0 right-5 "></div>
          <div className="p-5 shadow-gray-400/80 shadow-md max-w-max rounded-3xl bg-white">
            <img src={Greece} alt="" className="rounded-2xl" />
            <h3 className="py-3 text-lg font-semibold">Trip To Greece</h3>
            <p className="text-gray-500 font-medium">14-29 June | by Robbing jone</p>
            <div className="flex gap-3 py-3">
              <div className='bg-gray-300 p-2 rounded-full'>
                <GiTreeBranch />
              </div>
              <div className='bg-gray-300 p-2 rounded-full'>
                <FaRegMap />
              </div>
              <div className='bg-gray-300 p-2 rounded-full'>
                <IoPaperPlane />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-500 font-medium flex gap-3 items-center">
                <FaBuilding />
                24 People going</p>
              <FaRegHeart  className='size-5 text-red-500'/>
            </div>
          </div>
          
          {/* Changed fixed large negative right positions to responsive values */}
          <motion.div className="mt-5 md:mt-0 md:absolute py-3 pl-3 pr-9 rounded-2xl shadow-gray-400/80 shadow-md z-20 bg-white bottom-0 right-0  md:-translate-y-20 md:translate-x-30"

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

          >
            <div className="flex gap-3">
              <img src={Istanbul} alt="" className="rounded-full w-14" />
              <div>
                <h4 className="text-gray-500 font-medium">Ongoing</h4>
                <h5 className="text-lg font-semibold">Trip to Rome</h5>
              </div>
            </div>
            <div className="w-40 ml-17">
              <p className="font-semibold">
                <span className="text-indigo-700">40%</span> Completed
              </p>
              <div className="relative h-2 bg-gray-300 rounded-md overflow-hidden">
                <motion.div className="absolute top-0 left-0 h-2 bg-indigo-700 rounded-md"
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: "40%"
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.5
                  }}
                  viewport={{
                    once: true,
                    amount: 1
                  }}
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
)

}

export default Book