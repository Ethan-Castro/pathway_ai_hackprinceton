"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

type Message = {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
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
  const pathname = usePathname()

  // Get audience type from pathname
  const getAudienceType = () => {
    if (pathname.includes("elderly")) return "elderly"
    if (pathname.includes("college")) return "college"
    if (pathname.includes("neurodivergent-youth")) return "neurodivergent"
    if (pathname.includes("immigrants")) return "immigrants"
    return "general"
  }

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

    try {
      const response = await fetch(
        "https://ethancastro.app.n8n.cloud/webhook/7f2f2030-6c54-4764-95af-d3439783a16b/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: inputValue,
            audienceType: getAudienceType(),
          }),
        },
      )

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()

      const aiMessage: Message = {
        id: Date.now().toString() + "-ai",
        content: data.response || "I'm sorry, I couldn't process your request.",
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error("Error sending message:", error)

      const errorMessage: Message = {
        id: Date.now().toString() + "-error",
        content: "Sorry, there was an error processing your message. Please try again.",
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // Customize chat widget based on audience
  const getChatStyles = () => {
    const audience = getAudienceType()

    switch (audience) {
      case "elderly":
        return {
          fontSize: "text-lg",
          buttonSize: "p-4",
          iconSize: "h-7 w-7",
          widgetTitle: "Need Help?",
          widgetColor: "from-blue-500 to-blue-700",
        }
      case "college":
        return {
          fontSize: "text-base",
          buttonSize: "p-3",
          iconSize: "h-6 w-6",
          widgetTitle: "Chat with AI Assistant",
          widgetColor: "from-purple-500 to-purple-700",
        }
      case "neurodivergent":
        return {
          fontSize: "text-base",
          buttonSize: "p-3",
          iconSize: "h-6 w-6",
          widgetTitle: "Support Assistant",
          widgetColor: "from-teal-500 to-teal-700",
        }
      case "immigrants":
        return {
          fontSize: "text-base",
          buttonSize: "p-3",
          iconSize: "h-6 w-6",
          widgetTitle: "Support Assistant",
          widgetColor: "from-amber-500 to-amber-700",
        }
      default:
        return {
          fontSize: "text-base",
          buttonSize: "p-3",
          iconSize: "h-6 w-6",
          widgetTitle: "Chat with AI Assistant",
          widgetColor: "from-primary to-blue-600",
        }
    }
  }

  const styles = getChatStyles()

  return (
    <>
      {/* Chat toggle button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "rounded-full shadow-lg",
            isOpen ? "bg-muted hover:bg-muted/90" : `bg-gradient-to-r ${styles.widgetColor} hover:opacity-90`,
            styles.buttonSize,
          )}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? <X className={styles.iconSize} /> : <MessageCircle className={styles.iconSize} />}
        </Button>
      </motion.div>

      {/* Chat widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-full max-w-md"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border shadow-xl">
              <CardHeader className={`bg-gradient-to-r ${styles.widgetColor} text-white rounded-t-lg`}>
                <CardTitle>{styles.widgetTitle}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn("flex", message.sender === "user" ? "justify-end" : "justify-start")}
                    >
                      <div
                        className={cn(
                          "max-w-[80%] rounded-lg p-3",
                          message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
                          styles.fontSize,
                        )}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className={cn("max-w-[80%] rounded-lg p-3 bg-muted", styles.fontSize)}>
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
                  <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()}>
                    {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

