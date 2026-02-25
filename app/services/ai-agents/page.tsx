"use client"

import { Bot } from "lucide-react"
import { ServiceDetailPage } from "@/components/service-detail-page"

export default function AIAgentsServicePage() {
  return (
    <ServiceDetailPage
      icon={Bot}
      title="Custom AI Agents"
      subtitle="Intelligent systems that learn, adapt, and automate."
      description="Imagine a team member who never sleeps, never forgets, and gets smarter with every conversation. That is what a well-built AI agent can be for your business."
      longDescription="A few years ago, AI was a buzzword. Today, it is the difference between a team drowning in repetitive work and one that focuses on what actually matters. We do not build chatbots that parrot scripts -- we build agents that understand context, reason through problems, and take meaningful action. Picture this: a support agent that resolves complex queries before your human team even logs in. An internal assistant that has read every document your company has ever produced and can surface the right answer in seconds. A data engine that spots patterns in your numbers and tells you what to do about them. That is what we build -- and we build it to feel like it belongs in your workflow, not bolted on as an afterthought."
      color="cosmic-teal"
      accentClass="text-cosmic-teal"
      borderClass="border-teal-500/20 hover:border-teal-500/40"
      glowClass="bg-teal-500/15"
      features={[
        {
          title: "Conversational AI",
          description:
            "Natural language interfaces that understand intent, maintain context, and handle edge cases with nuance -- not canned responses.",
        },
        {
          title: "Task Automation",
          description:
            "Multi-step workflows that run on autopilot, with smart decision routing, error handling, and escalation when it matters.",
        },
        {
          title: "Knowledge Synthesis",
          description:
            "Agents that ingest your documents, data, and systems to deliver accurate, source-cited answers whenever your team needs them.",
        },
        {
          title: "Custom Model Training",
          description:
            "Fine-tuned models that speak your industry language and understand your business logic for maximum relevance.",
        },
        {
          title: "Multi-System Integration",
          description:
            "Seamless connections to your existing tools via APIs and webhooks, so agents can take action across your entire stack.",
        },
        {
          title: "Monitoring & Safety",
          description:
            "Full observability with conversation logs, performance dashboards, safety guardrails, and human-in-the-loop review.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Use Case Discovery",
          description:
            "We find the high-impact opportunities in your workflows, map the data, and define what success looks like for the agent.",
        },
        {
          step: "02",
          title: "Architecture Design",
          description:
            "Choosing the right models, embeddings, vector stores, and orchestration patterns -- tailored to your specific needs.",
        },
        {
          step: "03",
          title: "Build & Fine-Tune",
          description:
            "Iterative development with continuous evaluation, prompt engineering, and safety testing woven into every cycle.",
        },
        {
          step: "04",
          title: "Deploy & Monitor",
          description:
            "Production deployment with real-time monitoring, automated regression tests, and a pipeline for continuous improvement.",
        },
      ]}
      benefits={[
        "Reduce manual task handling by up to 80% with intelligent automation",
        "24/7 operational capability without scaling headcount",
        "Domain-specific models that outperform generic off-the-shelf solutions",
        "Built-in safety guardrails and compliance from the start",
        "Architecture that scales seamlessly with your growth",
        "Transparent pricing with no per-token surprises",
      ]}
      techStack={[
        "OpenAI",
        "Anthropic",
        "LangChain",
        "Vercel AI SDK",
        "Pinecone",
        "PostgreSQL",
        "Python",
        "TypeScript",
        "Redis",
        "Docker",
        "FastAPI",
        "Hugging Face",
      ]}
    />
  )
}
