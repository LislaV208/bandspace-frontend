import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/layouts/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { UserProvider } from '@auth0/nextjs-auth0/client'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BandSpace - Collaborate on Music Projects',
  description: 'A platform for amateur music bands to collaborate on projects, share audio files, and exchange feedback.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <UserProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="min-h-screen bg-background">
              {children}
            </main>
            <Toaster />
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  )
}