import Image from "next/image"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { BackgroundCircle } from "./index"
import loan from "../assets/images/loan_bg.jpeg"
import { motion } from "framer-motion"

export const Hero = () => {
    const [text, count] = useTypewriter({
        words: ["Bonjour je suis Loan CLERIS", "console.log('J'adore le café')", "Développeur Fullstack"],
        loop: true,
        delaySpeed: 2000,
        typeSpeed: 50,
        deleteSpeed: 50,
    })
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircle />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5, delay: 2.5 }}
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
            >
                <Image src={loan} alt="Loan profil picture" className="rounded-full" />
            </motion.div>
            <div className="">
                <h1>
                    <span>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
            </div>
        </div>
    )
}