import { Card, CardContent } from "@/components/ui/card"

export function PartnersSection() {
  const partners = [
    { name: "Porsche Leipzig", logo: "/porsche-crest.png" },
    { name: "BMW Group", logo: "/bmw-logo.png" },
    { name: "Siemens", logo: "/siemens-logo.png" },
    { name: "Bosch", logo: "/bosch-logo.png" },
    { name: "Volkswagen", logo: "/volkswagen-logo.jpg" },
    { name: "Deutsche Bahn", logo: "/deutsche-bahn-logo.jpg" },
    { name: "Stadtwerke Leipzig", logo: "/stadtwerke-leipzig-logo.jpg" },
    { name: "Leipziger Messe", logo: "/leipziger-messe-logo.jpg" },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Unsere Partner</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Wir arbeiten eng mit führenden Unternehmen der Region zusammen, um unseren Schülern beste Ausbildungs- und
            Karrierechancen zu bieten.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <Card key={partner.name} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-center justify-center">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} Logo`}
                  className="max-w-full h-12 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Interessiert an einer Partnerschaft?
            <a href="#kontakt" className="text-primary hover:underline ml-1">
              Kontaktieren Sie uns
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
