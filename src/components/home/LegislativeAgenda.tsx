"use client";

import { motion } from "framer-motion";
import {
    Activity,
    ArrowUpRight,
    ShieldAlert,
    Building2,
    Scale,
    Globe,
    TrendingUp,
    HeartPulse,
    AlertCircle,
    CheckCircle2,
    Clock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"] });

const AGENDA_ITEMS = [
    {
        id: "retirar-oms",
        title: "Retirar a Chile de la OMS",
        priority: "Alta Prioridad",
        category: "Salud",
        status: "En Preparación",
        description: "Proyecto para evaluar y potencialmente retirar a Chile de la Organización Mundial de la Salud para recuperar la soberanía sanitaria.",
        icon: HeartPulse,
        color: "red"
    },
    {
        id: "eficiencia-estatal",
        title: "Departamento de Eficiencia Gubernamental",
        priority: "Alta Prioridad",
        category: "Administración",
        status: "En Preparación",
        description: "Establecer un departamento dedicado a optimizar la eficiencia del Estado y eliminar gastos innecesarios.",
        icon: Building2,
        color: "amber"
    },
    {
        id: "reducir-ministerios",
        title: "Reducir Número de Ministerios",
        priority: "Media Prioridad",
        category: "Administración",
        status: "En Preparación",
        description: "Propuesta para optimizar la estructura ministerial del gobierno y reducir la burocracia política.",
        icon: Activity,
        color: "blue"
    },
    {
        id: "inmigracion-desordenada",
        title: "Detener Inmigración Desordenada",
        priority: "Alta Prioridad",
        category: "Seguridad",
        status: "En Preparación",
        description: "Regular y ordenar los procesos migratorios en Chile para garantizar la seguridad nacional.",
        icon: ShieldAlert,
        color: "red"
    },
    {
        id: "pena-muerte",
        title: "Plebiscitar Pena de Muerte",
        priority: "Alta Prioridad",
        category: "Justicia",
        status: "En Preparación",
        description: "Consulta ciudadana vinculante sobre la reinstauración de la pena de muerte para crímenes atroces.",
        icon: Scale,
        color: "purple"
    },
    {
        id: "impuestos-pymes",
        title: "Reducir Impuestos para PYMES",
        priority: "Alta Prioridad",
        category: "Economía",
        status: "En Preparación",
        description: "Disminuir la carga tributaria para pequeñas y medianas empresas para fomentar el crecimiento y empleo.",
        icon: TrendingUp,
        color: "emerald"
    }
];

export function LegislativeAgenda() {
    return (
        <section id="agenda" className="py-24 px-4 bg-slate-900/10 relative overflow-hidden">
            {/* Background Sophistication */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mb-4 py-1.5 px-4 rounded-none text-[10px] font-black tracking-[0.3em] uppercase">
                            Compromiso Legislativo 2026
                        </Badge>
                        <h2 className={`${playfair.className} text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter`}>
                            AGENDA <br />
                            <span className="text-amber-500 italic">LEGISLATIVA</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="hidden md:block text-right"
                    >
                        <p className="text-slate-500 text-xs font-mono uppercase tracking-widest max-w-[200px]">
                            Proyectos e iniciativas comprometidas para el Distrito 8 y la nación.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5 shadow-2xl">
                    {AGENDA_ITEMS.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-slate-950 p-8 md:p-12 hover:bg-slate-900 transition-all duration-500 overflow-hidden"
                        >
                            {/* Visual Status Indicator */}
                            <div className={`absolute top-0 left-0 w-1 h-full bg-${item.color}-500 opacity-20 group-hover:opacity-100 transition-opacity`} />

                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-shrink-0">
                                    <div className="bg-white/5 p-4 border border-white/10 group-hover:border-amber-500/30 transition-colors">
                                        <item.icon className="h-8 w-8 text-slate-400 group-hover:text-amber-500 transition-colors" />
                                    </div>
                                </div>

                                <div className="flex-grow space-y-4">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <Badge className={`bg-${item.color}-500/10 text-${item.color}-500 border-${item.color}-500/20 rounded-none text-[9px] font-black uppercase tracking-widest px-3`}>
                                            {item.priority}
                                        </Badge>
                                        <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                                            <Activity className="h-3 w-3" />
                                            {item.category}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-amber-500 transition-colors uppercase tracking-tight leading-none">
                                        {item.title}
                                    </h3>

                                    <p className="text-slate-400 text-sm leading-relaxed font-light line-clamp-2 md:line-clamp-none">
                                        {item.description}
                                    </p>

                                    <div className="pt-4 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                            <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{item.status}</span>
                                        </div>
                                        <Button asChild variant="ghost" size="sm" className="text-slate-500 hover:text-white hover:bg-white/5 rounded-none text-[10px] uppercase font-bold tracking-widest gap-2">
                                            <Link href="/transparencia#agenda">
                                                Detalles
                                                <ArrowUpRight className="h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Grid Footer - Strategic Info */}
                <div className="mt-12 p-8 border border-white/5 bg-slate-900/50 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-8">
                        <div>
                            <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Versión Agenda</div>
                            <div className="text-xl font-black text-white font-mono">2026.1.A</div>
                        </div>
                        <div className="w-px h-10 bg-white/10" />
                        <div>
                            <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Total Proyectos</div>
                            <div className="text-xl font-black text-white font-mono">06 Activos</div>
                        </div>
                    </div>

                    <Button asChild className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-10 h-14 rounded-none uppercase tracking-widest text-xs">
                        <a href="mailto:proyectos@cristiancontreras.cl">PROPONER INICIATIVA</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
