import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Award, Briefcase } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-muted via-background to-card py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Herzlich willkommen bei der <span className="text-primary">Felix-Bloch-Schule</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Berufliches Schulzentrum der Stadt Leipzig für technische und kaufmännische Ausbildung. Wir bereiten Sie
                optimal auf Ihre berufliche Zukunft vor.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Jetzt bewerben
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Mehr erfahren
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">1200+</div>
                <div className="text-sm text-muted-foreground">Schüler</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Erfolgsquote</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">150+</div>
                <div className="text-sm text-muted-foreground">Partner</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/modern-school-students.png"
                alt="Felix-Bloch-Schule Gebäude"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm opacity-90">Jahre Erfahrung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
