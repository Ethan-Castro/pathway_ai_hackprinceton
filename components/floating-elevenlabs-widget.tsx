"use client"

import { useEffect } from "react"

interface FloatingElevenLabsWidgetProps {
  agentId: string
}

export default function FloatingElevenLabsWidget({ agentId }: FloatingElevenLabsWidgetProps) {
  useEffect(() => {
    // Create the widget container
    const widgetContainer = document.createElement("div")
    widgetContainer.id = "elevenlabs-widget-container"
    widgetContainer.style.position = "fixed"
    widgetContainer.style.left = "220px" // Position it on the left side
    widgetContainer.style.top = "120px" // Position it higher on the page
    widgetContainer.style.zIndex = "999"

    // Create the widget element
    const widget = document.createElement("elevenlabs-convai")
    widget.setAttribute("agent-id", agentId)

    // Append the widget to the container
    widgetContainer.appendChild(widget)

    // Append the container to the body
    document.body.appendChild(widgetContainer)

    // Clean up on unmount
    return () => {
      if (document.body.contains(widgetContainer)) {
        document.body.removeChild(widgetContainer)
      }
    }
  }, [agentId])

  return null
}

