"use client";

import { Send, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      className="py-32 bg-white px-4 md:px-20 animate-on-scroll"
      id="contacto"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Hablemos
            </h2>
            <h2 className="text-text-dark text-4xl md:text-5xl font-black mb-12">
              Solicite su Presupuesto Hoy
            </h2>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-text-dark">
                    Nombre
                  </label>
                  <input
                    className="rounded-lg border border-border focus:ring-primary focus:border-primary px-4 h-12 outline-none"
                    placeholder="Su nombre"
                    required
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-text-dark">
                    Teléfono
                  </label>
                  <input
                    className="rounded-lg border border-border focus:ring-primary focus:border-primary px-4 h-12 outline-none"
                    placeholder="Su teléfono"
                    required
                    type="tel"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-text-dark">
                  Servicio Requerido
                </label>
                <select className="rounded-lg border border-border focus:ring-primary focus:border-primary px-4 h-12 outline-none bg-white">
                  <option>Fabricación de Carpa Nueva</option>
                  <option>Mantenimiento o Reparación</option>
                  <option>Diseño Especial / Arquitectónico</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-text-dark">
                  Mensaje
                </label>
                <textarea
                  className="rounded-lg border border-border focus:ring-primary focus:border-primary p-4 outline-none"
                  placeholder="Describa su solicitud..."
                  required
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold h-14 rounded-lg shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all flex items-center justify-center gap-2 hover-lift"
              >
                <Send className="w-5 h-5" />
                Enviar Solicitud
              </button>
            </form>
          </div>

          {/* Map + Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl overflow-hidden h-[400px] border border-border shadow-inner relative">
              <iframe
                title="Ubicación Parasoles y Domos San Andrés"
                src="https://maps.google.com/maps?q=Calle+13+No+13-13,+Barrio+Gait%C3%A1n,+Bucaramanga,+Santander,+Colombia&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-text-dark">Dirección</p>
                  <p className="text-text-muted text-sm">
                    CARPAS – Fábrica y Mantenimiento William Bayona Méndez
                  </p>
                  <p className="text-text-muted text-sm">
                    Calle 13 No. 13 - 13, Barrio Gaitán
                  </p>
                  <p className="text-text-muted text-sm">
                    Bucaramanga, Colombia
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-text-dark">Llámenos</p>
                  <p className="text-text-muted">317 748 9473</p>
                  <p className="text-text-muted">311 871 2937</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
