import gymInterior1 from "@/assets/gym-interior-1.jpg";
import gymInterior2 from "@/assets/gym-interior-2.jpg";
import gymOutdoor from "@/assets/gym-outdoor-1.jpg";
import cageOutdoor from "@/assets/cage-outdoor.jpg";

const Gallery = () => {
  const images = [
    { src: gymInterior2, alt: "Sala interioară Grizzly Gym", title: "Sala Interioară" },
    { src: cageOutdoor, alt: "Cușcă exterioară MMA", title: "Cușca Exterioară" },
    { src: gymInterior1, alt: "Dotări sală antrenament", title: "Echipamente Profesionale" },
    { src: gymOutdoor, alt: "Zonă antrenament exterior", title: "Antrenament Exterior" },
  ];

  return (
    <section id="facilitati" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            <span className="text-primary">Facilități</span> Moderne
          </h2>
          <p className="text-lg text-muted-foreground">
            Echipamente de top și spații special amenajate pentru antrenamente
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border-2 border-border hover:border-accent transition-all duration-500 hover:shadow-[var(--shadow-gold)] hover:scale-105 aspect-video animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-accent-foreground">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
