import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get in Touch | ThriveQ",
  description:
    "Start your mission with ThriveQ. Tell us about your project and select the services you need.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
