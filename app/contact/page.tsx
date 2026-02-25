"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StarField } from "@/components/star-field"
import {
  ArrowLeft,
  Send,
  Rocket,
  Globe,
  Bot,
  BarChart3,
  Mail,
  MapPin,
  CheckCircle2,
} from "lucide-react"

const serviceOptions = [
  {
    id: "mvp",
    label: "MVP Development",
    icon: Rocket,
    description: "Launch your product fast",
    color: "border-amber-500/30 bg-amber-500/5",
    activeColor: "border-amber-500 bg-amber-500/20",
    checkColor: "text-amber-500",
  },
  {
    id: "website",
    label: "Website Creation",
    icon: Globe,
    description: "Beautiful digital experiences",
    color: "border-blue-500/30 bg-blue-500/5",
    activeColor: "border-blue-500 bg-blue-500/20",
    checkColor: "text-blue-500",
  },
  {
    id: "ai-agents",
    label: "Custom AI Agents",
    icon: Bot,
    description: "Intelligent automation",
    color: "border-teal-500/30 bg-teal-500/5",
    activeColor: "border-teal-500 bg-teal-500/20",
    checkColor: "text-teal-500",
  },
  {
    id: "crm",
    label: "CRM Solutions",
    icon: BarChart3,
    description: "Customer relationship management",
    color: "border-blue-400/30 bg-blue-400/5",
    activeColor: "border-blue-400 bg-blue-400/20",
    checkColor: "text-blue-400",
  },
]

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "thriveqservices@gmail.com",
    href: "mailto:thriveqservices@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "#",
  },
]

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <StarField />
        <div className="relative z-10">
          <Navigation />
          <main className="min-h-screen flex items-center justify-center px-4">
            <div
              className={`text-center max-w-md transition-all duration-1000 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="inline-flex p-4 rounded-2xl bg-cosmic-teal/15 mb-6">
                <CheckCircle2 className="w-12 h-12 text-cosmic-teal" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-3">
                Mission Received
              </h1>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Your message has been transmitted successfully. Our team will analyse
                your requirements and respond within 24 hours.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cosmic-blue text-foreground font-medium hover:bg-cosmic-blue/90 transition-all"
              >
                Return to Base
              </Link>
            </div>
          </main>
        </div>
      </>
    )
  }

  return (
    <>
      <StarField />
      <div className="relative z-10">
        <Navigation />
        <main className="pt-28 md:pt-36 pb-20 md:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div
              className={`mb-12 transition-all duration-1000 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="text-xs font-medium tracking-widest uppercase text-cosmic-blue">
                Get in Touch
              </span>
              <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground text-balance">
                Start Your{" "}
                <span className="text-cosmic-amber">Mission</span>
              </h1>
              <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Tell us about your project and select the services you are interested in.
                We will chart the optimal course for your goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Form */}
              <div
                className={`lg:col-span-2 transition-all duration-1000 delay-200 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  {/* Service selection */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-4">
                      Select Services You Are Interested In{" "}
                      <span className="text-muted-foreground font-normal">(select multiple)</span>
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => {
                        const isActive = selectedServices.includes(service.id)
                        return (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => toggleService(service.id)}
                            className={`flex items-start gap-3 p-4 rounded-xl border transition-all duration-300 text-left ${
                              isActive ? service.activeColor : service.color
                            } hover:scale-[1.02]`}
                            aria-pressed={isActive}
                          >
                            <div className="flex-shrink-0 mt-0.5">
                              {isActive ? (
                                <CheckCircle2 className={`w-5 h-5 ${service.checkColor}`} />
                              ) : (
                                <service.icon className="w-5 h-5 text-muted-foreground" />
                              )}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-foreground">
                                {service.label}
                              </div>
                              <div className="text-xs text-muted-foreground mt-0.5">
                                {service.description}
                              </div>
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Contact details */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, name: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cosmic-blue/50 focus:border-cosmic-blue/50 transition-all text-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cosmic-blue/50 focus:border-cosmic-blue/50 transition-all text-sm"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Company / Organisation
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, company: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cosmic-blue/50 focus:border-cosmic-blue/50 transition-all text-sm"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Project Details <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, message: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cosmic-blue/50 focus:border-cosmic-blue/50 transition-all text-sm resize-none"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-cosmic-blue text-foreground font-medium hover:bg-cosmic-blue/90 transition-all animate-pulse-glow w-full sm:w-auto"
                  >
                    <Send className="w-4 h-4" />
                    Transmit Message
                  </button>
                </form>
              </div>

              {/* Sidebar info */}
              <div
                className={`transition-all duration-1000 delay-400 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-6 md:p-8 sticky top-28">
                  <h2 className="text-lg font-bold text-foreground mb-6">
                    Reach Out
                  </h2>

                  <div className="flex flex-col gap-5">
                    {contactInfo.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-start gap-3 group"
                      >
                        <div className="p-2 rounded-lg bg-cosmic-blue/10 group-hover:bg-cosmic-blue/20 transition-colors">
                          <item.icon className="w-4 h-4 text-cosmic-blue" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">{item.label}</div>
                          <div className="text-sm text-foreground">{item.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <h3 className="text-sm font-semibold text-foreground mb-3">
                      Response Time
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      We typically respond within 24 hours during business days.
                      For urgent inquiries, drop us a mail.
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <h3 className="text-sm font-semibold text-foreground mb-3">
                      What Happens Next
                    </h3>
                    <ol className="flex flex-col gap-3">
                      {[
                        "We review your message and requirements",
                        "Schedule a discovery call within 48 hours",
                        "Deliver a tailored proposal and roadmap",
                      ].map((step, index) => (
                        <li key={step} className="flex items-start gap-2">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cosmic-blue/15 flex items-center justify-center text-xs font-medium text-cosmic-blue">
                            {index + 1}
                          </span>
                          <span className="text-xs text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
