import coaches from "@/assets/coaches.jpg";
import { Award } from "lucide-react";

const Coaches = () => {
  return (
    <section id="antrenori" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            <span className="text-accent">Antrenori</span> Profesioniști
          </h2>
          <p className="text-lg text-muted-foreground">
            Echipa noastră de antrenori cu experiență vastă în competiții și formare de campioni
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden border-2 border-border hover:border-accent transition-all duration-500 hover:shadow-[var(--shadow-gold)] group animate-fade-in hover:scale-105">
            <img
              src={coaches}
              alt="Antrenori Grizzly Gym"
              className="w-full h-auto group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/95 via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-8 w-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-8 h-8 text-accent-foreground" />
                  <h3 className="text-2xl font-bold text-accent-foreground">
                    Antrenori Certificați
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Experiență Vastă",
                desc: "Peste 15 ani în arte marțiale",
              },
              {
                title: "Medalii & Trofee",
                desc: "Campioni naționali și internaționali",
              },
              {
                title: "Dedicare Totală",
                desc: "Atenție personalizată fiecărui sportiv",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-card border-2 border-border rounded-lg text-center hover:border-accent transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-gold)] animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <h4 className="font-bold text-lg text-foreground mb-2 hover:text-accent transition-colors duration-300">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
