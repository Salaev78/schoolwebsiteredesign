import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Building2, Users, Clock, ArrowRight } from "lucide-react"

export function ProgramsSection() {
  const programs = [
    {
      id: "fachoberschule",
      title: "Fachoberschule",
      description: "Erwerben Sie die Fachhochschulreife und bereiten Sie sich auf ein Studium vor.",
      icon: GraduationCap,
      duration: "2 Jahre",
      students: "400+ Schüler",
      specializations: ["Technik", "Wirtschaft", "Gestaltung"],
      highlights: [
        "Fachhochschulreife in 2 Jahren",
        "Praxisorientierter Unterricht",
        "Moderne Ausstattung",
        "Studienberatung inklusive",
      ],
      image: "/students-in-modern-classroom-with-computers.jpg",
    },
    {
      id: "berufsschule",
      title: "Berufsschule",
      description: "Duale Ausbildung in Kooperation mit regionalen Unternehmen.",
      icon: Building2,
      duration: "3-3.5 Jahre",
      students: "800+ Schüler",
      specializations: ["Elektrotechnik", "Maschinenbau", "IT", "Kaufmännisch"],
      highlights: ["Duale Ausbildung", "Starke Unternehmenspartner", "Hohe Übernahmequote", "Moderne Werkstätten"],
      image: "/students-working-in-technical-workshop-with-machin.jpg",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Unsere Bildungswege</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Entdecken Sie die vielfältigen Möglichkeiten an der Felix-Bloch-Schule. Wir bieten Ihnen den optimalen Weg
            für Ihre berufliche Zukunft.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/2] relative">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    <program.icon className="h-4 w-4 mr-1" />
                    {program.title}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {program.duration}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Users className="h-3 w-3 mr-1" />
                      {program.students}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-base">{program.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Fachrichtungen:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.specializations.map((spec) => (
                      <Badge key={spec} variant="secondary">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {program.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full" size="lg">
                  Mehr erfahren
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
