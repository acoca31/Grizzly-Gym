import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Disciplines from "@/components/Disciplines";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import Coaches from "@/components/Coaches";
import Athletes from "@/components/Athletes";
import Map from "@/components/Map";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Disciplines />
        <Schedule />
        <Gallery />
        <Coaches />
        <Athletes />
        <Map />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
