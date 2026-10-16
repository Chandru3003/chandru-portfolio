import type { Metadata, Viewport } from 'next'
import { Space_Mono, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Chandrasekar Vasan | AI Engineering · SRE · System Administrator',
  description: 'Personal portfolio of Chandrasekar Vasan (Chandru), MS CS @ UTA. Stateful AI agents, machine learning, Linux administration, Ansible automation, Prometheus monitoring, CI/CD, and virtualization.',
  generator: 'v0.app',
  keywords: ['AI Engineering', 'Machine Learning', 'Stateful Agents', 'LangGraph', 'XGBoost', 'System Administrator', 'Linux Administration', 'Ansible', 'Prometheus', 'CI/CD', 'GitHub Actions', 'GitLab CI', 'Virtualization', 'VirtualBox', 'SRE', 'Docker', 'PagerDuty'],
  authors: [{ name: 'Chandrasekar Vasan' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#050510',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
