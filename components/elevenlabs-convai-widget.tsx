"use client"

import Script from "next/script"
import { useEffect, useRef } from "react"

interface ElevenLabsConvaiWidgetProps {
  agentId: string
}

export default function ElevenLabsConvaiWidget({ agentId }: ElevenLabsConvaiWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create the widget element if it doesn't exist
    if (widgetRef.current && !widgetRef.current.querySelector("elevenlabs-convai")) {
      const widget = document.createElement("elevenlabs-convai")
      widget.setAttribute("agent-id", agentId)

      // Update positioning to be more specific and contained
      widget.setAttribute(
        "style",
        "position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); z-index: 100; width: auto; height: auto; pointer-events: auto;",
      )

      // Add a class for easier styling
      widget.classList.add("elevenlabs-convai-widget")

      widgetRef.current.appendChild(widget)
    }

    // Add specific CSS to ensure the widget doesn't interfere with other elements
    const styleElement = document.createElement("style")
    styleElement.textContent = `
    .elevenlabs-widget-container {
      position: relative;
      z-index: 100;
      pointer-events: none;
    }
    
    .elevenlabs-convai-widget {
      pointer-events: auto;
    }
    
    /* Ensure tables have higher z-index and proper pointer events */
    table {
      position: relative;
      z-index: 200;
      pointer-events: auto !important;
    }
  `
    document.head.appendChild(styleElement)

    return () => {
      if (document.body.contains(styleElement)) {
        document.body.removeChild(styleElement)
      }
    }
  }, [agentId])

  return (
    <>
      <div ref={widgetRef} className="elevenlabs-widget-container"></div>
      <Script src="https://elevenlabs.io/convai-widget/index.js" strategy="afterInteractive" />
    </>
  )
}

