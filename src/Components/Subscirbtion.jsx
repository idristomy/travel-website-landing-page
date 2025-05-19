import icon from '../assets/img/Subscribe icon.png'
import Circles from '../assets/img/Circles.png'
import Stars from '../assets/img/Stars.png'

const Subscribtion = () => {

    return (
        <div className="relative overflow-hidden">
            <img src={Stars} alt="" className='absolute bottom-0 right-5 -z-10'/>
            <div className="container mx-auto flex items-center justify-center py-20 px-4">
                <div className="relative bg-fuchsia-100  text-center w-full py-10 md:py-20 rounded-tl-[80px] rounded-b-xl -z-10">
                    <img src={Circles} alt="" className='absolute bottom-0 translate-x-10 w-50 lg:w-70 -z-1 opacity-30'/>
                    <img src={Circles} alt="" className='absolute top-8 right-0 rotate-270 translate-x-7 w-40 md:w-60 -z-1 opacity-30'/>
                    <img src={icon} alt="" className='absolute w-10 lg:w-20 top-0 right-0 translate-x-4/12 -translate-y-4/12'/>
                    <h1 className="text-xl lg:text-3xl md:text-2xl font-semibold text-gray-500 mx-auto lg:w-4/5">Subscribe to get information,latest news and other interesting offers about Jadoo</h1>
                    <div className="flex items-center justify-center gap-5 pt-10 md:pt-20 z-10">
                        <form >
                            
                            <input type="email" className="bg-white p-3  lg:w-100 rounded-lg border-none" placeholder="Your Email"  />
                        </form>
                        <button className="bg-orange-500/90 text-white font-semibold py-3 px-5 rounded-xl cursor-pointer">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default Subscribtion