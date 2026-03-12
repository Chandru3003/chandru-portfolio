import { AnimatedBackground } from "@/components/animated-background"
import { Topbar } from "@/components/topbar"
import { Hero } from "@/components/hero"
import { Infrastructure } from "@/components/infrastructure"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050510]">
      <AnimatedBackground />
      <div className="relative z-10">
        <Topbar />
        <Hero />
        <Infrastructure />
        <Skills />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </main>
  )
}
