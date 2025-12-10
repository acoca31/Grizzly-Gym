import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/grizzly-logo-new.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(var(--combat-black))] via-[hsl(var(--combat-gray))] to-[hsl(var(--combat-black))]">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-[slide_20s_linear_infinite]"></div>
      </div>

      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-[fadeIn_0.8s_ease-out]">
            <img
              src={logo}
              alt="Grizzly Gym Iași Logo"
              className="w-64 h-64 mx-auto object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight animate-[fadeIn_1s_ease-out_0.2s_both]">
            Grizzly Gym Iași
            <span className="block text-accent mt-2 text-2xl md:text-4xl">Sala de MMA și Jiu Jitsu Brazilian</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto animate-[fadeIn_1s_ease-out_0.6s_both]">
            Cea mai bună sală MMA Iași. Antrenamente profesionale în MMA, Jiu Jitsu Brazilian Iași, Ju Jitsu, Kickboxing, Judo și Grappling
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fadeIn_1s_ease-out_0.8s_both]">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection("contact")}
              className="text-lg px-8 py-6 bg-accent hover:bg-[hsl(var(--combat-gold-dark))] text-accent-foreground shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-gold-strong)] transition-all duration-300 hover:scale-105 font-bold"
            >
              Începe Acum
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("despre")}
              className="text-lg px-8 py-6 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 font-semibold"
            >
              Află Mai Multe
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("despre")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={48} />
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(60px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
