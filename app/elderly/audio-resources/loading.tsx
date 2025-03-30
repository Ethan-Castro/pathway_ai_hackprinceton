import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="pt-16 min-h-screen flex flex-col items-center justify-center">
      <Loader2 className="h-12 w-12 text-amber-600 animate-spin mb-4" />
      <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-300">Loading Audio Resources</h2>
      <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
        Please wait while we gather the best audio content for you...
      </p>
    </div>
  )
}

