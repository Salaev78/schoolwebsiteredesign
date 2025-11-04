"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function InteractiveFlyer() {
  const [currentPage, setCurrentPage] = useState(0)

  const pages = [
    {
      image: "/flyer-page1.png",
      title: "Deckblatt",
    },
    {
      image: "/flyer-page2.png",
      title: "Innenseite",
    },
  ]

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? pages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentPage((prev) => (prev === pages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-2">Unser Flyer</h2>
          <p className="text-lg text-muted-foreground">Blättern Sie durch unseren Informationsflyer</p>
        </div>

        <div className="flex items-center justify-center gap-6">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="p-3 rounded-full bg-primary hover:bg-primary/90 text-white transition-colors"
            aria-label="Vorherige Seite"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Flyer Display */}
          <div className="relative w-full max-w-2xl aspect-square rounded-lg overflow-hidden shadow-2xl bg-white">
            <Image
              src={pages[currentPage].image || "/placeholder.svg"}
              alt={pages[currentPage].title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="p-3 rounded-full bg-primary hover:bg-primary/90 text-white transition-colors"
            aria-label="Nächste Seite"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Page Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentPage ? "bg-primary w-8" : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Zu Seite ${index + 1}`}
            />
          ))}
        </div>

        {/* Page Counter */}
        <div className="text-center mt-6 text-muted-foreground">
          Seite {currentPage + 1} von {pages.length}
        </div>
      </div>
    </section>
  )
}
