import { MapPin } from "lucide-react";

const Map = () => {
  return (
    <section id="locatie" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Găsește-ne <span className="text-accent">Aici</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground mb-8">
            <MapPin className="text-accent" size={24} />
            <p>Iași, România</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border-4 border-accent shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-gold-strong)] transition-all duration-500 hover:scale-[1.02] animate-fade-in">
            <iframe
              src="https://maps.google.com/maps?q=Strada+Caz%C4%83rmilor+37,+Ia%C8%99i+707410,+Romania&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locația Grizzly Gym Iași"
              className="w-full"
            />
          </div>
          
          <div className="mt-8 text-center">
            <div className="mb-4">
              <p className="text-lg font-semibold text-foreground mb-2">📍 Strada Cazărmilor 37, Iași 707410</p>
              <p className="text-muted-foreground">📞 +40 758 439 400</p>
            </div>
            <a
              href="https://maps.app.goo.gl/xw1Xdrq4m1nB9H839"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-[hsl(var(--combat-gold-dark))] text-accent-foreground font-bold rounded-lg shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-gold-strong)] transition-all duration-300 hover:scale-105"
            >
              <MapPin size={20} />
              Deschide în Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
