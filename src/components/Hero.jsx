import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'
import useParallax from '../hooks/useParallax'

const roles = [
  'Software Engineer',
  'Member of the 42 Network',
  'Problem Solver',
  'Creative Developer',
]

export default function Hero() {
  const typedText = useTypewriter(roles, { typeSpeed: 80, deleteSpeed: 50, pauseDuration: 2000 })

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const { ref, y } = useParallax(-0.2)

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center justify-center px-6"
      ref={ref}
    >
      <div className="text-center max-w-4xl" style={{ y }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block text-accent font-mono text-sm tracking-widest mb-4 border border-accent/30 px-4 py-1.5 rounded-full">
            Hello, I'm
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Ali{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
            Elyoussoufi
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="h-12 md:h-14 flex items-center justify-center mb-8"
        >
          <span className="text-xl md:text-3xl text-gray-300 font-mono">
            {typedText}
            <span className="animate-pulse text-accent">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting elegant solutions through code — passionate about building
          performant, beautiful, and meaningful digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="flex items-center justify-center gap-4"
        >
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-accent hover:bg-accent-dark text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
          >
            Get to know me
          </button>
          <a
            href="#projects"
            className="px-8 py-3 border border-gray-600 hover:border-accent text-gray-300 hover:text-white rounded-full font-medium transition-all duration-300"
          >
            View my work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-accent rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
