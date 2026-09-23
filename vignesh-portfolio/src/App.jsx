import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Achievements from './components/Achievements.jsx'
import Coding from './components/Coding.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { navLinks } from './data/portfolioData.js'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Coding />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
