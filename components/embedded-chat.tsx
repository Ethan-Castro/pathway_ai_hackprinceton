"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Loader2, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
  error?: boolean
}

interface EmbeddedChatProps {
  audienceType: "elderly" | "college" | "neurodivergent" | "immigrants" | "general"
  title?: string
  className?: string
}

export default function EmbeddedChat({ audienceType, title = "Chat with AI Assistant", className }: EmbeddedChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Create a mock response function for fallback
    const createMockResponse = (query: string) => {
      // Simple responses based on common questions
      if (query.toLowerCase().includes("hello") || query.toLowerCase().includes("hi")) {
        return "Hello! How can I assist you today?"
      } else if (query.toLowerCase().includes("help")) {
        return "I'm here to help! Please let me know what specific information or assistance you need."
      } else if (query.toLowerCase().includes("contact")) {
        return "You can contact our support team at support@example.com or call 1-800-555-0123."
      } else {
        return (
          "I understand you're asking about \"" +
          query +
          "\". While I'm currently having trouble connecting to my knowledge base, I'd be happy to help once the connection is restored. Please try again later or contact our support team for immediate assistance."
        )
      }
    }

    try {
      // Add a timeout to the fetch request
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

      const response = await fetch(
        "https://ethancastro.app.n8n.cloud/webhook/7f2f2030-6c54-4764-95af-d3439783a16b/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: inputValue,
            audienceType: audienceType,
          }),
          signal: controller.signal,
        },
      )

      clearTimeout(timeoutId)

      // Check if the response is ok
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`)
      }

      // Try to parse the response as JSON
      const data = await response.json()

      // Check if the response has the expected format
      if (!data || typeof data.response !== "string") {
        throw new Error("Invalid response format from server")
      }

      const aiMessage: Message = {
        id: Date.now().toString() + "-ai",
        content: data.response,
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error("Error sending message:", error)

      // Use the mock response as a fallback
      const mockResponse = createMockResponse(inputValue)

      const errorMessage: Message = {
        id: Date.now().toString() + "-error",
        content: mockResponse,
        sender: "ai",
        timestamp: new Date(),
        error: true,
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // Customize chat widget based on audience
  const getChatStyles = () => {
    switch (audienceType) {
      case "elderly":
        return {
          fontSize: "text-lg",
          headerBg: "bg-gradient-to-r from-blue-500 to-blue-700",
          messageAiBg: "bg-blue-100 dark:bg-blue-900/40",
          messageUserBg: "bg-blue-600",
          buttonColor: "bg-blue-600 hover:bg-blue-700",
        }
      case "college":
        return {
          fontSize: "text-base",
          headerBg: "bg-gradient-to-r from-purple-500 to-indigo-700",
          messageAiBg: "bg-purple-100 dark:bg-purple-900/40",
          messageUserBg: "bg-purple-600",
          buttonColor: "bg-purple-600 hover:bg-purple-700",
        }
      case "neurodivergent":
        return {
          fontSize: "text-base",
          headerBg: "bg-gradient-to-r from-teal-500 to-teal-700",
          messageAiBg: "bg-teal-100 dark:bg-teal-900/40",
          messageUserBg: "bg-teal-600",
          buttonColor: "bg-teal-600 hover:bg-teal-700",
        }
      case "immigrants":
        return {
          fontSize: "text-base",
          headerBg: "bg-gradient-to-r from-amber-500 to-orange-700",
          messageAiBg: "bg-amber-100 dark:bg-amber-900/40",
          messageUserBg: "bg-amber-600",
          buttonColor: "bg-amber-600 hover:bg-amber-700",
        }
      default:
        return {
          fontSize: "text-base",
          headerBg: "bg-gradient-to-r from-primary to-blue-600",
          messageAiBg: "bg-muted",
          messageUserBg: "bg-primary",
          buttonColor: "bg-primary hover:bg-primary/90",
        }
    }
  }

  const styles = getChatStyles()

  return (
    <Card className={cn("border shadow-md w-full", className)}>
      <CardHeader className={cn("text-white rounded-t-lg", styles.headerBg)}>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={cn("flex", message.sender === "user" ? "justify-end" : "justify-start")}>
              <div
                className={cn(
                  "max-w-[80%] rounded-lg p-3",
                  message.sender === "user" ? `text-white ${styles.messageUserBg}` : styles.messageAiBg,
                  styles.fontSize,
                )}
              >
                {message.error && (
                  <div className="flex items-center mb-2 text-amber-600 dark:text-amber-400">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    <span className="text-xs">Using offline response</span>
                  </div>
                )}
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className={cn("max-w-[80%] rounded-lg p-3", styles.messageAiBg, styles.fontSize)}>
                <Loader2 className="h-5 w-5 animate-spin" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      <CardFooter className="border-t p-3">
        <form onSubmit={handleSendMessage} className="flex w-full gap-2">
          <Input
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={styles.fontSize}
            disabled={isLoading}
          />
          <Button type="submit" className={styles.buttonColor} disabled={isLoading || !inputValue.trim()}>
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}

