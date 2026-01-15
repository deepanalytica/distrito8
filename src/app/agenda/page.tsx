"use client";

import { Navbar } from "@/components/layout/Navbar";
import { EVENTS } from "@/lib/event-data";
import {
    CalendarDays,
    MapPin,
    ChevronRight,
    Users,
    Stethoscope,
    Briefcase,
    Building2
} from "lucide-react";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TYPE_CONFIG = {
    OPERATIVO: { icon: Stethoscope, color: "bg-green-100 text-green-700", label: "Operativo" },
    REUNION: { icon: Users, color: "bg-blue-100 text-blue-700", label: "Reunión Vecinal" },
    VISITA: { icon: Briefcase, color: "bg-amber-100 text-amber-700", label: "Visita Terreno" },
    CONGRESO: { icon: Building2, color: "bg-purple-100 text-purple-700", label: "Congreso" },
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
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Agenda Territorial</h1>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            Sigue las actividades del diputado en el Distrito 8 y en el Congreso.
                            Próximos operativos, reuniones vecinales y sesiones de votación.
                        </p>
                    </div>

                    {/* Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        <Button
                            variant={selectedCommune === null ? "default" : "outline"}
                            className="rounded-full px-6"
                            onClick={() => setSelectedCommune(null)}
                        >
                            Todo el Distrito
                        </Button>
                        {communes.map(commune => (
                            <Button
                                key={commune}
                                variant={selectedCommune === commune ? "default" : "outline"}
                                className="rounded-full px-6"
                                onClick={() => setSelectedCommune(commune)}
                            >
                                {commune}
                            </Button>
                        ))}
                    </div>

                    {/* Timeline List */}
                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                        {filteredEvents.length > 0 ? (
                            filteredEvents.map((event) => {
                                const config = TYPE_CONFIG[event.type];
                                return (
                                    <div key={event.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        {/* Icon on line */}
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 dark:bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                            <config.icon className="h-5 w-5" />
                                        </div>

                                        {/* Card container */}
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow group-is-active:border-blue-200">
                                            <div className="flex items-center justify-between space-x-2 mb-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-bold text-blue-900 text-sm">{event.date}</span>
                                                    <Badge variant="secondary" className={`${config.color} border-none text-[10px] font-bold`}>
                                                        {config.label}
                                                    </Badge>
                                                </div>
                                                <time className="font-mono text-[10px] text-gray-400 font-bold uppercase">{event.time}</time>
                                            </div>
                                            <div className="mb-2">
                                                <h4 className="text-xl font-bold text-gray-900">{event.title}</h4>
                                                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1 font-medium italic">
                                                    <MapPin className="h-3 w-3" />
                                                    {event.commune} — {event.location}
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                {event.description}
                                            </p>
                                            <div className="flex justify-end pt-2 border-t border-gray-50">
                                                <Button variant="ghost" size="sm" className="text-blue-600 text-sm font-bold gap-2 hover:bg-blue-50 px-3 py-1 h-auto">
                                                    Ver detalles
                                                    <ChevronRight className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="text-center py-20 bg-white rounded-3xl border border-dashed text-gray-400 max-w-md mx-auto relative z-10">
                                <CalendarDays className="h-12 w-12 mx-auto mb-4 opacity-20" />
                                <p>No hay actividades programadas para esta comuna en los próximos días.</p>
                            </div>
                        )}
                    </div>

                    {/* CTA Info */}
                    <div className="mt-20 p-8 rounded-3xl bg-blue-900 text-white shadow-xl relative overflow-hidden">
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">¿Quieres que visitemos tu barrio?</h3>
                                <p className="text-blue-100 leading-relaxed mb-6">
                                    Las visitas se coordinan directamente con juntas de vecinos y organizaciones sociales para maximizar la eficacia de la gestión territorial.
                                </p>
                                <div className="flex gap-4">
                                    <Button asChild className="bg-white text-blue-900 hover:bg-blue-50 rounded-2xl h-12 px-6 shadow-lg">
                                        <Link href="/pedir-audiencia">Solicitar Reunión</Link>
                                    </Button>
                                    <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 rounded-2xl h-12 px-6 shadow-sm">
                                        Inscríbete para avisar
                                    </Button>
                                </div>
                            </div>
                            <div className="hidden md:block opacity-20 transform scale-150 translate-x-10">
                                <Users className="h-40 w-40" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-12 bg-gray-900 text-gray-400 text-sm text-center">
                © 2026 Oficina Parlamentaria Cristian Contreras. Distrito 8.
            </footer>
        </div>
    );
}
