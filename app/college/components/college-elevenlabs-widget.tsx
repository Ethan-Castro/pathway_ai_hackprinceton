"use client"

import { useEffect } from "react"
import Script from "next/script"

export default function CollegeElevenLabsWidget() {
  useEffect(() => {
    // Create the widget element
    const widget = document.createElement("elevenlabs-convai")
    widget.setAttribute("agent-id", "cp25OdMkPHC7qvRdnGIz")

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

