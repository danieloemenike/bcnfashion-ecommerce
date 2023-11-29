import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils"
import { ThemeProvider } from '@/components/themeProvider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BCN FASHION STORE',
  description: 'BCN ECOMMERCE FASHION STORE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen bg-background antialiased",
          font.className
      ) }>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          { children }
          </ThemeProvider>
      </body>
    </html>

  )
}
