"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Elderly", href: "/elderly" },
  { name: "College Students", href: "/college" },
  { name: "Neurodivergent Youth", href: "/neurodivergent-youth" },
  { name: "Immigrants", href: "/immigrants" },
  { name: "More", href: "/more" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
          >
            Pathway
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/10",
                )}
              >
                {link.name}
              </Link>
            ))}
            <ModeToggle />
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/10",
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

