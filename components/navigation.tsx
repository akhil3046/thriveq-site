"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group" aria-label="ThriveQ home">
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <div className="absolute inset-0 rounded-full bg-cosmic-blue/30 group-hover:bg-cosmic-blue/50 transition-colors" />
              <div className="absolute inset-1 rounded-full bg-cosmic-amber/60 group-hover:bg-cosmic-amber/80 transition-colors" />
              <div className="absolute inset-2.5 rounded-full bg-cosmic-teal/80 group-hover:bg-cosmic-teal transition-colors" />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight text-foreground">
              Thrive<span className="text-cosmic-blue">Q</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cosmic-blue transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2 text-sm font-medium rounded-lg bg-cosmic-blue/10 text-cosmic-blue border border-cosmic-blue/30 hover:bg-cosmic-blue/20 hover:border-cosmic-blue/60 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-64 pb-4" : "max-h-0"
          }`}
          role="menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
              role="menuitem"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-2 px-5 py-2.5 text-sm font-medium text-center rounded-lg bg-cosmic-blue/10 text-cosmic-blue border border-cosmic-blue/30 hover:bg-cosmic-blue/20 transition-all"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  )
}
