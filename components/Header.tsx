import { motion } from "framer-motion"
import { Fragment } from "react"
import { SocialIcon } from 'react-social-icons'

export const Header = () => {
    const icons = [
        "https://www.linkedin.com/in/loan-cleris-8275b5136/",
        "https://www.facebook.com/loan.cleris/",
        "https://www.instagram.com/loan_cleris/",
        "https://open.spotify.com/user/kaomagni"
    ]
    return (
        <Fragment>
            <header className="sticky top-0 p-5 flex flex-items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
                <motion.div
                    className="flex flex-row items-center"
                    initial={{ x: -500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    {icons.map((icon, index) => (
                        <SocialIcon
                            key={index}
                            url={icon}
                            fgColor="gray"
                            bgColor="transparent"
                        />
                    ))}
                </motion.div>
                <motion.div
                    className="flex items-center text-gray-300 cursor-pointer"
                    initial={{ x: 500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <SocialIcon
                        network="email"
                        fgColor="gray"
                        bgColor="transparent"
                    />
                    <span className="uppercase hidden md:inline-flex text-sm text-gray-400">Prendre contact !</span>
                </motion.div>
            </header>
        </Fragment>
    )
}