import { Guitar, Camera, Film, Music, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_LINK = "https://wa.me/5589999263471";

const buttons = [
  { label: "Aulas de Violão", href: "#violao", icon: Guitar, accent: true },
  { label: "Fotografia", href: "#fotografia", icon: Camera, accent: true },
  { label: "Edição Audiovisual", href: "#edicao", icon: Film, accent: true },
  { label: "Músicas", href: "#musicas", icon: Music, accent: true },
  { label: "Falar no WhatsApp", href: WHATSAPP_LINK, icon: MessageCircle },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="Felipe América tocando guitarra"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />

    <div className="relative z-10 container text-center px-4 pt-24 pb-16">
      <p className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground mb-4 animate-fade-in">
        Artista &bull; Cantor &bull; Compositor &bull; Professor de Violão &bull; Fotógrafo &bull; Editor Audiovisual
      </p>
      <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl tracking-wider mb-6 animate-fade-in-up">
        FELIPE <span className="text-gradient">AMÉRICA</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
        "Transformando música e momentos em experiências reais."
      </p>

      <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
        {buttons.map((b) => (
          <a
            key={b.label}
            href={b.href}
            target={b.label === "Falar no WhatsApp" ? "_blank" : undefined}
            rel={b.label === "Falar no WhatsApp" ? "noopener noreferrer" : undefined}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:scale-105 ${
              b.accent
                ? "bg-primary text-primary-foreground glow-red"
                : "border border-border text-foreground hover:bg-muted"
            }`}
          >
            <b.icon size={18} />
            {b.label}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
