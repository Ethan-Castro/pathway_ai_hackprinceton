"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "zh", name: "中文" },
  { code: "ar", name: "العربية" },
  { code: "hi", name: "हिन्दी" },
  { code: "ru", name: "Русский" },
  { code: "pt", name: "Português" },
]

export default function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-white/20 text-white border-white/40 hover:bg-white/30">
          <Globe className="mr-2 h-4 w-4" />
          {currentLanguage.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[200px]">
        {languages.map((language) => (
          <DropdownMenuItem key={language.code} onClick={() => setCurrentLanguage(language)} className="cursor-pointer">
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

