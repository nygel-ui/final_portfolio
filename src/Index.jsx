import React from 'react'
import './styles/App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Intership from './components/Intership'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './components/projects/figma.css';

function Index() {
  return (
    <div className="h-screen overflow-y-scroll overflow-x-hidden scrollbar-hide snap-y snap-mandatory">
      <Navbar />
      <section id="home" className="snap-start">
        <Home />
      </section>
      <section id="intership" className="snap-start">
        <Intership />
      </section>
      <section id="about" className="snap-start">
        <About />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  )
}

export default Index
