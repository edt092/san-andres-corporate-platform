import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-32 bg-white px-4 md:px-20 animate-on-scroll">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="z-10 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            LÍDERES EN SANTANDER
          </div>

          <h1 className="text-text-dark text-5xl md:text-8xl font-black leading-[1.05] tracking-tighter mb-8">
            Soluciones en Carpas de{" "}
            <span className="text-primary">Alta Calidad</span>
          </h1>

          <p className="text-text-muted text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-lg">
            Fabricación, mantenimiento y diseños personalizados en Bucaramanga
            con materiales de alta resistencia y durabilidad garantizada para el
            sector industrial y comercial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/573118712937"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg h-14 px-8 bg-primary text-white text-base font-bold shadow-xl shadow-primary/30 hover:translate-y-[-2px] transition-all hover-lift"
            >
              Solicitar Cotización Gratis
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#portafolio"
              className="flex items-center justify-center gap-2 rounded-lg h-14 px-8 bg-white border-2 border-border text-text-dark text-base font-bold hover:bg-[#f0f4f5] transition-all hover-lift"
            >
              Ver Portafolio
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative order-1 md:order-2">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Large scale industrial tent installation"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXYc54jvLglY-So0ltvyqFb6bkY7Ct2v3YuhwdHr2eIDHc6cFLdPeBlZiGAe2tnGvtYwwmA9GtzrMnP5BVuWxTg1uzd-AQHNzCfjeDl4tA8__55Tpnn5fx-Z09479aRPZ7cvXlABkzVlQoQ8osjO1TTo-Qi6TMD4Biiqe0lzGRkD-6IW5pRWYqTw45Rttwad5vESlHiMyt1V3w8IzfBPUc0Byr8ogAQYeerb15QnsAFpReXrfMQVIqAZKprOjlrcFlIQosiGO7FOM"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-2xl shadow-xl hidden lg:block">
            <p className="text-3xl font-black">15+</p>
            <p className="text-xs font-bold uppercase tracking-wider opacity-90">
              Años de Experiencia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
