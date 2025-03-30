import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AudioResourceCard from "./components/audio-resource-card"
import { parseCSV } from "@/lib/parse-csv"

// CSV URL
const CSV_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Category-ResourceName-PlatformLocation-ContactInformation-ServicesProvided-HIYduAefRUtKUPHPafnSIgvoPDbork.csv"

// Fallback data in case the CSV fetch fails
const fallbackData = [
  {
    Category: "General Audiobooks",
    "Resource Name": "Libby App",
    "Platform/Location": "Mobile App",
    "Contact Information": "Website: libbyapp.com [https://libbyapp.com]",
    "Services Provided": "Free audiobooks with a library card. Large selection of titles suitable for seniors.",
  },
  {
    Category: "Health & Wellness",
    "Resource Name": "Calm",
    "Platform/Location": "Mobile App & Website",
    "Contact Information": "Website: calm.com [https://www.calm.com]",
    "Services Provided": "Meditation, sleep stories, and relaxation audio content for seniors.",
  },
]

async function fetchAudioResources() {
  try {
    const response = await fetch(CSV_URL, { cache: "no-store" })

    if (!response.ok) {
      console.error(`Failed to fetch CSV: ${response.status} ${response.statusText}`)
      return fallbackData
    }

    const text = await response.text()
    const resources = parseCSV(text)

    return resources.length > 0 ? resources : fallbackData
  } catch (error) {
    console.error("Error fetching audio resources:", error)
    return fallbackData
  }
}

export default async function AudioResourcesPage() {
  const audioResources = await fetchAudioResources()

  return (
    <div className="pt-16 pb-24">
      {/* Hero Section */}
      <section className="bg-amber-50 dark:bg-amber-950/30 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <Link
                href="/elderly"
                className="inline-flex items-center text-amber-600 dark:text-amber-400 hover:underline text-lg"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Senior Portal
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center text-amber-800 dark:text-amber-300 mb-6">
              Audio Resources
            </h1>
            <p className="text-xl md:text-2xl text-center max-w-3xl text-slate-700 dark:text-slate-300">
              Discover a variety of audio resources designed to inform, entertain, and enhance your well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audioResources.map((resource, index) => (
              <AudioResourceCard
                key={index}
                name={resource["Resource Name"] || "Unnamed Resource"}
                category={resource.Category || "Uncategorized"}
                platform={resource["Platform/Location"] || ""}
                contactInfo={resource["Contact Information"] || ""}
                services={resource["Services Provided"] || ""}
              />
            ))}
          </div>

          {audioResources.length === 0 && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-4">No audio resources found</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                We're currently updating our audio resources. Please check back soon.
              </p>
              <Button asChild>
                <Link href="/elderly">Return to Senior Portal</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-amber-100 dark:bg-amber-900/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-300 mb-4">
            Need Help Accessing Audio Resources?
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
            Our team is available to help you find and use these audio resources. Contact us for personalized
            assistance.
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
            Contact Support
          </Button>
        </div>
      </section>
    </div>
  )
}

