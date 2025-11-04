import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="kontakt" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Kontakt</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Haben Sie Fragen zu unseren Bildungsangeboten? Wir sind gerne für Sie da und beraten Sie persönlich.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Adresse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Felix-Bloch-Schule
                  <br />
                  Berufliches Schulzentrum der Stadt Leipzig
                  <br />
                  Dachsstraße 1<br />
                  04329 Leipzig
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Telefon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">+49 341 123 456 0</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    E-Mail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">info@fbsbsz.de</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Öffnungszeiten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Montag - Donnerstag:</span>
                    <span>7:30 - 16:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Freitag:</span>
                    <span>7:30 - 14:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag - Sonntag:</span>
                    <span>Geschlossen</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Nachricht senden</CardTitle>
              <CardDescription>
                Schreiben Sie uns eine Nachricht und wir melden uns schnellstmöglich bei Ihnen.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      Vorname
                    </label>
                    <Input id="firstName" placeholder="Ihr Vorname" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Nachname
                    </label>
                    <Input id="lastName" placeholder="Ihr Nachname" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-Mail
                  </label>
                  <Input id="email" type="email" placeholder="ihre.email@beispiel.de" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Betreff
                  </label>
                  <Input id="subject" placeholder="Worum geht es?" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Nachricht
                  </label>
                  <Textarea id="message" placeholder="Ihre Nachricht an uns..." className="min-h-[120px]" />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Nachricht senden
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
