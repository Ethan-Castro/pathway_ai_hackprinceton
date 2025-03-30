"use client"

import { useEffect, useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  // Generate random particles for the animated background
  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.1,
    }))
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated texture background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(100, 100, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(100, 100, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/20 dark:bg-primary/30"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, Math.random() * 1.5 + 0.5, 1],
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
            }}
          />
        ))}

        {/* Animated waves */}
        <svg className="absolute bottom-0 left-0 w-full opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            initial={{
              d: "M0,320L48,288C96,256,192,192,288,186.7C384,181,480,235,576,245.3C672,256,768,224,864,224C960,224,1056,256,1152,261.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            }}
            animate={{
              d: [
                "M0,320L48,288C96,256,192,192,288,186.7C384,181,480,235,576,245.3C672,256,768,224,864,224C960,224,1056,256,1152,261.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,320L48,304C96,288,192,256,288,240C384,224,480,224,576,213.3C672,203,768,181,864,192C960,203,1056,245,1152,261.3C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,320L48,288C96,256,192,192,288,186.7C384,181,480,235,576,245.3C672,256,768,224,864,224C960,224,1056,256,1152,261.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            fill="rgba(100, 100, 255, 0.3)"
          />
          <motion.path
            initial={{
              d: "M0,320L48,277.3C96,235,192,149,288,128C384,107,480,149,576,181.3C672,213,768,235,864,229.3C960,224,1056,192,1152,197.3C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            }}
            animate={{
              d: [
                "M0,320L48,277.3C96,235,192,149,288,128C384,107,480,149,576,181.3C672,213,768,235,864,229.3C960,224,1056,192,1152,197.3C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,320L48,304C96,288,192,256,288,234.7C384,213,480,203,576,202.7C672,203,768,213,864,229.3C960,245,1056,267,1152,266.7C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,320L48,277.3C96,235,192,149,288,128C384,107,480,149,576,181.3C672,213,768,235,864,229.3C960,224,1056,192,1152,197.3C1248,203,1344,245,1392,266.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
            fill="rgba(100, 100, 255, 0.2)"
          />
        </svg>
      </div>

      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/80 z-10" />

      {/* Animated background elements - keep these too */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10 dark:bg-primary/5"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Welcome to Pathway
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            A modern, high-tech platform designed for everyone, with specialized experiences for different audience
            groups.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#audience-sections">
              <Button size="lg" className="group">
                Explore Sections
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="h-8 w-8 text-primary" />
      </motion.div>
    </section>
  )
}

