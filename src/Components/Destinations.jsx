import Italy from '../assets/img/italy.png'
import UK from '../assets/img/england.jpg'
import Europe from '../assets/img/country.png'
import icon from '../assets/img/Duration icon.png'
import Decore from '../assets/img/Decore 2.png'



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
            <h1 className="text-lg text-gray-700 font-semibold mb-3">TOP SELLING</h1>
            <h2 className="text-[#181E4B] text-2xl sm:text-4xl lg:text-5xl font-serif font-bold">Top Destinations</h2>
            <div className="relative grid sm:grid-cols-3 gap-10 lg:gap-0 items-center justify-center py-20 text-gray-700 font-semibold">
                <img src={Decore} alt="" className='absolute right-0 -z-10 hidden md:block md:translate-x-15 xl:translate-0 2xl:-translate-x-10' />
                {
                    Boxes.map((Box, index) => (
                        <div key={index} className='max-w-80 mx-auto rounded-2xl overflow-hidden shadow-md pb-5'>
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
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Destinations