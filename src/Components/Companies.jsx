import Axon from '../assets/img/axon.png'
import Jetstar from '../assets/img/jetstar.png'
import expedia from '../assets/img/expedia.png'
import qantas from '../assets/img/qantas.png'
import alitalia from '../assets/img/alitalia.png'
import { motion } from 'motion/react'

const logoVariants = {
    hidden: { opacity: 0, y: 30 },
    show: (i) => ({
        opacity: 0.6,
        y: 0,
        transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" }
    }),
    hover: { scale: 1.1, opacity: 1, transition: { duration: 0.2 } }
}

const Companies = () => {
    const companies = [Axon, Jetstar, expedia, qantas, alitalia]

    return (
        <div className="container mx-auto pt-10 lg:pt-20 px-4">
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8">
                {companies.map((company, index) => (
                    <motion.img
                        src={company}
                        key={index}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="w-20 lg:w-36 cursor-pointer"
                        variants={logoVariants}
                        initial="hidden"
                        whileInView="show"
                        custom={index}
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover="hover"
                    />
                ))}
            </div>
        </div>
    )
}

export default Companies
