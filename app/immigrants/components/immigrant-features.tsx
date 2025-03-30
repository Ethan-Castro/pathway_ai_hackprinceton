"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

// Features array unchanged
const features = [
  {
    id: "language",
    title: "Language Support",
    description:
      "Access multilingual resources, translation services, and language learning tools to help overcome language barriers.",
    image: "https://rsetasc.pnwboces.org/wp-content/uploads/2015/02/Language-Objectives.jpg",
    color: "bg-amber-100 dark:bg-amber-900/40",
    textColor: "text-amber-700 dark:text-amber-300",
  },
  {
    id: "settlement",
    title: "Settlement Services",
    description:
      "Find resources for housing, healthcare, education, employment, and other essential services to help you settle in your new community.",
    image:
      "https://images.squarespace-cdn.com/content/v1/659c604bc40160523b22cfa8/6abbf123-9353-4728-aa4b-080a45fbd6ca/LFS_logo_new.jpg",
    color: "bg-orange-100 dark:bg-orange-900/40",
    textColor: "text-orange-700 dark:text-orange-300",
  },
  {
    id: "community",
    title: "Community Connection",
    description:
      "Connect with cultural organizations, support groups, and community services to build your social network and find support.",
    image:
      "https://www.learningforjustice.org/sites/default/files/styles/hero_images_non_homepage_xs/public/2022-10/LFJ-03-Community-Organizing-Uplifts-Immigrant-Students-Jim-Tsinganos-1800x1080-10192022.jpg?h=e98e115c&itok=zgXv4PLd",
    color: "bg-red-100 dark:bg-red-900/40",
    textColor: "text-red-700 dark:text-red-300",
  },
]

// Motion variants for container and items
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function ImmigrantFeatures() {
  const [activeTab, setActiveTab] = useState("language")

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-orange-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-900" />

      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 drop-shadow-sm">
          Features for Immigrants
        </h2>

        <Tabs defaultValue="language" value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tabs List */}
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 bg-transparent">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className={cn(
                  "text-base py-3 rounded-md transition-transform duration-300 transform hover:scale-[1.02] data-[state=active]:shadow-md",
                  activeTab === feature.id
                    ? `${feature.color} ${feature.textColor} data-[state=active]:border-b-4 data-[state=active]:border-current`
                    : "hover:bg-slate-100 dark:hover:bg-slate-800",
                )}
              >
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tabs Content */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              {features.map((feature) => {
                if (feature.id !== activeTab) return null

                return (
                  <TabsContent key={feature.id} value={feature.id} forceMount>
                    <motion.div
                      // Container-level animations
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, y: 20 }}
                    >
                      <motion.div variants={itemVariants}>
                        <Card className={cn("border-none rounded-lg shadow-md", feature.color)}>
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                              <div className="md:w-1/2">
                                <motion.div
                                  className="overflow-hidden rounded-lg shadow-md cursor-pointer"
                                  whileHover={{ scale: 1.02 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <img
                                    src={feature.image || "/placeholder.svg"}
                                    alt={feature.title}
                                    className="w-full h-auto object-cover"
                                    width={500}
                                    height={300}
                                  />
                                </motion.div>
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
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                    Simple, clear explanations
                                  </li>
                                  <li className="flex items-start">
                                    <svg
                                      className="h-5 w-5 mr-2 text-green-600 dark:text-green-400"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                    Multilingual support
                                  </li>
                                  <li className="flex items-start">
                                    <svg
                                      className="h-5 w-5 mr-2 text-green-600 dark:text-green-400"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                    Culturally inclusive approach
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </motion.div>
                  </TabsContent>
                )
              })}
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>
  )
}

