import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin, Phone } from "lucide-react"

interface HealthResourceProps {
  name: string
  category: string
  address: string
  contactInfo: string
  services: string
}

export default function HealthResourceCard({ name, category, address, contactInfo, services }: HealthResourceProps) {
  // Extract website URL if present in the services description
  const websiteMatch = services.match(/\[(https?:\/\/[^\s\]]+)\]/)
  const websiteUrl = websiteMatch ? websiteMatch[1] : null

  // Clean up services text by removing the URL reference
  const cleanServices = services.replace(/\[https?:\/\/[^\s\]]+\]/, "")

  return (
    <Card className="border transition-transform hover:scale-[1.01] h-full">
      <CardHeader className="bg-blue-100 dark:bg-blue-900/40 rounded-t-lg">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl text-blue-800 dark:text-blue-300">{name}</CardTitle>
            <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400 mt-1">
              {category}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6 flex flex-col space-y-4">
        {address && (
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-slate-500 dark:text-slate-400 mr-2 mt-0.5" />
            <p className="text-lg text-slate-700 dark:text-slate-300">{address}</p>
          </div>
        )}

        {contactInfo && (
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-slate-500 dark:text-slate-400 mr-2 mt-0.5" />
            <p className="text-lg text-slate-700 dark:text-slate-300">{contactInfo}</p>
          </div>
        )}

        <div className="mt-4">
          <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Services Provided:</h4>
          <p className="text-lg text-slate-700 dark:text-slate-300">{cleanServices}</p>
        </div>

        {websiteUrl && (
          <div className="mt-4">
            <Button className="w-full text-white bg-blue-600 hover:bg-blue-700" asChild>
              <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Visit Website
              </a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

