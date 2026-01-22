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

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"] });

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
        <section className="py-24 px-4 relative overflow-hidden bg-slate-950">

            {/* Background Decorations */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 mb-6 py-1.5 px-6 rounded-none text-xs font-bold tracking-[0.2em] uppercase">
                            OFENSIVA PARLAMENTARIA
                        </Badge>
                        <h2 className={`${playfair.className} text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-none`}>
                            Pilares de la <span className="text-amber-500 italic">Gestión</span>
                        </h2>
                        <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Una ruta estratégica diseñada con rigor para restaurar el equilibrio y la soberanía en cada rincón del Distrito 8.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PILLARS.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-slate-900/40 border border-white/5 p-8 relative overflow-hidden flex flex-col h-full"
                        >
                            {/* Squared corner accent */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-500/20 group-hover:border-amber-500 transition-colors"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="bg-slate-950 p-4 border border-white/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-500">
                                        <pillar.icon className="h-8 w-8" />
                                    </div>
                                    <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase">
                                        {pillar.status}
                                    </span>
                                </div>

                                <h3 className={`${playfair.className} text-2xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors`}>
                                    {pillar.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light flex-grow">
                                    {pillar.description}
                                </p>

                                <div className="space-y-3 mb-10">
                                    {pillar.details.map((detail, dIndex) => (
                                        <div key={dIndex} className="flex items-center gap-3 text-[11px] text-slate-300 font-bold uppercase tracking-wider">
                                            <div className="w-1.5 h-1.5 bg-amber-500 rotate-45" />
                                            {detail}
                                        </div>
                                    ))}
                                </div>

                                <Button asChild variant="outline" className="w-full border-white/10 bg-transparent text-white hover:bg-white hover:text-slate-950 rounded-none h-12 font-bold tracking-widest text-xs uppercase group-hover:border-amber-500 transition-all">
                                    <Link href="/transparencia">
                                        EXPEDIENTE LEGISLATIVO
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Button asChild size="lg" className="bg-slate-100 hover:bg-amber-500 text-slate-950 font-black px-16 py-8 text-sm tracking-[0.3em] uppercase rounded-none transition-all hover:scale-105 active:scale-95">
                        <Link href="#agenda" className="flex items-center gap-4">
                            ACCEDER AL PLAN MAESTRO
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
