import { Star, Quote } from "lucide-react";

const stats = [
  { value: "500+", label: "Proyectos Exitosos" },
  { value: "98%", label: "Clientes Satisfechos" },
  { value: "24h", label: "Soporte Técnico" },
  { value: "100%", label: "Material Certificado" },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-white px-4 md:px-20 animate-on-scroll">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Testimonial */}
          <div>
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Lo que dicen
            </h2>
            <h2 className="text-text-dark text-4xl md:text-5xl font-black leading-tight mb-12">
              Nuestros Clientes Certifican Nuestra Calidad
            </h2>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-border relative">
              <Quote className="w-16 h-16 text-primary/20 absolute top-4 right-8" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-primary fill-primary"
                  />
                ))}
              </div>
              <p className="text-text-muted text-lg italic leading-relaxed mb-6">
                &ldquo;Excelente servicio y cumplimiento. Necesitábamos una
                carpa para nuestra bodega en el sector industrial de
                Bucaramanga y superaron nuestras expectativas en diseño y
                rapidez.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Ing. Carlos Ortega"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJKXHNYXPvSbQFcwvq4_rMSbNZ2EMlSvbo7zFc-x3H3OwKZsO_6RWFASUJDdzWMVqi8etvV09DUqVAjCkD1uEJ8vnQhYpCwpmgX5l7xCDGGOUWfL1yXSqiSpxpFnELD31rXZlopk47fFxM4D7rR2Xlp06GFEFFaDRwu3yBeVONXXqkdLryf6y04ORgsS9pvuwZst9nbLsAAP1VtiKYSUMNmL_J3KsscKv2YTOAWMcsLnJLjNcRBxt1W_tPeQZDZTUZjlNG9XwZQuI"
                  />
                </div>
                <div>
                  <p className="text-text-dark font-bold">
                    Ing. Carlos Ortega
                  </p>
                  <p className="text-xs font-semibold text-text-muted">
                    Gerente de Operaciones LogisSantander
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-6 rounded-xl border border-border text-center hover-lift"
              >
                <p className="text-primary text-4xl font-black mb-1">
                  {stat.value}
                </p>
                <p className="text-text-muted text-xs font-bold uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
