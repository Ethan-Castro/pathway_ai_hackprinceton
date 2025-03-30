"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageSquare, Phone, Headphones, MessageCircle } from "lucide-react"
import HeroSection from "@/components/hero-section"
import AudienceSelector from "@/components/audience-selector"
import { motion } from "framer-motion"

// Support card data for better maintainability
const SUPPORT_OPTIONS = [
  {
    id: "whatsapp",
    title: "WhatsApp Support",
    description: "Chat with our AI assistant directly through WhatsApp for quick and convenient support.",
    icon: MessageSquare,
    colorClass: {
      bg: "bg-green-50 dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-800",
      iconBg: "bg-green-500",
      text: "text-green-700 dark:text-green-300",
      button: "bg-green-600 hover:bg-green-700",
    },
    buttonText: "Connect on WhatsApp",
    action: () => {
      // Format the phone number for WhatsApp URL
      const phoneNumber = "14155238886" // +1 415 523 8886 without formatting characters

      // Include the code "join many-chest" as the initial message
      const message = encodeURIComponent("join many-chest")

      // Create WhatsApp URL with the message parameter
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

      // Open WhatsApp in a new tab/window
      window.open(whatsappUrl, "_blank")
    },
  },
  {
    id: "chatbot",
    title: "AI Chatbot",
    description:
      "Use our interactive chatbot for immediate assistance with your questions and get personalized guidance.",
    icon: MessageCircle,
    colorClass: {
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-800",
      iconBg: "bg-blue-500",
      text: "text-blue-700 dark:text-blue-300",
      button: "bg-blue-600 hover:bg-blue-700",
    },
    buttonText: "Chat Now",
    action: () => {
      // Find and click the n8n chat toggle button
      const chatToggle = document.querySelector(".n8n-chat-toggle") as HTMLElement
      if (chatToggle) {
        chatToggle.click()
      }
    },
  },
  {
    id: "voice",
    title: "Voice Assistant",
    description: "Talk with our AI voice assistant powered by ElevenLabs for a natural conversation.",
    icon: Headphones,
    colorClass: {
      bg: "bg-purple-50 dark:bg-purple-900/20",
      border: "border-purple-200 dark:border-purple-800",
      iconBg: "bg-purple-500",
      text: "text-purple-700 dark:text-purple-300",
      button: "bg-purple-600 hover:bg-purple-700",
    },
    buttonText: "Talk to an Assistant",
    href: "https://elevenlabs.io/app/talk-to?agent_id=cp25OdMkPHC7qvRdnGIz",
  },
  {
    id: "call",
    title: "Call AI Support",
    description: "Call our AI-powered phone support for assistance with complex questions and receive expert guidance.",
    icon: Phone,
    colorClass: {
      bg: "bg-amber-50 dark:bg-amber-900/20",
      border: "border-amber-200 dark:border-amber-800",
      iconBg: "bg-amber-500",
      text: "text-amber-700 dark:text-amber-300",
      button: "bg-amber-600 hover:bg-amber-700",
    },
    buttonText: "Call Support",
    action: () => {
      // Format the phone number properly
      const phoneNumber = "+19294159612" // Removing spaces

      // Create the tel: URI
      const telUri = `tel:${phoneNumber}`

      // Attempt to initiate the call
      window.location.href = telUri
    },
  },
]

// Reusable text gradient style
const gradientTextClass = "bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"

// Support card component for DRY code
const SupportCard = ({ title, description, icon: Icon, colorClass, buttonText, action, href }) => (
  <div
    className={`${colorClass.bg} rounded-xl border ${colorClass.border} p-6 transition-all hover:shadow-lg hover:-translate-y-1`}
  >
    <div className="flex justify-center mb-4">
      <div className={`${colorClass.iconBg} text-white p-4 rounded-full`}>
        <Icon className="h-8 w-8" />
      </div>
    </div>
    <h3 className={`text-xl font-semibold mb-2 text-center ${colorClass.text}`}>{title}</h3>
    <p className="text-base text-center text-slate-700 dark:text-slate-300 mb-6">{description}</p>
    {href ? (
      <Button className={`w-full ${colorClass.button} text-white`} asChild>
        <Link href={href} target="_blank" rel="noopener noreferrer">
          {buttonText}
        </Link>
      </Button>
    ) : (
      <Button className={`w-full ${colorClass.button} text-white`} onClick={action}>
        {buttonText}
      </Button>
    )}
  </div>
)

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />

      <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-background to-background/80 relative">
        {/* Animated background pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Animated dots */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/20"
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25, 0],
                y: [0, Math.random() * 50 - 25, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${gradientTextClass}`}>Welcome to Pathway</h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-muted-foreground">
            We've designed specialized experiences for different audience groups. Select the section that best fits your
            needs.
          </p>

          <AudienceSelector />

          {/* AI Support Options */}
          <section className="mt-24 mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${gradientTextClass}`}>
              Need Help? Connect with Our AI Support
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SUPPORT_OPTIONS.map((option) => (
                <SupportCard key={option.id} {...option} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

