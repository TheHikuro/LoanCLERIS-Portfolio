import Poker21 from '../../assets/images/poker_21.png'
import { motion } from "framer-motion"
import { ProjectsPresentation, Title } from "../index"

export const Projects = () => {
    const myProjects = [
        { title: 'Poker 21', description: 'Jeu de poker en ligne', image: Poker21, link: 'https://esgi-poker21.netlify.app/' },
        { title: 'Trombinoscoop', description: 'Application de gestion de classe', image: Poker21, link: 'https://dev-worker.cf/Connexion' },
        { title: 'ESGI-Associations', description: 'Application de gestion d\'associations', image: Poker21, link: 'https://esgi-associations.netlify.app/' },
        { title: 'ESGI-Network', description: 'Application de gestion d\'événements', image: Poker21, link: 'https://esgi-events.netlify.app/' },
        { title: 'Portfolio FormAnglais', description: 'Portfolio pour Alexandra Roque, professeur d\'Anglais à domicile ou en entreprise.', image: Poker21, link: 'https://esgi-network.netlify.app/' },
    ]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
        >
            <Title title='Projects' />
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 md:scrollbar md:scrollbar-track-gray-400/20 md:scrollbar-thumb-[#F7AB0A]/80">
                {myProjects.map((project, index) => (
                    <ProjectsPresentation
                        background={project.image}
                        title={project.title}
                        description={project.description}
                        pages={myProjects.length}
                        index={index + 1}
                        redirectLink={project.link}
                    />
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    )
}