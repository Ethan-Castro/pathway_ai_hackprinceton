import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Video, Headphones, BookOpen } from "lucide-react"
import Link from "next/link"

const resources = [
  {
    title: "Health Guides",
    description: "Comprehensive guides on maintaining health and wellness in your golden years.",
    icon: FileText,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/40",
    link: "/elderly/health-guides",
  },
  {
    title: "Video Tutorials",
    description: "Easy-to-follow video guides on using technology and our platform.",
    icon: Video,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/40",
    link: "#",
  },
  {
    title: "Audio Resources",
    description: "Listen to articles, books, and guides with our audio resources.",
    icon: Headphones,
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-100 dark:bg-amber-900/40",
    link: "/elderly/audio-resources",
  },
  {
    title: "Community Stories",
    description: "Read inspiring stories from other seniors in our community.",
    icon: BookOpen,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/40",
    link: "#",
  },
]

export default function ElderlyResources() {
  return (
    <section className="py-16 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-800 dark:text-blue-300">
          Helpful Resources
        </h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-slate-700 dark:text-slate-300">
          Access a variety of resources designed to help you make the most of our services and improve your quality of
          life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <Card key={index} className="border transition-transform hover:scale-105 h-full">
                <CardHeader className={`${resource.bgColor} rounded-t-lg min-h-[160px] flex flex-col justify-center`}>
                  <div className="flex justify-center mb-4">
                    <Icon className={`h-12 w-12 ${resource.color}`} />
                  </div>
                  <CardTitle className={`text-2xl text-center ${resource.color}`}>{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 flex flex-col justify-between flex-1">
                  <CardDescription className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                    {resource.description}
                  </CardDescription>
                  <Button
                    className={`w-full text-white bg-${resource.color.split("-")[1]}-600 hover:bg-${resource.color.split("-")[1]}-700 mt-auto`}
                    asChild
                  >
                    <Link href={resource.link}>Access Resources</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="text-lg">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  )
}

