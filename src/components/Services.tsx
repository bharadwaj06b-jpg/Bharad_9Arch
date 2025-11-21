'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Home, Building, PenTool } from 'lucide-react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const services = [
    {
      icon: Home,
      title: "Interior Design",
      description: "Creating beautiful, functional spaces that reflect your lifestyle and personality.",
      delay: 0.1
    },
    {
      icon: Building,
      title: "Construction",
      description: "Building dreams with precision, quality materials, and expert craftsmanship.",
      delay: 0.2
    },
    {
      icon: PenTool,
      title: "Architecture",
      description: "Innovative architectural solutions that blend aesthetics with functionality.",
      delay: 0.3
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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
    <section id="services" ref={ref} className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              SERVICES
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group bg-card p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-border/50"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground font-sans leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Line */}
                <div className="mt-6 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}