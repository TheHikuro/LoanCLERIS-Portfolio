import { motion } from 'framer-motion'
import { CardExperiences, Title } from '../index'
import TF1 from '../../assets/images/logoEntreprise/TF1-logo.png'
import Cognacq from '../../assets/images/logoEntreprise/cognacq-jay-logo.png'
import Camdriam from '../../assets/images/logoEntreprise/Camdriam-logo.png'
import Framatome from '../../assets/images/logoEntreprise/Framatome-logo.png'
import Orano from '../../assets/images/logoEntreprise/Orano-logo.png'
import React from '../../assets/images/logoTechno/React.png'
import Next from '../../assets/images/logoTechno/Next.png'

export const Experiences = () => {
    const myJobs = [
        { title: 'Orano', date: '2017 - 2018', description: "Je suis actuellement chez Orano en tant que Developpeur, je suis attribué à plusieurs projets à déployer en interne afin d'améliorer le SI dans l'équipe de la Factory U.", image: Orano, techno: [React, Next] },
        { title: 'Framatome', date: '2018 - 2019', description: "J'ai travaillé sur une plateforme web pour créer une interface pour l'administrateur qui lui permettrait de donner des autorisations aux autres utilisateurs.", image: Framatome, techno: [React, Next] },
        { title: 'Camdriam', date: '2019 - 2020', description: "Au sein de l'équipe Candriam, ma mission principale était de conceptualiser et développer un projet d'analyse de transcription en python (Text mining, question fondamentale de l'analyse sémantique et conclusions, système de mesure statistique objectif). Ma seconde mission a été réalisée sur le logiciel BloomBerg afin de classifier les données.", image: Camdriam, techno: [React, Next] },
        { title: 'Cognacq-Jay', date: '2020 - 2021', description: "Au sein de Cognacq-Jay, cette expérience m'a permis d'apprendre quelques bases du réseau au niveau des protocoles TCP/IP, DHCP et DNS. C'était également ma première expérience informatique, afin de découvrir ce nouveau monde dans lequel je souhaite m'émanciper.", image: Cognacq, techno: [React, Next] },
        { title: 'TF1 - Groupe', date: '2021 - 2021', description: "Au cours de mon apprentissage au sein du groupe TF1, je suis devenu plus autonome, plus responsable et plus mature. Ces qualités ont été acquises grâce aux managers et aux collaborateurs, toujours disponibles pour m'aider à améliorer mes compétences. De plus, j'ai pu apprécier le lien réel entre la cuisine et les serveurs, qui a toujours favorisé une bonne communication. Ces valeurs, ainsi que la créativité et l'innovation, me semblent être communes au domaine de l'informatique.", image: TF1, techno: [React, Next] },
    ]
    return (
        <div className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
            <Title title='Expériences' />
            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory '>
                {myJobs.map((job, index) => (
                    <CardExperiences key={index} jobs={job} />
                ))}
            </div>
        </div>
    )
}