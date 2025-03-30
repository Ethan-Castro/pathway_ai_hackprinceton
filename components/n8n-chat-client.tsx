"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function N8nChatClient() {
  const pathname = usePathname()

  // Get audience type from pathname
  const getAudienceType = () => {
    if (pathname.includes("elderly")) return "elderly"
    if (pathname.includes("college")) return "college"
    if (pathname.includes("neurodivergent-youth")) return "neurodivergent"
    if (pathname.includes("immigrants")) return "immigrants"
    return "general"
  }

  // Get audience-specific styles
  const getAudienceStyles = () => {
    const audienceType = getAudienceType()

    switch (audienceType) {
      case "elderly":
        return {
          primary: "#4285F4",
          secondary: "#34A853",
          fontSize: "1.1rem",
          welcomeMessage: "Hello! I'm here to help. Feel free to ask me any questions.",
        }
      case "college":
        return {
          primary: "#8A2BE2",
          secondary: "#6C5CE7",
          fontSize: "1rem",
          welcomeMessage:
            "Hey there! Need help with research, study strategies, or campus resources? I'm here for you!",
        }
      case "neurodivergent":
        return {
          primary: "#14B8A6",
          secondary: "#0D9488",
          fontSize: "1rem",
          welcomeMessage: "Hi there! I'm here to help. Feel free to ask me anything you'd like assistance with.",
        }
      case "immigrants":
        return {
          primary: "#FF9800",
          secondary: "#FF5722",
          fontSize: "1rem",
          welcomeMessage: "Welcome! I can help with resources, language support, and answer questions about services.",
        }
      default:
        return {
          primary: "#3B82F6",
          secondary: "#2563EB",
          fontSize: "1rem",
          welcomeMessage: "Hello! How can I assist you today?",
        }
    }
  }

  useEffect(() => {
    // Add custom CSS for n8n chat
    const audienceStyles = getAudienceStyles()
    const audienceType = getAudienceType()

    const styleElement = document.createElement("style")
    styleElement.textContent = `
      :root {
        --chat--color-primary: ${audienceStyles.primary};
        --chat--color-primary-shade-50: ${audienceStyles.primary}e6;
        --chat--color-primary-shade-100: ${audienceStyles.primary}cc;
        --chat--color-secondary: ${audienceStyles.secondary};
        --chat--color-secondary-shade-50: ${audienceStyles.secondary}e6;
        
        --chat--border-radius: 0.75rem;
        --chat--message--border-radius: 0.75rem;
        --chat--window--width: 400px;
        --chat--window--height: 600px;
        
        --chat--message--font-size: ${audienceStyles.fontSize};
        --chat--message-line-height: 1.6;
        
        --chat--header--background: var(--chat--color-primary);
        --chat--header--color: #ffffff;
        --chat--message--bot--background: #f8f9fa;
        --chat--message--bot--color: #1e293b;
        --chat--message--user--background: var(--chat--color-secondary);
        --chat--message--user--color: #ffffff;
        
        --chat--toggle--background: var(--chat--color-primary);
        --chat--toggle--hover--background: var(--chat--color-primary-shade-50);
        --chat--toggle--active--background: var(--chat--color-primary-shade-100);
        
        --chat--toggle--size: 56px;
      }
      
      .dark {
        --chat--message--bot--background: #1e293b;
        --chat--message--bot--color: #f8f9fa;
      }
      
      .n8n-chat-message {
        animation: fadeInUp 0.3s ease;
      }
      
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(10px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `
    document.head.appendChild(styleElement)

    // Initialize n8n chat
    const script = document.createElement("script")
    script.type = "module"

    // Properly escape the welcome message to avoid syntax errors
    const escapedWelcomeMessage = audienceStyles.welcomeMessage.replace(/'/g, "\\'").replace(/\n/g, "\\n")

    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      
      createChat({
        webhookUrl: 'https://ethancastro.app.n8n.cloud/webhook/7f2f2030-6c54-4764-95af-d3439783a16b/chat',
        metadata: {
          audienceType: '${audienceType}'
        },
        showWelcomeScreen: false,
        initialMessages: ['${escapedWelcomeMessage}'],
        i18n: {
          en: {
            title: 'AI Assistant',
            subtitle: 'How can I help you today?',
            inputPlaceholder: 'Type your message...',
          },
        },
      });
    `
    document.body.appendChild(script)

    return () => {
      // Clean up
      if (styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement)
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [pathname])

  return null
}

