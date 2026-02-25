"use client"

import { Rocket } from "lucide-react"
import { ServiceDetailPage } from "@/components/service-detail-page"

export default function MVPServicePage() {
  return (
    <ServiceDetailPage
      icon={Rocket}
      title="MVP Development"
      subtitle="Launch fast. Learn faster. Scale smarter."
      description="You have an idea that keeps you up at night. A product you can already see in your mind. The question is not whether it is good enough -- it is how quickly you can put it in front of real people and find out."
      longDescription="We have seen it happen too many times: brilliant founders spending months perfecting a product nobody asked for. That is why we built our MVP process differently. We start by sitting across the table from you -- not with wireframes, but with questions. What problem are you solving? Who feels that pain the most? What is the smallest version of your idea that would make them say 'I need this'? From there, we move fast. Within weeks, not months, you will have a living, breathing product in the hands of real users. We watch how they use it, listen to what they say, and iterate with you side by side. The goal is not a perfect launch. It is a smart one."
      color="cosmic-amber"
      accentClass="text-cosmic-amber"
      borderClass="border-amber-500/20 hover:border-amber-500/40"
      glowClass="bg-amber-500/15"
      features={[
        {
          title: "Discovery Sprint",
          description:
            "Intensive workshops where we map your product landscape, challenge assumptions, and distil the one experiment that matters most right now.",
        },
        {
          title: "Rapid Prototyping",
          description:
            "Interactive prototypes you can tap, click, and share -- built in days so you can feel your idea before a single line of production code is written.",
        },
        {
          title: "Lean Architecture",
          description:
            "A foundation that serves today without boxing you in tomorrow. Built to scale, but only when you are ready.",
        },
        {
          title: "User Testing Loops",
          description:
            "Real feedback from real users, woven into every sprint. We do not guess what works -- we measure it.",
        },
        {
          title: "Launch Strategy",
          description:
            "A go-to-market plan that includes beta access, early adopter outreach, and the dashboards to track your first wins.",
        },
        {
          title: "Post-Launch Iteration",
          description:
            "The launch is chapter one. We stay with you to read the data, listen to users, and keep improving what matters.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Ideation & Scoping",
          description:
            "We turn your vision into a clear set of priorities -- the core value proposition and the minimum feature set to prove it.",
        },
        {
          step: "02",
          title: "Design & Prototype",
          description:
            "High-fidelity prototypes tested with your target users before development begins. No guesswork.",
        },
        {
          step: "03",
          title: "Agile Development",
          description:
            "Two-week sprints with daily check-ins, continuous integration, and weekly demos so you are always in the loop.",
        },
        {
          step: "04",
          title: "Launch & Measure",
          description:
            "A coordinated release with full analytics, monitoring, and a structured pipeline for collecting feedback.",
        },
      ]}
      benefits={[
        "Go from idea to live product in weeks, not months",
        "Every decision backed by real user data, not assumptions",
        "A dedicated team of designers, engineers, and strategists",
        "Flexible engagement: fixed scope, retainer, or milestone-based",
        "Full intellectual property ownership from day one",
        "Post-launch support included to keep the momentum going",
      ]}
      techStack={[
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Vercel",
        "Figma",
        "Tailwind CSS",
        "Prisma",
        "Stripe",
        "Resend",
        "GitHub Actions",
      ]}
    />
  )
}
