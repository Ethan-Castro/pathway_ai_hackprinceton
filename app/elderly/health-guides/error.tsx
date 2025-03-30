"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, AlertTriangle } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="pt-16">
      <section className="bg-blue-50 dark:bg-blue-950/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link
                href="/elderly"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-lg"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Senior Portal
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 dark:text-blue-300 mb-4">
              Health Guides & Resources
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="h-16 w-16 text-amber-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-200">Something went wrong</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-slate-700 dark:text-slate-300">
            We're having trouble loading the health resources. Please try again later.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="text-lg bg-blue-600 hover:bg-blue-700" onClick={() => reset()}>
              Try Again
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <Link href="/elderly">Return to Senior Portal</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

