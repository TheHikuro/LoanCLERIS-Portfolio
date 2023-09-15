import { useTranslation } from 'react-i18next'
import { CardEducations, Title } from '../index'
import ReactLogo from '../../assets/images/logoTechno/React.png'

export const Educations = () => {
    const { t } = useTranslation()
    const test = "https://images.unsplash.com/photo-1591116446368-2078ad1c0fea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80";
    const myEducations = [
        { title: 'ESGI', date: 'Master | 2019 - 2023', description: t('Education_text_1'), image: test, techno: [ReactLogo] },
        { title: 'EFFICOM', date: '2017 - 2019', description: t('Education_text_2'), image: test, techno: [ReactLogo] },
        { title: 'AFORP', date: '2014 - 2017', description: t('Education_text_3'), image: test, techno: [ReactLogo] },
        { title: 'FERRANDI', date: '2014 - 2017', description: t('Education_text_4'), image: test, techno: [ReactLogo] },
    ]
    return (
        <div className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center md:scrollbar md:scrollbar-track-gray-400/20 md:scrollbar-thumb-[#F7AB0A]/80">
            <Title title='Educations' />
            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory md:scrollbar md:scrollbar-track-gray-400/20 md:scrollbar-thumb-[#F7AB0A]/80'>
                {myEducations.map((school, index) => (
                    <CardEducations key={index} jobs={school} />
                ))}
            </div>
        </div>
    )
}