import { motion } from 'framer-motion'

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.45
}) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 24 }
      case 'down':
        return { opacity: 0, y: -24 }
      case 'left':
        return { opacity: 0, x: 24 }
      case 'right':
        return { opacity: 0, x: -24 }
      case 'none':
      default:
        return { opacity: 0, y: 0 }
    }
  }

  const initial = getInitialPosition()

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
