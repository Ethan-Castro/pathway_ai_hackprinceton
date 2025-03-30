"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Phone, FileText, Calendar, Users } from "lucide-react"
import ElderlyFeatures from "./components/elderly-features"
import ElderlyResources from "./components/elderly-resources"
import ElevenLabsTalkLink from "@/components/elevenlabs-talk-link"
// Import only one widget to avoid conflicts
// import ElevenLabsRawWidget from "@/components/elevenlabs-raw-widget"
import ElderlyElevenLabsWidget from "./components/elderly-elevenlabs-widget"

export default function ElderlyPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-50 dark:bg-blue-950/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="flex justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-lg mb-4"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-800 dark:text-blue-300">
                Welcome to Our Senior Portal
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300">
                We've designed this section with you in mind, with larger text, clear navigation, and helpful resources.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="text-lg bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="text-lg text-blue-600 border-blue-600">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800 dark:text-blue-300">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Phone,
                title: "Contact Support",
                description: "Get help from our friendly support [AI] team. Call: 833-573-4620",
                color: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
              },
              {
                icon: FileText,
                title: "Important Documents",
                description: "Access and download important forms",
                color: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
              },
              {
                icon: Calendar,
                title: "Upcoming Events",
                description: "View and register for community events",
                color: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",
              },
              {
                icon: Users,
                title: "Community Groups",
                description: "Join groups based on your interests",
                color: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className={`${item.color} rounded-lg p-6 text-center transition-transform hover:scale-105 cursor-pointer`}
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-lg">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <ElderlyFeatures />

      {/* Resources Section */}
      <ElderlyResources />

      {/* Call to Action */}
      <section className="py-16 bg-blue-100 dark:bg-blue-950/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800 dark:text-blue-300">Need Assistance?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-slate-700 dark:text-slate-300">
            Our team is here to help you navigate our services. Use the chat button in the corner or contact us
            directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="text-lg bg-blue-600 hover:bg-blue-700">
              <Phone className="mr-2 h-5 w-5" />
              Call Us: 1-833-573-4620
            </Button>
            <Button size="lg" variant="outline" className="text-lg text-blue-600 border-blue-600">
              Send Email
            </Button>
          </div>
        </div>
      </section>

      {/* ElevenLabs Talk Link */}
      <ElevenLabsTalkLink agentId="n8y8fe4GRhK0uwKeKuiJ" audienceType="elderly" />

      {/* Use only one widget to avoid conflicts */}
      <ElderlyElevenLabsWidget />
    </div>
  )
}

