import { motion } from 'framer-motion'
import { CardExperiences, Title } from '../index'
import TF1 from '../../assets/images/logoEntreprise/TF1-logo.png'
import Cognacq from '../../assets/images/logoEntreprise/cognacq-jay-logo.png'
import Camdriam from '../../assets/images/logoEntreprise/Camdriam-logo.png'
import Framatome from '../../assets/images/logoEntreprise/Framatome-logo.png'
import Orano from '../../assets/images/logoEntreprise/Orano-logo.png'
import React from '../../assets/images/logoTechno/React.png'
import Next from '../../assets/images/logoTechno/next.png'
import { useTranslation } from 'react-i18next'

export const Experiences = () => {
    const { t } = useTranslation()
    const myJobs = [
        { title: 'Orano', date: '2017 - 2018', description: t('WorkExperience_text_1'), image: Orano, techno: [React, Next] },
        { title: 'Framatome', date: '2018 - 2019', description: t('WorkExperience_text_2'), image: Framatome, techno: [React, Next] },
        { title: 'Camdriam', date: '2019 - 2020', description: t('WorkExperience_text_3'), image: Camdriam, techno: [React] },
        { title: 'Cognacq-Jay', date: '2020 - 2021', description: t('WorkExperience_text_4'), image: Cognacq, techno: [React, Next] },
        { title: 'TF1 - Groupe', date: '2021 - 2021', description: t('WorkExperience_text_5'), image: TF1, techno: [React, Next] },
    ]
    return (
        <div className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center md:scrollbar md:scrollbar-track-gray-400/20 md:scrollbar-thumb-[#F7AB0A]/80">
            <Title title='Expériences' />
            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory md:scrollbar md:scrollbar-track-gray-400/20 md:scrollbar-thumb-[#F7AB0A]/80'>
                {myJobs.map((job, index) => (
                    <CardExperiences key={index} jobs={job} />
                ))}
            </div>
        </div>
    )
}