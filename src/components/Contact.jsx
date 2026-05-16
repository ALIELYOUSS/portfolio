import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/ALIELYOUSS',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/aliel-youssoufi',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/ALIELYOUSS',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:ali@example.com',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-accent font-mono text-sm tracking-widest">04. </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 inline-block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary rounded-full mx-auto mb-8" />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            I'm always open to new opportunities, interesting projects, or just a
            friendly chat. Feel free to reach out!
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <a
            href="mailto:ali.elyoussoufi@example.com"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent-dark text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 mb-12 hover:-translate-y-1"
          >
            Say Hello
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <div className="flex items-center justify-center gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-accent transition-all duration-300 hover:-translate-y-1"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.8}>
        <div className="text-center mt-20">
          <p className="text-gray-600 text-sm font-mono">
            Built with React, Three.js & Framer Motion
          </p>
          <p className="text-gray-700 text-xs mt-1 font-mono">
            &copy; {new Date().getFullYear()} Ali Elyoussoufi
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}
