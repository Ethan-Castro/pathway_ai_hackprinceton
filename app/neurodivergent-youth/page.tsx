"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, BookOpen, Brain, Shield, Users } from "lucide-react"
import NeurodivergentFeatures from "./components/neurodivergent-features"
import NeurodivergentResources from "./components/neurodivergent-resources"
import ElevenLabsTalkLink from "@/components/elevenlabs-talk-link"
import ElevenLabsRawWidget from "@/components/elevenlabs-raw-widget"
import NeurodivergentElevenLabsWidget from "./components/neurodivergent-elevenlabs-widget"

export default function NeurodivergentYouthPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="flex justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-teal-200 hover:text-white hover:underline text-base mb-4"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Neurodivergent Youth Hub</h1>
              <p className="text-xl md:text-2xl text-teal-100">
                A supportive space designed with your unique needs in mind, offering resources, tools, and community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-100">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-teal-700/20">
                  Explore Resources
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-600 dark:from-teal-400 dark:to-teal-400">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Learning Resources",
                description: "Access adaptive learning materials and educational support tools",
                color: "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300",
              },
              {
                icon: Brain,
                title: "Sensory Tools",
                description: "Discover tools and techniques for sensory regulation and focus",
                color: "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300",
              },
              {
                icon: Shield,
                title: "Self-Advocacy",
                description: "Resources to help you communicate your needs and rights",
                color: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300",
              },
              {
                icon: Users,
                title: "Peer Community",
                description: "Connect with others who share similar experiences and interests",
                color: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
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
      <NeurodivergentFeatures />

      {/* Resources Section */}
      <NeurodivergentResources />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-teal-500 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Support?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-teal-100">
            Our AI assistant can help answer your questions, provide resources, and connect you with support services.
            Use the chat button to get started.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-100">
              Get Support
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-teal-700/20">
              View Resources
            </Button>
          </div>
        </div>
      </section>

      {/* ElevenLabs Talk Link */}
      <ElevenLabsTalkLink agentId="gUKId9kaAkHJTOHCzXmY" audienceType="neurodivergent" />

      {/* ElevenLabs Raw Widget */}
      <div className="mb-20">
        <ElevenLabsRawWidget agentId="gUKId9kaAkHJTOHCzXmY" />
      </div>

      {/* ElevenLabs Widget */}
      <NeurodivergentElevenLabsWidget />
    </div>
  )
}

