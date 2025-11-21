'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Eye } from 'lucide-react'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Modern Villa Design",
      category: "Residential",
      description: "Contemporary villa with open spaces and natural lighting",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Commercial Complex",
      category: "Commercial",
      description: "Multi-story commercial building with sustainable design",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Interior Living Space",
      category: "Interior Design",
      description: "Modern interior design with minimalist aesthetics",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Office Building",
      category: "Commercial",
      description: "Professional office space with collaborative areas",
      image: "https://images.unsplash.com/photo-1497366216548-375f70e05f55?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Luxury Apartment",
      category: "Residential",
      description: "High-end apartment with premium finishes and amenities",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Retail Interior",
      category: "Interior Design",
      description: "Modern retail space with customer experience focus",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 7,
      title: "Eco-friendly Home",
      category: "Residential",
      description: "Sustainable residence with green building practices",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 8,
      title: "Restaurant Design",
      category: "Interior Design",
      description: "Contemporary restaurant with ambiance and functionality",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
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
    <section id="projects" ref={ref} className="py-20 md:py-32 bg-card">
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
              PROJECTS
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer bg-background"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>

                {/* Overlay */}
                <motion.div
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent flex flex-col justify-end p-6"
                >
                  {/* Category */}
                  <div className="text-xs font-medium text-accent mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-heading font-semibold text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/90 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* View Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                      y: hoveredProject === project.id ? 0 : 10,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="flex items-center gap-2 text-white text-sm font-medium"
                  >
                    <Eye className="w-4 h-4" />
                    View Project
                  </motion.div>
                </motion.div>

                {/* Hover Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}