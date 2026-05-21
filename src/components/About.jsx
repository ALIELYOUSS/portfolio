import ScrollReveal from './ScrollReveal'
import useParallax from '../hooks/useParallax'
import lana from './lana.jpg'

export default function About() {
  const { ref, y } = useParallax(0.2)

  return (
    <section id="about" className="relative z-10 py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <span className="text-accent font-mono text-sm tracking-widest">01. </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 inline-block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary rounded-full mb-8" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center" style={{ y }}>
          <ScrollReveal type="fadeLeft" delay={0.2}>
            <p className="text-gray-300 leading-relaxed mb-4">
              Hey there! I'm Ali, a software engineer and proud member of the{' '}
              <span className="text-accent font-medium">42 Network</span>. My
              journey into tech has been anything but conventional — built on
              peer-to-peer learning, relentless curiosity, and a love for
              solving complex problems.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              From low-level C to modern web frameworks, I thrive across the
              stack. I believe great software is a blend of performance,
              usability, and clean architecture.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source, or diving into a good tech book.
            </p>
          </ScrollReveal>

          <ScrollReveal type="fadeRight" delay={0.4}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 border-2 border-accent rounded-2xl translate-x-4 translate-y-4" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl overflow-hidden flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <img src={lana} alt="Ali's portrait" className="w-full h-full object-cover" />
                </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
