import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import loan from '../../assets/images/loan_bg.jpg'
import { Title } from '../index'
import { useTranslation } from 'react-i18next'

export const About = () => {
    const { t } = useTranslation()
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
            <Title title={t('About')} />
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
                    {t('AboutPage_text_1')}{" "}
                    <span className='underline decoration-[#F7AB0A]/50'>{t('AboutPage_text_2')}</span>{" "}
                    {t('AboutPage_text_3')}
                </h4>
                <p className='text-base text-justify'>
                    {t('AboutPage_text_4')}
                </p>
            </motion.div>
        </motion.div>
    )
}