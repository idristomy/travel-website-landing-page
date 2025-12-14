import icon from '../assets/img/Subscribe icon.png';
import Circles from '../assets/img/Circles.png';
import Stars from '../assets/img/Stars.png';
import { motion } from 'motion/react';

const BoxVariants = {
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
};

const Subscribtion = () => {
  return (
    <motion.div
      className="relative overflow-hidden"
      variants={BoxVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      <img
        src={Stars}
        alt=""
        className="absolute bottom-0 right-5 -z-10 pointer-events-none"
      />
      <div className="container mx-auto flex items-center justify-center py-20 px-4 ">
        <div className="relative bg-fuchsia-100 text-center w-full py-10 md:py-20 rounded-tl-[80px] rounded-b-xl z-10 ">
          {/* Background graphics */}
          <img
            src={Circles}
            alt=""
            className="absolute bottom-0 translate-x-10 w-40 md:w-60 opacity-30 pointer-events-none"
          />
          <img
            src={Circles}
            alt=""
            className="absolute top-8 right-0 rotate-[270deg] translate-x-7 w-40 md:w-60 opacity-30 pointer-events-none"
          />
          <img
            src={icon}
            alt=""
            className="absolute w-10 lg:w-20 top-0 right-0 translate-x-1/3 -translate-y-1/3 z-20"
          />

          {/* Heading */}
          <h1 className="text-xl lg:text-3xl md:text-2xl font-semibold text-gray-500 mx-auto lg:w-4/5 z-20 relative">
            Subscribe to get information, latest news and other interesting offers about Jadoo
          </h1>

          {/* Form */}
          <form
            className="flex flex-col md:flex-row items-center justify-center gap-5 pt-10 md:pt-20 z-20 relative"
            
          >
            <input
              type="email"
              name="email"
              className="bg-white p-3 w-[250px] md:w-[300px] rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
              placeholder="Your Email"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#FF946D] to-[#FF7D68] text-white font-semibold py-3 px-5 rounded-xl hover:opacity-90 transition-opacity duration-300 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Subscribtion;
