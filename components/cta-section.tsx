"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-20 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-cosmic-blue/10 via-card to-cosmic-teal/5 p-8 md:p-16 text-center transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cosmic-amber/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cosmic-blue/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <span className="text-xs font-medium tracking-widest uppercase text-cosmic-amber">
              Ready for Launch?
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance text-foreground">
              Your Next Mission{" "}
              <span className="text-cosmic-blue">Starts Here</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Join the collective and let us transform your boldest ideas into reality.
              Every great product began as a spark.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-cosmic-blue text-foreground font-medium hover:bg-cosmic-blue/90 transition-all animate-pulse-glow"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-cosmic-blue/30 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
