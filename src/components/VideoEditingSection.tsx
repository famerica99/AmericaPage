import { Film, MessageCircle, Folder } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5589999263471?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20edi%C3%A7%C3%A3o%20de%20v%C3%ADdeos!";
const PORTFOLIO_LINK = "https://drive.google.com/drive/folders/1WKjSTaB46ICCxO_W6ZhICeV7bINg_YnZ?usp=sharing";

const services = [
  "Edição de vídeos",
  "Vídeos para redes sociais",
  "Vídeos institucionais",
  "Conteúdos artísticos e culturais",
];

const VideoEditingSection = () => (
  <section id="edicao" className="py-24">
    <div className="container px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading text-5xl md:text-6xl mb-4 tracking-wider">
            EDIÇÃO <span className="text-gradient">AUDIOVISUAL</span>
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Transformo materiais brutos em vídeos com narrativa, ritmo e identidade. Cada corte é pensado para valorizar a mensagem e tornar o conteúdo mais envolvente, seja para redes sociais, projetos artísticos ou conteúdos institucionais.
          </p>

          <ul className="grid grid-cols-2 gap-3 mb-8">
            {services.map((s) => (
              <li key={s} className="flex items-center gap-2 text-foreground text-sm">
                <Film size={14} className="text-primary flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium uppercase tracking-wider hover:scale-105 transition-transform"
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

        <div className="relative rounded-xl overflow-hidden aspect-video bg-muted">
          <img
            src="/img/video.png"
            alt="Edição Audiovisual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default VideoEditingSection;
