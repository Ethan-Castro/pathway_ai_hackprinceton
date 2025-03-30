"use client"

import { useState, useEffect } from "react"
import Script from "next/script"

// Global state to track if the script is loaded
let isScriptLoaded = false
let isScriptLoading = false
let scriptLoadListeners: Array<() => void> = []

export function useElevenLabsScript() {
  const [loaded, setLoaded] = useState(isScriptLoaded)

  useEffect(() => {
    if (isScriptLoaded) {
      setLoaded(true)
      return
    }

    const onLoad = () => {
      setLoaded(true)
    }

    scriptLoadListeners.push(onLoad)

    return () => {
      scriptLoadListeners = scriptLoadListeners.filter((listener) => listener !== onLoad)
    }
  }, [])

  return loaded
}

export default function ElevenLabsScriptLoader() {
  const handleLoad = () => {
    console.log("ElevenLabs script loaded successfully")
    isScriptLoaded = true
    isScriptLoading = false
    scriptLoadListeners.forEach((listener) => listener())
  }

  const handleError = (e: Error) => {
    console.error("Error loading ElevenLabs script:", e)
    isScriptLoading = false
  }

  useEffect(() => {
    // Prevent multiple script loading attempts
    if (isScriptLoading) return

    // If script is already in the document, don't add it again
    if (document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]')) {
      if (!isScriptLoaded) {
        console.log("ElevenLabs script already exists in document")
        isScriptLoaded = true
        scriptLoadListeners.forEach((listener) => listener())
      }
      return
    }

    isScriptLoading = true
  }, [])

  return (
    <Script
      src="https://elevenlabs.io/convai-widget/index.js"
      strategy="lazyOnload"
      onLoad={handleLoad}
      onError={handleError}
    />
  )
}

