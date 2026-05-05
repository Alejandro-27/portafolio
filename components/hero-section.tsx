"use client"

import { useEffect, useRef } from "react"
import { ArrowDown, Github, GitlabIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      container.style.setProperty("--mouse-x", `${x}px`)
      container.style.setProperty("--mouse-y", `${y}px`)
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
          oklch(0.65 0.2 250 / 0.15) 0%, 
          transparent 50%),
          linear-gradient(180deg, oklch(0.12 0.01 250) 0%, oklch(0.10 0.01 250) 100%)
        `,
      }}
    >
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.65 0.2 250) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.65 0.2 250) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary font-medium">Disponible para nuevos proyectos</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-foreground">Alejandro</span>
          <span className="text-primary"> | </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary">
            Backend Specialist
          </span>
          <br />
          <span className="text-muted-foreground text-2xl sm:text-3xl md:text-4xl font-normal mt-2 block">
            & Systems Optimizer
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Desarrollador Full-Stack especializado en{" "}
          <span className="text-primary font-medium">arquitecturas escalables</span>,{" "}
          <span className="text-primary font-medium">optimización de sistemas</span> y{" "}
          <span className="text-primary font-medium">despliegue eficiente</span>.
          Transformando ideas complejas en soluciones robustas.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button
            asChild
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base rounded-xl"
          >
            <a href="https://github.com/Alejandro-27" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group border-primary/30 hover:border-primary hover:bg-primary/10 text-foreground px-8 py-6 text-base rounded-xl backdrop-blur-sm"
          >
            <a href="https://gitlab.com/Alejandro_g27" target="_blank" rel="noopener noreferrer">
              <GitlabIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              GitLab
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#stack" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs uppercase tracking-wider">Explorar</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Animated code snippets */}
      <div className="hidden lg:block absolute left-8 top-1/3 text-xs font-mono text-muted-foreground/30 animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <pre>{`const server = express();
server.listen(3000);`}</pre>
      </div>
      <div className="hidden lg:block absolute right-8 bottom-1/3 text-xs font-mono text-muted-foreground/30 animate-fade-in" style={{ animationDelay: "0.7s" }}>
        <pre>{`def optimize_query():
    return cache.get()`}</pre>
      </div>
    </section>
  )
}
