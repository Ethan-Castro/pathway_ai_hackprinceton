"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="pt-16 min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-300 mb-4">Something went wrong</h2>
      <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 text-center max-w-md">
        We're having trouble loading the audio resources. Please try again or return to the main page.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button onClick={reset} variant="outline">
          Try Again
        </Button>
        <Button asChild>
          <Link href="/elderly">Return to Senior Portal</Link>
        </Button>
      </div>
    </div>
  )
}

