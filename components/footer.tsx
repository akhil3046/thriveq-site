import Link from "next/link"

const footerLinks = {
  services: [
    { label: "MVP Development", href: "/services/mvp" },
    { label: "Website Creation", href: "/services/website" },
    { label: "Custom AI Agents", href: "/services/ai-agents" },
    { label: "CRM Solutions", href: "/services/crm" },
  ],
  company: [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Get Started", href: "/contact" },
  ],
  connect: [
    { label: "LinkedIn", href: "#" },
    { label: "X / Twitter", href: "#" },
    { label: "GitHub", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-full bg-cosmic-blue/30" />
                <div className="absolute inset-1 rounded-full bg-cosmic-amber/60" />
                <div className="absolute inset-2.5 rounded-full bg-cosmic-teal/80" />
              </div>
              <span className="text-lg font-bold text-foreground">
                Thrive<span className="text-cosmic-blue">Q</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Engineering digital solutions that transcend boundaries. Your vision, our launchpad.
            </p>
            <p className="text-xs text-muted-foreground mt-3">
              thriveqservices@gmail.com
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Connect</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            2026 ThriveQ. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Engineered with precision from India.
          </p>
        </div>
      </div>
    </footer>
  )
}
