import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import useParallax from '../hooks/useParallax'

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C', 'C++'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'Linux', 'CI/CD', 'AWS'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const skillItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
}

export default function Skills() {
  const { ref, y } = useParallax(0.15)

  return (
    <section id="skills" className="relative z-10 py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <span className="text-accent font-mono text-sm tracking-widest">02. </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 inline-block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary rounded-full mb-12" />
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ y }}
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 group"
            >
              <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-accent transition-colors">
                {cat.title}
              </h3>
              <motion.ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={skillItemVariants}
                    className="text-gray-400 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
