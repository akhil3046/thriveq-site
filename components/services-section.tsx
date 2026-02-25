"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Rocket, Globe, Bot, BarChart3 } from "lucide-react"

const services = [
  {
    id: "mvp",
    icon: Rocket,
    title: "MVP Development",
    description:
      "Launch your product into the market at warp speed. We build minimum viable products that validate your vision and attract early adopters.",
    features: ["Rapid Prototyping", "Market Validation", "Iterative Builds", "Launch Strategy"],
    color: "cosmic-amber",
    gradient: "from-amber-500/20 to-orange-600/5",
    borderColor: "border-amber-500/20 hover:border-amber-500/40",
    iconBg: "bg-amber-500/10",
    href: "/services/mvp",
  },
  {
    id: "website",
    icon: Globe,
    title: "Website Creation",
    description:
      "Craft digital experiences that orbit around your brand. Responsive, performant, and designed to captivate every visitor.",
    features: ["Responsive Design", "Performance Optimization", "SEO Strategy", "CMS Integration"],
    color: "cosmic-blue",
    gradient: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/20 hover:border-blue-500/40",
    iconBg: "bg-blue-500/10",
    href: "/services/website",
  },
  {
    id: "ai-agents",
    icon: Bot,
    title: "Custom AI Agents",
    description:
      "Deploy intelligent systems that learn, adapt, and automate. Our AI agents are the crew powering your mission to efficiency.",
    features: ["Natural Language Processing", "Task Automation", "Custom Training", "API Integration"],
    color: "cosmic-teal",
    gradient: "from-teal-500/20 to-teal-600/5",
    borderColor: "border-teal-500/20 hover:border-teal-500/40",
    iconBg: "bg-teal-500/10",
    href: "/services/ai-agents",
  },
  {
    id: "crm",
    icon: BarChart3,
    title: "CRM Solutions",
    description:
      "Navigate your customer universe with precision. Custom CRM systems that centralize data and amplify every interaction.",
    features: ["Customer Analytics", "Pipeline Management", "Custom Workflows", "Reporting Dashboards"],
    color: "primary",
    gradient: "from-blue-400/20 to-indigo-600/5",
    borderColor: "border-blue-400/20 hover:border-blue-400/40",
    iconBg: "bg-blue-400/10",
    href: "/services/crm",
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`group relative rounded-2xl border ${service.borderColor} bg-gradient-to-br ${service.gradient} bg-card/50 backdrop-blur-sm p-6 md:p-8 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Icon */}
      <div className={`inline-flex p-3 rounded-xl ${service.iconBg} mb-5`}>
        <service.icon className="w-6 h-6 text-foreground" />
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{service.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.description}</p>

      {/* Features */}
      <ul className="flex flex-col gap-2 mb-6">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-1 h-1 rounded-full bg-cosmic-blue" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={service.href}
        className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-cosmic-blue transition-colors group/link"
      >
        Know More
        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
      </Link>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-cosmic-blue/5 to-transparent" />
    </div>
  )
}

export function ServicesSection() {
  return (
    <section className="relative py-20 md:py-32" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-cosmic-blue">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance text-foreground">
            Mission-Critical Solutions
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our collection of tech services spans every stage of your digital transformation.
            Explore how we help businesses ascend.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
