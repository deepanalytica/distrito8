"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    GraduationCap,
    Heart,
    TrendingUp,
    Award,
    Scale,
    HeartPulse,
    Sparkles,
    Clock,
    ArrowRight,
    ChevronRight,
    Shield,
    X,
    CheckCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { REFORMAS, DEPUTY_INFO } from "@/lib/constants";
import Link from "next/link";

const iconMap = {
    GraduationCap,
    Heart,
    TrendingUp,
    Award,
    Scale,
    HeartPulse,
    Sparkles,
    Clock,
};

export default function CompromisosPage() {
    const [selectedReformId, setSelectedReformId] = useState<number | null>(null);

    const selectedReform = REFORMAS.find(r => r.id === selectedReformId);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden pt-20">
            {/* Background Architecture */}
            <div className="fixed inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5 pointer-events-none"></div>

            {/* Hero Section - Presidential Style */}
            <section className="relative py-24 md:py-32 px-4 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-amber-500/10 via-transparent to-transparent -z-10 blur-3xl opacity-50"></div>

                <div className="container mx-auto max-w-6xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge className="bg-amber-500/20 text-amber-500 border-amber-500/20 mb-8 py-2 px-6 rounded-full text-xs font-bold tracking-widest uppercase">
                            Plan de Estado 2026-2030
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter leading-tight lg:px-20">
                            Las 8 Grandes <span className="text-gradient-gold italic">Reformas</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light leading-relaxed max-w-4xl mx-auto italic">
                            &quot;{DEPUTY_INFO.vision}&quot;
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Card - Glassmorphism */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card bg-slate-900/40 border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <Shield className="h-64 w-64 text-amber-500" />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
                                <div className="h-10 w-1 bg-amber-500 rounded-full"></div>
                                Transformación Estructural
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <p className="text-lg text-gray-400 leading-relaxed font-light">
                                    Las 8 Grandes Reformas del Estado representan una visión holística para transformar Chile desde sus fundamentos. Este proyecto nace de <span className="text-amber-500 font-bold italic">Politikon</span>, una propuesta única que fusiona ciencia, filosofía y espiritualidad.
                                </p>
                                <p className="text-lg text-gray-400 leading-relaxed font-light">
                                    Cada reforma está diseñada para abordar un aspecto fundamental de nuestra sociedad, con el objetivo de alcanzar el equilibrio necesario para construir un país próspero, seguro y sobre todo, humano.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Reforms Grid - High Impact */}
            <section className="py-24 px-4 bg-slate-900/20">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {REFORMAS.map((reforma, idx) => {
                            const Icon = iconMap[reforma.icon as keyof typeof iconMap];
                            return (
                                <motion.div
                                    key={reforma.id}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="group relative cursor-pointer"
                                    onClick={() => setSelectedReformId(reforma.id)}
                                >
                                    <div className="glass-card bg-slate-950/60 border border-white/5 rounded-[2rem] p-8 md:p-10 hover:border-amber-500/30 transition-all duration-500 h-full flex flex-col md:flex-row gap-8 items-start">

                                        {/* Icon Section */}
                                        <div className="relative flex-shrink-0">
                                            <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 p-5 rounded-2xl border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all duration-500 shadow-xl">
                                                <Icon className="h-8 w-8" />
                                            </div>
                                            <div className="absolute -top-3 -right-3">
                                                <Badge className="bg-slate-900 text-amber-500 border border-amber-500/30 text-[10px] py-0 px-2 font-bold font-mono">
                                                    #{reforma.id}
                                                </Badge>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="flex-grow space-y-4">
                                            <h3 className="text-2xl font-bold text-white group-hover:text-amber-500 transition-colors">
                                                {reforma.name}
                                            </h3>
                                            <p className="text-gray-400 text-base leading-relaxed font-light">
                                                {reforma.description}
                                            </p>
                                            <div className="pt-4 flex items-center gap-2 text-amber-500/60 font-bold text-xs uppercase tracking-widest group-hover:text-amber-500 transition-colors">
                                                Analizar Impacto
                                                <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subtle index glow */}
                                    <div className="absolute -z-10 top-0 left-0 w-full h-full bg-amber-500/0 group-hover:bg-amber-500/[0.02] rounded-[2rem] transition-all duration-500 blur-xl"></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* MODAL OVERLAY */}
            <AnimatePresence>
                {selectedReform && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedReformId(null)}
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden"
                        >
                            {/* Modal Header */}
                            <div className="relative h-32 bg-gradient-to-r from-amber-500/20 to-blue-500/10 flex items-center px-10">
                                <div className="absolute top-6 right-6">
                                    <button
                                        onClick={() => setSelectedReformId(null)}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                    >
                                        <X className="h-6 w-6 text-white" />
                                    </button>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="bg-amber-500 p-4 rounded-2xl text-slate-950">
                                        {(() => {
                                            const Icon = iconMap[selectedReform.icon as keyof typeof iconMap];
                                            return <Icon className="h-8 w-8" />;
                                        })()}
                                    </div>
                                    <div>
                                        <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 mb-2">Reforma #{selectedReform.id}</Badge>
                                        <h3 className="text-3xl font-bold text-white tracking-tight">{selectedReform.name}</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Body */}
                            <div className="p-10 space-y-8">
                                <p className="text-xl text-slate-300 italic font-light leading-relaxed">
                                    &quot;{selectedReform.description}&quot;
                                </p>

                                <div className="space-y-4">
                                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-amber-500">Puntos Clave del Impacto</h4>
                                    <div className="grid grid-cols-1 gap-4">
                                        {selectedReform.details.map((detail, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex gap-4 items-start p-4 bg-white/5 border border-white/5 rounded-2xl"
                                            >
                                                <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                                <p className="text-sm text-slate-400 leading-relaxed">{detail}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="p-8 bg-slate-950/50 border-t border-white/5 flex justify-end gap-4">
                                <Button
                                    variant="outline"
                                    onClick={() => setSelectedReformId(null)}
                                    className="border-white/10 text-white hover:bg-white/5 px-8 rounded-xl font-bold uppercase tracking-widest text-[10px]"
                                >
                                    Cerrar Detalles
                                </Button>
                                <Button asChild className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 rounded-xl font-bold uppercase tracking-widest text-[10px]">
                                    <Link href="/voluntarios">Apoyar esta Reforma</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Politikon Foundations */}
            <section className="py-32 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5"></div>
                <div className="container mx-auto max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="inline-block p-4 bg-amber-500/10 border border-amber-500/20 rounded-3xl mb-12">
                            <Sparkles className="h-12 w-12 text-amber-500 animate-pulse" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                            El Fundamento: <span className="text-gradient-gold font-serif italic">Politikon</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4">
                            {[
                                { title: "Ciencia", desc: "Metodología rigurosa para la gestión pública eficiente." },
                                { title: "Filosofía", desc: "Sabiduría milenaria aplicada a los desafíos modernos." },
                                { title: "Espiritualidad", desc: "Conexión integral para el bienestar social profundo." }
                            ].map((item, i) => (
                                <div key={i} className="glass-card bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto mb-12">
                            &quot;Todo el proyecto político y espiritual de Cristián Contreras Radovic nace de esta obra fundamental: dar un alma al Estado.&quot;
                        </p>

                        <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-amber-500 font-bold rounded-full px-12 h-16 text-lg transition-all shadow-2xl">
                            <Link href="/biografia">
                                Ver Biografía & Trayectoria
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Action Footer */}
            <section className="py-24 px-4 bg-gradient-to-b from-transparent to-slate-950/80">
                <div className="container mx-auto max-w-4xl">
                    <div className="glass-card bg-amber-500 p-1 md:p-1.5 rounded-[3rem] shadow-2xl shadow-amber-500/20">
                        <div className="bg-slate-950 rounded-[2.8rem] p-10 md:p-16 text-center">
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Sé parte de la <span className="text-gradient-gold">transformación</span>
                            </h3>
                            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                                Estas reformas no son utopías, son realidades en construcción que necesitan tu participación activa.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild className="bg-amber-500 hover:bg-amber-600 text-slate-900 h-14 px-10 rounded-2xl font-bold text-lg">
                                    <Link href="/voluntarios">Unirse al Equipo</Link>
                                </Button>
                                <Button variant="outline" asChild className="border-white/20 text-white hover:bg-white hover:text-slate-950 h-14 px-10 rounded-2xl font-bold text-lg transition-all">
                                    <Link href="/preocupaciones">Reportar Problema</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
