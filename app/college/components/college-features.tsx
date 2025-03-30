"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

const features = [
  {
    id: "academic",
    title: "Academic Success",
    description:
      "Access tools and resources designed to help you excel in your studies, including research databases, writing assistance, and study groups.",
    image: "https://career.iresearchnet.com/wp-content/uploads/2016/12/Academic-Achievement.jpg",
    color: "bg-purple-100 dark:bg-purple-900/40",
    textColor: "text-purple-700 dark:text-purple-300",
  },
  {
    id: "campus",
    title: "Campus Life",
    description:
      "Discover events, clubs, and activities happening on campus. Connect with other students and make the most of your college experience.",
    image:
      "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/10/20211111_Renaissance_class_DJA_036_0_0.jpg?itok=eTL2OLL8",
    color: "bg-indigo-100 dark:bg-indigo-900/40",
    textColor: "text-indigo-700 dark:text-indigo-300",
  },
  {
    id: "career",
    title: "Career Development",
    description:
      "Prepare for your future with internship opportunities, resume building tools, and career counseling services.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQEo9V4a4XEVxA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1703323776064?e=2147483647&v=beta&t=UZfiQFiUYTIf6F8R7sqhvx-PrFdmbEJUTgTgBuTNxDo",
    color: "bg-blue-100 dark:bg-blue-900/40",
    textColor: "text-blue-700 dark:text-blue-300",
  },
]

export default function CollegeFeatures() {
  const [activeTab, setActiveTab] = useState("academic")

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
          Features for College Students
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
                            Personalized recommendations
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
                            Connect with peers and mentors
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

