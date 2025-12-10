import athletes1 from "@/assets/athletes-1.jpg";
import athletes2 from "@/assets/athletes-2.jpg";
import athletes3 from "@/assets/athletes-3.jpg";
import athletes4 from "@/assets/athletes-4.jpg";
import athletes5 from "@/assets/athletes-5.jpg";
import athletes6 from "@/assets/athletes-6.jpg";
import { Medal } from "lucide-react";

const Athletes = () => {
  const images = [
    { src: athletes1, alt: "Sportivi Grizzly Gym la turneu UFTI" },
    { src: athletes2, alt: "Campion Grizzly Gym" },
    { src: athletes3, alt: "Echipa Grizzly Gym cu medalii" },
    { src: athletes4, alt: "Sportivi Grizzly Gym câștigători" },
    { src: athletes5, alt: "Echipa Grizzly Gym la Glory Fighting Championship" },
    { src: athletes6, alt: "Echipa Grizzly Gym la Abu Dhabi AJP Tour" },
  ];

  return (
    <section id="rezultate" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Medal className="w-12 h-12 text-accent" />
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              <span className="text-primary">Rezultate</span> & Campioni
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Sportivii noștri strălucesc la competițiile naționale și internaționale
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border-2 border-border hover:border-accent transition-all duration-500 hover:shadow-[var(--shadow-gold)] hover:scale-105 aspect-[3/4] animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="p-8 bg-card border-2 border-border rounded-xl">
            <h3 className="text-2xl font-bold text-foreground text-center mb-6">
              Participări la <span className="text-accent">Gale Internaționale</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Heroes MMA", type: "Gală MMA" },
                { name: "Hexagone MMA", type: "Gală MMA" },
                { name: "Dominance Fighting Championship", type: "Gală MMA" },
                { name: "Glory Fighting Championship MMA", type: "Gală MMA" },
                { name: "Abu Dhabi Jiu Jitsu Pro", type: "Turneu BJJ" },
                { name: "XFC MMA", type: "Campionat mondial de MMA" },
              ].map((event, index) => (
                <div
                  key={index}
                  className="group p-5 bg-muted/50 rounded-lg border border-border hover:border-accent hover:shadow-[var(--shadow-gold)] transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {event.name}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {event.type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Athletes;
