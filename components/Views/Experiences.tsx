import { AnimatePresence, motion } from 'framer-motion'
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
import { Chrono } from 'react-chrono'

export const Experiences = () => {
    const { t } = useTranslation()
    const myJobs = [
        { title: 'Orano', date: '2017 - 2018', description: t('WorkExperience_text_1'), image: Orano, techno: [LogoReact, Next], id: 1 },
        { title: 'Framatome', date: '2018 - 2019', description: t('WorkExperience_text_2'), image: Framatome, techno: [LogoReact, Next], id: 2 },
        { title: 'Camdriam', date: '2019 - 2020', description: t('WorkExperience_text_3'), image: Camdriam, techno: [LogoReact], id: 3 },
        { title: 'Cognacq-Jay', date: '2020 - 2021', description: t('WorkExperience_text_4'), image: Cognacq, techno: [LogoReact, Next], id: 4 },
        { title: 'TF1 - Groupe', date: '2021 - 2021', description: t('WorkExperience_text_5'), image: TF1, techno: [LogoReact, Next], id: 5 },
    ]
    const [screenSize, setScreenSize] = React.useState(
        typeof window === undefined ? window.innerWidth : 0
    )

    React.useEffect(() => {
        if (window.innerWidth !== screenSize) {
            setScreenSize(window.innerWidth)
        } else {
            return
        }
    }, [screenSize])

    return (
        <div className="h-screen relative flex flex-col md:flex-row max-w-full px-10 justify-evenly mx-auto items-center md:scrollbar md:scrollbar-track-gray-400/20">
            <Title title='Expériences' />
            <div className='md:w-11/12 w-full flex mt-32 mx-auto h-3/4'>
                <Chrono
                    mode={screenSize > 1000 ? `VERTICAL_ALTERNATING` : `VERTICAL`}
                    hideControls
                    useReadMore
                    scrollable
                    theme={{
                        primary: '#F7AB0A',
                        secondary: 'white',
                        cardBgColor: '#292929',
                        cardForeColor: '#F7AB0A',
                        titleColor: 'black',
                    }}
                >
                    {myJobs.map((job) => (
                        <div className='flex mx-auto py-2 flex-col' key={job.id}>
                            <div className='flex lg:flex-row flex-col items-start justify-between'>
                                <div className='md:w-32 md:h-32 w-16 h-16'>
                                    <Image src={job.image} layout='responsive' className='rounded-md' />
                                </div>
                                <span className='text-2xl font-bold tracking-wider'>{job.title}</span>
                                <span className='text-sm italic'>{job.date}</span>
                            </div>
                            <div className='mt-5 md:text-justify'>
                                <span className='text-sm'>{job.description}</span>
                            </div>
                        </div>
                    ))}
                </Chrono>
            </div>
        </div>
    )
}
