import Destination from '../assets/img/Destination icon.png'
import Payment from '../assets/img/Payment icon.png'
import Reach from '../assets/img/Reach icon.png'
import Greece from '../assets/img/cover.jpg'
import sub from '../assets/img/Subscribe icon.png'
import Istanbul from '../assets/img/turkey.png'

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

      <div className="grid lg:grid-cols-2 lg:gap-20 container mx-auto  md:pt-30 px-4 overflow-x-hidden sm:overflow-x-visible" id='book'>
        <div>
          <h1 className="text-lg text-gray-700 font-semibold mb-3">Easy and Fast</h1>
          {/* Changed w-130 to max-w-xl for responsive max width */}
          <h2 className="text-[#181E4B] text-2xl sm:text-4xl lg:text-5xl font-serif font-bold max-w-xl">
            Book Your Next Trip In 3 Easy Steps
          </h2>
          {Boxes.map((box, index) => (
            <div key={index} className="flex items-center gap-5 my-10">
              <img src={box.icon} alt="" />
              <div>
                <h3 className="text-gray-700 font-semibold">{box.title}</h3>
                <p className="text-sm">{box.desc}</p>
              </div>
            </div>
          ))}
        </div>


        <div className="relative my-auto mx-auto py-10 ">

          <div className="absolute w-50 h-50 bg-blue-600/70 rounded-full blur-3xl -z-99 top-0 right-5 "></div>
          <div className="p-5 shadow-gray-400/80 shadow-md max-w-max rounded-3xl bg-white">
            <img src={Greece} alt="" className="rounded-2xl" />
            <h3 className="py-3 text-lg font-semibold">Trip To Greece</h3>
            <p className="text-gray-500 font-medium">14-29 June | by Robbing jone</p>
            <div className="flex gap-3 py-3">
              <img src={sub} alt="" className="w-7" />
              <img src={sub} alt="" className="w-7" />
              <img src={sub} alt="" className="w-7" />
            </div>
            <p className="text-gray-500 font-medium">24 People going</p>
          </div>
          
          {/* Changed fixed large negative right positions to responsive values */}
          <div className="absolute py-3 pl-3 pr-9 rounded-2xl shadow-gray-400/80 shadow-md z-20 bg-white bottom-0 right-0 translate-x-15 translate-y-5 sm:translate-y-10 md:-translate-y-20 md:translate-x-30">
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
                <div className="absolute top-0 left-0 h-2 bg-indigo-700 rounded-md w-15"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
)

}

export default Book