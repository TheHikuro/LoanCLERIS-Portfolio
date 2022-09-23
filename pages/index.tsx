import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { Header } from '../components/index'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Loan CLERIS</title>
        <meta name="description" content="Portfolio Loan CLERIS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Head */}
      <Header />
      {/* Hero Section */}
      {/* About me  */}
      {/* Skills */}
      {/* Projects */}
      {/* Education */}
      {/* Contact */}
    </Fragment>
  )
}

export default Home
