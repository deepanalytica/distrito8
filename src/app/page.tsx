import { CommuneSelector } from "@/components/home/CommuneSelector";
import { HeroBanner } from "@/components/home/HeroBanner";
import { LegislativePillars } from "@/components/home/LegislativePillars";
import { TerritorialCommandCenter } from "@/components/home/TerritorialCommandCenter";
import { QuickServicesGrid } from "@/components/home/QuickServicesGrid";
import { SignaturePetition } from "@/components/home/SignaturePetition";
import { IntelligenceAlerts } from "@/components/home/IntelligenceAlerts";
import { LegislativeAgenda } from "@/components/home/LegislativeAgenda";

import Link from "next/link";
import {
  ArrowRight,
  Map,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-100 overflow-x-hidden">

      <main className="flex-grow">
        {/* Level 1: The Offensive (Hero) */}
        <HeroBanner />

        {/* Level 2: Mass Action (Petition) */}
        <SignaturePetition />

        {/* Level 3: Strategic Updates (Intelligence Alerts) */}
        <IntelligenceAlerts />

        {/* Level 4: The Core Action (Legislative Agenda) - HIGH PROMINENCE */}
        <LegislativeAgenda />

        {/* Level 5: Territorial Context (Communes) */}
        <section className="py-24 px-4 relative border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.5),transparent)] -z-10"></div>
          <div className="container mx-auto text-center max-w-5xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-4 py-1 rounded-sm text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              Despliegue Territorial
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
              DETERMINACIÓN EN <span className="text-gradient-gold">CADA COMUNA</span>
            </h2>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto italic font-light">
              &quot;Nuestra gestión no es de escritorio, es de calle. Conoce las prioridades estratégicas para cada territorio del Distrito 8.&quot;
            </p>
            <div className="bg-slate-900 shadow-2xl border border-white/5 p-2">
              <div className="border border-white/10 p-6 md:p-10">
                <CommuneSelector />
              </div>
            </div>
          </div>
        </section>

        {/* Level 5: Concrete Proposals (Pillars) */}
        <LegislativePillars />

        {/* Level 6: Tactical Intelligence (Map) */}
        <section className="py-24 px-4 relative overflow-hidden bg-slate-900/20">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-1 rounded-sm text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                    <Map className="h-3 w-3" />
                    Geointeligencia
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-none">
                    CONTROL <br />
                    <span className="text-blue-500">TERRITORIAL</span>
                  </h2>
                </div>

                <p className="text-lg text-slate-400 leading-relaxed font-light border-l-2 border-blue-500/30 pl-6">
                  Visualización de focos críticos y avance de gestiones en tiempo real. Utilizamos datos para maximizar el impacto de nuestra fiscalización parlamentaria.
                </p>

                <div className="space-y-4">
                  {[
                    { label: "FISCALIZACIÓN DE SERVICIOS PÚBLICOS", val: "ACTIVO" },
                    { label: "MONITOREO DE SEGURIDAD BARRIAL", val: "CRÍTICO" },
                    { label: "GESTIÓN DE INFRAESTRUCTURA", val: "EN CURSO" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/5 p-4 border border-white/5">
                      <span className="text-[10px] font-black tracking-widest text-slate-300">{item.label}</span>
                      <span className={`text-[10px] font-black tracking-widest ${item.val === 'CRÍTICO' ? 'text-red-500' : 'text-blue-400'}`}>{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full h-[500px] border border-white/10 p-2 bg-slate-900 shadow-2xl relative">
                <div className="absolute top-6 right-6 z-20 bg-slate-950 p-3 border border-blue-500/20 text-[10px] font-black uppercase tracking-widest">
                  Mapa Estratégico v2.1
                </div>
                <TerritorialCommandCenter />
              </div>
            </div>
          </div>
        </section>

        {/* Level 7: Community Assistance (Services) */}
        <div className="bg-slate-950 border-t border-white/5">
          <QuickServicesGrid />
        </div>

      </main>

      <footer className="bg-slate-950 text-slate-500 py-16 text-sm border-t border-white/5 font-sans">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-4">
              <div className="bg-amber-500 w-12 h-12 flex items-center justify-center text-slate-950 font-black text-2xl">
                CC
              </div>
              <div className="flex flex-col">
                <span className="font-black text-white text-2xl leading-none tracking-tighter uppercase">Cristian Contreras</span>
                <span className="text-[10px] text-amber-500 font-bold uppercase tracking-[0.4em] mt-1">Diputado Distrito 8</span>
              </div>
            </Link>
            <p className="text-slate-500 max-w-sm italic leading-relaxed">
              &quot;El equilibrio no es una opción, es la única estrategia para reconstruir la nación desde la autoridad y la eficiencia.&quot;
            </p>
            <div className="flex gap-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-all cursor-pointer border border-white/10">
                  <ArrowRight className="h-4 w-4" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-black text-white text-xs uppercase tracking-[0.3em]">Comunicaciones</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contacto@cristiancontreras.cl" className="hover:text-amber-500 transition-colors flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-none"></div>
                  contacto@cristiancontreras.cl
                </a>
              </li>
              <li className="text-[10px] text-slate-600 uppercase tracking-widest leading-relaxed">
                Av. Libertador Bernardo O&apos;Higgins 3900,<br />
                Estación Central, Región Metropolitana
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-black text-white text-xs uppercase tracking-[0.3em]">Navegación</h4>
            <ul className="space-y-3">
              {[
                { label: "Manifiesto XXI", href: "/manifiesto" },
                { label: "Petitorio Central", href: "/#petitorio" },
                { label: "Transparencia", href: "/transparencia" },
                { label: "Células Voluntarias", href: "/voluntarios" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="hover:text-amber-500 transition-colors block py-1 text-xs font-bold uppercase tracking-widest">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-20 pt-8 border-t border-white/5 text-[10px] font-bold uppercase tracking-[0.2em] flex flex-col md:flex-row justify-between items-center gap-4 text-slate-700">
          <p>&copy; 2026 OFICINA PARLAMENTARIA CRISTIAN CONTRERAS. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-400">P. PRIVACIDAD</a>
            <a href="#" className="hover:text-slate-400">T. USO</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
