import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, Users, Award, Briefcase } from "lucide-react"

export function NewsSection() {
  const news = [
    {
      id: 1,
      title: "Tag der offenen Tür 2024",
      description:
        "Besuchen Sie uns am 15. März und lernen Sie unsere Schule kennen. Informationen zu allen Bildungsgängen und Führungen durch unsere modernen Werkstätten.",
      date: "2024-03-15",
      category: "Veranstaltung",
      icon: Users,
      image: "/school-open-day-with-students-and-parents.jpg",
    },
    {
      id: 2,
      title: "Erfolgreiche IHK-Abschlüsse",
      description:
        "Unsere Auszubildenden haben erneut hervorragende Ergebnisse bei den IHK-Prüfungen erzielt. 95% Erfolgsquote in allen Bereichen.",
      date: "2024-02-28",
      category: "Erfolg",
      icon: Award,
      image: "/graduation-ceremony-with-students-receiving-certif.jpg",
    },
    {
      id: 3,
      title: "Neue Kooperation mit Porsche Leipzig",
      description:
        "Wir freuen uns über die neue Partnerschaft mit Porsche Leipzig, die unseren Schülern zusätzliche Praktikums- und Ausbildungsplätze bietet.",
      date: "2024-02-20",
      category: "Partnerschaft",
      icon: Briefcase,
      image: "/modern-automotive-workshop-with-porsche-cars.jpg",
    },
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  return (
    <section id="aktuelles" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Aktuelles</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Bleiben Sie auf dem Laufenden über Neuigkeiten, Veranstaltungen und Erfolge an der Felix-Bloch-Schule.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/2] relative">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    <item.icon className="h-4 w-4 mr-1" />
                    {item.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(item.date)}
                </div>
                <CardTitle className="text-xl text-balance">{item.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Weiterlesen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Alle Neuigkeiten anzeigen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
