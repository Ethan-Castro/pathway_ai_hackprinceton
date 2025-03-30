"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Loader2 } from "lucide-react"

interface N8nChatTriggerProps {
  audienceType?: "elderly" | "college" | "neurodivergent" | "immigrants" | "general"
  embedMode?: boolean
}

export default function N8nChatTrigger({ audienceType = "general", embedMode = false }: N8nChatTriggerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isEmbedMode, setIsEmbedMode] = useState(embedMode)

  useEffect(() => {
    if (isEmbedMode) {
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
    }
  }, [isEmbedMode])

  useEffect(() => {
    if (!isEmbedMode) {
      // Find the n8n chat toggle button
      const chatToggle = document.querySelector(".n8n-chat-toggle") as HTMLElement
      const chatWindow = document.querySelector(".n8n-chat-window") as HTMLElement

      if (!chatToggle || !containerRef.current) return

      // Function to open the chat
      const openChat = () => {
        // If chat is not open, click the toggle button
        if (chatWindow && !chatWindow.classList.contains("n8n-chat-window--open")) {
          chatToggle.click()
        }
      }

      // Create a button to open the chat
      const openButton = document.createElement("button")
      openButton.className = "n8n-chat-embedded-trigger"
      openButton.innerHTML = `
        <span class="n8n-chat-embedded-trigger-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </span>
        <span class="n8n-chat-embedded-trigger-text">Start Chat</span>
      `
      openButton.addEventListener("click", openChat)

      // Add styles for the button
      const style = document.createElement("style")
      style.textContent = `
        .n8n-chat-embedded-trigger {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background-color: var(--chat--color-primary);
          color: white;
          border: none;
          border-radius: 8px;
          padding: 12px 20px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .n8n-chat-embedded-trigger:hover {
          background-color: var(--chat--color-primary-shade-50);
        }
        .n8n-chat-embedded-trigger-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .n8n-chat-embedded-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 24px;
          text-align: center;
        }
        .n8n-chat-embedded-description {
          color: var(--foreground);
          opacity: 0.7;
          max-width: 400px;
          margin: 0 auto;
        }
      `

      document.head.appendChild(style)

      // Create container for the button
      const buttonContainer = document.createElement("div")
      buttonContainer.className = "n8n-chat-embedded-container"

      // Add description
      const description = document.createElement("p")
      description.className = "n8n-chat-embedded-description"
      description.textContent =
        "Click below to start a conversation with our AI assistant. The chat will open in the corner of your screen."

      buttonContainer.appendChild(description)
      buttonContainer.appendChild(openButton)

      // Clear any existing content and append the button
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
        containerRef.current.appendChild(buttonContainer)
      }

      return () => {
        document.head.removeChild(style)
      }
    }
  }, [isEmbedMode])

  // For embedded mode, we'll display the actual iframe
  if (isEmbedMode) {
    const webhookUrl = `https://ethancastro.app.n8n.cloud/webhook/7f2f2030-6c54-4764-95af-d3439783a16b/chat?audienceType=${audienceType}`

    return (
      <Card className="border shadow-xl overflow-hidden">
        <CardHeader className="bg-primary/10 border-b">
          <CardTitle className="flex items-center text-primary">
            <MessageCircle className="mr-2 h-5 w-5" />
            AI Chat Assistant
          </CardTitle>
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
          <div className="w-full h-[500px]">
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

  return (
    <Card className="border shadow-md">
      <CardHeader className="bg-primary/10 border-b">
        <CardTitle className="flex items-center text-primary">
          <MessageCircle className="mr-2 h-5 w-5" />
          AI Chat Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div ref={containerRef} className="h-[400px] flex items-center justify-center">
          <p className="text-muted-foreground">Loading chat interface...</p>
        </div>
      </CardContent>
    </Card>
  )
}

