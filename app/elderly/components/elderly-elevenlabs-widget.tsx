"use client"

import { useEffect, useRef } from "react"
import { useElevenLabsScript } from "@/components/elevenlabs-script-loader"

export default function ElderlyElevenLabsWidget() {
  const scriptLoaded = useElevenLabsScript()
  const widgetMounted = useRef(false)
  const agentId = "n8y8fe4GRhK0uwKeKuiJ"

  useEffect(() => {
    // Only attempt to create widget after script is loaded and widget isn't already mounted
    if (!scriptLoaded || widgetMounted.current) return

    try {
      console.log("Creating elderly ElevenLabs widget")

      // Check if the custom element is defined
      if (customElements.get("elevenlabs-convai")) {
        // Create the widget element
        const widget = document.createElement("elevenlabs-convai")
        widget.setAttribute("agent-id", agentId)
        widget.id = "elderly-elevenlabs-widget"

        // Append to the body
        document.body.appendChild(widget)
        widgetMounted.current = true

        return () => {
          // Clean up on unmount
          widgetMounted.current = false
          if (document.body.contains(widget)) {
            document.body.removeChild(widget)
          }
        }
      } else {
        console.warn("ElevenLabs custom element not defined yet")
      }
    } catch (error) {
      console.error("Error creating elderly ElevenLabs widget:", error)
    }
  }, [scriptLoaded])

  return null
}

