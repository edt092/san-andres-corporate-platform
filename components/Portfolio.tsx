const projects = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCArJMptm0VOruCzdihFzMY_xb-1fCB8X7wP-gORmuL7fSzZ-zd4u60NwKNG2Z0AAUWweAoQz1RfReWYUIDgmp3Gpy-hBhvvzRvjSNpNnRv-tD9OfgiEFKqaVhPUysivmVMhyBn3Tpc3-7N5dEw6aWtZsS8rwrorUerbw8jHsoBsGvH9ZzhTRJyqgUjnKlvimTvxFr_79KV-ECQstxHJSCEM8LhpvzIKIfPcXbZ89Z5XRL5h20QM-OkUL7_ongVV5yVkOqhgJQlsyc",
    alt: "Exhibition tent",
    category: "Evento Comercial",
    title: "Pabellón de Ferias",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBghD0n4o_5_qimifRhS5ylTzOQCWBC7OTbCnJzOeRV3miK2NdUJbLgzyiF_AH8Bicssmxy0SfF6lCH0htbA39Bp_Dhjq-7cGCc3yQbp2H12-6v_oX6I7Id4tsbyRMDfj0_SVG_eIBwDfJ0m0coNYp8pQHGq_9HaNnujWI2UOhF5zAqCLht7MksFBlN3Tf218vpysbl2EYTE9FrLuxpyCuzrAJzMpS14SU8mCqZAESc6CEkPDWHPpuMlCh0varHLUpMDkFEVAHHqAI",
    alt: "Industrial storage",
    category: "Logística",
    title: "Bodega Temporal Alta Resistencia",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj-eVq1taSpvi47dgjN_LFYJ_w2kwdIPBLE2p6a6QnqNsbUyO_pZm-4c7LfHYoljQxVMgqpaJwe2T0KJsG307i9wT_lJ3Gduwqw86K0uk6qPIq6mfqjh8pcbuNuV4oLENbME4AfjqvLGTbWeFdgZx8Qnxxv2abCBosXOP_YP1kYQYRbkbf-34MCYYpgQPb7SJVgvBM6WYk8FBkhMQ081gFothFqDFWCFcIN71WvjxlClPo4LtDk7pvBvohhMdLUmt2Q3PldRDzfyU",
    alt: "Custom canopy",
    category: "Arquitectónico",
    title: "Cubierta Tensada Moderna",
  },
  {
    src: "/img/1.png",
    alt: "Carpa blanca para eventos al aire libre",
    category: "Eventos",
    title: "Carpa para Reuniones al Aire Libre",
  },
  {
    src: "/img/2.png",
    alt: "Carpas coloridas estilo pagoda",
    category: "Eventos",
    title: "Carpas Pagoda Coloridas",
  },
  {
    src: "/img/3.png",
    alt: "Carpa blanca tipo pagoda con ventanales",
    category: "Eventos",
    title: "Carpa Pagoda con Ventanales",
  },
  {
    src: "/img/4.png",
    alt: "Carpa blanca tipo pagoda comercial",
    category: "Comercial",
    title: "Carpa Pagoda Comercial",
  },
  {
    src: "/img/5.png",
    alt: "Cubierta curva de policarbonato en fachada",
    category: "Arquitectónico",
    title: "Cubierta Curva de Policarbonato",
  },
  {
    src: "/img/6.png",
    alt: "Carpa blanca compacta con ventana transparente",
    category: "Eventos",
    title: "Carpa Compacta con Ventana",
  },
  {
    src: "/img/7.png",
    alt: "Cubierta curva residencial en policarbonato",
    category: "Residencial",
    title: "Cubierta Residencial Curva",
  },
  {
    src: "/img/8.png",
    alt: "Parasol de policarbonato sobre ventana",
    category: "Residencial",
    title: "Parasol para Ventana",
  },
  {
    src: "/img/9.png",
    alt: "Marquesina de policarbonato en entrada",
    category: "Residencial",
    title: "Marquesina de Entrada",
  },
  {
    src: "/img/10.png",
    alt: "Cubierta curva para terraza",
    category: "Residencial",
    title: "Cubierta para Terraza",
  },
  {
    src: "/img/11.png",
    alt: "Parasol curvo de policarbonato",
    category: "Residencial",
    title: "Parasol Curvo de Policarbonato",
  },
  {
    src: "/img/12.png",
    alt: "Marquesina decorativa de policarbonato",
    category: "Residencial",
    title: "Marquesina Decorativa",
  },
];

export default function Portfolio() {
  return (
    <section
      className="py-32 bg-white px-4 md:px-20 animate-on-scroll"
      id="portafolio"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">
            Nuestro Trabajo
          </h2>
          <h2 className="text-text-dark text-4xl md:text-5xl font-black">
            Proyectos Destacados
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl h-80 hover-lift"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={project.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={project.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">
                  {project.category}
                </p>
                <h5 className="text-white text-xl font-bold">
                  {project.title}
                </h5>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/573118712937"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary/10 text-primary font-bold px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-all hover-lift"
          >
            Ver todos los proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
