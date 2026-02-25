"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowRight, ChevronDown } from "lucide-react"

const HeroGlobe = dynamic(() => import("./hero-globe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 animate-pulse" />
    </div>
  ),
})

const stats = [
  { value: "150+", label: "Projects Launched" },
  { value: "40+", label: "Global Clients" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Mission Support" },
]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col" id="hero">
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-[calc(100vh-12rem)]">
          {/* Left: Text content */}
          <div
            className={`flex flex-col gap-6 md:gap-8 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cosmic-blue/10 border border-cosmic-blue/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-cosmic-teal animate-pulse" />
              <span className="text-xs font-medium text-cosmic-teal">Now accepting missions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-balance">
              We Launch{" "}
              <span className="bg-gradient-to-r from-cosmic-blue to-cosmic-teal bg-clip-text text-transparent">
                Ideas
              </span>{" "}
              Into Orbit
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
              From concept to constellation, we engineer digital experiences that transcend
              boundaries. Your vision, our launchpad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cosmic-blue text-foreground font-medium hover:bg-cosmic-blue/90 transition-all duration-300 animate-pulse-glow"
              >
                Start Your Mission
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-cosmic-blue/30 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 md:mt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-xs text-muted-foreground mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D Globe */}
          <div
            className={`relative h-[400px] sm:h-[450px] lg:h-[550px] xl:h-[600px] transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <HeroGlobe />
            {/* Glow effect under globe */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cosmic-blue/10 blur-3xl rounded-full pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center pb-8 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
