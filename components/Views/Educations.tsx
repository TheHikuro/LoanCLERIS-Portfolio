import { motion } from 'framer-motion'
import { CardExperiences, Title } from '../index'
import TF1 from '../../assets/images/logoEntreprise/TF1-logo.png'
import ReactLogo from '../../assets/images/logoTechno/React.png'

export const Educations = () => {
    const myEducations = [
        { title: 'ESGI', date: 'Master | 2019 - 2023', description: "Actuellement au sein de l'ESGI, j'approfondis mes connaissances dans les languages que je pourrai utiliser au cours de mes prochaines expériences professionnel.", image: TF1, techno: [ReactLogo] },
        { title: 'EFFICOM', date: '2017 - 2019', description: "Malheureusement je ne l'ai pas eu du premier coup donc après cela je suis allé à Efficom pour le repasser. Cette prise de recul m'a permis de revoir mes points faibles. A la fin du mois de juillet, je l'ai finalement passé et je vais faire une autre année à Efficom pour me spécialiser dans le développement Full Stack.", image: TF1, techno: [ReactLogo] },
        { title: 'AFORP', date: '2014 - 2017', description: "L'un de mes autres passe-temps est de créer des sites web. Aussi, lorsque je ne me suis plus vu cuisiner dans dix ans, j'ai décidé de changer mes perspectives de carrière et j'ai choisi le développement web. Malheureusement, je manquais de connaissances par rapport à d'autres talents sur le marché, et j'ai donc dû travailler encore plus dur pour combler ces déficits. Après deux ans de formation et de travail acharné, j'ai pu gérer des projets en équipe, développer des applications en C# (ModelViewController) et acquérir toutes les capacités et compétences pour obtenir mon diplôme.", image: TF1, techno: [ReactLogo] },
        { title: 'FERRANDI', date: '2014 - 2017', description: "Trois années d'expérience académique et professionnelle dans le monde de la cuisine m'ont appris la discipline, l'assiduité et la créativité. Pendant cette période, j'ai également apprécié de travailler en équipe pour obtenir un résultat final encore meilleur. Travailler avec d'autres personnes m'a fait réaliser que je suis douée pour écouter et faire partie d'une équipe afin d'obtenir un résultat encore meilleur que seul.", image: TF1, techno: [ReactLogo] },
    ]
    return (
        <div className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            <Title title='Educations' />
            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {myEducations.map((school, index) => (
                    <CardExperiences key={index} jobs={school} />
                ))}
            </div>
        </div>
    )
}