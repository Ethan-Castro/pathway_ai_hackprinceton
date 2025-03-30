"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

const features = [
  {
    id: "academic",
    title: "Academic Support",
    description:
      "Get help with homework, test preparation, and subject-specific resources to improve your grades and understanding.",
    image: "/placeholder.svg?height=300&width=500",
    color: "bg-green-100 dark:bg-green-900/40",
    textColor: "text-green-700 dark:text-green-300",
  },
  {
    id: "college",
    title: "College Preparation",
    description:
      "Resources for college applications, scholarship information, and standardized test preparation to help you plan your future.",
    image: "/placeholder.svg?height=300&width=500",
    color: "bg-emerald-100 dark:bg-emerald-900/40",
    textColor: "text-emerald-700 dark:text-emerald-300",
  },
  {
    id: "activities",
    title: "Extracurricular Activities",
    description:
      "Discover clubs, sports, volunteer opportunities, and other activities to enhance your high school experience and college applications.",
    image: "/placeholder.svg?height=300&width=500",
    color: "bg-teal-100 dark:bg-teal-900/40",
    textColor: "text-teal-700 dark:text-teal-300",
  },
]

export default function HighSchoolFeatures() {
  const [activeTab, setActiveTab] = useState("academic")

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
          Features for High School Students
        </h2>

        <Tabs defaultValue="academic" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-4 bg-transparent">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className={cn(
                  "text-base py-3 data-[state=active]:shadow-lg transition-all",
                  activeTab === feature.id
                    ? `${feature.color} ${feature.textColor} data-[state=active]:border-b-2 data-[state=active]:border-current`
                    : "hover:bg-slate-100 dark:hover:bg-slate-800",
                )}
              >
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="mt-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card className={cn("border-none", feature.color)}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/2">
                        <img
                          src={feature.image || "/placeholder.svg"}
                          alt={feature.title}
                          className="rounded-lg shadow-md"
                          width={500}
                          height={300}
                        />
                      </div>
                      <div className="md:w-1/2">
                        <h3 className={cn("text-2xl font-bold mb-4", feature.textColor)}>{feature.title}</h3>
                        <p className="text-base text-slate-700 dark:text-slate-300">{feature.description}</p>
                        <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 mr-2 text-green-600 dark:text-green-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Interactive learning tools
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 mr-2 text-green-600 dark:text-green-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Mobile-friendly design
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 mr-2 text-green-600 dark:text-green-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Personalized recommendations
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

