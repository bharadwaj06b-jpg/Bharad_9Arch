'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Workflow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const workflowSteps = [
    {
      number: "01",
      title: "Consult",
      description: "Initial consultation to understand your vision and requirements"
    },
    {
      number: "02",
      title: "Plan",
      description: "Comprehensive planning and feasibility analysis"
    },
    {
      number: "03",
      title: "Design",
      description: "Creative design solutions with detailed architectural drawings"
    },
    {
      number: "04",
      title: "Build",
      description: "Expert construction with quality materials and craftsmanship"
    },
    {
      number: "05",
      title: "Handover",
      description: "Final inspection and seamless project delivery"
    }
  ]

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        delay: 0.5,
      },
    },
  }

  return (
    <section id="workflow" ref={ref} className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 tracking-[0.05em]">
              OUR PROCESS
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A streamlined workflow ensuring your architectural journey is smooth, transparent, and exceptional from concept to completion.
            </p>
          </motion.div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting Line */}
              <motion.div
                variants={lineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="absolute top-12 left-0 right-0 h-0.5 bg-muted origin-left"
              />

              {/* Steps */}
              <div className="flex justify-between items-start">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex-1 text-center max-w-[200px] mx-auto"
                  >
                    {/* Step Circle */}
                    <motion.div
                      className="relative w-24 h-24 mx-auto mb-8"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Outer Circle */}
                      <div className="absolute inset-0 rounded-full border-2 border-accent bg-background" />

                      {/* Inner Circle */}
                      <motion.div
                        className="absolute inset-2 rounded-full bg-accent flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{
                          duration: 0.6,
                          delay: 0.8 + (index * 0.1),
                                                  }}
                      >
                        <span className="text-foreground font-bold text-lg">
                          {step.number}
                        </span>
                      </motion.div>

                      {/* Hover Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-accent/20 blur-xl opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>

                    {/* Step Title */}
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3 tracking-[0.05em]">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile & Tablet: Vertical Timeline */}
          <div className="lg:hidden">
            <div className="relative max-w-md mx-auto">
              {/* Vertical Line */}
              <motion.div
                variants={lineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="absolute left-6 top-0 bottom-0 w-0.5 bg-muted origin-top"
              />

              {/* Steps */}
              <div className="space-y-12">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-8"
                  >
                    {/* Step Circle */}
                    <div className="relative flex-shrink-0">
                      <motion.div
                        className="relative w-12 h-12"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Outer Circle */}
                        <div className="absolute inset-0 rounded-full border-2 border-accent bg-background" />

                        {/* Inner Circle */}
                        <motion.div
                          className="absolute inset-1 rounded-full bg-accent flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{
                            duration: 0.6,
                            delay: 0.8 + (index * 0.1),
                                                      }}
                        >
                          <span className="text-foreground font-bold text-xs">
                            {step.number}
                          </span>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-lg font-heading font-bold text-foreground mb-2 tracking-[0.05em]">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Progress Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center space-x-4 text-accent">
              <span className="text-sm font-medium uppercase tracking-[0.15em]">
                Seamless Execution
              </span>
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-accent"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 1.0 + (i * 0.1),
                                          }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}