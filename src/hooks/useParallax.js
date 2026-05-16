import { useRef, useCallback } from 'react'
import { useScroll, useTransform, useSpring } from 'framer-motion'

export default function useParallax(speed = 0.5) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

  return { ref, y: smoothY }
}
