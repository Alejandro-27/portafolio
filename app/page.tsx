import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TechStack } from "@/components/tech-stack"
import { InfrastructureSection } from "@/components/infrastructure-section"
import { ProjectsSection } from "@/components/projects-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <TechStack />
      <InfrastructureSection />
      <ProjectsSection />
      <CTASection />
    </main>
  )
}
