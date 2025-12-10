import { Calendar, Clock, Users, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const Schedule = () => {
  const sessions = [
    { time: "17:00 - 18:30", level: "Începători", icon: Users, color: "from-emerald-500 to-emerald-600" },
    { time: "18:30 - 20:00", level: "Începători", icon: Users, color: "from-emerald-500 to-emerald-600" },
    { time: "20:00 - 21:30", level: "Avansați", icon: Trophy, color: "from-accent to-[hsl(var(--combat-gold-dark))]" },
  ];

  const days = ["Luni", "Marți", "Miercuri", "Joi", "Vineri"];

  return (
    <section id="program" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            <span className="text-accent">Program</span> Antrenamente
          </h2>
          <p className="text-lg text-muted-foreground">
            Antrenamente zilnice pentru toate nivelurile
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-10 border-2 border-border bg-card/80 backdrop-blur-sm shadow-xl">
            {/* Days Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 rounded-full border border-accent/30 mb-4">
                <Calendar className="w-5 h-5 text-accent" />
                <span className="font-semibold text-foreground">Zile de antrenament</span>
              </div>
              <div className="flex flex-wrap gap-3 justify-center mt-4">
                {days.map((day, index) => (
                  <span
                    key={index}
                    className="px-5 py-2.5 bg-accent text-accent-foreground rounded-lg font-bold text-sm hover:scale-105 transition-all duration-300 shadow-[var(--shadow-gold)] animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8" />

            {/* Sessions Grid */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {sessions.map((session, index) => {
                const IconComponent = session.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-6 bg-muted/50 rounded-xl border-2 border-border hover:border-accent transition-all duration-500 hover:shadow-[var(--shadow-gold)] animate-fade-in overflow-hidden"
                    style={{ animationDelay: `${0.5 + index * 0.15}s` }}
                  >
                    {/* Background glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${session.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-14 h-14 bg-gradient-to-br ${session.color} rounded-xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      
                      {/* Time */}
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-2xl font-black text-foreground">{session.time}</span>
                      </div>
                      
                      {/* Level Badge */}
                      <div className={`inline-flex px-3 py-1.5 rounded-full text-sm font-bold ${
                        session.level === "Avansați" 
                          ? "bg-accent text-accent-foreground shadow-[var(--shadow-gold)]" 
                          : "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                      }`}>
                        {session.level}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Free trial banner */}
            <div className="mt-10 p-5 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 border-2 border-accent/50 rounded-xl animate-fade-in" style={{ animationDelay: "1s" }}>
              <p className="text-center text-foreground font-semibold text-lg">
                💪 Lecția de probă este <span className="text-accent font-black">GRATUITĂ</span>!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
