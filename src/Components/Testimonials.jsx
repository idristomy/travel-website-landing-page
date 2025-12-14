import profile from '../assets/img/profile.png';
import { motion } from 'motion/react';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";

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
}

const Testimonials = () => {
  const [topIndex, setTopIndex] = useState(0);

  const handleNext = () => {
    setTopIndex((prev) => (prev + 1) % 2);
  };

  const handlePrev = () =>{
    setTopIndex((prev) =>
        prev === 0 ? testimonialData.length - 1 : prev - 1
    );
  }

  const testimonialData = [
    {
      img: profile,
      paragraph:
        "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
      title: "Mike Taylor",
      place: "Lahore, Pakistan",
    },
    {
      img: profile,
      paragraph:
        "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
      title: "Chris Thomas",
      place: "CEO of Red Button",
    },
  ];

  return (
    <div className="container mx-auto py-20 px-4 grid lg:grid-cols-2 gap-10" id='testimonials'>
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
                >CATEGORY</motion.h1>
                <motion.h2 className="text-[#181E4B] text-2xl sm:text-4xl lg:text-5xl font-serif font-bold"
                    variants={TitleVariants}
                    initial= "hidden"
                    whileInView= "show"
                    custom={0}
                    viewport={{
                    once: true,
                    amount: 0.3
                }}
                >
                    What People Say About Us.
                </motion.h2>

                <motion.div className="flex gap-5 mt-20"
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
                        once:true,
                        amount: 0.3
                    }}
                >
                    <div className="w-3 h-3 rounded-full bg-[#181E4B]"></div>
                    <motion.div className="w-3 h-3 rounded-full bg-[#181E4B]/50"
                        initial={{
                            x: -32
                        }}
                        whileInView={{
                            x:0
                        }}
                        transition={{
                        duration: 0.5,
                        delay: .3
                       }}
                        viewport={{
                        once:true,
                        amount: 0.3
                    }}

                    ></motion.div>
                    <motion.div className="w-3 h-3 rounded-full bg-[#181E4B]/50"
                        initial={{
                            x: -63
                        }}
                        whileInView={{
                            x:0
                        }}
                        transition={{
                        duration: 0.5,
                        delay: .8
                        }}
                         viewport={{
                        once:true,
                        amount: 0.3
                    }}
                    ></motion.div>
                </motion.div>
            </div>
      <div className="relative flex items-center justify-center min-h-[300px]">
        {testimonialData.map((item, index) => {
          const isTop = index === topIndex;
          return (
            <motion.div
              key={index}
              variants={TestimonialsVariants}
              initial={isTop ? 'bottom' : 'top'}
              animate={isTop ? 'top' : 'bottom'}
              className="absolute bg-white shadow-md rounded-xl p-6 w-full max-w-md"
              
            >
              <p className="text-[#5E6282] mb-4">{item.paragraph}</p>
              <div className="flex items-center gap-3">
                <img src={item.img} alt="profile" className="rounded-full w-10" />
                <div>
                  <h4 className="text-[#5E6282] font-bold">{item.title}</h4>
                  <h5 className="text-[#5E6282] text-sm">{item.place}</h5>
                </div>
              </div>
            </motion.div>
          );
        })}

                {/* Buttons */}
        <div className="absolute -bottom-10 flex sm:right-0 sm:top-30 sm:flex-col gap-4">
          <IoIosArrowUp
            onClick={handlePrev}
            className="text-3xl text-gray-600 hover:text-gray-900 cursor-pointer"
          />
          <IoIosArrowDown
            onClick={handleNext}
            className="text-3xl text-gray-600 hover:text-gray-900 cursor-pointer"
          />
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
