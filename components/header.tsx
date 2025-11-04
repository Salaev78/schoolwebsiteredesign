"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, GraduationCap, Users, Building, Calendar, FileText, Phone } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "#home", icon: GraduationCap },
    { name: "Fachoberschule", href: "#fachoberschule", icon: Users },
    { name: "Berufsschule", href: "#berufsschule", icon: Building },
    { name: "Aktuelles", href: "#aktuelles", icon: Calendar },
    { name: "Formulare", href: "#formulare", icon: FileText },
    { name: "Kontakt", href: "#kontakt", icon: Phone },
  ]

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src="/fbs-logo.png" alt="Felix-Bloch-Schule Logo" width={60} height={60} className="h-14 w-auto" />
            <div>
              <h1 className="text-lg font-bold text-foreground">Felix-Bloch-Schule</h1>
              <p className="text-xs text-muted-foreground">Berufliches Schulzentrum Leipzig</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="text-foreground hover:text-primary hover:bg-muted"
                asChild
              >
                <a href={item.href} className="flex items-center space-x-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              </Button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="justify-start text-foreground hover:text-primary hover:bg-muted"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <a href={item.href} className="flex items-center space-x-2">
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </a>
                </Button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
