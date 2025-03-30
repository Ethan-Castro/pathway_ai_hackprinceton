"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, BookOpen, Calendar, Users, Lightbulb } from "lucide-react"
import CollegeFeatures from "./components/college-features"
import CollegeResources from "./components/college-resources"
import ElevenLabsTalkLink from "@/components/elevenlabs-talk-link"
import ElevenLabsRawWidget from "@/components/elevenlabs-raw-widget"
import CollegeElevenLabsWidget from "./components/college-elevenlabs-widget"

export default function CollegePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="flex justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-purple-200 hover:text-white hover:underline text-base mb-4"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">College Student Hub</h1>
              <p className="text-xl md:text-2xl text-purple-100">
                Your one-stop resource for academic success, campus life, and future planning.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-100">
                  Explore Resources
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-purple-700/20">
                  Campus Events
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Academic Resources",
                description: "Access study materials, research databases, and academic support",
                color: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
              },
              {
                icon: Calendar,
                title: "Campus Events",
                description: "Stay updated with the latest events, workshops, and activities",
                color: "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300",
              },
              {
                icon: Users,
                title: "Student Organizations",
                description: "Discover and join clubs and organizations that match your interests",
                color: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
              },
              {
                icon: Lightbulb,
                title: "Career Services",
                description: "Explore internships, job opportunities, and career development resources",
                color: "bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className={`${item.color} rounded-lg p-6 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer`}
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
                  <p className="text-base text-center">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <CollegeFeatures />

      {/* Resources Section */}
      <CollegeResources />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help with Your Studies?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-purple-100">
            Our AI assistant can help with research, writing, and study strategies. Use the chat button or schedule a
            consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-100">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-purple-700/20">
              View Tutorials
            </Button>
          </div>
        </div>
      </section>

      {/* ElevenLabs Talk Link */}
      <ElevenLabsTalkLink agentId="cp25OdMkPHC7qvRdnGIz" audienceType="college" />

      {/* ElevenLabs Raw Widget */}
      <div className="mb-20">
        <ElevenLabsRawWidget agentId="cp25OdMkPHC7qvRdnGIz" />
      </div>

      {/* ElevenLabs Widget */}
      <CollegeElevenLabsWidget />
    </div>
  )
}

