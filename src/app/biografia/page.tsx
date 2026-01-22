"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Star,
  Award,
  Mic,
  GraduationCap,
  Users,
  Shield,
  Activity,
  Target,
  Zap,
  Scale,
  Search
} from "lucide-react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function BiographyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Background Architecture */}
      <div className="fixed inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5 pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 z-0 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 z-0 pointer-events-none"></div>

      {/* IMMERSIVE HEADER: STRATEGIC DOSSIER */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden border-b border-white/5">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 px-6 py-1.5 rounded-none text-xs font-black tracking-[0.3em] uppercase">
                    Registro de Trayectoria Pública
                  </Badge>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                    <div className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-emerald-500/30 rounded-full"></div>
                  </div>
                </div>
                <h1 className={`${playfair.className} text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter uppercase`}>
                  CRISTIAN <br />
                  <span className="text-amber-500 italic">CONTRERAS</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-wrap gap-8 pt-8 border-t border-white/10"
              >
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">Representación</p>
                  <p className="text-xl font-bold font-mono uppercase">Distrito 8</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">FILOSOFÍA</p>
                  <p className="text-xl font-bold font-mono">SENTIDO COMÚN</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">GRADO</p>
                  <p className="text-xl font-bold font-mono text-amber-500">ACADÉMICO / DIPUTADO</p>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-4 relative group">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative aspect-[4/5] bg-slate-900 border border-white/10 overflow-hidden"
              >
                <Image
                  src="/images/cristian/cristian_hero_principal.png"
                  alt="Cristian Contreras Official Dossier"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                />
                {/* HUD Overlays */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-amber-500/50"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-amber-500/50"></div>
                  <div className="absolute top-1/4 right-4 text-[8px] font-mono text-amber-500/40 writing-vertical-rl">RECONSTRUYENDO EL EQUILIBRIO...</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CORE: PHILOSOPHY & ACTION */}
      <section className="py-24 px-4 bg-slate-900/40 relative border-b border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-white`}>
                  La Fuerza del <span className="text-amber-500 italic">Conocimiento</span>
                </h2>
                <div className="w-20 h-1 bg-amber-500"></div>
              </div>

              <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-light">
                <p>
                  Cristian Contreras Radovic no es solo un parlamentario; es un <span className="text-white font-bold">pensador en acción</span>. Con un Doctorado en Filosofía de la Ciencia, su enfoque trasciende la política tradicional para buscar soluciones basadas en la estructura misma de la realidad.
                </p>
                <p>
                  Como comunicador, ha liderado un diálogo ciudadano masivo, buscando soluciones reales a la ineficiencia estatal para proponer un camino de <span className="text-amber-500 font-bold uppercase tracking-wider">sentido común y equilibrio</span>.
                </p>
                <p className="p-8 bg-slate-950 border-l-4 border-amber-500 italic text-slate-300">
                  &quot;Para reconstruir Chile Primero debemos reconstruir la lógica de nuestras instituciones. El Estado debe ser un motor de eficiencia, no una carga para el ciudadano.&quot;
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: GraduationCap, title: "Rigor Académico", desc: "Doctor en Filosofía de la Ciencia (UAB) y Periodista.", color: "blue" },
                { icon: Activity, title: "Conocimiento Social", desc: "Análisis profundo de la realidad y contextos ciudadanos.", color: "amber" },
                { icon: Shield, title: "Autoridad Ética", desc: "Defensa intransigente de la probidad y la transparencia.", color: "emerald" },
                { icon: Target, title: "Visión Reformista", desc: "Arquitecto de las 8 Grandes Reformas del Estado.", color: "red" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-slate-900 border border-white/5 hover:border-amber-500/30 transition-all group"
                >
                  <item.icon className={`h-10 w-10 mb-6 text-slate-500 group-hover:text-amber-500 transition-colors`} />
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TACTICAL HISTORY: THE TIMELINE */}
      <section className="py-32 px-4 relative overflow-hidden bg-slate-950">
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8">
            <div>
              <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mb-4 rounded-none text-[10px] font-black tracking-widest">
                CRONOLOGÍA DE SERVICIO
              </Badge>
              <h2 className={`${playfair.className} text-5xl md:text-7xl font-black text-white`}>Trayectoria <span className="text-blue-500 italic">Sistémica</span></h2>
            </div>
            <div className="max-w-md text-right hidden md:block">
              <p className="text-slate-500 text-sm italic font-mono uppercase tracking-tighter">
                Trayectoria desde la academia hacia la representación ciudadana
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 relative">
            <div className="absolute left-0 top-0 w-px h-full bg-slate-800 hidden lg:block"></div>

            {TIMELINE_EVENTS.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 group"
              >
                <div className="absolute left-0 top-1.5 w-4 h-4 bg-slate-950 border-2 border-slate-700 rounded-none z-10 group-hover:border-amber-500 group-hover:rotate-45 transition-all"></div>
                <div className="space-y-4">
                  <p className="text-amber-500 font-mono text-sm font-bold tracking-widest">{event.year}</p>
                  <h3 className="text-2xl font-black text-white group-hover:text-amber-500 transition-colors uppercase tracking-tight">
                    {event.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {event.description}
                  </p>
                  <div className="pt-4 flex items-center gap-4">
                    <event.icon className="h-5 w-5 text-slate-700 group-hover:text-amber-500 transition-colors" />
                    <div className="w-full h-1 bg-slate-900">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1 }}
                        className="h-full bg-slate-800 group-hover:bg-amber-500/30"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC DOSSIER SELECTION */}
      <section className="py-24 px-4 bg-slate-900">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 bg-slate-950 p-12 border border-white/10 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className={`${playfair.className} text-4xl font-bold text-white leading-tight`}>
                  El Camino del <span className="text-amber-500">Equilibrio</span>
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Una propuesta radical para el siglo XXI. Menos burocracia, más soberanía, justicia real.
                </p>
              </div>
              <Button asChild className="mt-12 bg-white text-slate-950 font-black h-16 rounded-none tracking-widest text-xs uppercase hover:bg-amber-500 transition-all">
                <Link href="/manifiesto">
                  LEER MANIFIESTO COMPLETO <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
              {[
                { title: "Células Voluntarias", icon: Users, href: "/voluntarios", desc: "Únete a la red de despliegue territorial." },
                { title: "Reporte de Gestión", icon: Search, href: "/transparencia", desc: "Accede al historial de fiscalización." },
                { title: "Misión Nacional", icon: Zap, href: "/#petitorio", desc: "Firma el petitorio nacional por el equilibrio." },
                { title: "Ejes de Reforma", icon: Scale, iconColor: "text-red-500", href: "/compromisos", desc: "Los 8 pilares estratégicos de nuestra gestión." },
              ].map((card, i) => (
                <Link
                  key={i}
                  href={card.href}
                  className="bg-slate-900 p-10 hover:bg-slate-800 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <card.icon className="h-8 w-8 text-slate-600 group-hover:text-amber-500 transition-colors" />
                    <h4 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">{card.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-700 mt-8 group-hover:translate-x-2 group-hover:text-amber-500 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const TIMELINE_EVENTS = [
  {
    year: "1994-1998",
    title: "Formación y Rigor",
    description: "Licenciatura en Comunicación Social y Periodismo (UDP). Inicio del estudio profundo sobre sistemas de información.",
    icon: GraduationCap
  },
  {
    year: "2002-2006",
    title: "Profundidad Académica",
    description: "Doctorado en Filosofía de la Ciencia (Universidad Autónoma de Barcelona). Especialización en la estructura del conocimiento humano.",
    icon: BookOpen
  },
  {
    year: "2010-2020",
    title: "Despertar Ciudadano",
    description: "Liderazgo en investigación mediática abordando paradigmas alternativos, ciencia y misterio como 'Dr. File'.",
    icon: Mic
  },
  {
    year: "2021",
    title: "Arquitectura Política",
    description: "Fundación de Centro Unido, un movimiento diseñado para romper la dualidad izquierda-derecha hacia el tercer camino.",
    icon: Users
  },
  {
    year: "2024",
    title: "Ofensiva Territorial",
    description: "Campaña estratégica para el Distrito 8 basada en las 8 Grandes Reformas para la reconstrucción del Estado.",
    icon: Star
  },
  {
    year: "2026",
    title: "Asunción Parlamentaria",
    description: "Ingreso a la Cámara de Diputados con mandato directo para fiscalizar y transformar el sistema desde su núcleo.",
    icon: Award
  }
];
