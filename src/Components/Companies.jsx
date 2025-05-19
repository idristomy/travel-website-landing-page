import Axon from '../assets/img/axon.png'
import Jetstar from '../assets/img/jetstar.png'
import expedia from '../assets/img/expedia.png'
import qantas from '../assets/img/qantas.png'
import alitalia from '../assets/img/alitalia.png'


const Companies = () => {

    const companies = [

        Axon,
        Jetstar,
        expedia,
        qantas,
        alitalia
       
    ]
    
    
    return(

        <div className=" container mx-auto pt-20 px-4">
            
                <div className="flex items-center justify-center gap-10 w-full">
                {
                    companies.map((company, index) => (
                        <img src={company} key={index} alt="" className='lg:w-40 w-10 opacity-50 hover:opacity-100 cursor-pointer'/>
                    ))
                }
                </div>
        </div>
    )
}

export default Companies