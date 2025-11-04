import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { InteractiveFlyer } from "@/components/interactive-flyer"
import { ProgramsSection } from "@/components/programs-section"
import { NewsSection } from "@/components/news-section"
import { PartnersSection } from "@/components/partners-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <InteractiveFlyer />
        <ProgramsSection />
        <NewsSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
