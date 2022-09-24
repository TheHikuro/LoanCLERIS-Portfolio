import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import loan from '../assets/images/loan_bg.jpg'
import loanMobile from '../assets/images/loan_carre.jpeg'

export const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-24 -mr-8 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="about-image-container mt-36 md:mt-0"
            >
                <Image
                    src={loan}
                    className="about-image"
                    objectFit='cover'
                    layout='responsive'
                />
            </motion.div>
            <motion.div
                initial={{ x: 200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className='space-y-5 px-0 md:px-10 mt-40 md:mt-0'
            >
                <h4 className='text-3xl md:text-4xl font-semibold'>
                    Voici un petit{" "}
                    <span className='underline decoration-[#F7AB0A]/50'>résumé</span>{" "}
                    à propos de moi
                </h4>
                <p className='text-base text-justify'>
                    Je suis actuellement en master 2 au sein de l'ESGI à Paris. Je suis en alternance chez Orano en tant que développeur fullstacks depuis maintenant 3 ans. J'ai eu la chance de travailler sur des projets variés et de découvrir de nouvelles technologies. Je suis passionné par le développement web et mobile. J'aime apprendre de nouvelles choses et découvrir de nouvelles technologies.
                </p>
            </motion.div>
        </motion.div>
    )
}