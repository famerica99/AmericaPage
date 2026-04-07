const VibeSection = () => (
  <section className="py-24 bg-background text-foreground">
    <div className="container px-4">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Prova social</p>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-wider mb-4">
          Entrevistas <span className="text-gradient">& TV</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Entrevistas e participações na mídia abordando produção cultural, audiovisual e a realidade do hip-hop, refletindo uma atuação direta dentro da cena.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-w-6xl mx-auto">
        <a
          href="https://www.instagram.com/reel/DTlIF_rDR3X/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-[2rem] overflow-hidden border border-border bg-zinc-950/90 shadow-2xl shadow-black/20 transition-transform duration-300 hover:-translate-y-1 hover:border-primary"
        >
          <div className="px-6 py-4 border-b border-border bg-[#0f1115]/90">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Aulas de Violão</p>
            <p className="text-muted-foreground text-sm mt-2">2º Edição do Projeto Férias no Teatro, realizado no Teatro Sávio Barão.</p>
          </div>
          <div className="relative aspect-video bg-black overflow-hidden">
            <img
              src="/img/entrevista1.png"
              alt="Preview de entrevista no Instagram"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-4 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="rounded-full bg-primary/95 px-4 py-2 text-xs uppercase tracking-[0.3em] text-background font-semibold">
                Acessar
              </span>
            </div>
          </div>
        </a>

        <div className="group rounded-[2rem] overflow-hidden border border-border bg-zinc-950/90 shadow-2xl shadow-black/20 transition-transform duration-300 hover:-translate-y-1 hover:border-primary">
          <div className="px-6 py-4 border-b border-border bg-[#0f1115]/90">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Aulas de Violão</p>
            <p className="text-muted-foreground text-sm mt-2">1ª Edição do Projeto Férias no Teatro, realizado no Teatro Sávio Barão.</p>
          </div>
          <div className="relative aspect-video bg-black overflow-hidden">
            <img
              src="/img/entrevista3.png"
              alt="Preview da primeira edição do Projeto Férias no Teatro"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-4 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="rounded-full bg-primary/95 px-4 py-2 text-xs uppercase tracking-[0.3em] text-background font-semibold">
                Acessar
              </span>
            </div>
          </div>
        </div>

        <a
          href="https://globoplay.globo.com/v/13913261/?s=0s"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-[2rem] overflow-hidden border border-border bg-zinc-950/90 shadow-2xl shadow-black/20 transition-transform duration-300 hover:-translate-y-1 hover:border-primary"
        >
          <div className="px-6 py-4 border-b border-border bg-[#0f1115]/90">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Entrevista na Piauí TV</p>
            <p className="text-muted-foreground text-sm mt-2">Produção Cultural no Hip-Hop e Desafios da Cena.</p>
          </div>
          <div className="relative aspect-video bg-black overflow-hidden">
            <img
              src="/img/entrevista2.png"
              alt="Preview de entrevista no Globoplay"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: "center 35%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-4 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="rounded-full bg-primary/95 px-4 py-2 text-xs uppercase tracking-[0.3em] text-background font-semibold">
                Acessar
              </span>
            </div>
          </div>
        </a>

        <a
          href="https://www.instagram.com/reel/Ci3B1QbsiYa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-[2rem] overflow-hidden border border-border bg-zinc-950/90 shadow-2xl shadow-black/20 transition-transform duration-300 hover:-translate-y-1 hover:border-primary"
        >
          <div className="px-6 py-4 border-b border-border bg-[#0f1115]/90">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Apresentação ao vivo</p>
            <p className="text-muted-foreground text-sm mt-2">TV Cidade Verde, momento cultural que une música, presença e narrativa urbana.</p>
          </div>
          <div className="relative aspect-video bg-black overflow-hidden">
            <img
              src="/img/entrevista4.png"
              alt="Preview de apresentação ao vivo na TV Cidade Verde"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-4 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="rounded-full bg-primary/95 px-4 py-2 text-xs uppercase tracking-[0.3em] text-background font-semibold">
                Acessar
              </span>
            </div>
          </div>
        </a>
      </div>
      <p className="mt-8 text-center text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
        Mais do que aulas, uma experiência real com quem vive a música.
      </p>
    </div>
  </section>
);

export default VibeSection;
