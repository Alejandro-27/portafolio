"use client"

import { useEffect, useRef, useState } from "react"
import { Github, GitlabIcon, Mail, ArrowRight, Send, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Alejandro-27",
    icon: Github,
    description: "24 repositorios públicos, 8 estrellas",
    color: "hover:border-white/50 hover:bg-white/5",
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/Alejandro_g27",
    icon: GitlabIcon,
    description: "Proyectos y pipelines CI/CD",
    color: "hover:border-fuchsia-500/50 hover:bg-fuchsia-500/5",
  },
  {
    name: "Email",
    href: "mailto:cesaralejandrog67@gmail.com",
    icon: Mail,
    description: "cesaralejandrog67@gmail.com",
    color: "hover:border-teal-500/50 hover:bg-teal-500/5",
  },
]

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-teal-500/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className={`mb-6 ${isVisible ? "animate-fade-in opacity-100" : "opacity-0"}`}
          style={{ animationDelay: "0.1s" }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-teal-500/10 text-teal-500 text-sm font-medium border border-teal-500/20">
            Conectemos
          </span>
        </div>

        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          {"¿Listo para llevar tu proyecto"}
          <br />
          <span className="text-teal-500">al siguiente nivel?</span>
        </h2>

        <p
          className={`text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          Estoy disponible para colaborar en proyectos desafiantes que requieran
          soluciones backend robustas, APIs escalables, arquitecturas de
          microservicios y despliegue eficiente en la nube.
        </p>

        <div
          className={`grid sm:grid-cols-3 gap-6 mb-12 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm ${link.color} transition-all duration-300 flex flex-col items-center text-center`}
            >
              <div className="p-3 rounded-xl bg-secondary/50 group-hover:bg-teal-500/10 transition-colors mb-4">
                <link.icon className="w-6 h-6 text-foreground group-hover:text-teal-500 transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-teal-500 transition-colors mb-1">
                {link.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {link.description}
              </p>
            </a>
          ))}
        </div>

        <div
          className={`flex justify-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            size="lg"
            className="group bg-teal-600 hover:bg-teal-700 text-primary-foreground px-10 py-6 text-base rounded-xl shadow-lg shadow-teal-500/25"
            asChild
          >
            <Link href="mailto:cesaralejandrog67@gmail.com">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Contáctame
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      <div
        className={`relative z-10 mt-24 pt-8 border-t border-border/50 text-center ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`}
        style={{ animationDelay: "0.7s" }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>
            © {new Date().getFullYear()} Alejandro Gómez. Construido con Next.js,
            TypeScript y Tailwind CSS.
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Desplegado en Vercel
          </span>
        </div>
      </div>
    </section>
  )
}
