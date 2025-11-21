'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  // Premium projects for magazine-style layout (reduced to 6 for luxury feel)
  const projects = [
    {
      id: 1,
      number: "01",
      title: "Modern Villa Design",
      description: "Contemporary luxury villa featuring open-concept living spaces, floor-to-ceiling glass walls, and seamless integration with tropical landscape architecture.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      number: "02",
      title: "Commercial Complex",
      description: "Sustainable mixed-use development with innovative green roof systems, solar panel integration, and biophilic design principles.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      number: "03",
      title: "Interior Living Space",
      description: "Minimalist luxury interior combining natural materials, custom millwork, and intelligent lighting systems for sophisticated urban living.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      number: "04",
      title: "Corporate Headquarters",
      description: "State-of-the-art office complex featuring collaborative workspaces, wellness amenities, and advanced environmental controls.",
      image: "https://images.unsplash.com/photo-1497366216548-375f70e05f55?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 5,
      number: "05",
      title: "Luxury Residence",
      description: "Bespoke penthouse residence with panoramic views, private elevator access, and integrated smart home technology throughout.",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 6,
      number: "06",
      title: "Boutique Retail Space",
      description: "High-end retail environment with custom architectural elements, premium materials, and experiential customer journey design.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2069&auto=format&fit=crop"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
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
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="projects" ref={ref} className="py-32 bg-background">
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
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 tracking-[0.05em]">
              FEATURED PROJECTS
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We transform architectural visions into reality through meticulous planning, innovative design solutions, and uncompromising attention to detail.
            </p>
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 px-6 py-3 border border-foreground text-foreground font-medium text-sm uppercase tracking-[0.15em] hover:bg-foreground hover:text-background transition-all duration-300"
              >
                SEE MORE
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Magazine-Style Projects */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image Column - 60% width (7 columns) */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                  <motion.div
                    className="relative overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="aspect-[4/5] lg:aspect-[3/2] overflow-hidden bg-muted">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredProject === project.id ? 1.08 : 1,
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>

                    {/* Subtle overlay on hover */}
                    <motion.div
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"
                    />
                  </motion.div>
                </div>

                {/* Text Column - 40% width (5 columns) */}
                <div className={`lg:col-span-5 space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {/* Project Number */}
                    <div className="text-sm font-bold text-accent uppercase tracking-[0.15em] mb-2">
                      {project.number}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 leading-tight tracking-[0.02em]">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* View Project Link */}
                    <motion.a
                      href="#"
                      className="inline-flex items-center gap-2 text-foreground font-medium text-sm uppercase tracking-[0.15em] hover:text-accent transition-colors duration-300 group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      View Project
                      <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}