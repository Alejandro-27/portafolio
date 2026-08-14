"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, systemTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark"
    setTheme(next)
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      title={mounted ? (isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro") : "Toggle theme"}
      onClick={toggleTheme}
      className={cn(
        "relative isolate flex h-9 w-9 items-center justify-center rounded-xl",
        "border border-border bg-muted/50 text-foreground",
        "hover:bg-muted hover:text-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "transition-all duration-200",
        className,
      )}
    >
      <Sun
        suppressHydrationWarning
        className={cn(
          "h-4 w-4 transition-all duration-300",
          "absolute scale-100 opacity-100 rotate-0",
          mounted && isDark && "scale-75 opacity-0 rotate-90",
        )}
      />
      <Moon
        suppressHydrationWarning
        className={cn(
          "h-4 w-4 transition-all duration-300",
          "absolute scale-75 opacity-0 rotate-90",
          mounted && isDark && "scale-100 opacity-100 rotate-0",
        )}
      />
    </button>
  )
}
