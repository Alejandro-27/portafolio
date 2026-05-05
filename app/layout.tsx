import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: 'Alejandro | Backend Specialist & Systems Optimizer',
  description: 'Full-Stack Developer especializado en Backend, arquitecturas escalables y despliegue eficiente. Experto en Node.js, Django, Python y administración de sistemas Linux.',
  generator: 'v0.app',
  keywords: ['Backend Developer', 'Full-Stack', 'Node.js', 'Django', 'Python', 'React', 'Linux'],
  authors: [{ name: 'Alejandro' }],
  icons: {
      // Apunta a tu nuevo archivo para el icono estándar
      icon: '/apple-icon.png', 
      // También lo mantenemos para dispositivos Apple 
      apple: '/apple-icon.png',
    },
  }
}

export const viewport: Viewport = {
  themeColor: '#0a0f1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark bg-background">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
