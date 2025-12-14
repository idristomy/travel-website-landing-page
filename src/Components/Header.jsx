import React from "react"
import Logo from "../assets/img/Logo.png"
import { useState, useEffect } from "react"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-scroll';
import {motion, AnimatePresence} from 'motion/react'

const NavbarVariants = {
    hidden: {
        opacity: 0,
        y: -20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
            delay: 2.5,
            ease: "easeInOut"
        }
    }
}


const Header = () => {
    const [isOpenLanguageButton, setIsOpenLanguuageButton] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeLinks, setActiveNavLinks] = useState('home');

    useEffect(() =>{

        const handlScroll = () =>{
            const scroll = window.scrollY;

            if(scroll < 100){
                setActiveNavLinks('home')
            }
        };

        window.addEventListener("scroll", handlScroll);

        handlScroll();
        return () =>
            window.removeEventListener("scroll", handlScroll);
        

    }, []);
   


    const navLinks = [
        {link: 'home', lable: 'Home'},
        {link: 'services', lable: 'Services'},
        {link: 'destinations', lable: 'Destinations'},
        {link: 'book', lable: 'Booking'},
        {link: 'testimonials', lable: 'Testimonials'}
    ]

    return(

        
        <motion.nav className="fixed  top-0 left-0 right-0 z-99  shadow-md backdrop-blur-md"
            variants={NavbarVariants}
            initial= "hidden"
            animate= "show"

        >
            <div className="w-full container mx-auto flex justify-between items-center px-4 lg:px-20 lg:h-20 h-16">
                <div className="mr-20 relative">
                    {/* Logo */}
                    <Link 
                        to="home" smooth={true} className="cursor-pointer"
                    >
                        <motion.img src={Logo} alt="Logo" className="w-15 lg:w-20"
                            initial={{
                                y: '-100px',
                            }}
                            animate={{
                                y:0
                            }}
                            transition={{
                                duration: .4,
                                delay:2.9,
                                type: 'spring',
                                stiffness: 90
                            }}

                        />
                    </Link>
                </div>

                {/* Hamburger Menu */}

                <button onClick={() => setIsOpen(!isOpen)} className='md:hidden p-2 transition duration-900 linear'>
                    {
                     isOpen ? <HiX className="size-8"/> : <HiMenuAlt3 className="size-8"/>
                    }
                </button>


                {/* Navigation Links */}
                
                <div className="hidden md:flex md:gap-5 lg:gap-10 items-center ">
                    {
                        
                        navLinks.map((NavLink, index) =>(
                             <motion.div
                                 whileHover={{
                                    scale: 1.1,
                                    originY: 0,
                                    originX: 0
                                 }}
                                 transition={{
                                    duration: .1,
                                
                                 }}
                             >
                                    <Link key={index} className={`text-xs lg:text-sm font-medium hover:text-orange-300 cursor-pointer ${activeLinks === NavLink.link ? "text-orange-500" : "text-gray-500"}`}
                                    to={NavLink.link}  
                                    smooth={true} 
                                    spy={true} 
                                    activeClass="text-orange-500" duration={500}
                                        onSetActive={() => setActiveNavLinks(NavLink.link)}
                                    
                                    
                                    >{NavLink.lable}
                                    </Link>
                                </motion.div>
                         ))
                    }
                </div>
                <div className="hidden md:flex gap-2 xl:gap-10 items-center">
                        <a className="text-sm hover:text-amber-300" href="#">Login</a>
                        <button className="flex items-center-justify-center px-2 lg:px-3 py-2 font-semibold rounded-md border-gray-700/70 bg-amber-500 hover:bg-amber-500/80 text-white cursor-pointer">
                              <a className="text-xs lg:sm" href="#">Sign Up</a>
                        </button>
                        <div className="relative">
                            <button className='inline-flex items-center gap-2 justify-center border-gray-300 rounded-md w-10  text-xs font-medium  cursor-pointer'
                                onClick={() => setIsOpenLanguuageButton(!isOpenLanguageButton)}
                            >
                                EN
                                { isOpenLanguageButton ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                
                            </button>
                            <div className={`absolute  flex flex-col text-sm  shadow-md border-gray-400/50 border-1 rounded-b-sm w-10 h-max ${isOpenLanguageButton ? 'block' : 'hidden'}`}>
                                <button className="cursor-pointer hover:text-white hover:bg-amber-500">
                                    AR
                                </button>
                                <button className="cursor-pointer hover:text-white hover:bg-amber-500 transition-all">
                                    CN
                                </button>
                            </div>
                        </div>
                </div>
         

                {/* Mobile menu */}


            </div>
            

                {
                    isOpen && (
                        <motion.div className="backdrop-blur-xl mx-auto px-4 md:hidden shadow-md "
                            initial={{
                                opacity: 0,
                                y: -90,
                            }}
                            animate={{
                                opacity: 1,
                                y:0
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut"
                            }}
                            
                        >
                            <div className=" container  space-y-3 w-full font-medium py-4 border-t border-gray-400" >
                                {navLinks.map((NavLink, index) =>(
                                    <Link className={`block border-b-1 border-gray-300 ${
                                    activeLinks === NavLink.link ? 'text-orange-500' : 'text-gray-700'
                                }`}
                                    onClick={() => {
                                        setActiveNavLinks(NavLink.link);
                                        setIsOpen(false);
                                    }
                                }
                                    to={NavLink.link} smooth={true} duration={500}>{NavLink.lable}</Link>
                                ))}
                            </div>

                                
                            <div className="flex gap-5 items-center justify-between  py-2 border-t-1 border-gray-200">
                                <div className="flex gap-5 items-center">
                                    <a className="text-sm" href="#">Login</a>
                                    <button className="flex items-center-justify-center px-2 lg:px-3 py-2 font-semibold rounded-md border-gray-700/70 bg-amber-500 hover:bg-amber-500/80 text-white">
                                        <a className="text-xs lg:sm" href="#">Sign Up</a>
                                    </button>
                                </div>  
                            <div className="relative">
                                <button className='inline-flex items-center gap-2 justify-center border-gray-300 rounded-md w-10  text-xs font-medium cursor-pointer'
                                    onClick={() => setIsOpenLanguuageButton(!isOpenLanguageButton)}
                                >
                                    EN
                                    { isOpenLanguageButton ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    
                                </button>
                                <div className={`absolute  flex flex-col text-sm  shadow-md border-gray-400/50 border-1 rounded-b-sm w-10 h-max ${isOpenLanguageButton ? 'block' : 'hidden'}`}>
                                    <button className="cursor-pointer hover:text-white hover:bg-amber-500">
                                        AR
                                    </button>
                                    <button className="cursor-pointer hover:text-white hover:bg-amber-500">
                                        CN
                                    </button>
                                </div>
                            </div>
                            </div>
                        </motion.div>
                    )
                }
            
        </motion.nav>
    )
}

export default Header