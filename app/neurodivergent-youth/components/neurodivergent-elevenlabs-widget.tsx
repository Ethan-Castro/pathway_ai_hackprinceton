"use client"

import { useEffect } from "react"
import Script from "next/script"

export default function NeurodivergentElevenLabsWidget() {
  useEffect(() => {
    // Create the widget element
    const widget = document.createElement("elevenlabs-convai")
    widget.setAttribute("agent-id", "gUKId9kaAkHJTOHCzXmY")

    // Append to the body
    document.body.appendChild(widget)

    return () => {
      // Clean up on unmount
      if (document.body.contains(widget)) {
        document.body.removeChild(widget)
      }
    }
  }, [])

  return <Script src="https://elevenlabs.io/convai-widget/index.js" strategy="afterInteractive" />
}

