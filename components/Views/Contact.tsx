import Link from "next/link"
import { FaPhoneAlt } from "react-icons/fa"
import { MdAlternateEmail, MdOutlineLocationOn } from "react-icons/md"
import { Title } from "../index"
import { motion } from "framer-motion"

export const Contact = () => {
    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-x-7xl px-10 justify-evenly mx-auto items-center">
            <Title title="Contact" />
            <div className="flex flex-col space-y-10 mt-20">
                <h4 className="text-3xl font-semibold text-center">
                    J'ai ce qu'il vous faut. <br />
                    <span className="decoration-[#F7AB0A]/50 underline">Parlons en</span>
                </h4>
                <div className="flex md:flex-row flex-col justify-evenly md:space-x-36 mx-2 items-start">
                    <motion.div
                        initial={{ x: -500, opacity: 0, scale: 0.5 }}
                        whileInView={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        className="space-y-5 flex justify-start flex-col items-start mb-10 md:mb-0"
                    >
                        <div className="flex items-center space-x-5 justify-center">
                            <FaPhoneAlt className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                            <p className="text-xl">+33 6 62 90 05 19</p>
                        </div>
                        <div className="flex items-center space-x-5 justify-center">
                            <MdAlternateEmail className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                            <Link href="mailto:contact@loan-cleris.com">
                                <p className="text-xl cursor-pointer hover:underline decoration-[#F7AB0A]/50">contact@loan-cleris.com</p>
                            </Link>
                        </div>
                        <div className="flex items-center space-x-5 justify-center">
                            <MdOutlineLocationOn className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                            <p className="text-xl">Paris 🇫🇷 - Belgique 🇧🇪</p>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ x: 500, opacity: 0, scale: 0.5 }}
                        whileInView={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col space-y-2 w-fit mx-auto"
                    >
                        <div className="flex space-x-2">
                            <input type="text" className="contactInput" placeholder="Prénom" />
                            <input type="text" className="contactInput" placeholder="Nom" />
                        </div>

                        <input type="text" className="contactInput" placeholder="Email" />
                        <input type="text" className="contactInput" placeholder="Sujet" />

                        <textarea className="contactInput" placeholder="Un projet en tête ? Parlons-en ;)"></textarea>

                        <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">Envoyer</button>
                    </motion.form>
                </div>
            </div>
        </div>
    )
}