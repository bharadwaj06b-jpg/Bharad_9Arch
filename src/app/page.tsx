'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import { createLenis, connectLenisToRAF } from '@/lib/lenis'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = createLenis()
    connectLenisToRAF(lenis)

    // Hide preloader after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => {
      clearTimeout(timer)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Preloader />

      {!isLoading && (
        <>
          <Header />

          <main>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </div>
  )
}