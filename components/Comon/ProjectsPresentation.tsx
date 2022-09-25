import { motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"

interface ProjectsPresentationProps {
    background: StaticImageData
    title: string
    description: string
    pages?: number
    index?: number
}


export const ProjectsPresentation = ({ background, title, description, pages, index }: ProjectsPresentationProps) => {
    return (
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.div
                initial={{ opacity: 0, y: -300 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: false }}
            >
                <Image src={background} alt="ESGI poker 21" objectFit="cover" width={600} height={300} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 300 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: false }}
                className="space-y-10 px-0 md:px-10 max-w-6xl"
            >
                <h4 className="text-4xl font-semibold text-center">
                    <span className="underline decoration-[#F7AB0A]/50">Mon projet :</span>{" "}
                    {title}
                </h4>
                <p className="text-lg text-center md:text-left">
                    {description}
                </p>
                <p className="text-sm">Projet: {index}/{pages}</p>
            </motion.div>
        </div>
    )
}