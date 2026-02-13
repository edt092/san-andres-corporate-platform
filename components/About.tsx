export default function About() {
  return (
    <section
      className="py-32 bg-white px-4 md:px-20 animate-on-scroll"
      id="nosotros"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <div className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Fundador de Parasoles y Domos San Andrés"
              className="w-full h-[500px] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSEAhwDYl3BQQHBZMYuQkxOJ-3lLjTq2oCLSRpWjjFYHHRqoMu6z4COwo4vS_IdgbxJQ4v-o-xboTSqpJRQlu1_DtXdyJRK13603pVUfBAiolNDbos9HQzaAWHSHuIVYJoXEdBO1W-kAwWgceC8F_qUCwnVLytM_2E5ePqiNXuIN3liiwoP8M8ucN0HFDE3TEQTwfTAGS4u_X6iT3P9TpQwQwG1Z3k1DFHBXyEZiVx_9vZVtq5DRUOkUb-vNufSRVpH0ziS4ukS6Y"
            />
          </div>
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary/10 rounded-full -z-0" />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">
            Nuestro Compromiso
          </h2>
          <h2 className="text-text-dark text-4xl md:text-5xl font-black leading-tight mb-8">
            Experiencia y Confianza Local
          </h2>
          <div className="space-y-6 text-text-muted text-lg leading-relaxed">
            <p>
              En <strong>Parasoles y Domos San Andrés</strong>, entendemos que una carpa no
              es solo una cubierta, es una inversión en protección. Llevamos más
              de 15 años liderando el sector en Santander, garantizando que cada
              proyecto cumpla con los más altos estándares de seguridad y
              estética.
            </p>
            <p>
              Utilizamos únicamente materiales certificados y mano de obra
              calificada para asegurar que su negocio o evento esté protegido
              bajo cualquier condición climática.
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-text-dark font-bold italic mb-2 text-xl">
              &ldquo;Calidad que se siente, protección que perdura.&rdquo;
            </p>
            <p className="font-signature text-primary text-4xl mt-4">
              William Bayona Méndez
            </p>
            <p className="text-xs font-bold text-text-muted uppercase tracking-widest mt-1">
              Fundador &amp; CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
