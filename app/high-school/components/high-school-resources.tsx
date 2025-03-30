"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { BookOpen, Video, FileText, Lightbulb, ArrowRight } from "lucide-react"

const resources = [
  {
    title: "Study Guides",
    description: "Subject-specific study guides and practice tests to help you prepare for exams.",
    icon: BookOpen,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/40",
  },
  {
    title: "Video Tutorials",
    description: "Watch engaging video tutorials that explain complex concepts in simple terms.",
    icon: Video,
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/40",
  },
  {
    title: "Essay Writing",
    description: "Tips and templates for writing effective essays and research papers.",
    icon: FileText,
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-100 dark:bg-teal-900/40",
  },
  {
    title: "Study Tips",
    description: "Effective study strategies and time management techniques for academic success.",
    icon: Lightbulb,
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-100 dark:bg-cyan-900/40",
  },
]

export default function HighSchoolResources() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
          Learning Resources
        </h2>
        <p className="text-base text-center mb-12 max-w-3xl mx-auto text-slate-700 dark:text-slate-300">
          Access a variety of resources designed to help you succeed in your classes and prepare for your future.
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

