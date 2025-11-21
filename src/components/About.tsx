'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              ABOUT US
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 text-left"
          >
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-sans">
              Established in 2022, 9Architects was founded with the vision to deliver the best construction and architectural services across all budget ranges.
            </p>

            <p className="text-lg md:text-xl text-foreground leading-relaxed font-sans">
              Our team consists of young, passionate professionals who execute every phase with meticulous planning and creative problem-solving.
            </p>

            <p className="text-lg md:text-xl text-foreground leading-relaxed font-sans">
              We believe construction is a collaborative journey—innovative, transparent, and client-focused.
            </p>

            <p className="text-lg md:text-xl text-foreground leading-relaxed font-sans">
              We listen, adapt, and support you throughout the entire project to ensure a seamless, stress-free building experience.
            </p>
          </motion.div>

          {/* Architectural Detail */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-accent mb-2">2022</div>
              <div className="text-sm text-muted-foreground font-sans">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-accent mb-2">100+</div>
              <div className="text-sm text-muted-foreground font-sans">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-accent mb-2">Kerala</div>
              <div className="text-sm text-muted-foreground font-sans">Service Area</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}