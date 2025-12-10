import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Facebook, MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Începe <span className="text-accent">Astăzi</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Contactează-ne pentru o lecție de probă gratuită
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 border-2 border-border bg-card animate-fade-in hover:shadow-[var(--shadow-gold)] transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Informații Contact
                </h3>

                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-[var(--shadow-gold)]">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Locație</h4>
                    <p className="text-muted-foreground">Strada Cazărmilor 37, Iași 707410</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-[var(--shadow-gold)]">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                    <a
                      href="tel:+40758439400"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      +40 758 439 400
                    </a>
                  </div>
                </div>


                <div className="pt-6">
                  <h4 className="font-semibold text-foreground mb-4">Urmărește-ne</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=61557707303254"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-accent hover:bg-[hsl(var(--combat-gold-dark))] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 shadow-[var(--shadow-gold)]"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-6 h-6 text-accent-foreground" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@grizzly.gym.iasi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-accent hover:bg-[hsl(var(--combat-gold-dark))] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 shadow-[var(--shadow-gold)]"
                      aria-label="TikTok"
                    >
                      <svg 
                        viewBox="0 0 24 24" 
                        className="w-6 h-6 fill-accent-foreground"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/grizzlygymiasi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-accent hover:bg-[hsl(var(--combat-gold-dark))] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12 shadow-[var(--shadow-gold)]"
                      aria-label="Instagram"
                    >
                      <svg 
                        viewBox="0 0 24 24" 
                        className="w-6 h-6 fill-accent-foreground"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-center items-center md:items-start space-y-6 bg-muted/30 p-8 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Lecție de Probă Gratuită!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Vino să ne cunoști și să testezi antrenamentele noastre profesionale.
                    Prima lecție este gratuită!
                  </p>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      Colectiv prietenos și unit
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      Antrenori experimentați
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      Toate nivelurile sunt binevenite
                    </li>
                  </ul>
                  <a href="tel:+40758439400" className="w-full">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-accent to-[hsl(var(--combat-gold-dark))] hover:from-[hsl(var(--combat-gold-dark))] hover:to-accent text-accent-foreground font-bold py-6 shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-gold-strong)] transition-all duration-500 hover:scale-110"
                    >
                      Rezervă Acum
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
