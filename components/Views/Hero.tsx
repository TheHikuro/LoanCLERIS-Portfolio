import Image from "next/image"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { BackgroundCircle } from "../index"
import loan from "../../assets/images/loan_bg.jpeg"
import { motion } from "framer-motion"
import Link from "next/link"
import { useTranslation } from "react-i18next"


export const Hero = () => {
    const [text, count] = useTypewriter({
        words: ["Bonjour je suis Loan CLERIS", "<CoffeeLover />", "Développeur Next.Js", "Développeur React"],
        loop: true,
        delaySpeed: 2000,
        typeSpeed: 50,
        deleteSpeed: 50,
    })
    const { t } = useTranslation()
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
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    Développeur Fullstacks
                </h2>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroBtn">{t('About')}</button>
                    </Link>
                    <Link href="#experiences">
                        <button className="heroBtn">{t('WorkExperience')}</button>
                    </Link>
                    <Link href="#educations">
                        <button className="heroBtn">{t('Education')}</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroBtn">{t('Skills')}</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroBtn">{t('Projects')}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}