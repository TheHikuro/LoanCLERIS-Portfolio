import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { CardProps } from '../../ts/card'

export const CardEducations = ({ jobs }: CardProps) => {
    return (
        <article className='flex items-center flex-col rounded-lg space-y-7 flex-shrink-0 mt-32 w-[320px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 justify-start'>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover"
            >
                <Image src={jobs.image} objectFit='cover' layout='responsive' className='rounded-lg object-cover object-center' />
            </motion.div>
            <div
                className='px-0 md:px-10'
            >
                <h4 className='text-4xl font-bold'>{jobs.title}</h4>
                <p className='italic uppercase text-sm tracking-wide text-gray-500'>{jobs.date}</p>
                <div className='flex space-x-2 my-2'>
                    {jobs.techno.map((tech, index) => (
                        <Image key={index} src={tech} width={30} height={30} />
                    ))}
                </div>
                <div className='text-justify text-sm'>
                    {jobs.description}
                </div>
            </div>
        </article>
    )
}