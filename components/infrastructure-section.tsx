"use client"

import { useEffect, useRef, useState } from "react"
import { Server, Cpu, Cloud, Container } from "lucide-react"

const skills = [
  {
    icon: Server,
    title: "Administración Linux",
    description: "Gestión avanzada de servidores Debian/Ubuntu con configuración de servicios, seguridad y monitoreo.",
    tags: ["Debian", "Ubuntu", "SSH", "systemd"],
  },
  {
    icon: Cpu,
    title: "Optimización de Kernel",
    description: "Ajuste de parámetros del kernel para máximo rendimiento en cargas de trabajo específicas.",
    tags: ["sysctl", "Performance", "Tuning"],
  },
  {
    icon: Cloud,
    title: "Despliegue en Vercel",
    description: "CI/CD automatizado, preview deployments y optimización de Edge Functions para aplicaciones globales.",
    tags: ["Vercel", "CI/CD", "Edge", "Serverless"],
  },
  {
    icon: Container,
    title: "Gestión de Contenedores",
    description: "Orquestación y administración de aplicaciones containerizadas para entornos de desarrollo y producción.",
    tags: ["Docker", "Compose", "Registry"],
  },
]

export function InfrastructureSection() {
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
    <section id="infraestructura" ref={sectionRef} className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            DevOps & Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Habilidades de Infraestructura
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiencia en gestión de servidores, optimización de sistemas y despliegue de aplicaciones
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`group relative p-8 rounded-2xl transition-all duration-500 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glassmorphism Card */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-card/80 via-card/50 to-card/30 backdrop-blur-xl border border-border/50 group-hover:border-primary/30 transition-colors duration-300" />
              
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon */}
                <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <skill.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {skill.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "3+", label: "Años de experiencia" },
            { value: "30+", label: "Proyectos completados" },
            { value: "99.9%", label: "Uptime promedio" },
            { value: "24/7", label: "Monitoreo activo" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
