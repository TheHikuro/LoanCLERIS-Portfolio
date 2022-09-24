import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, Hero, About } from '../components/index'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Loan CLERIS</title>
        <meta name="description" content="Portfolio Loan CLERIS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className='snap-center'>
        <Hero />
      </section>
      {/* About me  */}
      <section id="about" className='snap-center'>
        <About />
      </section>
      {/* Skills */}
      {/* Projects */}
      {/* Education */}
      {/* Contact */}
    </div>
  )
}

export default Home
