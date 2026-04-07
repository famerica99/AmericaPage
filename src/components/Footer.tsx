import { Instagram } from "lucide-react";

const INSTAGRAM_LINK = "https://www.instagram.com/felipeamericaofc/";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container px-4 text-center">
      <p className="font-heading text-lg tracking-wider mb-4">
        FELIPE <span className="text-primary">AMÉRICA</span>
      </p>
      
      <div className="flex justify-center gap-4 mb-6">
        <a
          href={INSTAGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
      </div>

      <p className="text-muted-foreground text-xs">
        © {new Date().getFullYear()} — Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
