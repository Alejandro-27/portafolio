"use client"

import { useEffect, useRef, useState } from "react"
import {
  Server,
  Cpu,
  Cloud,
  Container,
  GitBranch,
  Database,
  Shield,
  Monitor,
} from "lucide-react"

const infraSkills = [
  {
    icon: Server,
    title: "Administración Linux",
    description:
      "Gestión avanzada de servidores Debian/Ubuntu con configuración de servicios, seguridad y monitoreo.",
    tags: ["Debian", "Ubuntu", "SSH", "systemd"],
  },
  {
    icon: Cpu,
    title: "Optimización de Kernel",
    description:
      "Ajuste de parámetros del kernel para máximo rendimiento en cargas de trabajo específicas.",
    tags: ["sysctl", "Performance", "Tuning"],
  },
  {
    icon: Cloud,
    title: "Despliegue en Vercel",
    description:
      "CI/CD automatizado, preview deployments y optimización de Edge Functions para aplicaciones globales.",
    tags: ["Vercel", "CI/CD", "Edge", "Serverless"],
  },
  {
    icon: Container,
    title: "Gestión de Contenedores",
    description:
      "Orquestación y administración de aplicaciones containerizadas con Docker y Docker Compose para entornos de desarrollo y producción.",
    tags: ["Docker", "Compose", "Registry"],
  },
  {
    icon: GitBranch,
    title: "Git & GitHub Workflows",
    description:
      "Trabajo con ramas, pull requests y pipelines de CI/CD para mantener flujos de trabajo colaborativos y automatizados.",
    tags: ["Git", "GitHub Actions", "Branches"],
  },
  {
    icon: Database,
    title: "Diseño de Bases de Datos",
    description:
      "Diseño e implementación de esquemas de bases de datos relacionales y no relacionales, optimización de consultas.",
    tags: ["MongoDB", "PostgreSQL", "MySQL", "SQL Server"],
  },
  {
    icon: Shield,
    title: "Autenticación y Autorización",
    description:
      "Implementación de sistemas seguros de autenticación JWT y control de acceso basado en roles.",
    tags: ["JWT", "OAuth", "Security"],
  },
  {
    icon: Monitor,
    title: "Ambientes Linux",
    description:
      "Administración de entornos de servidor Linux, configuración de servicios, monitoreo y gestión de usuarios.",
    tags: ["Linux", "Bash", "systemd", "Firewall"],
  },
]

const stats = [
  { value: "3+", label: "Años de experiencia" },
  { value: "30+", label: "Proyectos completados" },
  { value: "24+", label: "Repositorios públicos" },
  { value: "99.9%", label: "Uptime promedio" },
]

export function InfrastructureSection() {
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
      id="infraestructura"
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/3 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/3 dark:bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-teal-500/10 text-teal-500 text-sm font-medium mb-4 border border-teal-500/20">
            DevOps & Infraestructura
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Habilidades de Infraestructura
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiencia en gestión de servidores, optimización de sistemas,
            contenedores y despliegue de aplicaciones
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Backend and DevOps — Experience and knowledge in:
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "RESTful API development",
              "JWT authentication and authorization",
              "Backend architecture",
              "Database design and management",
              "Docker and Docker Compose",
              "Containerized development environments",
              "Git and GitHub workflows",
              "Linux server environments",
              "API integration",
              "Application deployment",
              "Environment configuration",
            ].map((skill, index) => (
              <div
                key={skill}
                className={`flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border/30 hover:border-teal-500/30 hover:bg-card/80 transition-all ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-2 h-2 rounded-full bg-teal-400 flex-shrink-0" />
                <span className="text-sm text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {infraSkills.map((skill, index) => (
            <div
              key={skill.title}
              className={`group relative p-8 rounded-2xl ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-card/80 via-card/50 to-card/30 backdrop-blur-xl border border-border/50 group-hover:border-teal-500/30 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-2xl bg-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="inline-flex p-4 rounded-xl bg-teal-500/10 text-teal-500 mb-6 group-hover:bg-teal-500/20 transition-colors">
                  <skill.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {skill.description}
                </p>
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

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-teal-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
