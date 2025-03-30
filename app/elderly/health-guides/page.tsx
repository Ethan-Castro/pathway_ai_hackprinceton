import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Phone } from "lucide-react"
import { fetchCSV } from "@/lib/fetch-csv"

// Fallback data in case the CSV fetch fails
const fallbackHealthResources = [
  {
    Category: "Healthcare",
    "Resource Name": "Medicare Rights Center",
    Address: "266 West 37th Street, 3rd Floor New York, NY 10018",
    "Contact Information": "Helpline: 800-333-4114",
    "Services Provided":
      "Free counseling services for Medicare beneficiaries and their families. Helps with Medicare benefits, rights, and options.",
  },
  {
    Category: "Health Services",
    "Resource Name": "NYC Department for the Aging",
    Address: "2 Lafayette St, New York, NY 10007",
    "Contact Information": "Call 311 or 212-639-9675",
    "Services Provided":
      "Connects seniors with health screenings, wellness programs, and other health-related services throughout NYC.",
  },
  {
    Category: "Mental Health",
    "Resource Name": "Geriatric Mental Health Alliance",
    Address: "50 Broadway, 19th Floor, New York, NY 10004",
    "Contact Information": "Tel: 212-614-5753",
    "Services Provided": "Advocacy and resources for mental health services for older adults.",
  },
]

export default async function HealthGuidesPage() {
  // Try to fetch the CSV data, use fallback if it fails
  let resources = []

  try {
    const fetchedResources = await fetchCSV(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Elderly_Resources-WQjGIjFMkPxeKq3TuhoI6xAYm6U8X6.csv",
    )

    if (fetchedResources && fetchedResources.length > 0) {
      resources = fetchedResources
      console.log("Successfully fetched resources:", resources.length)
    } else {
      console.log("No resources fetched, using fallback data")
      resources = fallbackHealthResources
    }
  } catch (error) {
    console.error("Error in health guides page:", error)
    resources = fallbackHealthResources
  }

  // Filter for health-related resources
  const healthTerms = ["health", "medical", "wellness", "doctor", "hospital", "clinic", "therapy", "medicine"]

  const healthResources = resources.filter((resource) => {
    try {
      const category = (resource.Category || "").toLowerCase()
      const name = (resource["Resource Name"] || "").toLowerCase()
      const services = (resource["Services Provided"] || "").toLowerCase()

      return healthTerms.some((term) => category.includes(term) || name.includes(term) || services.includes(term))
    } catch (e) {
      console.error("Error filtering resource:", e, resource)
      return false
    }
  })

  return (
    <div className="pt-16">
      {/* Hero Section */}
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
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8">
              Access comprehensive health resources designed specifically for seniors. Find information about healthcare
              providers, wellness programs, and medical services.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800 dark:text-blue-300">
            Available Health Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthResources.map((resource, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="bg-blue-100 dark:bg-blue-900/40 p-6">
                  <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300">
                    {resource["Resource Name"] || "Resource"}
                  </h3>
                  <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mt-1">
                    {resource.Category || "Health Service"}
                  </p>
                </div>

                <div className="p-6 space-y-4">
                  {resource.Address && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Address:</h4>
                      <p className="text-lg text-gray-700 dark:text-gray-300">{resource.Address}</p>
                    </div>
                  )}

                  {resource["Contact Information"] && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Contact:</h4>
                      <p className="text-lg text-gray-700 dark:text-gray-300">{resource["Contact Information"]}</p>
                    </div>
                  )}

                  {resource["Services Provided"] && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Services:</h4>
                      <p className="text-lg text-gray-700 dark:text-gray-300">{resource["Services Provided"]}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {healthResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-slate-700 dark:text-slate-300">
                No health resources found. Please check back later or contact support for assistance.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-blue-100 dark:bg-blue-950/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-800 dark:text-blue-300">Need Help Finding Resources?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-slate-700 dark:text-slate-300">
            Our team is available to assist you in finding the right health resources for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="text-lg bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 h-5 w-5" />
              Call Us: 1-833-573-4620
            </Button>
            <Button size="lg" variant="outline" className="text-lg text-blue-600 border-blue-600">
              Request Assistance
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

