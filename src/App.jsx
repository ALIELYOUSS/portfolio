import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ParticleBackground from './components/ParticleBackground'
import ThreeBackground from './components/ThreeBackground'
import CursorFollower from './components/CursorFollower'

export default function App() {
  return (
    <>
      <ParticleBackground />
      <ThreeBackground />
      <CursorFollower />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}
