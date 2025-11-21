'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-2xl font-heading font-bold text-background mb-4">
            9ARCHITECTS
          </div>

          <div className="w-24 h-0.5 bg-accent mx-auto mb-6" />

          <p className="text-background/80 font-sans">
            (c) 2025 ALL RIGHTS RESERVED
          </p>
        </motion.div>
      </div>
    </footer>
  )
}