import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Expertise from '@/components/Expertise'
import Portfolio from '@/components/Portfolio'
import Systems from '@/components/Systems'
import TechStack from '@/components/TechStack'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import NeuralBackground from '@/components/NeuralBackground'

export default function Home() {
  return (
    <>
      <Head>
        <title>Asif Iqbal | AI Systems Architect</title>
      </Head>
      
      <NeuralBackground />
      <Navigation />
      
      <main className="relative">
        <Hero />
        <About />
        <Expertise />
        <Portfolio />
        <Systems />
        <TechStack />
        <Contact />
      </main>
      
      <Footer />
    </>
  )
}
