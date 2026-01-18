import { CommuneSelector } from "@/components/home/CommuneSelector";
import { HeroBanner } from "@/components/home/HeroBanner";
import { DeputyProfile } from "@/components/home/DeputyProfile";
import { SimpleInteractiveMap } from "@/components/home/SimpleInteractiveMap";
import { QuickServicesGrid } from "@/components/home/QuickServicesGrid";

import Link from "next/link";
import {
  FileText,
  Calendar,
  ArrowRight,
  Sparkles,
  Map,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-100 overflow-x-hidden">

      <main className="flex-grow">
        {/* Hero Banner */}
        <HeroBanner />

        {/* Quick Access Grid */}
        <div className="-mt-20 relative z-20">
          <QuickServicesGrid />
        </div>

        {/* Commune Selector Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-slate-900/50 -z-10"></div>
          <div className="container mx-auto text-center max-w-5xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-4 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              Información Local
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Encuentra información de <span className="text-gradient-gold">tu comuna</span>
            </h2>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              Prioridades locales, gestiones en curso y contactos útiles para cada una de las 8 comunas del Distrito 8.
            </p>
            <div className="bg-slate-900/40 backdrop-blur-xl p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
              <CommuneSelector />
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <Map className="h-4 w-4" />
                  Mapa Interactivo
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Explora el <span className="text-blue-400">Distrito 8</span> en detalle
                </h2>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Una herramienta poderosa para visualizar el trabajo territorial. Haz click en cualquier comuna para ver información específica, prioridades locales y gestiones en curso en tiempo real.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Datos demográficos actualizados",
                    "Estado de proyectos de ley",
                    "Alertas comunitarias en tiempo real"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-blue-900/20">
                  Ver Mapa Completo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="h-[500px] w-full glass-card rounded-3xl overflow-hidden border-0 shadow-2xl relative group">
                <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-transparent transition-colors pointer-events-none z-10"></div>
                <SimpleInteractiveMap />
              </div>
            </div>
          </div>
        </section>

        {/* Deputy Profile */}
        <DeputyProfile />

        {/* Recent Activity Dashboard */}
        <section className="py-24 px-4 bg-slate-950 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]"></div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 border border-purple-500/20 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <Activity className="h-4 w-4" />
                  Gestión Parlamentaria
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                  Transparencia y Acción
                </h2>
              </div>
              <Button variant="outline" className="text-gray-300 border-white/10 hover:bg-white/5 hover:text-white mb-2">
                Ver Toda la Actividad
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Agenda Preview */}
              <div className="glass-card hover:border-purple-500/30 transition-all duration-300 rounded-3xl overflow-hidden group">
                <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-8 border-b border-white/5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-purple-500/20 p-3 rounded-2xl backdrop-blur-sm border border-purple-500/30">
                      <Calendar className="h-8 w-8 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Agenda Territorial</h3>
                      <p className="text-purple-300 text-sm">Próximas actividades en el distrito</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  {[
                    { date: "14 ENE", title: "Operativo de Salud en Maipú", time: "10:00 - 14:00 hrs", loc: "Plaza Mayor" },
                    { date: "15 ENE", title: "Reunión Vecinal Cerrillos", time: "18:30 hrs", loc: "Sede J.V. Los Presidentes" }
                  ].map((event, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="bg-purple-500/10 text-purple-400 font-bold px-4 py-3 rounded-2xl text-center min-w-[80px] border border-purple-500/20">
                        <span className="block text-xl">{event.date.split(' ')[0]}</span>
                        <span className="text-xs">{event.date.split(' ')[1]}</span>
                      </div>
                      <div className="flex-grow pt-1">
                        <p className="font-bold text-white text-lg mb-1 group-hover:text-purple-300 transition-colors">{event.title}</p>
                        <p className="text-sm text-gray-500 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                          {event.time} | {event.loc}
                        </p>
                      </div>
                    </div>
                  ))}

                  <Button className="w-full mt-6 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 border border-purple-500/20">
                    <Link href="/agenda" className="flex items-center gap-2">
                      Ver Calendario Completo <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Legislative Work Preview */}
              <div className="glass-card hover:border-emerald-500/30 transition-all duration-300 rounded-3xl overflow-hidden group">
                <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 p-8 border-b border-white/5">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-emerald-500/20 p-3 rounded-2xl backdrop-blur-sm border border-emerald-500/30">
                      <FileText className="h-8 w-8 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Trabajo Legislativo</h3>
                      <p className="text-emerald-300 text-sm">Proyectos y fiscalización</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="p-5 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 hover:bg-emerald-500/10 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/30">
                        APROBADO
                      </Badge>
                      <span className="text-xs text-gray-500">Hace 2 días</span>
                    </div>
                    <p className="font-bold text-white text-lg mb-2">
                      Proyecto &quot;Chao Cables&quot;
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Se aprobó obligatoriedad de retiro de cables en desuso por parte de las empresas de telecomunicaciones.
                    </p>
                  </div>

                  <div className="p-5 bg-blue-500/5 rounded-2xl border border-blue-500/10 hover:bg-blue-500/10 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/20 hover:bg-blue-500/30">
                        OFICIO
                      </Badge>
                      <span className="text-xs text-gray-500">Ayer</span>
                    </div>
                    <p className="font-bold text-white text-lg mb-2">
                      Fiscalización Vertedero Tiltil
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Se solicitó informe urgente a la autoridad sanitaria por nuevos olores molestos denunciados por vecinos.
                    </p>
                  </div>

                  <Button className="w-full mt-6 bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500/20">
                    <Link href="/transparencia" className="flex items-center gap-2">
                      Ver Todos los Proyectos <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-slate-950 text-gray-400 py-16 text-sm border-t border-white/5">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="bg-amber-500 rounded-full w-10 h-10 flex items-center justify-center text-slate-900 font-bold text-xl shadow-lg">
                CC
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-xl leading-none">Cristian Contreras</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Diputado Distrito 8</span>
              </div>
            </Link>
            <p className="text-gray-500 max-w-sm mb-6">
              Trabajando por un Chile más justo, equilibrado y transparente. Tu voz es nuestra prioridad en el Congreso.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-colors cursor-pointer">
                  <ArrowRight className="h-4 w-4" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-6">Contacto Directo</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contacto@cristiancontreras.cl" className="hover:text-amber-500 transition-colors flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  contacto@cristiancontreras.cl
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  (+56) 2 2222 2222
                </span>
              </li>
              <li className="text-gray-600 text-xs mt-4">
                Av. Libertador Bernardo O'Higgins 3900,<br />
                Estación Central, Región Metropolitana
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                { label: "Transparencia", href: "/transparencia" },
                { label: "Agenda Territorial", href: "/agenda" },
                { label: "Guías y Recursos", href: "/guias" },
                { label: "Inteligencia Territorial", href: "/preocupaciones" },
                { label: "Sumate al Equipo", href: "/voluntarios" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="hover:text-amber-500 transition-colors block py-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2026 Oficina Parlamentaria Diputado Cristian Contreras. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400">Política de Privacidad</a>
            <a href="#" className="hover:text-gray-400">Términos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
