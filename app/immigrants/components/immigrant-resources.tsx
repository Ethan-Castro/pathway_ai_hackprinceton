"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Globe, FileText, Home, Users, ArrowRight } from "lucide-react"

const resources = [
  {
    title: "Language Resources",
    description: "Access language learning tools, translation services, and multilingual information.",
    icon: Globe,
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-100 dark:bg-amber-900/40",
  },
  {
    title: "Legal Information",
    description: "Find information about immigration processes, rights, and legal assistance.",
    icon: FileText,
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-900/40",
  },
  {
    title: "Settlement Services",
    description: "Resources for housing, healthcare, education, and employment.",
    icon: Home,
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-100 dark:bg-red-900/40",
  },
  {
    title: "Community Support",
    description: "Connect with community groups, cultural organizations, and support networks.",
    icon: Users,
    color: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/40",
  },
]

export default function ImmigrantResources() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400">
          Helpful Resources
        </h2>
        <p className="text-base text-center mb-12 max-w-3xl mx-auto text-slate-700 dark:text-slate-300">
          Access a variety of resources designed to help you navigate life in your new community.
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

