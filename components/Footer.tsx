import { MapPin, Phone, Globe, Mail, ThumbsUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-white pt-16 pb-8 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1">
            <div className="mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/parasoles-y-domos-san-andres-logo.png"
                alt="Parasoles y Domos San Andrés"
                className="h-28 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Líderes en fabricación de cubiertas industriales y comerciales en
              todo el oriente colombiano.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Servicios</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#servicios"
                >
                  Carpas Industriales
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#servicios"
                >
                  Mantenimiento de Lonas
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#servicios"
                >
                  Tensionadas Arquitectónicas
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#servicios"
                >
                  Carpas para Eventos
                </a>
              </li>
            </ul>
          </div>

          {/* Internal Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#servicios"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#nosotros"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#portafolio"
                >
                  Portafolio
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#contacto"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contacto</h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                Calle 13 No. 13 - 13, Barrio Gaitán, Bucaramanga
              </p>
              <p className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                317 748 9473 | 311 871 2937
              </p>
            </div>
          </div>
        </div>

        {/* SEO Text */}
        <div className="border-t border-white/10 pt-8 pb-4 text-center">
          <p className="text-gray-400 text-sm italic">
            Especialistas en parasoles y domos en Bucaramanga - Calidad garantizada desde
            2009.
          </p>
        </div>

        {/* Copyright & Social */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center">
            © 2024 Parasoles y Domos San Andrés. Todos los derechos reservados. Diseñado
            en Santander.
          </p>
          <div className="flex gap-6">
            <a
              className="text-gray-500 hover:text-white transition-colors"
              href="#"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              className="text-gray-500 hover:text-white transition-colors"
              href="#"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              className="text-gray-500 hover:text-white transition-colors"
              href="#"
            >
              <ThumbsUp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
