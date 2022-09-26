import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { CardProps } from '../../ts/card'

export const CardExperiences = ({ jobs }: CardProps) => {
    const [isOpen, setIsOpen] = React.useState({
        open: false,
        id: 0
    })
    const handleOpen = (cardId: any) => {
        setIsOpen({
            open: !isOpen.open,
            id: cardId
        })
    }
    return (
        <motion.div
            onClick={() => handleOpen(jobs.id)}
            initial={{ opacity: 0, y: -300 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
            exit={{ opacity: 0, y: -300 }}
            className="flex flex-col justify-center items-center space-x-8 space-y-10 bg-[#292929] rounded-2xl cursor-pointer"
        >
            <div className='flex flex-col justify-center items-center space-y-8 p-5'>
                <div className="rounded-full flex w-32 h-32">
                    <Image src={jobs.image} alt="" className="rounded-xl" objectFit='fill' />
                </div>
                <span className="uppercase text-md font-bold items-center flex justify-center">
                    {jobs.title}
                </span>
                {
                    isOpen.open ?
                        <span className="text-sm text-white text-justify w-64">{jobs.description}</span>
                        :
                        null
                }
            </div>
        </motion.div >
    )
}