import React, { useState, useEffect } from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import CompanyHistory from './CompanyHistory'
import Services from './Services'
import Contact from './Contact'

const Home = () => {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'history', 'services', 'contact']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="Home">
      <Navbar activeSection={activeSection} />
      <Hero />
      <CompanyHistory />
      <Services />
      <Contact />
    </div>
  )
}

export default Home

