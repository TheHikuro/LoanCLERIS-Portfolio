import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Hero, About, Experiences, Educations, Skills, Projects, Contact } from '../components/index'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 md:scrollbar md:scrollbar-track-gray-400/20 md:scrollbar-thumb-[#F7AB0A]/80 scroll-smooth'>
      <Head>
        <title>Loan CLERIS</title>
        <meta name="description" content="Portfolio Loan CLERIS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className='snap-center'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id="experiences" className='snap-center'>
        <Experiences />
      </section>

      <section id="education" className='snap-center'>
        <Educations />
      </section>

      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      <section id="projects" className='snap-start'>
        <Projects />
      </section>

      <section id="contact" className='snap-start'>
        <Contact />
      </section>
    </div>
  )
}

export default Home
