"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface WebhookEmbedProps {
  audienceType: "elderly" | "college" | "neurodivergent" | "immigrants" | "general"
  title?: string
  className?: string
}

export default function WebhookEmbed({ audienceType, title = "Chat with AI Assistant", className }: WebhookEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const iframe = iframeRef.current
    if (iframe) {
      const handleLoad = () => {
        setIsLoading(false)
      }

      iframe.addEventListener("load", handleLoad)

      return () => {
        iframe.removeEventListener("load", handleLoad)
      }
    }
  }, [])

  // Customize widget based on audience
  const getStyles = () => {
    switch (audienceType) {
      case "elderly":
        return {
          headerBg: "bg-gradient-to-r from-blue-500 to-blue-700",
          height: "h-[600px]", // Taller for larger text
          borderColor: "border-blue-200 dark:border-blue-800",
          shadow: "shadow-blue-100/40 dark:shadow-blue-900/20",
        }
      case "college":
        return {
          headerBg: "bg-gradient-to-r from-purple-500 to-indigo-700",
          height: "h-[500px]",
          borderColor: "border-purple-200 dark:border-purple-800",
          shadow: "shadow-purple-100/40 dark:shadow-purple-900/20",
        }
      case "neurodivergent":
        return {
          headerBg: "bg-gradient-to-r from-teal-500 to-teal-700",
          height: "h-[500px]",
          borderColor: "border-teal-200 dark:border-teal-800",
          shadow: "shadow-teal-100/40 dark:shadow-teal-900/20",
        }
      case "immigrants":
        return {
          headerBg: "bg-gradient-to-r from-amber-500 to-orange-700",
          height: "h-[500px]",
          borderColor: "border-amber-200 dark:border-amber-800",
          shadow: "shadow-amber-100/40 dark:shadow-amber-900/20",
        }
      default:
        return {
          headerBg: "bg-gradient-to-r from-primary to-blue-600",
          height: "h-[500px]",
          borderColor: "border-blue-200 dark:border-blue-800",
          shadow: "shadow-blue-100/40 dark:shadow-blue-900/20",
        }
    }
  }

  const styles = getStyles()
  const webhookUrl = `https://ethancastro.app.n8n.cloud/webhook/7f2f2030-6c54-4764-95af-d3439783a16b/chat?audienceType=${audienceType}`

  return (
    <Card
      className={cn(
        "border shadow-xl transition-all duration-300 hover:shadow-2xl overflow-hidden",
        styles.borderColor,
        styles.shadow,
        className,
      )}
    >
      <CardHeader className={cn("text-white rounded-t-lg py-4", styles.headerBg)}>
        <CardTitle className="text-center text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
            <div className="flex flex-col items-center">
              <Loader2 className="h-10 w-10 animate-spin text-primary mb-2" />
              <p className="text-sm text-muted-foreground">Loading chat assistant...</p>
            </div>
          </div>
        )}
        <div className={cn("w-full transition-all duration-300", styles.height)}>
          <iframe
            ref={iframeRef}
            src={webhookUrl}
            className="w-full h-full border-0 bg-background"
            title="AI Chat Widget"
            allow="microphone; camera"
          />
        </div>
      </CardContent>
    </Card>
  )
}

