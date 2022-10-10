import { motion } from "framer-motion"
import { Skill } from "../Comon/Skill"
import { Title } from "../Comon/Title"
import { FaReact, FaDocker, FaSymfony, FaVuejs, FaPython, FaGithub } from "react-icons/fa"
import { CgCircleci } from "react-icons/cg"
import { SiTailwindcss, SiTypescript } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

export const Skills = () => {
    const mySkills = [
        { icon: <FaReact className="skill-icon" />, directionLeft: true, pourcentage: 95, name: 'ReactJs' },
        { icon: <TbBrandNextjs className="skill-icon" />, directionLeft: false, pourcentage: 95, name: 'NextJs' },
        { icon: <FaSymfony className="skill-icon" />, directionLeft: true, pourcentage: 30, name: 'Symfony' },
        { icon: <FaVuejs className="skill-icon" />, directionLeft: false, pourcentage: 50, name: 'VueJs' },
        { icon: <FaPython className="skill-icon" />, directionLeft: true, pourcentage: 52, name: 'Python' },
        { icon: <FaGithub className="skill-icon" />, directionLeft: false, pourcentage: 95, name: 'Github' },
        { icon: <CgCircleci className="skill-icon" />, directionLeft: true, pourcentage: 50, name: 'CircleCi' },
        { icon: <SiTailwindcss className="skill-icon" />, directionLeft: false, pourcentage: 78, name: 'Tailwindcss' },
        { icon: <FaDocker className="skill-icon" />, directionLeft: true, pourcentage: 70, name: 'Docker' },
        { icon: <SiTypescript className="skill-icon" />, directionLeft: false, pourcentage: 70, name: 'TypeScript' },

    ]
    return (
        <motion.div
            className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-x-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 items-center mx-auto w-full"
        >
            <Title title='Skills' />
            <h3 className="absolute top-36 uppercase md:-mr-8 tracking-[3px] text-gray-500 text-sm">Passez la souris sur une compétence pour connaitre mon niveau</h3>
            <div className="grid grid-cols-4 md:gap-5 gap-12 md:w-1/2 md:h-1/2 items-center md:ml-24 w-5/6 mr-8">
                {mySkills.map((skill, index) => (
                    <Skill
                        key={index}
                        directionLeft={skill.directionLeft}
                        icon={skill.icon}
                        pourcentage={skill.pourcentage}
                        name={skill.name}
                    />
                ))}
            </div>
        </motion.div>
    )
}