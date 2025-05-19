import Traveller from "../assets/img/Traveller 1.png"
import { IoIosPlayCircle } from "react-icons/io";
import Decor from '../assets/img/Decore.png'
import AirPlane from '../assets/img/AirPlane.png'

const Hero = () => {

    return(
        <div className="relative" id="home">
            <div className="absolute w-50 h-50 rounded-full bg-amber-500/30 blur-3xl -translate-40 top-40 hidden md:block"></div>
            <img src={Decor} className='absolute -z-1 top-0 right-0 h-150 ' alt="" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-20 container mx-auto px-4 lg:px-20">
                <div className="flex flex-col justify-center my-15 text-center items-center lg:items-start lg:text-start gap-5">
                    <p className="text-orange-700 text-lg font-medium">Best Destinations around the world</p>
                    <p className="text-4xl md:text-6xl lg:text-5xl xl:text-7xl font-serif font-bold text-[#181E4B]">Travel, <span className="border-b-5 border-amber-500 border-dashed">enjoy</span> and live a new and full life</p>
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
                </div>
                <div className="hidden lg:block lg:relative">
                    <img  src={Traveller}/>
                    <img src={AirPlane} alt="" className="absolute top-10"/>
                    <img src={AirPlane} alt="" className="absolute top-10 -right-5 -z-1"/>
                </div>
            </div>
        </div>
    )
}

export default Hero