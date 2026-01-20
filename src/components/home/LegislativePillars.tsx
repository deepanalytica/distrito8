"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ShieldAlert,
    Building2,
    Globe,
    TrendingUp,
    Scale,
    Users,
    ArrowRight,
    SearchCheck,
    CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PILLARS = [
    {
        icon: ShieldAlert,
        title: "Seguridad y Justicia",
        description: "Mano dura contra el crimen organizado y plebiscito ciudadano sobre la pena de muerte para delitos atroces.",
        status: "Prioridad #1",
        color: "red",
        details: ["Plebiscito Pena de Muerte", "Control Territorial", "Ley de Legítima Defensa"]
    },
    {
        icon: Building2,
        title: "Eficiencia del Estado",
        description: "Eliminar la 'grasa estatal', reducir el número de ministerios y terminar con el nepotismo y los cargos políticos.",
        status: "En Diseño",
        color: "amber",
        details: ["Reducción de Ministerios", "Ley de Meritocracia", "Auditoría Pública"]
    },
    {
        icon: Globe,
        title: "Soberanía Nacional",
        description: "Revisión de tratados internacionales que vulneren la autonomía de Chile, incluyendo la OMS y la ONU.",
        status: "Propuesta Ley",
        color: "blue",
        details: ["Soberanía Sanitaria", "Defensa de la Autonomía", "Revisión Tratados"]
    },
    {
        icon: TrendingUp,
        title: "Desarrollo PYME",
        description: "Reducción radical de impuestos y trabas burocráticas para las pequeñas empresas para reactivar el empleo local.",
        status: "Prioridad Eco",
        color: "emerald",
        details: ["Cero Impuesto 1er Año", "Simplificación Tributaria", "Apoyo Startups"]
    },
    {
        icon: Scale,
        title: "Lucha Anticorrupción",
        description: "Cero tolerancia a la corrupción. Penas de cárcel efectivas y perpetuas para el mal uso de fondos públicos.",
        status: "Cero Tolerancia",
        color: "purple",
        details: ["Muerte Cívica", "Cárcel Efectiva", "Transparencia Total"]
    },
    {
        icon: Users,
        title: "Control Migratorio",
        description: "Fronteras seguras y detención inmediata de la inmigración desordenada. Expulsión administrativa garantizada.",
        status: "Urgente",
        color: "indigo",
        details: ["Cierre de Fronteras", "Expulsión Inmediata", "Censo de Extranjeros"]
    }
];

export function LegislativePillars() {
    return (
        <section className="py-24 px-4 relative overflow-hidden bg-slate-900/50">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Badge className="bg-amber-500/20 text-amber-500 border-amber-500/20 mb-6 py-1.5 px-4 rounded-full text-xs font-bold tracking-widest uppercase">
                            Objetivos Parlamentarios
                        </Badge>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                            Las Propuestas <span className="text-gradient-gold">Reales</span> para Chile
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                            No es solo política, es un plan de acción concreto para transformar el Estado y devolverle la soberanía a los ciudadanos.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PILLARS.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card group hover:scale-[1.02] transition-all duration-500 bg-slate-950/40 border border-white/5 rounded-3xl p-8 relative overflow-hidden"
                        >
                            {/* Card Background Glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="bg-white/5 p-4 rounded-2xl group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-xl border border-white/10">
                                        <pillar.icon className="h-8 w-8" />
                                    </div>
                                    <Badge variant="outline" className="border-white/10 text-gray-400 font-bold px-3 py-1 bg-white/5">
                                        {pillar.status}
                                    </Badge>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors">
                                    {pillar.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light min-h-[60px]">
                                    {pillar.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {pillar.details.map((detail, dIndex) => (
                                        <div key={dIndex} className="flex items-center gap-3 text-xs text-gray-300 font-medium bg-white/5 py-2 px-3 rounded-lg border border-white/5">
                                            <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                                            {detail}
                                        </div>
                                    ))}
                                </div>

                                <Button variant="ghost" className="w-full text-amber-500 hover:text-amber-400 hover:bg-amber-500/10 justify-between group/btn text-sm font-bold border border-amber-500/20 rounded-xl">
                                    Ver Proyecto de Ley
                                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-12 py-7 text-xl rounded-2xl shadow-2xl shadow-amber-900/20 transform hover:scale-105 transition-all">
                        <Link href="/transparencia" className="flex items-center gap-3">
                            <SearchCheck className="h-6 w-6" />
                            Ver Plan de Gestión Completo
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
