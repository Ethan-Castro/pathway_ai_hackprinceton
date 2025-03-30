"use client"

import { useEffect, useRef } from "react"
import { useElevenLabsScript } from "./elevenlabs-script-loader"

interface ElevenLabsRawWidgetProps {
  agentId: string
}

export default function ElevenLabsRawWidget({ agentId }: ElevenLabsRawWidgetProps) {
  const scriptLoaded = useElevenLabsScript()
  const widgetMounted = useRef(false)

  useEffect(() => {
    // Only attempt to create widget after script is loaded and widget isn't already mounted
    if (!scriptLoaded || widgetMounted.current) return

    try {
      console.log("Creating ElevenLabs raw widget with agent ID:", agentId)

      // Create a div to hold the widget with proper containment
      const widgetContainer = document.createElement("div")
      widgetContainer.className = "elevenlabs-widget-container"
      widgetContainer.id = `elevenlabs-container-${agentId}`

      // Check if the custom element is defined
      if (customElements.get("elevenlabs-convai")) {
        // Create the widget with proper styling
        const widgetElement = document.createElement("elevenlabs-convai")
        widgetElement.setAttribute("agent-id", agentId)
        widgetElement.classList.add("elevenlabs-convai-widget")
        widgetElement.style.pointerEvents = "auto"

        // Set the innerHTML with the properly contained widget
        widgetContainer.appendChild(widgetElement)

        // Add specific CSS to ensure the widget doesn't interfere with other elements
        const styleElement = document.createElement("style")
        styleElement.textContent = `
          .elevenlabs-widget-container {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 100;
            pointer-events: none;
            width: auto;
            height: auto;
          }
          
          .elevenlabs-convai-widget {
            pointer-events: auto;
          }
        `
        document.head.appendChild(styleElement)

        // Append to the body at the end
        document.body.appendChild(widgetContainer)
        widgetMounted.current = true

        return () => {
          // Clean up on unmount
          widgetMounted.current = false
          if (document.body.contains(widgetContainer)) {
            document.body.removeChild(widgetContainer)
          }
          if (document.head.contains(styleElement)) {
            document.head.removeChild(styleElement)
          }
        }
      } else {
        console.warn("ElevenLabs custom element not defined yet")
      }
    } catch (error) {
      console.error("Error creating ElevenLabs widget:", error)
    }
  }, [agentId, scriptLoaded])

  return null
}

