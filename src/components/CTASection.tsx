import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5589999263471";

const CTASection = () => (
  <section id="contato" className="py-24">
    <div className="container px-4 text-center max-w-2xl">
      <h2 className="font-heading text-4xl md:text-5xl mb-6 tracking-wider leading-tight">
        SE VOCÊ QUER APRENDER, SE EXPRESSAR OU REGISTRAR MOMENTOS,{" "}
        <span className="text-gradient">VAMOS CONVERSAR.</span>
      </h2>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-xl text-lg font-medium uppercase tracking-wider hover:scale-105 transition-transform glow-red"
      >
        <MessageCircle size={24} />
        Falar no WhatsApp
      </a>
    </div>
  </section>
);

export default CTASection;
