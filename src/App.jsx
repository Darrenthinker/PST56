import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import CompanyHistory from './components/CompanyHistory'
import Services from './components/Services'
import Contact from './components/Contact'
import './App.css'

function App() {
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
    <div className="App">
      <Navbar activeSection={activeSection} />
      <Hero />
      <CompanyHistory />
      <Services />
      <Contact />
    </div>
  )
}

export default App

