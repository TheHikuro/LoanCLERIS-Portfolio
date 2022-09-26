import { motion } from 'framer-motion'
import { Title } from '../index'
import TF1 from '../../assets/images/logoEntreprise/TF1-logo.png'
import Cognacq from '../../assets/images/logoEntreprise/cognacq-jay-logo.png'
import Camdriam from '../../assets/images/logoEntreprise/Camdriam-logo.png'
import Framatome from '../../assets/images/logoEntreprise/Framatome-logo.png'
import Orano from '../../assets/images/logoEntreprise/Orano-logo.png'
import LogoReact from '../../assets/images/logoTechno/React.png'
import Next from '../../assets/images/logoTechno/next.png'
import { useTranslation } from 'react-i18next'
import React from 'react'
import Image from 'next/image'

export const Experiences = () => {
    const { t } = useTranslation()
    const myJobs = [
        { title: 'Orano', date: '2017 - 2018', description: t('WorkExperience_text_1'), image: Orano, techno: [LogoReact, Next], id: 1 },
        { title: 'Framatome', date: '2018 - 2019', description: t('WorkExperience_text_2'), image: Framatome, techno: [LogoReact, Next], id: 2 },
        { title: 'Camdriam', date: '2019 - 2020', description: t('WorkExperience_text_3'), image: Camdriam, techno: [LogoReact], id: 3 },
        { title: 'Cognacq-Jay', date: '2020 - 2021', description: t('WorkExperience_text_4'), image: Cognacq, techno: [LogoReact, Next], id: 4 },
        { title: 'TF1 - Groupe', date: '2021 - 2021', description: t('WorkExperience_text_5'), image: TF1, techno: [LogoReact, Next], id: 5 },
    ]
    const [currentJob, setCurrentJob] = React.useState(1)
    return (
        <div className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center md:scrollbar md:scrollbar-track-gray-400/20">
            <Title title='Expériences' />
            <div className='w-full flex mt-32 mx-auto h-3/4'>
                <div className="w-1/2 flex justify-end absolute top-[20 %] bg-[#F7AB0A]/10 -left-10 md:-left-20 h-[680px] md:-skew-x-12">
                    <div className='flex flex-col text-end mr-10 space-y-10 justify-center' >
                        {
                            myJobs.map((job, index) => (
                                <div className='flex justify-end items-center w-full'>
                                    <span onClick={() => setCurrentJob(job.id)} className={`cursor-pointer ${currentJob === job.id ? 'font-bold text-xl underline' : ''} transition-all duration-300`}>
                                        {job.title}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='w-1/2 h-3/4 flex justify-center items-center right-0 absolute'>
                    <div className='flex flex-col w-3/4 justify-center items-center'>
                        <div className='w-32 h-32'>
                            <Image src={myJobs[currentJob - 1].image} alt="logo entreprise" />
                        </div>
                        <span>{myJobs[currentJob - 1].title}</span>
                        <span>{myJobs[currentJob - 1].date}</span>
                        <span>{myJobs[currentJob - 1].description}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}