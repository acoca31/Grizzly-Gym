import { Shield, Trophy, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Antrenament Profesional",
      description: "Antrenori certificați cu experiență în competiții naționale și internaționale",
    },
    {
      icon: Trophy,
      title: "Rezultate Dovedite",
      description: "Sportivii noștri câștigă medalii și titluri la cele mai importante competiții",
    },
    {
      icon: Users,
      title: "Comunitate Puternică",
      description: "Alătură-te unei familii de luptători dedicați și motivați",
    },
  ];

  return (
    <section id="despre" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Despre <span className="text-accent">Grizzly Gym</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-accent mb-8">
            Povestea Grizzly Gym Iași – Unde se nasc campionii
          </h3>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-6 text-left">
            <p>
              La începutul anului 2024, într-o lună rece de ianuarie, dar cu o viziune arzătoare în suflet, a luat naștere Grizzly Gym Iași. Nu a fost doar începutul unei săli de sport, ci startul unui vis construit din pasiune, disciplină și dragoste profundă pentru artele marțiale și sportul de performanță.
            </p>
            <p>
              Totul a pornit din dorința sinceră de a crea mai mult decât campioni în cușcă — de a forma caractere. De a oferi tinerilor și adulților un loc unde să-și descopere potențialul, să-și testeze limitele și să învețe ce înseamnă respectul, munca și determinarea. Aici, fiecare antrenament a devenit o lecție de viață, iar fiecare luptă o treaptă spre evoluție.
            </p>
            <p>
              Într-un timp remarcabil de scurt, Grizzly Gym Iași s-a transformat într-un adevărat fenomen. Sportivii formați aici, în special pe ramurile de MMA și Jiu-Jitsu Brazilian, au urcat rapid pe podium, devenind campioni și vicecampioni, participând la numeroase gale, atât pe plan național, cât și internațional. Fiecare medalie, fiecare centură, fiecare victorie poartă amprenta muncii grele și a spiritului de echipă care definește această sală.
            </p>
            <p>
              Însă succesul nu se măsoară doar în trofee. Mulți dintre sportivii care au trecut pragul Grizzly Gym și-au construit drumuri solide și în afara sportului, unii alegând să urmeze cariere în structurile M.A.I., demonstrând că disciplina învățată pe tatami și în cușcă deschide porți și în viață.
            </p>
            <p>
              Astăzi, Grizzly Gym Iași nu este doar o sală de MMA. Este o familie. Un loc unde visurile prind contur, unde frica se transformă în curaj și unde oamenii obișnuiți devin luptători — în ring și dincolo de el.
            </p>
            <p className="text-accent font-semibold text-xl text-center mt-8">
              Grizzly Gym Iași – locul unde pasiunea devine forță, iar forța devine caracter.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-lg border-2 border-border hover:border-accent transition-all duration-500 hover:shadow-[var(--shadow-gold)] hover:-translate-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent to-[hsl(var(--combat-gold-dark))] rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-[var(--shadow-gold)]">
                <feature.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 text-center group-hover:text-accent transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
