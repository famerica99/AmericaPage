import { Check, MessageCircle } from "lucide-react";
import guitarBg from "@/assets/guitar-bg.jpg";

const WHATSAPP_LINK = "https://wa.me/5589999263471?text=Ol%C3%A1%2C%20quero%20aprender%20viol%C3%A3o!";

const benefits = [
  "Aulas práticas desde o início",
  "Turmas pequenas e atenção personalizada",
  "Aprendizado rápido — toque e cante logo",
];

const GuitarSection = () => (
  <section id="violao" className="py-24 relative overflow-hidden">
    <div className="container px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-xl overflow-hidden aspect-video">
          <img
            src={guitarBg}
            alt="Aulas de violão"
            width={1280}
            height={720}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
        </div>

        <div>
          <h2 className="font-heading text-5xl md:text-6xl mb-4 tracking-wider">
            APRENDA VIOLÃO <span className="text-gradient">NA PRÁTICA</span>
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Método direto ao ponto, sem teoria complicada. Aqui o foco é tocar e cantar desde a
            primeira aula. Ideal para quem quer aprender de verdade, com prática e simplicidade.
          </p>

          <ul className="space-y-3 mb-8">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-foreground">
                <Check size={18} className="text-primary flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-end gap-6 mb-8">
            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Por aula</p>
              <p className="font-heading text-4xl text-foreground">R$25</p>
            </div>
            <div className="border-l border-border pl-6">
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Curso completo (12 aulas)</p>
              <p className="font-heading text-4xl text-primary">R$300</p>
            </div>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium uppercase tracking-wider hover:scale-105 transition-transform glow-red"
          >
            <MessageCircle size={18} />
            Quero aprender violão
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default GuitarSection;
