import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import N8nChatClient from "@/components/n8n-chat-client"
import ElevenLabsScriptLoader from "@/components/elevenlabs-script-loader"
// Import the fix utility
import FixElevenLabsWidgets from "@/components/fix-elevenlabs-widgets"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pathway",
  description: "A modern, high-tech website designed for multiple audience groups",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet" />
        {/* Remove the script tag from here - we'll load it via our centralized loader */}
        <style>
          {`
        /* Global fix for table accessibility */
        table {
          position: relative;
          z-index: 200 !important;
          pointer-events: auto !important;
        }
        
        /* Ensure ElevenLabs widgets don't block interaction */
        elevenlabs-convai {
          pointer-events: auto;
          z-index: 100;
        }
        
        /* Container for ElevenLabs widgets */
        .elevenlabs-widget-container {
          pointer-events: none;
        }
      `}
        </style>
      </head>
      {/* Add the component to the body */}
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <N8nChatClient />
          <FixElevenLabsWidgets />
          <ElevenLabsScriptLoader />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'