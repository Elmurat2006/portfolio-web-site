import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BgAnimation from '../components/BgAnimation'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'
import Technologies from '../components/Technologies'
const Home: NextPage = ({children}) => {
  return (
    <>
      <Header />
    <div style ={{maxWidth: "1280px",width: "100%",margin: 'auto'}}>
      <div className ="grid grid-cols-2 gap-2">
      <Hero />
      <BgAnimation />
      </div>
      <Projects />
      <Technologies />
      <About />
    </div>
      <Footer />
    </>
  )
}

export default Home
