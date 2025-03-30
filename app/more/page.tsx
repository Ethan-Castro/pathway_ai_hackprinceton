"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowLeft,
  MessageSquare,
  Phone,
  Headphones,
  MessageCircle,
  Info,
  ExternalLink,
  ChevronDown,
} from "lucide-react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import WebhookEmbed from "@/components/webhook-embed"
import ElevenLabsRawWidget from "@/components/elevenlabs-raw-widget"

// AI tools data
const AI_TOOLS = [
  {
    id: "voice",
    title: "Voice Assistant",
    description: "Talk with our AI voice assistant powered by ElevenLabs for a natural conversation.",
    icon: Headphones,
    colorClass: {
      bg: "bg-purple-50 dark:bg-purple-900/20",
      border: "border-purple-200 dark:border-purple-800",
      iconBg: "bg-purple-500",
      text: "text-purple-700 dark:text-purple-300",
      button: "bg-purple-600 hover:bg-purple-700",
    },
    component: () => (
      <div className="max-w-2xl mx-auto text-center">
        <p className="mb-6 text-muted-foreground">
          Our voice assistant allows you to have natural conversations using ElevenLabs technology.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700 mb-8" asChild>
          <Link
            href="https://elevenlabs.io/app/talk-to?agent_id=cp25OdMkPHC7qvRdnGIz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Talk to Voice Assistant
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <div className="relative h-[400px] border rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800">
            <p className="text-muted-foreground">Voice assistant widget will appear here when activated</p>
          </div>
          <ElevenLabsRawWidget agentId="cp25OdMkPHC7qvRdnGIz" />
        </div>
      </div>
    ),
  },
  {
    id: "whatsapp",
    title: "WhatsApp Support",
    description: "Chat with our AI assistant directly through WhatsApp for quick and convenient support.",
    icon: MessageSquare,
    colorClass: {
      bg: "bg-green-50 dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-800",
      iconBg: "bg-green-500",
      text: "text-green-700 dark:text-green-300",
      button: "bg-green-600 hover:bg-green-700",
    },
    component: () => (
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <p className="mb-6 text-muted-foreground">
            Connect with our AI assistant through WhatsApp for support on the go.
          </p>
          <Button
            className="bg-green-600 hover:bg-green-700"
            onClick={() => {
              const phoneNumber = "14155238886"
              const message = encodeURIComponent("join many-chest")
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
              window.open(whatsappUrl, "_blank")
            }}
          >
            Connect on WhatsApp
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <Card className="border border-green-200 dark:border-green-800 mb-8">
          <CardHeader className="bg-green-50 dark:bg-green-900/20">
            <CardTitle className="text-green-700 dark:text-green-300 flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              WhatsApp Instructions
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ol className="list-decimal pl-5 space-y-3">
              <li>Click the "Connect on WhatsApp" button above</li>
              <li>Send the message "join many-chest" to connect to our service</li>
              <li>Once connected, you can ask any questions about our services</li>
              <li>The AI assistant will respond to your queries in real-time</li>
            </ol>
          </CardContent>
        </Card>

        {/* Loom Video Tutorial */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">
            Video Tutorial: How to Use WhatsApp Support
          </h3>
          <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.loom.com/embed/d0244ad511ef429db89780813d94325f?sid=b238b1e0-170c-4c6f-bb9f-0cb5d6ab1383"
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "call",
    title: "Call AI Support",
    video: <a href="https://youtu.be/LNK3A3Ra_NQ">video</a>,
    description: "Call our AI-powered phone support for assistance with complex questions.",
    icon: Phone,
    colorClass: {
      bg: "bg-amber-50 dark:bg-amber-900/20",
      border: "border-amber-200 dark:border-amber-800",
      iconBg: "bg-amber-500",
      text: "text-amber-700 dark:text-amber-300",
      button: "bg-amber-600 hover:bg-amber-700",
    },
    component: () => (
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <p className="mb-6 text-muted-foreground">
            Call our AI-powered phone support for a voice conversation with our assistant.
          </p>
          <Button
            className="bg-amber-600 hover:bg-amber-700"
            onClick={() => {
              const phoneNumber = "+19294159612"
              const telUri = `tel:${phoneNumber}`
              window.location.href = telUri
            }}
          >
            Call AI Support
            <Phone className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <Card className="border border-amber-200 dark:border-amber-800">
          <CardHeader className="bg-amber-50 dark:bg-amber-900/20">
            <CardTitle className="text-amber-700 dark:text-amber-300 flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Phone Support Details
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">Phone Number:</h4>
                <p className="text-lg">+1 (929) 415-9612</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Hours of Operation:</h4>
                <p>24/7 AI-powered support</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">What to Expect:</h4>
                <p>
                  Our AI assistant will answer your call and provide assistance with any questions about our services.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
]

// About content sections
const ABOUT_SECTIONS = [
  {
    id: "mission",
    title: "Our Mission",
    content:
      "At MultiPortal, our mission is to create a truly inclusive digital experience that serves the diverse needs of all users. We believe that technology should adapt to people, not the other way around. By designing specialized interfaces for different audience groups, we're breaking down barriers to digital access and ensuring everyone can benefit from our services.",
  },
  {
    id: "approach",
    title: "Our Approach",
    content:
      "We've taken a user-centered design approach, carefully considering the unique needs, preferences, and challenges of each audience group. For elderly users, we prioritize clarity, simplicity, and accessibility. For college students, we focus on dynamic content and efficient information delivery. For neurodivergent youth, we create sensory-friendly interfaces with clear structure. For immigrants, we provide multilingual support and culturally inclusive design.",
  },
  {
    id: "technology",
    title: "Our Technology",
    content:
      "MultiPortal leverages cutting-edge technology to deliver personalized experiences. Our platform uses adaptive interfaces, AI-powered assistance, and responsive design to ensure optimal experiences across all devices. We've integrated multiple AI communication channels including chat, voice, WhatsApp, and phone support to provide assistance in whatever way is most comfortable for our users.",
  },
  {
    id: "future",
    title: "Future Vision",
    content:
      "We're continuously evolving our platform based on user feedback and emerging technologies. Our roadmap includes enhanced personalization features, expanded language support, improved accessibility tools, and deeper integration of AI assistance throughout the user journey. We're committed to staying at the forefront of inclusive design and technology innovation.",
  },
]

export default function MorePage() {
  const [activeTab, setActiveTab] = useState("about")
  const [activeAITool, setActiveAITool] = useState("chatbot")
  const [activeAboutSection, setActiveAboutSection] = useState("mission")

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 to-blue-600/20 py-16 md:py-24 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Animated dots */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/30"
              style={{
                width: Math.random() * 8 + 2,
                height: Math.random() * 8 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 50 - 25, 0],
                y: [0, Math.random() * 50 - 25, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-primary hover:text-primary/80 hover:underline text-base mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              More About MultiPortal
            </h1>
            <p className="text-xl mt-4 text-muted-foreground">
              Learn about our mission and explore all the AI tools we offer to enhance your experience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="about" className="text-lg py-3">
                <Info className="mr-2 h-5 w-5" />
                About Us
              </TabsTrigger>
              <TabsTrigger value="ai-tools" className="text-lg py-3">
                <MessageCircle className="mr-2 h-5 w-5" />
                AI Tools
              </TabsTrigger>
            </TabsList>

            {/* About Content */}
            <TabsContent value="about" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="sticky top-24 space-y-2">
                    {ABOUT_SECTIONS.map((section) => (
                      <Button
                        key={section.id}
                        variant={activeAboutSection === section.id ? "default" : "outline"}
                        className="w-full justify-start text-left"
                        onClick={() => setActiveAboutSection(section.id)}
                      >
                        {section.title}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <motion.div
                    key={activeAboutSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-card rounded-lg border p-6 shadow-sm"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                      {ABOUT_SECTIONS.find((s) => s.id === activeAboutSection)?.title}
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      <p>{ABOUT_SECTIONS.find((s) => s.id === activeAboutSection)?.content}</p>
                    </div>
                  </motion.div>

                  {/* Team section */}
                  <div className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {[
                        {
                          name: "Ethan Castro",
                          role: "1/2 Baruch Boys",
                          image:
                            "https://media.licdn.com/dms/image/v2/D4E03AQFCFMrs4BRw1g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725704063256?e=2147483647&v=beta&t=KJd5v4yHEhgsPush7lEZ2sM-Fcr0UWJPqw-lgUmOAQc",
                        },
                        {
                          name: "Felix Ramos",
                          role: "2/2 Baruch Boys",
                          image:
                            "https://media.licdn.com/dms/image/v2/D4E03AQGdjq9a5MjUMQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719849297280?e=1749081600&v=beta&t=T2UOG_Xxze9NoZHaQdSGVX-ycRhR6nJ1zQGcN0OKf6A",
                        },
                      ].map((member, index) => (
                        <Card key={index} className="overflow-hidden">
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full h-48 object-cover"
                          />
                          <CardHeader className="pb-2">
                            <CardTitle>{member.name}</CardTitle>
                            <CardDescription>{member.role}</CardDescription>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* AI Tools Content */}
            <TabsContent value="ai-tools" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <div className="sticky top-24 space-y-4">
                    <h3 className="text-lg font-medium mb-2">Available Tools</h3>
                    {AI_TOOLS.map((tool) => (
                      <Button
                        key={tool.id}
                        variant={activeAITool === tool.id ? "default" : "outline"}
                        className={`w-full justify-start text-left ${
                          activeAITool === tool.id ? tool.colorClass.button : ""
                        }`}
                        onClick={() => setActiveAITool(tool.id)}
                      >
                        <tool.icon className="mr-2 h-5 w-5" />
                        {tool.title}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-3">
                  <motion.div
                    key={activeAITool}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        {AI_TOOLS.find((t) => t.id === activeAITool)?.title}
                      </h2>
                      <p className="text-muted-foreground text-lg">
                        {AI_TOOLS.find((t) => t.id === activeAITool)?.description}
                      </p>
                    </div>

                    {/* Tool Component */}
                    {AI_TOOLS.find((t) => t.id === activeAITool)?.component()}
                  </motion.div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-blue-600/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience MultiPortal?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Explore our specialized sections designed for different audience groups or try out our AI tools.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/#audience-sections">
                Explore Audience Sections
                <ChevronDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" onClick={() => setActiveTab("ai-tools")}>
              Try AI Tools
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

