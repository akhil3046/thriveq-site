import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { StarField } from "@/components/star-field"

export default function HomePage() {
  return (
    <>
      <StarField />
      <div className="relative z-10">
        <Navigation />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  )
}
