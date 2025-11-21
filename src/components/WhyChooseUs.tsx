'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Ruler, DollarSign, Lightbulb, Clock } from 'lucide-react'

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const reasons = [
    {
      icon: Ruler,
      title: "Precision Planning",
      description: "Meticulous attention to detail in every architectural blueprint and design phase",
      delay: 0
    },
    {
      icon: DollarSign,
      title: "Budget-Friendly Execution",
      description: "Optimized resource allocation ensuring premium quality within your budget",
      delay: 0.1
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven Team",
      description: "Creative architects pushing boundaries with cutting-edge design solutions",
      delay: 0.2
    },
    {
      icon: Clock,
      title: "Zero-Delay Execution Model",
      description: "Streamlined project management ensuring timely completion every time",
      delay: 0.3
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

  return (
    <section id="why-choose-us" ref={ref} className="py-20 md:py-32 bg-card">
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
              WHY CHOOSE US
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We combine architectural expertise with innovative thinking to deliver exceptional spaces that inspire and endure.
            </p>
          </motion.div>

          {/* 4-Point Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group text-center space-y-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-accent/10 text-accent"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(214, 167, 77, 0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <reason.icon className="w-8 h-8" />
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    {reason.description}
                  </p>
                </div>

                {/* Hover Indicator */}
                <motion.div
                  className="w-12 h-0.5 mx-auto bg-accent rounded-full origin-center"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom Call-to-Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-24"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-foreground font-semibold text-sm uppercase tracking-[0.15em] hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}