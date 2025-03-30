import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Headphones } from "lucide-react"

interface AudioResourceProps {
  name: string
  category: string
  platform: string
  contactInfo: string
  services: string
}

export default function AudioResourceCard({ name, category, platform, contactInfo, services }: AudioResourceProps) {
  // Extract website URL if present in the contact information
  const websiteMatch = contactInfo.match(/\[(https?:\/\/[^\s\]]+)\]/)
  const websiteUrl = websiteMatch ? websiteMatch[1] : null

  return (
    <Card className="border h-full">
      <CardHeader className="bg-amber-100 dark:bg-amber-900/40 rounded-t-lg">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl text-amber-800 dark:text-amber-300">{name}</CardTitle>
            <CardDescription className="text-lg font-medium text-amber-600 dark:text-amber-400 mt-1">
              {category}
            </CardDescription>
          </div>
          <Headphones className="h-6 w-6 text-amber-600 dark:text-amber-400" />
        </div>
      </CardHeader>
      <CardContent className="pt-6 flex flex-col space-y-4">
        {platform && (
          <div>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              <span className="font-medium">Platform/Location:</span> {platform}
            </p>
          </div>
        )}

        {contactInfo && (
          <div>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              <span className="font-medium">Contact:</span> {contactInfo.replace(/\[https?:\/\/[^\s\]]+\]/, "")}
            </p>
          </div>
        )}

        <div className="mt-4">
          <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Services Provided:</h4>
          <p className="text-lg text-slate-700 dark:text-slate-300">{services}</p>
        </div>

        {websiteUrl && (
          <div className="mt-4">
            <Button className="w-full text-white bg-amber-600 hover:bg-amber-700" asChild>
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

