import { motion, AnimatePresence } from "framer-motion"

interface SkillProps {
    directionLeft: boolean;
    icon: JSX.Element
    pourcentage: number
}
export const Skill = ({ directionLeft, icon, pourcentage }: SkillProps) => {
    return (
        <div className="group relative flex cursor-pointer h-10 w-10">
            <AnimatePresence>
                <motion.div
                    initial={{ x: directionLeft ? -200 : 200 }}
                    transition={{ duration: 1 }}
                    animate={{ x: 0 }}
                >
                    {icon}
                </motion.div>
            </AnimatePresence>
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0 rounded-full">
                <div className="flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-black opacity-100">{pourcentage}%</p>
                </div>
            </div>
        </div>
    )
}