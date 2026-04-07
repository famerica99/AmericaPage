import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Violão", href: "#violao" },
  { label: "Fotografia", href: "#fotografia" },
  { label: "Edição Audiovisual", href: "#edicao" },
  { label: "Músicas", href: "#musicas" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <button onClick={handleLogoClick} className="font-heading text-2xl tracking-wider text-foreground hover:opacity-80 transition-opacity cursor-pointer">
          FELIPE <span className="text-primary">AMÉRICA</span>
        </button>

        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors uppercase tracking-widest"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
