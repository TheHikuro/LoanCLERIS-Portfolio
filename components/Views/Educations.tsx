import { useTranslation } from 'react-i18next'
import { CardExperiences, Title } from '../index'
import TF1 from '../../assets/images/logoEntreprise/TF1-logo.png'
import ReactLogo from '../../assets/images/logoTechno/React.png'

export const Educations = () => {
    const { t } = useTranslation()
    const myEducations = [
        { title: 'ESGI', date: 'Master | 2019 - 2023', description: t('Education_text_1'), image: TF1, techno: [ReactLogo] },
        { title: 'EFFICOM', date: '2017 - 2019', description: t('Education_text_2'), image: TF1, techno: [ReactLogo] },
        { title: 'AFORP', date: '2014 - 2017', description: t('Education_text_3'), image: TF1, techno: [ReactLogo] },
        { title: 'FERRANDI', date: '2014 - 2017', description: t('Education_text_4'), image: TF1, techno: [ReactLogo] },
    ]
    return (
        <div className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center md:scrollbar md:scrollbar-track-gray-400/20 md:scrollbar-thumb-[#F7AB0A]/80">
            <Title title='Educations' />
            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory md:scrollbar md:scrollbar-track-gray-400/20 md:scrollbar-thumb-[#F7AB0A]/80'>
                {myEducations.map((school, index) => (
                    <CardExperiences key={index} jobs={school} />
                ))}
            </div>
        </div>
    )
}