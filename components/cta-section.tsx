"use client"

import { useEffect, useRef, useState } from "react"
import { Github, GitlabIcon, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Alejandro-27",
    icon: Github,
    description: "Repositorios públicos y contribuciones",
    color: "hover:border-white/50 hover:bg-white/5",
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/Alejandro_g27",
    icon: GitlabIcon,
    description: "Proyectos y pipelines CI/CD",
    color: "hover:border-orange-500/50 hover:bg-orange-500/5",
  },
]

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contacto" ref={sectionRef} className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Content */}
        <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Conectemos
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {"¿Listo para llevar tu proyecto"}
            <br />
            <span className="text-primary">al siguiente nivel?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Estoy disponible para colaborar en proyectos desafiantes que requieran
            soluciones backend robustas y arquitecturas escalables.
          </p>
        </div>

        {/* Social Links */}
        <div 
          className={`grid sm:grid-cols-2 gap-6 mb-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm ${link.color} transition-all duration-300`}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-secondary/50 group-hover:bg-primary/10 transition-colors">
                  <link.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                </div>
                <ArrowRight className="ml-auto w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div 
          className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            asChild
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base rounded-xl"
          >
            <a href="mailto:cesaralejandrog67@gmail.com">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Contáctame
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div 
        className={`relative z-10 mt-24 pt-8 border-t border-border/50 text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        style={{ animationDelay: "0.6s" }}
      >
        <p className="text-sm text-muted-foreground">
          {new Date().getFullYear()} Alejandro. Construido con Next.js y desplegado en Vercel.
        </p>
      </div>
    </section>
  )
}
