"use client";

import { EVENTS } from "@/lib/event-data";
import {
    CalendarDays,
    MapPin,
    ChevronRight,
    Users,
    Stethoscope,
    Briefcase,
    Building2,
    Clock,
    Filter
} from "lucide-react";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TYPE_CONFIG = {
    OPERATIVO: { icon: Stethoscope, color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20", label: "Operativo" },
    REUNION: { icon: Users, color: "text-blue-400 bg-blue-400/10 border-blue-400/20", label: "Reunión Vecinal" },
    VISITA: { icon: Briefcase, color: "text-amber-400 bg-amber-400/10 border-amber-400/20", label: "Visita Terreno" },
    CONGRESO: { icon: Building2, color: "text-purple-400 bg-purple-400/10 border-purple-400/20", label: "Congreso" },
};

export default function AgendaPage() {
    const [selectedCommune, setSelectedCommune] = useState<string | null>(null);

    const communes = useMemo(() => {
        return Array.from(new Set(EVENTS.map(e => e.commune))).sort();
    }, []);

    const filteredEvents = useMemo(() => {
        return EVENTS.filter(e => !selectedCommune || e.commune === selectedCommune);
    }, [selectedCommune]);

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-100">
            {/* Decorative Background */}
            <div className="fixed inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5 pointer-events-none"></div>
            <div className="fixed top-20 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <main className="flex-grow container mx-auto px-4 py-12 md:py-20 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 mb-4 backdrop-blur-sm">
                            <Clock className="w-4 h-4 text-amber-500" />
                            <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Agenda Pública</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
                            Trabajo en <span className="text-gradient-gold">Terreno</span>
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
                            Transparencia total en nuestra agenda. Conoce dónde estaremos escuchando, trabajando y legislando.
                        </p>
                    </div>

                    {/* Filter */}
                    <div className="flex flex-col items-center gap-6 mb-16">
                        <div className="flex items-center gap-2 text-sm text-slate-500 font-bold uppercase tracking-widest">
                            <Filter className="w-4 h-4" />
                            Filtrar por Comuna
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                            <Button
                                variant="outline"
                                className={`rounded-full px-6 transition-all ${selectedCommune === null
                                    ? "bg-amber-500 text-slate-900 border-amber-500 font-bold shadow-lg shadow-amber-900/20"
                                    : "bg-transparent border-slate-700 text-slate-400 hover:text-white hover:border-slate-500"}`}
                                onClick={() => setSelectedCommune(null)}
                            >
                                Todo el Distrito
                            </Button>
                            {communes.map(commune => (
                                <Button
                                    key={commune}
                                    variant="outline"
                                    className={`rounded-full px-6 transition-all ${selectedCommune === commune
                                        ? "bg-amber-500 text-slate-900 border-amber-500 font-bold shadow-lg shadow-amber-900/20"
                                        : "bg-transparent border-slate-700 text-slate-400 hover:text-white hover:border-slate-500"}`}
                                    onClick={() => setSelectedCommune(commune)}
                                >
                                    {commune}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Timeline List */}
                    <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:mx-auto md:before:left-1/2 before:w-px before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
                        {filteredEvents.length > 0 ? (
                            filteredEvents.map((event, index) => {
                                const config = TYPE_CONFIG[event.type as keyof typeof TYPE_CONFIG] || TYPE_CONFIG.REUNION; // Fallback
                                return (
                                    <div key={event.id} className="relative flex flex-col md:flex-row items-center justify-between md:odd:flex-row-reverse group animate-in slide-in-from-bottom-4 duration-700 fill-mode-backwards" style={{ animationDelay: `${index * 100}ms` }}>

                                        {/* Icon on line */}
                                        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-slate-950 border-4 border-slate-900 shadow-xl z-20 group-hover:scale-110 transition-transform duration-300">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${config.color.split(" ")[1]} bg-opacity-20`}>
                                                <config.icon className={`h-5 w-5 ${config.color.split(" ")[0]}`} />
                                            </div>
                                        </div>

                                        {/* Card container */}
                                        <div className="w-full pl-20 md:pl-0 md:w-[calc(50%-3rem)] relative">
                                            <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 rounded-3xl hover:bg-slate-800/60 hover:border-slate-700 transition-all group-hover:-translate-y-1 shadow-2xl">
                                                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-slate-800/50 pb-4">
                                                    <div className="flex items-center gap-3">
                                                        <Badge variant="outline" className={`${config.color} border px-2 py-1`}>
                                                            {config.label}
                                                        </Badge>
                                                        <span className="font-bold text-slate-300 text-sm flex items-center gap-1">
                                                            <CalendarDays className="w-3 h-3 text-slate-500" />
                                                            {event.date}
                                                        </span>
                                                    </div>
                                                    <time className="font-mono text-xs text-amber-500 font-bold bg-amber-500/10 px-2 py-1 rounded">
                                                        {event.time}
                                                    </time>
                                                </div>

                                                <h4 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-amber-400 transition-colors">
                                                    {event.title}
                                                </h4>

                                                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-4 bg-slate-950/30 inline-flex px-3 py-1.5 rounded-lg border border-slate-800/50">
                                                    <MapPin className="h-3 w-3" />
                                                    {event.commune} — {event.location}
                                                </div>

                                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                                    {event.description}
                                                </p>

                                                <div className="flex justify-end">
                                                    <Button variant="ghost" size="sm" className="text-slate-400 text-xs font-bold hover:text-white hover:bg-slate-800 p-0 h-auto gap-1 group/btn">
                                                        Más detalles
                                                        <ChevronRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                                                    </Button>
                                                </div>
                                            </div>

                                            {/* Connector Dot for mobile alignment fix */}
                                            <div className="absolute top-8 -left-12 md:hidden w-8 h-px bg-slate-800"></div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="text-center py-20 bg-slate-900/30 rounded-[2rem] border border-dashed border-slate-800/50 text-slate-500 max-w-md mx-auto relative z-10">
                                <CalendarDays className="h-16 w-16 mx-auto mb-6 opacity-20" />
                                <h3 className="text-xl font-bold text-slate-400 mb-2">Agenda Disponible</h3>
                                <p>No hay actividades programadas para este filtro en los próximos días.</p>
                            </div>
                        )}
                    </div>

                    {/* CTA Info */}
                    <div className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-900 to-slate-900 text-white shadow-2xl relative overflow-hidden ring-1 ring-white/10 group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-1000">
                            <Users className="w-64 h-64 rotate-12 -translate-y-16 translate-x-16" />
                        </div>

                        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-3xl font-bold mb-2">¿Quieres que visitemos tu barrio?</h3>
                                    <p className="text-indigo-200 leading-relaxed text-lg font-light">
                                        Las visitas se coordinan directamente con juntas de vecinos y organizaciones sociales para maximizar la eficacia de la gestión territorial.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button asChild className="bg-amber-500 text-slate-900 hover:bg-amber-400 hover:text-slate-950 font-bold rounded-xl h-14 px-8 shadow-xl shadow-amber-900/20 text-lg transition-all hover:scale-105">
                                        <Link href="/pedir-audiencia">Solicitar Reunión</Link>
                                    </Button>
                                    <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 rounded-xl h-14 px-8 shadow-sm backdrop-blur-md">
                                        Inscríbete para avisar
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-500 text-sm text-center">
                © 2026 Oficina Parlamentaria Cristian Contreras. Distrito 8.
            </footer>
        </div>
    );
}
