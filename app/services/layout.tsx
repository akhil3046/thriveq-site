import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | ThriveQ",
    default: "Services | ThriveQ",
  },
  description:
    "Explore our mission-critical solutions: MVP development, website creation, custom AI agents, and CRM solutions.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
