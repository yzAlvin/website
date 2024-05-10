import './globals.css'
import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: 'Alvin Zhao',
  description: 'Alvin\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-zinc-900 font-sans antialiased",
          inter.variable
        )}>{children}</body>
    </html>
  )
}
