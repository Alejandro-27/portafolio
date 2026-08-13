"use client"

import { useEffect, useRef, useState } from "react"
import {
  ExternalLink,
  Github,
  Gitlab,
  Recycle,
  ShoppingCart,
  Dumbbell,
  CheckSquare,
  Film,
  Wallet,
  Coffee,
  Database,
  Bot,
  Calendar,
  Send,
  Code,
  Smartphone,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "OptiTurno",
    subtitle: "Sistema de Gestión de Turnos",
    description:
      "Aplicación para optimización y gestión de turnos, diseñada para mejorar la asignación de horarios y la productividad del equipo.",
    icon: Calendar,
    tech: ["TypeScript", "React", "Node.js", "MongoDB"],
    features: [
      "Gestión inteligente de turnos",
      "Asignación automática de horarios",
      "Dashboard de productividad",
      "Notificaciones en tiempo real",
    ],
    gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
    accentColor: "text-teal-400",
    borderColor: "hover:border-teal-500/50",
    glowColor: "#10b981",
    repoUrl: "https://github.com/Alejandro-27/OptiTurno",
    platform: "github" as const,
    stars: 1,
  },
  {
    id: 2,
    title: "alerta-simica",
    subtitle: "Sistema de Alertas",
    description:
      "Plataforma de monitoreo y alertas inteligentes para sistemas y aplicaciones, con detección de anomalías y notificaciones en tiempo real.",
    icon: Bot,
    tech: ["TypeScript", "Node.js", "Fastify", "MongoDB"],
    features: [
      "Detección de anomalías en tiempo real",
      "Sistema de alertas configurable",
      "Dashboard de monitoreo",
      "Integración con múltiples canales",
    ],
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
    accentColor: "text-indigo-400",
    borderColor: "hover:border-indigo-500/50",
    glowColor: "#6366f1",
    repoUrl: "https://github.com/Alejandro-27/alerta-simica",
    platform: "github" as const,
    stars: 2,
  },
  {
    id: 3,
    title: "PARK",
    subtitle: "Sistema de Gestión de Reciclaje y Compostaje",
    description:
      "Plataforma integral para la gestión y seguimiento de procesos de reciclaje y compostaje. Incluye dashboards interactivos, reportes automatizados y seguimiento en tiempo real de materiales.",
    icon: Recycle,
    tech: ["React", "Node.js", "Mongoose", "MongoDB", "Express"],
    features: [
      "Dashboard analítico en tiempo real",
      "Gestión de puntos de recolección",
      "Reportes automatizados",
      "API RESTful escalable",
    ],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "text-emerald-400",
    borderColor: "hover:border-emerald-500/50",
    glowColor: "#10b981",
    repoUrl: "https://gitlab.com/Alejandro_g27/park",
    platform: "gitlab" as const,
    stars: 0,
  },
  {
    id: 4,
    title: "Nexura",
    subtitle: "Framework Full-Stack",
    description:
      "Framework y plataforma de desarrollo full-stack construida con TypeScript, diseñada para acelerar el desarrollo de aplicaciones escalables.",
    icon: Code,
    tech: ["TypeScript", "Node.js", "Fastify", "PostgreSQL"],
    features: [
      "Framework full-stack modulable",
      "Arquitectura escalable",
      "Integración con múltiples bases de datos",
      "Sistema de plugins extensible",
    ],
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accentColor: "text-blue-400",
    borderColor: "hover:border-blue-500/50",
    glowColor: "#3b82f6",
    repoUrl: "https://github.com/Alejandro-27/Nexura",
    platform: "github" as const,
    stars: 0,
  },
  {
    id: 5,
    title: "Element Commerce",
    subtitle: "Plataforma E-Commerce",
    description:
      "Sistema de comercio electrónico completo con gestión de productos, carrito de compras, procesamiento de pagos y panel de administración. Desarrollado con Bun.js.",
    icon: ShoppingCart,
    tech: ["JavaScript", "Bun.js", "Node.js", "MongoDB", "Express"],
    features: [
      "Catálogo de productos dinámico",
      "Carrito de compras persistente",
      "Sistema de pagos integrado",
      "Panel de administración",
    ],
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    accentColor: "text-orange-400",
    borderColor: "hover:border-orange-500/50",
    glowColor: "#f97316",
    repoUrl: "https://github.com/Alejandro-27/element-commerce",
    platform: "github" as const,
    stars: 1,
  },
  {
    id: 6,
    title: "Deportive",
    subtitle: "Gestión Deportiva - Colaboración",
    description:
      "Aplicación colaborativa para la gestión de actividades deportivas, equipos y torneos. Desarrollado en equipo utilizando metodologías ágiles.",
    icon: Dumbbell,
    tech: ["JavaScript", "Express", "MongoDB", "Node.js", "JWT"],
    features: [
      "Gestión de equipos y jugadores",
      "Calendario de eventos deportivos",
      "Sistema de puntuaciones",
      "Reportes estadísticos",
    ],
    gradient: "from-red-500/20 via-rose-500/10 to-transparent",
    accentColor: "text-red-400",
    borderColor: "hover:border-red-500/50",
    glowColor: "#ef4444",
    repoUrl: "https://gitlab.com/rizofredy5/deportive",
    platform: "gitlab" as const,
    stars: 0,
  },
  {
    id: 7,
    title: "WhatsApp Sender",
    subtitle: "Herramienta de Envío de Mensajes",
    description:
      "Herramienta para el envío automatizado de mensajes de WhatsApp, con soporte para envío masivo y personalización de contenidos.",
    icon: Send,
    tech: ["Python", "Flask", "WhatsApp API"],
    features: [
      "Envío masivo de mensajes",
      "Plantillas personalizables",
      "Reportes de mensajes enviados",
      "Programación de envíos",
    ],
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    accentColor: "text-green-400",
    borderColor: "hover:border-green-500/50",
    glowColor: "#22c55e",
    repoUrl: "https://github.com/Alejandro-27/WhatsApp_Sender",
    platform: "github" as const,
    stars: 1,
  },
  {
    id: 8,
    title: "Task Manager",
    subtitle: "Gestor de Tareas en PHP",
    description:
      "Aplicación web para la gestión de tareas personales y de equipo con autenticación, categorización y seguimiento de progreso.",
    icon: CheckSquare,
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "CRUD completo de tareas",
      "Sistema de autenticación",
      "Categorización de tareas",
      "Filtros y búsqueda avanzada",
    ],
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    accentColor: "text-violet-400",
    borderColor: "hover:border-violet-500/50",
    glowColor: "#8b5cf6",
    repoUrl: "https://github.com/Alejandro-27/Task-Manager-PHP",
    platform: "github" as const,
    stars: 0,
  },
  {
    id: 9,
    title: "API Movie",
    subtitle: "API RESTful de Películas",
    description:
      "API RESTful para gestión de catálogo de películas con endpoints para búsqueda, filtrado y gestión de favoritos.",
    icon: Film,
    tech: ["Node.js", "Express", "MongoDB", "REST API"],
    features: [
      "Endpoints RESTful completos",
      "Búsqueda y filtrado avanzado",
      "Documentación de API",
      "Autenticación JWT",
    ],
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    accentColor: "text-rose-400",
    borderColor: "hover:border-rose-500/50",
    glowColor: "#f43f5e",
    repoUrl: "https://github.com/Alejandro-27/API-MOVIE",
    platform: "github" as const,
    stars: 0,
  },
  {
    id: 10,
    title: "Gestión de Gastos",
    subtitle: "Control Financiero Personal",
    description:
      "Aplicación para el seguimiento y control de gastos personales con categorización, gráficos y reportes mensuales.",
    icon: Wallet,
    tech: ["Python", "Django", "SQL Server", "Chart.js"],
    features: [
      "Registro de ingresos y gastos",
      "Categorización automática",
      "Gráficos estadísticos",
      "Reportes exportables",
    ],
    gradient: "from-green-500/20 via-lime-500/10 to-transparent",
    accentColor: "text-green-400",
    borderColor: "hover:border-green-500/50",
    glowColor: "#22c55e",
    repoUrl: "https://github.com/Alejandro-27/gestion_gastos",
    platform: "github" as const,
    stars: 0,
  },
  {
    id: 11,
    title: "Cafetería",
    subtitle: "Sistema POS para Cafetería",
    description:
      "Sistema de punto de venta para cafeterías con gestión de menú, órdenes, inventario y reportes de ventas.",
    icon: Coffee,
    tech: ["HTML", "CSS", "Bootstrap", "jQuery", "JavaScript"],
    features: [
      "Gestión de menú y precios",
      "Sistema de órdenes",
      "Control de inventario",
      "Reportes de ventas",
    ],
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    accentColor: "text-amber-400",
    borderColor: "hover:border-amber-500/50",
    glowColor: "#f59e0b",
    repoUrl: "https://github.com/Alejandro-27/cafeteria",
    platform: "github" as const,
    stars: 0,
  },
  {
    id: 12,
    title: "CRUD Flask",
    subtitle: "API CRUD con Flask",
    description:
      "API RESTful desarrollada con Flask implementando operaciones CRUD completas con validación y manejo de errores.",
    icon: Database,
    tech: ["Python", "Flask", "SQL Server", "REST API"],
    features: [
      "Operaciones CRUD completas",
      "Validación de datos",
      "Manejo de errores",
      "Documentación Swagger",
    ],
    gradient: "from-cyan-500/20 via-teal-500/10 to-transparent",
    accentColor: "text-cyan-400",
    borderColor: "hover:border-cyan-500/50",
    glowColor: "#06b6d4",
    repoUrl: "https://github.com/Alejandro-27/crud_flask",
    platform: "github" as const,
    stars: 0,
  },
  {
    id: 13,
    title: "Movil",
    subtitle: "Aplicación Móvil Responsive",
    description:
      "Aplicación móvil y responsive desarrollada con TypeScript, con enfoque en UI adaptativa y experiencia de usuario fluida.",
    icon: Smartphone,
    tech: ["TypeScript", "React", "Tailwind CSS", "Vite"],
    features: [
      "Diseño responsive móvil",
      "UI adaptativa cross-device",
      "Navegación fluida",
      "Integración con APIs",
    ],
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    accentColor: "text-purple-400",
    borderColor: "hover:border-purple-500/50",
    glowColor: "#a855f7",
    repoUrl: "https://github.com/Alejandro-27/movil",
    platform: "github" as const,
    stars: 0,
  },
  {
    id: 14,
    title: "Multiple Request",
    subtitle: "Herramienta de Requests Concurrentes",
    description:
      "Herramienta para el manejo de múltiples requests concurrentes, optimizada para pruebas de carga y rendimiento de APIs.",
    icon: Zap,
    tech: ["JavaScript", "Node.js", "Axios"],
    features: [
      "Requests concurrentes",
      "Pruebas de carga",
      "Reportes de rendimiento",
      "Configuración de endpoints",
    ],
    gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
    accentColor: "text-yellow-400",
    borderColor: "hover:border-yellow-500/50",
    glowColor: "#eab308",
    repoUrl: "https://github.com/Alejandro-27/multiple-request",
    platform: "github" as const,
    stars: 0,
  },
  {
    id: 15,
    title: "Factory Code Errors",
    subtitle: "Framework de Manejo de Errores",
    description:
      "Framework de Python para el manejo estructurado y centralizado de errores en el código, con logging y reportes.",
    icon: Code,
    tech: ["Python", "OOP", "Logging"],
    features: [
      "Manejo centralizado de errores",
      "Sistema de logging configurable",
      "Reportes de errores",
      "Integración sencilla",
    ],
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    accentColor: "text-pink-400",
    borderColor: "hover:border-pink-500/50",
    glowColor: "#ec4899",
    repoUrl: "https://github.com/Alejandro-27/factory_code_errors",
    platform: "github" as const,
    stars: 0,
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

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
      id="proyectos"
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-teal-500/10 text-teal-500 text-sm font-medium mb-4 border border-teal-500/20">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones completas desarrolladas con las mejores prácticas y
            tecnologías modernas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.07}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className={`relative h-full rounded-2xl border border-border/50 ${project.borderColor} transition-all duration-500 overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="absolute inset-0 bg-card/60 backdrop-blur-xl" />

                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-xl bg-secondary/50 ${project.accentColor} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <project.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p
                          className={`text-xs ${project.accentColor} flex items-center gap-1`}
                        >
                          {project.subtitle}
                          {project.stars > 0 && (
                            <>
                              <span>•</span>
                              <span className="flex items-center gap-0.5">
                                ★ {project.stars}
                              </span>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.platform === "github" ? (
                        <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      ) : (
                        <Gitlab className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <span
                          className={`w-1 h-1 rounded-full ${project.accentColor.replace("text-", "bg-")}`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-secondary/80 text-secondary-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`absolute -bottom-16 -right-16 w-32 h-32 rounded-full blur-[60px] transition-opacity duration-500 ${
                    hoveredProject === project.id ? "opacity-30" : "opacity-0"
                  }`}
                  style={{ backgroundColor: project.glowColor }}
                />
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-4">
          <Button
            variant="outline"
            className="border-teal-500/30 hover:border-teal-500 hover:bg-teal-500/10"
            asChild
          >
            <a
              href="https://github.com/Alejandro-27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              Ver más en GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            className="border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10"
            asChild
          >
            <a
              href="https://gitlab.com/Alejandro_g27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Gitlab className="mr-2 h-4 w-4" />
              Ver más en GitLab
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
