const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-8 border-t-4 border-[hsl(var(--combat-gold-dark))]">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <p className="text-lg font-bold mb-2 hover:scale-105 transition-transform duration-300 inline-block">GRIZZLY GYM IAȘI</p>
          <p className="text-sm opacity-80 mb-4">
            Clubul Tău de Arte Marțiale
          </p>
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} Grizzly Gym Iași. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
