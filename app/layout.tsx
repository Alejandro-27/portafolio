import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Alejandro Gómez | Full-Stack & Backend Specialist',
  description:
    'Full-Stack Developer especializado en Backend, arquitecturas escalables, APIs y DevOps. Experto en Node.js, TypeScript, Django, Docker y administración de sistemas Linux.',
  generator: 'Next.js',
  keywords: [
    'Backend Developer', 'Full-Stack', 'Node.js', 'TypeScript', 'Django',
    'Python', 'React', 'Docker', 'DevOps', 'Linux', 'APIs',
  ],
  authors: [{ name: 'Alejandro Gómez', url: 'https://github.com/Alejandro-27' }],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
