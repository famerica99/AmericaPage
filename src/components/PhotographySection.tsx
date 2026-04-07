import { Camera, MessageCircle, Folder } from "lucide-react";
import photoBg from "@/assets/photography-bg.jpg";

const WHATSAPP_LINK = "https://wa.me/5589999263471?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20fotografia!";
const PORTFOLIO_LINK = "https://drive.google.com/drive/folders/1WKjSTaB46ICCxO_W6ZhICeV7bINg_YnZ?usp=sharing";


const services = [
  "Ensaios individuais",
  "Casais",
  "Gestantes",
  "Formaturas",
  "Eventos (aniversários, esportivos)",
];

const PhotographySection = () => (
  <section id="fotografia" className="py-24 bg-muted/30">
    <div className="container px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-heading text-5xl md:text-6xl mb-4 tracking-wider">
            FOTOGRAFIA <span className="text-gradient">PROFISSIONAL</span>
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Ensaios e cobertura de eventos com sensibilidade artística e qualidade profissional.
            Cada foto conta uma história, registrando momentos que merecem ser eternizados.
          </p>

          <ul className="grid grid-cols-2 gap-3 mb-8">
            {services.map((s) => (
              <li key={s} className="flex items-center gap-2 text-foreground text-sm">
                <Camera size={14} className="text-accent flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg text-sm font-medium uppercase tracking-wider hover:scale-105 transition-transform"
            >
              <MessageCircle size={18} />
              Solicitar orçamento
            </a>
            <a
              href={PORTFOLIO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg text-sm font-medium uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              <Folder size={18} />
              Portfólio
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 relative rounded-xl overflow-hidden aspect-video">
          <img
            src={photoBg}
            alt="Fotografia profissional"
            width={1280}
            height={720}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-background/40 to-transparent" />
        </div>
      </div>
    </div>
  </section>
);

export default PhotographySection;
