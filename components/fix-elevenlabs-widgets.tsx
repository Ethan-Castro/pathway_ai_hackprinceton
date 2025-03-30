"use client"

import { useEffect } from "react"

export default function FixElevenLabsWidgets() {
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      /* Ensure ElevenLabs widgets don't block interaction */
      elevenlabs-convai {
        pointer-events: auto !important;
        z-index: 100 !important;
      }

      /* Container for ElevenLabs widgets */
      .elevenlabs-widget-container {
        pointer-events: none !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}

