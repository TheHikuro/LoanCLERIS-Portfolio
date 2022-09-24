import { motion } from "framer-motion"
import { Skill } from "../Comon/Skill"
import { Title } from "../Comon/Title"
import { FaReact, FaDocker, FaSymfony, FaVuejs, FaPython, FaGithub } from "react-icons/fa"
import { DiGit, DiCss3 } from "react-icons/di"

export const Skills = () => {
    const mySkills = [
        { icon: <FaReact className="skill-icon" />, directionLeft: true, pourcentage: 95 },
        { icon: <FaDocker className="skill-icon" />, directionLeft: false, pourcentage: 70 },
        { icon: <FaSymfony className="skill-icon" />, directionLeft: true, pourcentage: 30 },
        { icon: <FaVuejs className="skill-icon" />, directionLeft: false, pourcentage: 50 },
        { icon: <FaPython className="skill-icon" />, directionLeft: true, pourcentage: 52 },
        { icon: <FaGithub className="skill-icon" />, directionLeft: false, pourcentage: 95 },
        { icon: <DiGit className="skill-icon" />, directionLeft: true, pourcentage: 95 },
        { icon: <DiCss3 className="skill-icon" />, directionLeft: false, pourcentage: 78 },

    ]
    return (
        <motion.div
            className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-x-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 items-center mx-auto"
        >
            <Title title='Skills' />
            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Passez la souris sur une compétence pour connaitre mon niveau</h3>
            <div className="grid grid-cols-4 md:gap-5 gap-12 md:w-1/2 md:h-1/2 items-center md:ml-16 w-5/6 mr-8 sm:grid-cols-2">
                {mySkills.map((skill, index) => (
                    <Skill key={index} directionLeft={skill.directionLeft} icon={skill.icon} pourcentage={skill.pourcentage} />
                ))}
            </div>
        </motion.div>
    )
}