import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Title } from '../index';
import { useTranslation } from 'react-i18next';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import orano from '../../assets/images/entreprises/orano.jpeg';
import framatome from '../../assets/images/entreprises/framatome_banner.jpg';
import camdriam from '../../assets/images/entreprises/candraim_banner.jpg';
import cognacqJay from '../../assets/images/entreprises/cognacqJay_banner.jpg';
import tf1 from '../../assets/images/entreprises/tf1_banner.jpg';
import Image from 'next/image';

export const Experiences = () => {
    const { t } = useTranslation();

    const myJobs = [
        { title: 'Orano', date: '2017 - 2018', description: t('WorkExperience_text_1'), image: orano, id: 1 },
        { title: 'Framatome', date: '2018 - 2019', description: t('WorkExperience_text_2'), image: framatome, id: 2 },
        { title: 'Candriam', date: '2019 - 2020', description: t('WorkExperience_text_3'), image: camdriam, id: 3 },
        { title: 'Cognacq-Jay', date: '2020 - 2021', description: t('WorkExperience_text_4'), image: cognacqJay, id: 4 },
        { title: 'TF1 - Groupe', date: '2021 - 2021', description: t('WorkExperience_text_5'), image: tf1, id: 5 },
    ];

    const [currentJobIndex, setCurrentJobIndex] = useState(myJobs[0].id);

    const nextJob = () => {
        if (currentJobIndex === myJobs.length) return setCurrentJobIndex(1)
        setCurrentJobIndex((prevIndex) => (prevIndex === myJobs.length ? 0 : prevIndex + 1));
    }

    const prevJob = () => {
        if (currentJobIndex === 1) return setCurrentJobIndex(myJobs.length)
        setCurrentJobIndex((prevIndex) => (prevIndex === 1 ? myJobs.length : prevIndex - 1));
    }

    const handleJobClick = (index: number) => {
        setCurrentJobIndex(index);
    };

    const displayedJobs = myJobs.filter((_, index) => index !== currentJobIndex - 1);

    return (
        <div className="h-screen flex relative overflow-hidden flex-col md:flex-row px-10 justify-evenly mx-auto items-center md:scrollbar md:scrollbar-track-gray-400/20 md:scrollbar-thumb-[#F7AB0A]/80 max-w-screen-full overflow-x-hidden">
            <Title title='Experiences' />
            <div className='relative w-full h-full'>
                <div className='w-full h-[75%] rounded-lg absolute left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-1/2 shadow-light-md overflow-hidden'>
                    <AnimatePresence>
                        <motion.div
                            key={myJobs[currentJobIndex - 1].id}
                            className='w-full h-full bg-cover rounded-md overflow-hidden'
                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, filter: 'blur(10px)' }}
                            transition={{ duration: 1, ease: 'linear', easings: 'easeInOut' }}
                        >
                            <Image
                                src={myJobs[currentJobIndex - 1].image}
                                alt={myJobs[currentJobIndex - 1].title}
                                layout='fill'
                                objectFit='cover'
                                className='h-full w-full object-cover'
                                style={{
                                    backdropFilter: 'blur(8px)',
                                    filter: 'brightness(0.5)'
                                }}
                            />
                        </motion.div>
                    </AnimatePresence>
                    <AnimatePresence>
                        <motion.div
                            className='absolute md:top-1/2 md:transform md:-translate-y-1/2 md:w-1/3 md:ml-16 top-1/4 left-2 pr-2 text-justify'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                        >
                            <h2 className='uppercase md:text-6xl font-extrabold text-xl'>{myJobs[currentJobIndex - 1].title}</h2>
                            <span className='md:text-lg text-sm w-full h-full'>{myJobs[currentJobIndex - 1].description}</span>
                        </motion.div>
                    </AnimatePresence>
                    <div className='md:absolute hidden md:flex bottom-5 transform space-x-5 w-full items-center justify-center'>
                        {displayedJobs
                            .map((job, index) => (
                                <AnimatePresence key={job.id}>
                                    <motion.div
                                        className='relative w-56 h-32 rounded-md shadow-light-md overflow-hidden group cursor-pointer'
                                        initial={{ opacity: 0, scale: 0.8, x: `${index * 25}%` }}
                                        animate={{ opacity: 1, scale: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, x: `${index * 25}%` }}
                                        transition={{ duration: 1, ease: 'easeInOut' }}
                                        onClick={() => handleJobClick(job.id)}
                                    >
                                        <Image
                                            src={job.image}
                                            alt={job.title}
                                            className='h-full w-full object-cover group-hover:scale-125 duration-700 cursor-pointer'
                                            layout='fill'
                                        />
                                        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                            <div>
                                                <h3 className='text-xl font-bold'>{job.title}</h3>
                                                <span className='text-sm'>{job.date}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            ))}
                    </div>
                    <div className='absolute md:hidden flex space-x-2 bottom-5 w-full justify-center'>
                        <div className='rounded-full bg-white/10 hover:bg-white/40 w-14 h-14 flex justify-center items-center cursor-pointer' onClick={prevJob}>
                            <BsChevronLeft size={25} />
                        </div>
                        <div className='rounded-full bg-white/10 hover:bg-white/40 w-14 h-14 flex justify-center items-center cursor-pointer' onClick={nextJob}>
                            <BsChevronRight size={25} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
