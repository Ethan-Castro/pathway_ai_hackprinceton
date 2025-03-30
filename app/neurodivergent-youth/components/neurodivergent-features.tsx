"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

const features = [
  {
    id: "learning",
    title: "Adaptive Learning",
    description: "Access personalized learning resources that adapt to your unique learning style and preferences.",
    image: "https://www.evelynlearning.com/wp-content/uploads/2021/02/Adaptive-Learning-e1613642565837.jpg",
    color: "bg-teal-100 dark:bg-teal-900/40",
    textColor: "text-teal-700 dark:text-teal-300",
  },
  {
    id: "sensory",
    title: "Sensory Support",
    description:
      "Tools and resources to help manage sensory sensitivities and create comfortable environments for focus and learning.",
    image:
      "https://images.squarespace-cdn.com/content/v1/608eeec5b320070cf031720b/1691006291654-WXDWFV1M6FRE3SROD2WF/The-seven-sensory-systems.jpg",
    color: "bg-cyan-100 dark:bg-cyan-900/40",
    textColor: "text-cyan-700 dark:text-cyan-300",
  },
  {
    id: "social",
    title: "Social Connection",
    description:
      "Connect with peers who share similar experiences and interests in a supportive, understanding community.",
    image: "https://static.country-guide.ca/wp-content/uploads/2020/03/16165058/community-support-GettyImages.jpg",
    color: "bg-emerald-100 dark:bg-emerald-900/40",
    textColor: "text-emerald-700 dark:text-emerald-300",
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function NeurodivergentFeatures() {
  const [activeTab, setActiveTab] = useState("learning")

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-teal-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />

      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-600 dark:from-teal-400 dark:to-teal-400 drop-shadow-sm">
          Features for Neurodivergent Youth
        </h2>

        <Tabs defaultValue="learning" value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tabs List */}
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-4 bg-transparent">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className={cn(
                  "text-base py-3 rounded-md transition-transform duration-300 transform hover:scale-[1.02] data-[state=active]:shadow-lg",
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
                  <TabsContent key={feature.id} value={feature.id} forceMount className="focus:outline-none">
                    <motion.div
                      // Outer container to control entry/exit animations
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
                                  className="overflow-hidden rounded-lg shadow-md"
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
                                      className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400"
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
                                    Personalized experience
                                  </li>
                                  <li className="flex items-start">
                                    <svg
                                      className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400"
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
                                    Clear, structured navigation
                                  </li>
                                  <li className="flex items-start">
                                    <svg
                                      className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400"
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
                                    Supportive community
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

