import profile from '../assets/img/profile.png'
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";


const Testimonials = () =>{

    return(

        <div className='container mx-auto grid lg:grid-cols-2 gap-10 pt-20 md:pt-30 px-4' id='testimonials'>
            <div>
                <h1 className="text-lg text-gray-700 font-semibold mb-3">CATEGORY</h1>
                <h2 className="text-[#181E4B] text-2xl sm:text-4xl lg:text-5xl font-serif font-bold">
                    What People Say About Us.
                </h2>

                <div className="flex gap-5 mt-20">
                    <div className="w-3 h-3 rounded-full bg-[#181E4B]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#181E4B]/50"></div>
                    <div className="w-3 h-3 rounded-full bg-[#181E4B]/50"></div>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-center gap-15 md:gap-20">

                <div className="relative flex items-center justify-center">

                    {/* First testimonial */}

                    <div className='relative'>
                        <img src={profile} alt="" className='rounded-full w-10 sm:w-15 absolute -top-0 left-0'/>
                        <div className="w-60 sm:w-100 p-5 shadow-lg shadow-gray-400 rounded-xl bg-white mt-5 ml-5 sm:mt-10 sm:ml-10">
                            <p className='text-gray-500 text-sm sm:text-base font-medium'>
                                "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
                            </p>
                            <div className="mt-5 ">
                                <h4 className="text-gray-700 font-bold text-md md:text-xl">Mike taylor</h4>
                                <p className="text-sm text-gray-500 font-semibold">Lahore, Pakistan</p>
                            </div>
                        </div>
                    </div>

                    {/* Second testimonial */}

                    
                    <div className="absolute -z-10 translate-x-10 translate-y-15 scale-95 opacity-80">
                        <div className='relative'>
                            <img src={profile} alt="" className='rounded-full w-10 sm:w-15 absolute -top-0 left-0'/>
                            <div className="w-60 sm:w-100 p-5 shadow-lg shadow-gray-400 rounded-xl bg-white mt-5 ml-5 sm:mt-10 sm:ml-10">
                                <p className='text-gray-500 text-sm sm:text-base font-medium'>
                                    "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
                                </p>
                                <div className="mt-5 ">
                                    <h4 className="text-gray-700 font-bold text-xl">Mike taylor</h4>
                                    <p className="text-sm text-gray-500 font-semibold">CEO of red Burron</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="icons flex flex-col gap-5 ">
                    <button className='cursor-pointer'>
                        <IoIosArrowUp className='size-5 text-gray-500'/>
                    </button>
                    <button className='cursor-pointer'>
                        <IoIosArrowDown className='size-5'/>
                    </button>

                </div>

                    



                </div>
            </div>
        </div>
    )
}


export default Testimonials