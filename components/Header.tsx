import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"

export const Header = () => {
    const [text, setText] = useTypewriter({
        words: ['Loan CLERIS', 'developpeur', 'un coffe lover'],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5, stiffness: 100 }}
            className="flex items-center justify-center h-screen text-4xl">
            <h1 className="font-bold text-white tracking-[20px]">Bonjour je suis {text}</h1>
            <Cursor />
        </motion.div>
    )
}