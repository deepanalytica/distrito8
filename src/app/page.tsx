import { CommuneSelector } from "@/components/home/CommuneSelector";
import { HeroBanner } from "@/components/home/HeroBanner";
import { SimpleInteractiveMap } from "@/components/home/SimpleInteractiveMap";

import Link from "next/link";
import {
  FileText,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Map
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col font-sans">


      <main className="flex-grow">
        {/* Hero Banner */}
        <HeroBanner />



        {/* Commune Selector Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Sparkles className="h-4 w-4" />
              Información Local
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Encuentra información de <span className="text-blue-600">tu comuna</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Prioridades locales, gestiones en curso y contactos útiles para cada una de las 8 comunas del Distrito 8.
            </p>
            <div className="bg-white p-2 rounded-2xl shadow-lg">
              <CommuneSelector />
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Map className="h-4 w-4" />
                Mapa Interactivo
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Explora el <span className="text-blue-400">Distrito 8</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Haz click en cualquier comuna para ver información específica, prioridades locales y gestiones en curso.
              </p>
            </div>
            <div className="h-[600px] w-full">
              <SimpleInteractiveMap />
            </div>
          </div>
        </section>



        {/* Stats Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Resultados que Importan
              </h2>
              <p className="text-gray-300 text-lg">
                Gestión parlamentaria con impacto real en el Distrito 8
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">Casos Gestionados</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">8</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">Comunas Atendidas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">Disponibilidad</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">Transparencia</div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activity Preview */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Agenda Preview */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Agenda Territorial</h3>
                  </div>
                  <p className="text-purple-100 mb-6">
                    Próximas actividades en el distrito
                  </p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-purple-100 text-purple-800 font-bold px-3 py-2 rounded-lg text-sm text-center min-w-[70px]">
                      14 ENE
                    </div>
                    <div className="flex-grow">
                      <p className="font-bold text-gray-900 mb-1">Operativo de Salud en Maipú</p>
                      <p className="text-sm text-gray-500">10:00 - 14:00 hrs | Plaza Mayor</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-purple-100 text-purple-800 font-bold px-3 py-2 rounded-lg text-sm text-center min-w-[70px]">
                      15 ENE
                    </div>
                    <div className="flex-grow">
                      <p className="font-bold text-gray-900 mb-1">Reunión Vecinal Cerrillos</p>
                      <p className="text-sm text-gray-500">18:30 hrs | Sede J.V. Los Presidentes</p>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full mt-4 group">
                    <Link href="/agenda" className="gap-2">
                      Ver Agenda Completa
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </Card>

              {/* Legislative Work Preview */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      <FileText className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Trabajo Legislativo</h3>
                  </div>
                  <p className="text-emerald-100 mb-6">
                    Proyectos y gestiones recientes
                  </p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                    <Badge className="bg-green-600 hover:bg-green-600 mb-2">
                      APROBADO
                    </Badge>
                    <p className="font-bold text-gray-900 mb-2">
                      Proyecto &quot;Chao Cables&quot;
                    </p>
                    <p className="text-sm text-gray-600">
                      Se aprobó obligatoriedad de retiro de cables en desuso.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <Badge className="bg-blue-600 hover:bg-blue-600 mb-2">
                      OFICIO ENVIADO
                    </Badge>
                    <p className="font-bold text-gray-900 mb-2">
                      Fiscalización Vertedero Tiltil
                    </p>
                    <p className="text-sm text-gray-600">
                      Se solicitó informe urgente a la autoridad sanitaria.
                    </p>
                  </div>
                  <Button asChild variant="outline" className="w-full mt-4 group">
                    <Link href="/avances" className="gap-2">
                      Ver Todos los Avances
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-gray-900 text-gray-400 py-12 text-sm">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Cristian Contreras</h4>
            <p>Diputado de la República</p>
            <p>Distrito 8</p>
          </div>
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Contacto</h4>
            <p>
              <a href="mailto:contacto@cristiancontreras.cl" className="hover:text-white transition-colors">
                contacto@cristiancontreras.cl
              </a>
            </p>
            <p>(+56) 2 2222 2222</p>
          </div>
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Enlaces</h4>
            <div className="space-y-2">
              <p>
                <Link href="/avances" className="hover:text-white transition-colors">
                  Transparencia
                </Link>
              </p>
              <p>
                <Link href="/agenda" className="hover:text-white transition-colors">
                  Agenda Territorial
                </Link>
              </p>
              <p>
                <Link href="/guias" className="hover:text-white transition-colors">
                  Guías y Recursos
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
