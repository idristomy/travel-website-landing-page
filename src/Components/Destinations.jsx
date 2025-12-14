import Italy from '../assets/img/italy.png'
import UK from '../assets/img/england.jpg'
import Europe from '../assets/img/country.png'
import icon from '../assets/img/Duration icon.png'
import Decore from '../assets/img/Decore 2.png'
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

        <div className="container mx-auto text-center pt-20 md:pt-30" id='destinations'>
            <motion.h1 className="text-lg text-gray-700 font-semibold mb-3"
                variants={TitleVariants}
                initial= "hidden"
                whileInView= "show"
                viewport={{
                once: true,
                amount: 0.3
          }}
            >TOP SELLING</motion.h1>
            <motion.h2 className="text-[#181E4B] text-2xl sm:text-4xl lg:text-5xl font-serif font-bold"
                variants={TitleVariants}
                initial= "hidden"
                whileInView= "show"
                viewport={{
                once: true,
                amount: 0.3
          }}
            >Top Destinations</motion.h2>
            <div className="relative grid sm:grid-cols-3 gap-10 lg:gap-0 items-center justify-center py-20 text-gray-700 font-semibold ">
                <motion.img src={Decore} alt="" className='absolute right-0 -z-10 hidden lg:block md:translate-x-15 xl:translate-0 2xl:-translate-x-10 ' 
                    initial= {{
                        opacity:0
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.9
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3
                    }}
                />
                {
                    Boxes.map((Box, index) => (
                        <motion.div key={index} className='max-w-80 mx-auto rounded-2xl overflow-hidden shadow-md pb-5'
                            variants={BoxVariants}
                            initial= "hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={index}
                        >
                            <div className="max-h-80 overflow-hidden">
                                <img src={Box.img} alt="" className='object-cover min-h-80'/>
                            </div>
                            <div className="p-3 bg-white">
                                <div className="flex justify-between mb-3">
                                    <h3>{Box.location}</h3>
                                    <p>{Box.price}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img src={icon} alt="" />
                                    <p>{Box.duration}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </div>

        </div>
    )
}

export default Destinations