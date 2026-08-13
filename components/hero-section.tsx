"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown, Github, GitlabIcon, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

type TypedTextProps = {
  texts: string[]
  className?: string
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const roles = [
    "Backend Specialist",
    "Full-Stack Developer",
    "Systems Optimizer",
    "DevOps Enthusiast",
  ]

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, 
          oklcl(0.62 0.18 180 / 0.12) 0%, 
          transparent 55%),
          linear-gradient(180deg, oklch(0.09 0.01 250) 0%, oklcl(0.07 0 250) 100%)
        `,
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal-500/5 blur-[80px] dark:bg-teal-500/10 animate-pulse-slow"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px] dark:bg-cyan-500/8 animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-emerald-500/3 blur-[60px] animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
            Disponible para nuevos proyectos
          </span>
        </div>

        {/* Avatar */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-2 border-teal-500/20 shadow-xl">
            <img
              src="https://avatars.githubusercontent.com/u/111201111?v=4"
              alt="Alejandro Gómez"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center border-2 border-background">
              <Github className="w-4 h-4 text-background" />
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-foreground">Hi, I&apos;m</span>
          <br />
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500">
              Alejandro
            </span>
            <span className="text-foreground"> Gómez</span>
          </span>
        </h1>

        {/* Animated role subtitle */}
        <div
          className="mb-8 h-10 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <TypedText texts={roles} />
        </div>

        {/* Bio */}
        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          I&apos;m a{" "}
          <span className="text-foreground font-medium">Full-Stack Developer</span>{" "}
          focused on building <span className="text-teal-500 font-medium">scalable</span>,{" "}
          <span className="text-teal-500 font-medium">maintainable</span> and{" "}
          <span className="text-teal-500 font-medium">efficient applications</span>.
          <br className="hidden sm:block" />
          My main interests are <span className="text-cyan-500 font-medium">Backend Development</span>,{" "}
          <span className="text-cyan-500 font-medium">APIs</span>,{" "}
          <span className="text-cyan-500 font-medium">databases</span>,{" "}
          <span className="text-cyan-500 font-medium">software architecture</span> and{" "}
          <span className="text-cyan-500 font-medium">DevOps</span>.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            size="lg"
            className="group bg-teal-600 hover:bg-teal-700 text-primary-foreground px-8 py-6 text-base rounded-xl shadow-lg shadow-teal-500/20"
            asChild
          >
            <Link href="https://github.com/Alejandro-27" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              GitHub
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group border-teal-500/30 hover:border-teal-500 hover:bg-teal-500/10 text-foreground px-8 py-6 text-base rounded-xl"
            asChild
          >
            <Link href="https://gitlab.com/Alejandro_g27" target="_blank" rel="noopener noreferrer">
              <GitlabIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              GitLab
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group border-teal-500/30 hover:border-teal-500 hover:bg-teal-500/10 text-foreground px-8 py-6 text-base rounded-xl"
            asChild
          >
            <a
              href="/Alejandro_Gomez_CV.pdf"
              download
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              CV
            </a>
          </Button>
        </div>

        {/* Theme toggle (desktop hidden, mobile visible) */}
        <div className="mt-8 md:hidden flex justify-center">
          <ThemeToggle />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            href="#stack"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-teal-500 transition-colors"
          >
            <span className="text-xs uppercase tracking-wider">Explorar</span>
            <ArrowDown className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function TypedText({ texts }: { texts: string[] }) {
  const [current, setCurrent] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const fullText = texts[current]

    if (!isDeleting) {
      if (displayed.length < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayed(fullText.slice(0, displayed.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setIsDeleting(true), 2500)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayed.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(fullText.slice(0, displayed.length - 1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setIsDeleting(false)
        setCurrent((c) => (c + 1) % texts.length)
      }
    }
  }, [displayed, isDeleting, current, texts])

  return (
    <span className="text-2xl sm:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-400">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  )
}
