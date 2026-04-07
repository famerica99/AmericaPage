import { Headphones, Youtube } from "lucide-react";

const MusicSection = () => (
  <section id="musicas" className="py-24">
    <div className="container px-4 text-center">
      <h2 className="font-heading text-5xl md:text-6xl mb-4 tracking-wider">
        MINHAS <span className="text-gradient">MÚSICAS</span>
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto mb-12">
        Ouça minhas composições e acompanhe meu trabalho nas plataformas digitais.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
        {/* Spotify image card */}
        <div className="bg-card rounded-xl border border-border p-6 flex flex-col items-center justify-center min-h-[280px]">
          <img
            src="/img/spotify-card.svg"
            alt="Spotify"
            className="w-1/3 max-w-[240px] rounded-3xl mb-6"
          />
          <p className="font-heading text-2xl mb-2 tracking-wider">SPOTIFY</p>
          <p className="text-muted-foreground text-sm mb-4">Acesse o canal musical no Spotify com lançamentos e playlists exclusivas.</p>
          <a
            href="https://open.spotify.com/intl-pt/artist/2o84asN1Ounl7tXs36jhMh?si=qF8-m_NTSCi8fEHx2BEmtA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2 rounded-lg text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Headphones size={16} />
            Ouvir
          </a>
        </div>

        {/* YouTube image card */}
        <div className="bg-card rounded-xl border border-border p-6 flex flex-col items-center justify-center min-h-[280px]">
          <img
            src="/img/youtube-card.svg"
            alt="YouTube"
            className="w-1/3 max-w-[240px] rounded-3xl mb-6"
          />
          <p className="font-heading text-2xl mb-2 tracking-wider">YOUTUBE</p>
          <p className="text-muted-foreground text-sm mb-4">Confira vídeos, entrevistas e apresentações no canal oficial do Felipe América.</p>
          <a
            href="http://www.youtube.com/@felipeamerica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2 rounded-lg text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Youtube size={16} />
            Assistir
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default MusicSection;
