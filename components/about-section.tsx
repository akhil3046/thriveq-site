"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Shield, Users, Target } from "lucide-react"

const pillars = [
  {
    icon: Zap,
    title: "Velocity",
    description: "We move at the speed of light. Rapid iterations, fast deploys, zero drag.",
  },
  {
    icon: Shield,
    title: "Precision",
    description: "Every line of code, every pixel, engineered with mission-critical accuracy.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We are your co-pilots. Transparent communication, shared objectives, aligned orbits.",
  },
  {
    icon: Target,
    title: "Impact",
    description: "We measure success in outcomes, not outputs. Your growth is our north star.",
  },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-20 md:py-32" id="about" ref={sectionRef}>
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cosmic-blue/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: About text */}
          <div
            className={`transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-xs font-medium tracking-widest uppercase text-cosmic-teal">
              Our Story
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance text-foreground">
              Born from a{" "}
              <span className="text-cosmic-amber">Spark of Curiosity</span>
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              It started with a simple question: what if building great technology did not have
              to feel like rocket science for the people who need it most? That question led a
              small group of engineers and dreamers in India to start ThriveQ -- a place where
              ambitious ideas meet the hands that can build them.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Today, we are the quiet force behind startups finding their first hundred users,
              businesses automating what once took entire teams, and brands discovering their
              digital voice. We do not just write code -- we sit with you, understand where you
              are headed, and build the bridge to get there.
            </p>

            {/* Metric highlights */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-xs text-muted-foreground mt-1">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">30+</div>
                <div className="text-xs text-muted-foreground mt-1">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">Pan India</div>
                <div className="text-xs text-muted-foreground mt-1">{"& Beyond"}</div>
              </div>
            </div>
          </div>

          {/* Right: Pillars */}
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`p-5 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:border-cosmic-blue/30 transition-all duration-700 group ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="p-2 rounded-lg bg-cosmic-blue/10 w-fit mb-3 group-hover:bg-cosmic-blue/20 transition-colors">
                  <pillar.icon className="w-5 h-5 text-cosmic-blue" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1.5">{pillar.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
