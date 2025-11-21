'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Homeowner",
      content: "Working with 9Architects was an absolute pleasure. They transformed our vision into a stunning reality with attention to every detail. The final result exceeded our expectations in every way.",
      rating: 5
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Commercial Developer",
      content: "Professionalism, creativity, and technical excellence - 9Architects delivered on all fronts. Our commercial complex stands as a testament to their architectural brilliance and project management skills.",
      rating: 5
    },
    {
      id: 3,
      name: "Anjali Menon",
      role: "Interior Design Client",
      content: "The interior design team at 9Architects has an incredible eye for detail. They created spaces that are not just beautiful but also highly functional. Absolutely thrilled with the results!",
      rating: 5
    }
  ]

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 5000) // Change testimonial every 5 seconds
      return () => clearInterval(interval)
    }
  }, [isHovered, testimonials.length])

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
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
    <section id="testimonials" ref={ref} className="py-20 md:py-32 bg-background">
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
              CLIENT TESTIMONIALS
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hear what our clients have to say about their experience working with 9Architects.
            </p>
          </motion.div>

          {/* Testimonials Container */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Testimonial Slider */}
            <div className="relative bg-card rounded-2xl p-12 md:p-16 shadow-lg border border-border">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center space-y-8"
                >
                  {/* Quote Marks */}
                  <div className="text-6xl text-accent opacity-20 leading-none">
                    "
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-lg md:text-xl text-foreground italic leading-relaxed">
                    {testimonials[currentTestimonial].content}
                  </blockquote>

                  {/* Client Information */}
                  <div className="space-y-2 pt-6 border-t border-border">
                    <div className="font-heading font-semibold text-foreground text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-muted-foreground text-sm uppercase tracking-[0.1em]">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center space-x-1 pt-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-accent"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.3 + (i * 0.1),
                                                  }}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <AnimatePresence>
                {isHovered && (
                  <>
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      onClick={prevTestimonial}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-background border border-border hover:border-accent hover:text-accent transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </motion.button>

                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      onClick={nextTestimonial}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-background border border-border hover:border-accent hover:text-accent transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center space-x-3 mt-12">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? 'bg-accent w-8'
                      : 'bg-muted hover:bg-foreground/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="h-0.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  key={currentTestimonial}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}