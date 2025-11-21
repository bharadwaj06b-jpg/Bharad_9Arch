'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [hasAnimated, setHasAnimated] = useState(false)

  const stats = [
    {
      number: 30,
      suffix: "+",
      label: "Completed Projects",
      targetNumber: 30
    },
    {
      number: 50,
      suffix: "+",
      label: "Clients",
      targetNumber: 50
    },
    {
      number: 20,
      suffix: "+",
      label: "Interiors Delivered",
      targetNumber: 20
    },
    {
      number: 15,
      suffix: "+",
      label: "Ongoing",
      targetNumber: 15
    }
  ]

  const [counters, setCounters] = useState(
    stats.map(() => 0)
  )

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)

      const duration = 2000 // 2 seconds for all animations
      const steps = 60 // 60 steps for smooth animation
      const stepDuration = duration / steps

      const interval = setInterval(() => {
        setCounters(prevCounters => {
          return prevCounters.map((current, index) => {
            const target = stats[index].targetNumber
            const increment = target / steps
            const nextValue = current + increment

            if (nextValue >= target) {
              return target
            }
            return nextValue
          })
        })
      }, stepDuration)

      // Clear interval when animation completes
      const timeout = setTimeout(() => {
        clearInterval(interval)
        setCounters(stats.map(stat => stat.targetNumber))
      }, duration + 100)

      return () => {
        clearInterval(interval)
        clearTimeout(timeout)
      }
    }
  }, [isInView, hasAnimated, stats])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center space-y-4"
              >
                {/* Number */}
                <div className="relative">
                  <motion.div
                    className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-accent tracking-tight"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1 + 0.3,
                      }}
                  >
                    {Math.floor(counters[index])}
                    <span className="text-5xl md:text-6xl lg:text-7xl">{stat.suffix}</span>
                  </motion.div>

                  {/* Subtle underline */}
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-accent/30 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1 + 0.8,
                      }}
                  />
                </div>

                {/* Label */}
                <motion.p
                  className="text-sm md:text-base font-medium text-foreground uppercase tracking-[0.1em]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.6,
                  }}
                >
                  {stat.label}
                </motion.p>

                {/* Decorative element */}
                <motion.div
                  className="w-1 h-8 bg-gradient-to-b from-transparent via-accent/20 to-transparent mx-auto"
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1 + 1.0,
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Dividing lines between stats (desktop only) */}
          <div className="hidden lg:block absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-muted to-transparent" style={{ transform: 'translateY(-50%)' }} />
        </motion.div>
      </div>
    </section>
  )
}