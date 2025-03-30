"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Globe, FileText, Home, Users } from "lucide-react"
import ImmigrantFeatures from "./components/immigrant-features"
import ImmigrantResources from "./components/immigrant-resources"
import LanguageSelector from "./components/language-selector"
import ElevenLabsTalkLink from "@/components/elevenlabs-talk-link"
import ElevenLabsRawWidget from "@/components/elevenlabs-raw-widget"
import ImmigrantsElevenLabsWidget from "./components/immigrants-elevenlabs-widget"

export default function ImmigrantsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="flex justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-amber-200 hover:text-white hover:underline text-base mb-4"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Immigrant Resource Center</h1>
              <p className="text-xl md:text-2xl text-amber-100">
                Your comprehensive guide to resources, services, and community support.
              </p>
              <div className="flex justify-center">
                <LanguageSelector />
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-100">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-amber-700/20">
                  Find Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                title: "Language Resources",
                description: "Access language learning tools, translation services, and multilingual resources",
                color: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",
              },
              {
                icon: FileText,
                title: "Legal Information",
                description: "Find information about immigration processes, rights, and legal assistance",
                color: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
              },
              {
                icon: Home,
                title: "Settlement Services",
                description: "Resources for housing, healthcare, education, and employment",
                color: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
              },
              {
                icon: Users,
                title: "Community Support",
                description: "Connect with community groups, cultural organizations, and support networks",
                color: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300",
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
      <ImmigrantFeatures />

      {/* Resources Section */}
      <ImmigrantResources />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-amber-500 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Personalized Assistance?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-amber-100">
            Our AI assistant can help answer your questions about immigration processes, available resources, and
            community services. Use the chat button to get started.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-100">
              Get Help Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-amber-700/20">
              Find Local Services
            </Button>
          </div>
        </div>
      </section>

      {/* ElevenLabs Talk Link */}
      <ElevenLabsTalkLink agentId="jqDEtg3O529ZlJizqpWu" audienceType="immigrants" />

      {/* ElevenLabs Raw Widget */}
      <div className="mb-20">
        <ElevenLabsRawWidget agentId="jqDEtg3O529ZlJizqpWu" />
      </div>

      {/* ElevenLabs Widget */}
      <ImmigrantsElevenLabsWidget />
    </div>
  )
}

