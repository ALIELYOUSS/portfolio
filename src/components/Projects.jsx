import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import useParallax from '../hooks/useParallax'

const defaultRepos = [
  {
    name: 'portfolio',
    description: 'Personal portfolio built with React, Three.js & Framer Motion',
    html_url: 'https://github.com/ALIELYOUSS/portfolio',
    language: 'JavaScript',
    topics: [],
  },
  {
    name: 'ALIELYOUSS',
    description: 'GitHub profile README',
    html_url: 'https://github.com/ALIELYOUSS/ALIELYOUSS',
    language: '',
    topics: [],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const projectVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function Projects() {
  const [repos, setRepos] = useState(defaultRepos)
  const { ref, y } = useParallax(0.15)

  useEffect(() => {
    fetch('https://api.github.com/users/ALIELYOUSS/repos?sort=updated&per_page=20')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data)
        }
      })
      .catch(() => {})
  }, [])

  return (
    <section id="projects" className="relative z-10 py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <span className="text-accent font-mono text-sm tracking-widest">03. </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 inline-block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary rounded-full mb-12" />
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-6"
          style={{ y }}
        >
          {repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              variants={projectVariants}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                </div>
                <div className="flex gap-3">
                  <span className="text-gray-500 group-hover:text-accent transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                {repo.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                {repo.description || 'No description available'}
              </p>
              <div className="flex flex-wrap gap-2 items-center">
                {repo.language && (
                  <span className="text-xs font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    {repo.language}
                  </span>
                )}
                {repo.topics?.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="text-xs font-mono text-secondary bg-secondary/10 px-2.5 py-1 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
