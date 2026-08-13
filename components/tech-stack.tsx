"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const technologyCategories = [
  {
    title: "Languages",
    description: "Programming languages I use daily",
    items: [
      { name: "JavaScript", badge: "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge" },
      { name: "TypeScript", badge: "https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge" },
      { name: "Python", badge: "https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff&style=for-the-badge" },
      { name: "PHP", badge: "https://img.shields.io/badge/PHP-4F5D93?logo=php&logoColor=fff&style=for-the-badge" },
      { name: "Java", badge: "https://img.shields.io/badge/Java-007396?logo=java&logoColor=fff&style=for-the-badge" },
    ],
  },
  {
    title: "Backend",
    description: "Server-side frameworks and runtimes",
    items: [
      { name: "Node.js", badge: "https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=fff&style=for-the-badge" },
      { name: "Express.js", badge: "https://img.shields.io/badge/Express-000000?logo=express&logoColor=fff&style=for-the-badge" },
      { name: "Fastify", badge: "https://img.shields.io/badge/Fastify-100000?logo=fastify&logoColor=%2300c2cb&style=for-the-badge" },
      { name: "Django", badge: "https://img.shields.io/badge/Django-092E20?logo=django&logoColor=white&style=for-the-badge" },
    ],
  },
  {
    title: "Frontend",
    description: "Client-side technologies and frameworks",
    items: [
      { name: "React", badge: "https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB&style=for-the-badge" },
      { name: "Tailwind CSS", badge: "https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwind-css&logoColor=white&style=for-the-badge" },
      { name: "Vite", badge: "https://img.shields.io/badge/Vite-000000?logo=vite&logoColor=%23646CFF&style=for-the-badge" },
      { name: "HTML5", badge: "https://img.shields.io/badge/HTML5-E34F2A?logo=html5&logoColor=white&style=for-the-badge" },
      { name: "CSS3", badge: "https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge" },
    ],
  },
  {
    title: "Databases",
    description: "Database technologies I work with",
    items: [
      { name: "MongoDB", badge: "https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=for-the-badge" },
      { name: "PostgreSQL", badge: "https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=fff&style=for-the-badge" },
      { name: "MySQL", badge: "https://img.shields.io/badge/MySQL-00000F?logo=mysql&logoColor=white&style=for-the-badge" },
      { name: "SQL Server", badge: "https://img.shields.io/badge/SQL_Server-CC291F?logo=microsoft-sql-server&logoColor=fff&style=for-the-badge" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    description: "Tools for deployment and operations",
    items: [
      { name: "Docker", badge: "https://img.shields.io/badge/Docker-2499EF?logo=docker&logoColor=000&style=for-the-badge" },
      { name: "Docker Compose", badge: "https://img.shields.io/badge/Docker_Compose-2499EF?logo=docker&logoColor=000&style=for-the-badge" },
      { name: "Git", badge: "https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=for-the-badge" },
      { name: "Linux", badge: "https://img.shields.io/badge/Linux-000000?logo=linux&logoColor=fff&style=for-the-badge" },
    ],
  },
  {
    title: "Development Tools",
    description: "Tools that boost my productivity",
    items: [
      { name: "VS Code", badge: "https://img.shields.io/badge/VS_Code-0078D4?logo=visual-studio-code&logoColor=000&style=for-the-badge" },
      { name: "GitHub", badge: "https://img.shields.io/badge/GitHub-000000?logo=github&logoColor=fff&style=for-the-badge" },
      { name: "Postman", badge: "https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=000&style=for-the-badge" },
    ],
  },
]

export function TechStack() {
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
      id="stack"
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-teal-500/3 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[250px] bg-cyan-500/3 dark:bg-cyan-500/5 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-teal-500/10 text-teal-500 text-sm font-medium mb-4 border border-teal-500/20">
            Tecnologías
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Stack Tecnológico
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas que utilizo para construir soluciones robustas y escalables
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {technologyCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={
                isVisible ? "animate-fade-in opacity-100" : "opacity-0"
              }
              style={{ animationDelay: `${catIndex * 0.15}s` }}
            >
              <div className="mb-6 text-center">
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {category.description}
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-3">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative"
                    title={tech.name}
                  >
                    <div className="absolute -inset-1 rounded-xl bg-teal-500/5 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                    <Image
                      src={tech.badge}
                      alt={tech.name}
                      width={160}
                      height={40}
                      className="h-10 w-auto object-contain filter grayscale-[0.3] group-hover:grayscale-0 transition-all duration-300 group-hover:brightness-110"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
