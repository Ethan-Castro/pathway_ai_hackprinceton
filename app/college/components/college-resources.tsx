"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { BookOpen, Video, FileText, Users, ArrowRight } from "lucide-react"

const resources = [
  {
    title: "Study Guides",
    description: "Access comprehensive study guides for various subjects and courses.",
    icon: BookOpen,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/40",
  },
  {
    title: "Video Lectures",
    description: "Watch recorded lectures and educational videos to supplement your learning.",
    icon: Video,
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/40",
  },
  {
    title: "Research Papers",
    description: "Browse through a collection of research papers and academic journals.",
    icon: FileText,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/40",
  },
  {
    title: "Study Groups",
    description: "Join virtual study groups and collaborate with fellow students.",
    icon: Users,
    color: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-pink-100 dark:bg-pink-900/40",
  },
]

export default function CollegeResources() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
          Academic Resources
        </h2>
        <p className="text-base text-center mb-12 max-w-3xl mx-auto text-slate-700 dark:text-slate-300">
          Explore our collection of resources designed to help you excel in your academic journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border h-full">
                  <CardHeader className={`${resource.bgColor} rounded-t-lg`}>
                    <div className="flex justify-center mb-4">
                      <Icon className={`h-10 w-10 ${resource.color}`} />
                    </div>
                    <CardTitle className={`text-xl text-center ${resource.color}`}>{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardDescription className="text-base text-slate-700 dark:text-slate-300 mb-6">
                      {resource.description}
                    </CardDescription>
                    <Button className="w-full group" variant={hoveredIndex === index ? "default" : "outline"}>
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="group">
            View All Resources
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}

