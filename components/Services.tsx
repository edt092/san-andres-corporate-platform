import { Factory, Wrench, PencilRuler, CheckCircle, ExternalLink } from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Fabricación Premium",
    description:
      "Carpas industriales, hangares y cubiertas comerciales utilizando polímeros de alta densidad y estructuras de acero galvanizado.",
    features: ["Lonas Anti-UV y retardantes", "Costuras termo-selladas"],
  },
  {
    icon: Wrench,
    title: "Mantenimiento Técnico",
    description:
      "Servicio técnico preventivo y correctivo. Prolongamos la vida útil de sus cubiertas mediante limpieza y refuerzo estructural.",
    features: ["Reparación de rasgaduras", "Tensado de estructuras"],
  },
  {
    icon: PencilRuler,
    title: "Diseño Personalizado",
    description:
      "Ingeniería aplicada a sus necesidades específicas de espacio. Creamos renders 3D antes de iniciar la producción real.",
    features: ["Modelado arquitectónico", "Optimización de espacios"],
  },
];

export default function Services() {
  return (
    <section
      className="py-32 bg-white px-4 md:px-20 animate-on-scroll"
      id="servicios"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Nuestra Especialidad
            </h2>
            <h3 className="text-text-dark text-4xl md:text-5xl font-black leading-tight">
              Calidad Industrial a su Alcance
            </h3>
            <p className="text-text-muted text-lg mt-4 leading-relaxed">
              Ofrecemos soluciones integrales para la protección y cubrimiento de
              sus espacios con los estándares más exigentes de la industria
              colombiana.
            </p>
          </div>
          <a
            className="text-primary font-bold flex items-center gap-2 hover:underline"
            href="#"
          >
            Ver detalles técnicos
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl border border-border bg-white hover:border-primary/50 transition-all hover:shadow-xl hover-lift"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-text-dark text-xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-text-muted leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm font-semibold text-text-dark"
                  >
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
