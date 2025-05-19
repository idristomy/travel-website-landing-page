import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import PlayStore from '../assets/img/Play Store.png'
import GooglePlay from '../assets/img/Google Play.png'


const Footer = () => {
    
    const footerLinks = {
    
        Company:[
                {
                    name:"About",
                    href: '/'
                },
                {
                    name:"Careers",
                    href: '/'
                },
                {
                    name:"Mobile",
                    href: '/'
                }
            ],
        
        Conact: [
            {
                name: "Help/FAQ",
                href: "/"
            },
            {
    
                name: "Press",
                href: "/"
            },
            {
                name: "Affilates",
                href: "/"   
            }
        ],
        
            More : [
        
                {
                    name: "Airlinefees",
                    href:"/"
                },
                {
                    name:"Airline",
                    href: "/"
                },
                {
                    name:"Low fare tips",
                    href: "/"   
        
                }
            ]
        }
        
        
                
        
                
            
    

    return(
        
        <footer className="relative overflow-hidden">

            <div className="absolute w-50 h-50 rounded-full bg-amber-500/40 blur-3xl right-0 bottom-0 translate-20"></div>
            <div className="container mx-auto py-10 px-4 lg:px-0">

                <div className="grid grid-cols-1  xl:grid-cols-10 gap-10">

                    {/* Logo */}

                    <div className="flex flex-col gap-5  xl:col-span-2">
                        <h1 className="text-4xl font-semibold ">Jadoo.</h1>
                        <p className="text-sm text-gray-500 font-semibold">Book your trip on minute, get full Control for much longer.</p>
                    </div>

                    {/* Footer Links */}

                    <div className="xl:col-span-6 xl:mx-auto">

                        <div className="grid grid-cols-3  lg:gap-30">
                            {
                                Object.entries(footerLinks).map(([title, links], index) =>(
                                    <div key={title} className="flex flex-col gap-5 ">
                                        <h5 className="font-bold text-lg">{title}</h5>
                                        <ul>
                                            {
                                                links.map((link, index) =>(
                                                    <li key={index}>
                                                        <a href={link.href} className="text-sm text-gray-500 font-semibold">{link.name}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* Social Media Links */}

                    <div className="xl:col-span-2">
                        <div className="flex items-center gap-5">
                            <TiSocialFacebook className="p-2 size-10  rounded-full shadow-md"/>
                            <FaInstagram className="p-2 size-10 rounded-full shadow-md"/> 
                            <FaTwitter className="p-2 size-10 rounded-full shadow-md"/>
                        </div>
                        <h5 className="font-bold text-gray-700 text-lg pt-3 pl-3">Discover our app</h5>
                        <div className="flex gap-2 pt-5">
                            <img src={PlayStore} alt="" />
                            <img src={GooglePlay} alt="" />
                        </div>
                    </div>

                </div>
                <div className="">

                    <div className="mt-5 pt-5 flex justify-center items-center border-t border-gray-300">
                        <p>All right reserved@jadoo.co </p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer