import Poker21 from '../../assets/images/poker_21.png'
import { motion } from "framer-motion"
import { ProjectsPresentation, Title } from "../index"

export const Projects = () => {
    const myProjects = [1, 2, 3, 4, 5]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
        >
            <Title title='Projects' />
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
                {myProjects.map((project, index) => (
                    <ProjectsPresentation
                        background={Poker21}
                        title="Poker 21"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque illum voluptas beatae quo non dolor, ipsam velit ullam, laborum corporis minima voluptatem consequuntur quaerat sint, tempora sed qui iste reiciendis!"
                        pages={myProjects.length}
                        index={index + 1}
                    />
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    )
}