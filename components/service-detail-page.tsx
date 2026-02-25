"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, type LucideIcon } from "lucide-react"
import { Navigation } from "./navigation"
import { Footer } from "./footer"
import { StarField } from "./star-field"

interface ServiceFeature {
  title: string
  description: string
}

interface ServiceProcess {
  step: string
  title: string
  description: string
}

export interface ServiceDetailProps {
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  longDescription: string
  color: string
  accentClass: string
  borderClass: string
  glowClass: string
  features: ServiceFeature[]
  process: ServiceProcess[]
  benefits: string[]
  techStack: string[]
}

export function ServiceDetailPage({
  icon: Icon,
  title,
  subtitle,
  description,
  longDescription,
  accentClass,
  borderClass,
  glowClass,
  features,
  process,
  benefits,
  techStack,
}: ServiceDetailProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <StarField />
      <div className="relative z-10">
        <Navigation />
        <main>
          {/* Hero */}
          <section className="pt-28 md:pt-36 pb-16 md:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Link>

              <div
                className={`transition-all duration-1000 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className={`inline-flex p-4 rounded-2xl ${glowClass} mb-6`}>
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-foreground" />
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground text-balance">
                  {title}
                </h1>
                <p className={`mt-2 text-lg font-medium ${accentClass}`}>{subtitle}</p>
                <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </section>

          {/* Long description */}
          <section className="pb-16 md:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`rounded-2xl border ${borderClass} bg-card/30 backdrop-blur-sm p-6 md:p-10 transition-all duration-1000 delay-200 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {longDescription}
                </p>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="pb-16 md:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                Core Capabilities
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className={`rounded-xl border ${borderClass} bg-card/20 backdrop-blur-sm p-6 hover:bg-card/40 transition-all duration-700 ${
                      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="pb-16 md:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                Our Process
              </h2>
              <div className="flex flex-col gap-6">
                {process.map((step, index) => (
                  <div
                    key={step.step}
                    className={`flex gap-4 md:gap-6 items-start rounded-xl border ${borderClass} bg-card/20 backdrop-blur-sm p-5 md:p-6 transition-all duration-700 ${
                      mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    }`}
                    style={{ transitionDelay: `${400 + index * 120}ms` }}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full ${glowClass} flex items-center justify-center`}>
                      <span className="text-sm font-bold text-foreground">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits + Tech Stack */}
          <section className="pb-16 md:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Benefits */}
                <div className={`rounded-2xl border ${borderClass} bg-card/20 backdrop-blur-sm p-6 md:p-8`}>
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    Why Choose Us
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full ${glowClass} flex items-center justify-center`}>
                          <Check className="w-3 h-3 text-foreground" />
                        </div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className={`rounded-2xl border ${borderClass} bg-card/20 backdrop-blur-sm p-6 md:p-8`}>
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    Technologies We Use
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border ${borderClass} text-muted-foreground bg-card/30`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="pb-20 md:pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`rounded-2xl border ${borderClass} bg-gradient-to-br from-card via-card/80 to-card/40 p-8 md:p-12 text-center`}>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  Ready to Begin?
                </h2>
                <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-6">
                  Let us help you turn your vision into reality. Reach out and
                  we will chart the course together.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-cosmic-blue text-foreground font-medium hover:bg-cosmic-blue/90 transition-all animate-pulse-glow"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
