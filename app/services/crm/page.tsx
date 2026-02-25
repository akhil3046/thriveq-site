"use client"

import { BarChart3 } from "lucide-react"
import { ServiceDetailPage } from "@/components/service-detail-page"

export default function CRMServicePage() {
  return (
    <ServiceDetailPage
      icon={BarChart3}
      title="CRM Solutions"
      subtitle="Navigate your customer universe with precision."
      description="Every growing business reaches a moment where spreadsheets stop making sense and sticky notes start falling off the wall. That is where a CRM built around your workflow changes everything."
      longDescription="Here is what we have learned working with businesses across India: off-the-shelf CRM tools force you to change how you work to fit their logic. They are built for everyone, which means they are built for no one in particular. We flip that equation. We sit with your sales team, your support team, your operations team -- the people who actually live inside the system every day -- and we build something that mirrors how they already think. The result is a single source of truth for every customer relationship. A place where leads do not fall through the cracks, follow-ups happen on time, and your leadership team can see exactly what is working and what is not -- all without asking for a report. Your team ends up with a tool they actually want to open in the morning."
      color="primary"
      accentClass="text-cosmic-blue"
      borderClass="border-blue-400/20 hover:border-blue-400/40"
      glowClass="bg-blue-400/15"
      features={[
        {
          title: "Customer Analytics",
          description:
            "Real-time dashboards with cohort analysis, lifetime value tracking, and custom KPIs that tell you the story behind your numbers.",
        },
        {
          title: "Pipeline Management",
          description:
            "Visual deal pipelines with drag-and-drop stages, automated follow-ups, and forecasting that helps you plan confidently.",
        },
        {
          title: "Custom Workflows",
          description:
            "Automated processes triggered by customer actions, time-based rules, or manual inputs -- cutting hours of repetitive work.",
        },
        {
          title: "Reporting Engine",
          description:
            "A flexible report builder with templates, scheduled exports, and role-based visibility so every stakeholder sees what matters to them.",
        },
        {
          title: "Email & Communication",
          description:
            "Integrated email tracking, template management, and multi-channel logging that captures every touchpoint automatically.",
        },
        {
          title: "API & Integrations",
          description:
            "Open API architecture with pre-built connectors, webhook support, and custom integrations for your existing tools.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Workflow Mapping",
          description:
            "We document your current customer lifecycle, sales process, and data flows to design a system that fits like a glove.",
        },
        {
          step: "02",
          title: "Data Architecture",
          description:
            "Schema design, migration planning, and data cleaning so your CRM launches with clean, well-structured information.",
        },
        {
          step: "03",
          title: "Build & Integrate",
          description:
            "Modular development with progressive rollouts -- each feature battle-tested before the next one ships.",
        },
        {
          step: "04",
          title: "Train & Support",
          description:
            "Hands-on team training, documentation, and ongoing support to make sure adoption is smooth and lasting.",
        },
      ]}
      benefits={[
        "A system designed around your processes, not generic templates",
        "Full ownership of your customer data with no vendor lock-in",
        "Automation that saves your team hours of manual work daily",
        "Real-time visibility into pipeline health and team performance",
        "Architecture that handles growth without slowing down",
        "A dedicated support team who knows your implementation inside out",
      ]}
      techStack={[
        "Next.js",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "Chart.js",
        "Resend",
        "Vercel",
        "Supabase",
        "Tailwind CSS",
        "Zod",
      ]}
    />
  )
}
