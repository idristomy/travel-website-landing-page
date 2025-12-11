import Book from './Components/Book.jsx';
import Companies from './Components/Companies.jsx';
import Destinations from './Components/Destinations.jsx';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx';
import Hero from './Components/Hero.jsx'; 
import Services from './Components/Services.jsx';
import Subscribtion from './Components/Subscirbtion.jsx';
import Testimonials from './Components/Testimonials.jsx';
import { motion } from 'motion/react'
import Logo from '../src/assets/img/Logo.png'
import { useState, useEffect } from 'react';
import AirPlane from '../src/assets/img/Airplane.png'

const LogoAnimationVariants = {
  hidden: {
    opacity:  1,
    x: 0,
  },
  show: {
    opacity: 0 ,
    x: "120vh",
    transition: {
      duration: 0.9,
      delay: 2,
      ease: "easeInOut"
    }
  }
}

function App() {

  const [isHidden, seIsHiedden] = useState(true)

  useEffect(() =>{
    setTimeout(() => {
      seIsHiedden(false)
    }, 3000)
  }, [])

  return (
    <div className='relative'>
      
      { isHidden && <div  className='absolute flex items-center justify-center  h-[100vh] overflow-hidden w-full z-1'>
        <motion.div className="absolute -z-10 bg-amber-500 right-0"
        initial={{
          width: "100%",
          height: "100%"
        }}
        animate={{
          width: "0%"
        }}
        transition={{
          duration: 0.9,
          delay: 2,
        }}
      >
      </motion.div>
      <motion.img 
        src={Logo}
        className='w-50'
        variants={LogoAnimationVariants}
        initial= "hidden"
        animate= "show"
      />
      <motion.img 
        src={AirPlane}
        className="absolute lg:size-100 size-50"
        initial={{
          x: "-120vh",
          originY: 0,
          originX: 0,
          rotate: 20
        }}
        animate={{
          x: "120vh",
        }}
        transition={{
          duration: 1.2,
          delay:1.9
        }}
      />
        
      </div>}
      <div className="-z-99">
      <Header />
      <Hero />
      <Services />
      <Destinations />
      <Book />
      <Testimonials />
      <Companies />
      <Subscribtion />
      <Footer />
      </div>
    </div>
  )
}

export default App
