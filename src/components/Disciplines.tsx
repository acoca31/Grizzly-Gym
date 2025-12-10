import { Card } from "@/components/ui/card";

const Disciplines = () => {
  const disciplines = [
    {
      name: "Box",
      description: "Artă nobilă a loviturilor de pumn, tehnică, viteză și putere",
      icon: "🥊",
    },
    {
      name: "Kickboxing",
      description: "Combinație de lovituri de pumn și picior, ideal pentru fitness și autoapărare",
      icon: "🦵",
    },
    {
      name: "Ju Jitsu",
      description: "Artă marțială tradițională cu tehnici de proiecții, blocaje și control",
      icon: "🥋",
    },
    {
      name: "Judo",
      description: "Sport olimpic bazat pe proiecții și tehnici de imobilizare",
      icon: "🎌",
    },
    {
      name: "Grappling",
      description: "Luptă la sol cu accent pe poziționare și finalizări",
      icon: "🤼",
    },
    {
      name: "MMA",
      description: "Arte marțiale mixte - combinație completă pentru competiții profesionale",
      icon: "⚔️",
    },
  ];

  return (
    <section id="discipline" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            <span className="text-primary">Discipline</span> Oferite
          </h2>
          <p className="text-lg text-muted-foreground">
            Alege disciplina care ți se potrivește sau combină-le pentru un antrenament complet
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {disciplines.map((discipline, index) => (
            <Card
              key={index}
              className="group p-6 hover:shadow-[var(--shadow-gold)] transition-all duration-500 hover:-translate-y-4 hover:scale-105 border-2 hover:border-accent cursor-pointer bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                {discipline.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {discipline.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {discipline.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Disciplines;
