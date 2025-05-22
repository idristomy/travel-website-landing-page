import Axon from '../assets/img/axon.png'
import Jetstar from '../assets/img/jetstar.png'
import expedia from '../assets/img/expedia.png'
import qantas from '../assets/img/qantas.png'
import alitalia from '../assets/img/alitalia.png'
import { motion } from 'motion/react'

const CompaniesVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    show: (i) =>({
        y: 0,
        opacity: 0.5,
        transition: {
            duraion: 0.2,
            delay: i * 0.2,
            ease : "easeInOut"
        }

    }),
    Hover:{
        scale: 1.2,
        opacity: 1,
        transition: {
            duration: 0.1
        }
    }
}


const Companies = () => {

    const companies = [

        Axon,
        Jetstar,
        expedia,
        qantas,
        alitalia
       
    ]
    
    
    return(

        <div className=" container mx-auto pt-10 lg:pt-20 px-4 ">
            
                <div className="flex items-center justify-between w-full  ">
                {
                    companies.map((company, index) => (
                        <motion.img src={company} key={index} alt="" className='lg:w-40 w-15 cursor-pointer '
                            variants={CompaniesVariants}
                            initial= "hidden"
                            whileInView="show"
                            custom={index}
                            viewport={{
                                once: true,
                                amount: 0.3
                            }}
                            whileHover='Hover'
                        />
                    ))
                }
                </div>
        </div>
    )
}

export default Companies