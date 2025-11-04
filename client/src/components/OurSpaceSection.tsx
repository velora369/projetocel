export default function OurSpaceSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(2,102,201,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(2,178,255,0.06),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Conheça Nosso <span className="gradient-text">Espaço</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
            Um ambiente acolhedor e seguro, preparado com carinho para receber nossos animais e visitantes
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl blur-xl opacity-20 transition-opacity duration-500" />
          <div className="relative overflow-hidden rounded-xl">
            <div className="aspect-video w-full">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                data-testid="video-our-space"
              >
                <source
                  src="https://res.cloudinary.com/dgu5xgx7q/video/upload/v1762235312/v%C3%ADdeo_qbmiao.mp4"
                  type="video/mp4"
                />
                Seu navegador não suporta reprodução de vídeo.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
