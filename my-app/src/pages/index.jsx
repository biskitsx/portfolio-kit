
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Homex from '@/components/Homex'
import Skills from '@/components/Skills'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Project from '@/components/Project'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Navbar />
            <Homex />
            <Skills />
            <About />
            <Project />
            <Contact />
            <Footer />
        </>
    )
}
