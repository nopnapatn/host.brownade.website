import { ThemeProvider } from "@/components/theme-provider"
import { geistMono, geistSans } from "@/fonts"
import { SiteProvider } from "@/hooks/use-context"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"

import { siteConfig } from "@/config/site"
import "@/styles/colors.css"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: siteConfig.name,
  description:
    "Brownade is a digital experience that inspires transformation. We create digital products and experiences that help businesses grow and succeed in the digital world."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SiteProvider>{children}</SiteProvider>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
