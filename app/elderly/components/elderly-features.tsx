"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

const features = [
  {
    id: "accessibility",
    title: "Accessibility Features",
    description:
      "Our platform is designed with accessibility in mind, featuring larger text, high contrast options, and screen reader compatibility.",
    image: "https://9to5mac.com/wp-content/uploads/sites/6/2022/05/Apple-Accessibility.jpg?quality=82&strip=all&w=1600",
    color: "bg-blue-100 dark:bg-blue-900/40",
    textColor: "text-blue-800 dark:text-blue-300",
  },
  {
    id: "resources",
    title: "Health Resources",
    description:
      "Access a comprehensive library of health resources, including articles, videos, and guides specifically curated for seniors.",
    image: "https://meded.ucsf.edu/sites/meded.ucsf.edu/files/inline-images/mental%20health%20page.jpg",
    color: "bg-green-100 dark:bg-green-900/40",
    textColor: "text-green-800 dark:text-green-300",
  },
  {
    id: "community",
    title: "Community Connection",
    description:
      "Stay connected with family, friends, and community members through our easy-to-use communication tools.",
    image: "https://www.dhd2.org/wp-content/uploads/2023/03/CommunityConnections_Logo_Verticle_600.png",
    color: "bg-amber-100 dark:bg-amber-900/40",
    textColor: "text-amber-800 dark:text-amber-300",
  },
]

// Framer Motion variants for container & item animations
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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
}

export default function ElderlyFeatures() {
  const [activeTab, setActiveTab] = useState("accessibility")

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-900" />

      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800 dark:text-blue-300 drop-shadow-sm">
          Features Designed for You
        </h2>

        <Tabs defaultValue="accessibility" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-4 bg-transparent">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className={cn(
                  "text-xl py-3 rounded-md transition-all duration-300 transform hover:scale-[1.02]",
                  "data-[state=active]:shadow-lg",
                  activeTab === feature.id
                    ? `${feature.color} ${feature.textColor} data-[state=active]:border-b-4 data-[state=active]:border-current`
                    : "hover:bg-slate-100 dark:hover:bg-slate-800",
                )}
              >
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mt-8">
            <AnimatePresence mode="wait">
              {features.map((feature) => {
                if (feature.id !== activeTab) return null
                return (
                  <TabsContent key={feature.id} value={feature.id} forceMount>
                    <motion.div
                      key={feature.id}
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
                                  className="aspect-[5/3] w-full overflow-hidden rounded-lg shadow-md"
                                  whileHover={{ scale: 1.02 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <img
                                    src={
                                      feature.image ||
                                      "https://www.dhd2.org/wp-content/uploads/2023/03/CommunityConnections_Logo_Verticle_600.png"
                                    }
                                    alt={feature.title}
                                    className="w-full h-full object-cover"
                                    width={500}
                                    height={300}
                                  />
                                </motion.div>
                              </div>
                              <div className="md:w-1/2">
                                <h3 className={cn("text-3xl font-bold mb-4", feature.textColor)}>{feature.title}</h3>
                                <p className="text-xl text-slate-700 dark:text-slate-300">{feature.description}</p>
                                <ul className="mt-6 space-y-3 text-lg text-slate-700 dark:text-slate-300">
                                  <li className="flex items-start">
                                    <svg
                                      className="h-6 w-6 mr-2 text-green-600 dark:text-green-400"
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
                                    Easy to navigate interface
                                  </li>
                                  <li className="flex items-start">
                                    <svg
                                      className="h-6 w-6 mr-2 text-green-600 dark:text-green-400"
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
                                    Step-by-step tutorials available
                                  </li>
                                  <li className="flex items-start">
                                    <svg
                                      className="h-6 w-6 mr-2 text-green-600 dark:text-green-400"
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
                                    24/7 support from our team
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

