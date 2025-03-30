import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, BookOpen, Rocket, Award, Users } from "lucide-react"
import HighSchoolFeatures from "./components/high-school-features"
import HighSchoolResources from "./components/high-school-resources"
import ElevenLabsConvaiWidget from "@/components/elevenlabs-convai-widget"

export default function HighSchoolPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-500 to-emerald-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 space-y-6">
              <Link
                href="/"
                className="inline-flex items-center text-green-200 hover:text-white hover:underline text-base mb-4"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold">High School Central</h1>
              <p className="text-xl md:text-2xl text-green-100">
                Your go-to resource for academic success, extracurricular activities, and college prep.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-green-700 hover:bg-green-100">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700/20">
                  Explore Activities
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="High school students studying"
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Study Resources",
                description: "Access study guides, practice tests, and homework help",
                color: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
              },
              {
                icon: Rocket,
                title: "College Prep",
                description: "Resources for college applications, scholarships, and test prep",
                color: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300",
              },
              {
                icon: Award,
                title: "Extracurricular Activities",
                description: "Discover clubs, sports, and volunteer opportunities",
                color: "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300",
              },
              {
                icon: Users,
                title: "Student Community",
                description: "Connect with peers, share experiences, and collaborate",
                color: "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300",
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
      <HighSchoolFeatures />

      {/* Resources Section */}
      <HighSchoolResources />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-green-500 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help with Homework?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-green-100">
            Our AI assistant can help with homework questions, study strategies, and test preparation. Use the chat
            button to get started.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-green-700 hover:bg-green-100">
              Get Homework Help
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700/20">
              Study Tips
            </Button>
          </div>
        </div>
      </section>

      {/* ElevenLabs Convai Widget */}
      <ElevenLabsConvaiWidget agentId="jqDEtg3O529ZlJizqpWu" />
    </div>
  )
}

