"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Users, GraduationCap, School, Globe } from "lucide-react"

const audienceGroups = [
  {
    id: "elderly",
    name: "Elderly",
    description: "Accessible design with larger text and clear navigation",
    icon: Users,
    color: "bg-blue-100 dark:bg-blue-950",
    textColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-200 dark:border-blue-800",
    hoverColor: "group-hover:bg-blue-200 dark:group-hover:bg-blue-900",
    path: "/elderly",
  },
  {
    id: "college",
    name: "College Students",
    description: "Vibrant design with interactive elements and quick access",
    icon: GraduationCap,
    color: "bg-purple-100 dark:bg-purple-950",
    textColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-200 dark:border-purple-800",
    hoverColor: "group-hover:bg-purple-200 dark:group-hover:bg-purple-900",
    path: "/college",
  },
  {
    id: "neurodivergent",
    name: "Neurodivergent Youth",
    description: "Accessible design with sensory-friendly interface and clear, structured navigation",
    icon: School,
    color: "bg-teal-100 dark:bg-teal-950",
    textColor: "text-teal-600 dark:text-teal-400",
    borderColor: "border-teal-200 dark:border-teal-800",
    hoverColor: "group-hover:bg-teal-200 dark:group-hover:bg-teal-900",
    path: "/neurodivergent-youth",
  },
  {
    id: "immigrants",
    name: "Immigrants",
    description: "Multilingual support with culturally inclusive design",
    icon: Globe,
    color: "bg-amber-100 dark:bg-amber-950",
    textColor: "text-amber-600 dark:text-amber-400",
    borderColor: "border-amber-200 dark:border-amber-800",
    hoverColor: "group-hover:bg-amber-200 dark:group-hover:bg-amber-900",
    path: "/immigrants",
  },
]

export default function AudienceSelector() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div id="audience-sections" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {audienceGroups.map((group) => {
        const Icon = group.icon
        return (
          <Link
            href={group.path}
            key={group.id}
            className={cn(
              "group relative overflow-hidden rounded-xl border p-6 transition-all duration-300",
              group.borderColor,
              hoveredId === group.id ? "scale-105" : "",
              hoveredId !== null && hoveredId !== group.id ? "scale-95 opacity-70" : "",
            )}
            onMouseEnter={() => setHoveredId(group.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <motion.div
              className={cn("absolute inset-0 -z-10 transition-colors duration-300", group.color, group.hoverColor)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <div className="flex flex-col items-center text-center">
              <div className={cn("rounded-full p-3 mb-4", group.color)}>
                <Icon className={cn("h-8 w-8", group.textColor)} />
              </div>
              <h3 className={cn("text-xl font-semibold mb-2", group.textColor)}>{group.name}</h3>
              <p className="text-muted-foreground text-sm">{group.description}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

