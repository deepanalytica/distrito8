"use client";

import { COMMUNES } from "@/lib/constants";
import { COMMUNE_INTELLIGENCE } from "@/lib/map-intelligence-data";
import { COMMUNE_DETAILS } from "@/lib/commune-data";
import {
    MapPin,
    ArrowRight,
    Users,
    Activity,
    TrendingUp,
    Shield,
    ChevronRight,
    Map
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function MiComunaIndex() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden pt-20">
            {/* Hero Section - Territorial Command */}
            <section className="relative py-20 md:py-32 px-4 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-500/10 via-transparent to-transparent -z-10 blur-3xl opacity-50"></div>
                <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5 -z-10"></div>

                <div className="container mx-auto max-w-6xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/20 mb-6 py-2 px-6 rounded-full text-xs font-bold tracking-widest uppercase">
                            Nuestra Tierra, Nuestro Compromiso
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter leading-tight">
                            Distrito 8: <span className="text-gradient-gold italic">Tu Territorio</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
                            Representamos a 8 comunas con realidades únicas y desafíos compartidos.
                            Gestionamos soluciones territoriales con una visión de equilibrio y transparencia.
                        </p>
                    </motion.div>

                    {/* Quick Stats Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
                    >
                        {[
                            { label: "Comunas", value: "8", icon: Map },
                            { label: "Habitantes", value: "1.5M+", icon: Users },
                            { label: "Gestiones", value: "124", icon: Activity },
                            { label: "Impacto", value: "Alto", icon: TrendingUp },
                        ].map((stat, i) => (
                            <div key={i} className="glass-card bg-slate-900/40 border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center">
                                <stat.icon className="h-5 w-5 text-amber-500 mb-2 opacity-80" />
                                <span className="text-2xl font-bold text-white leading-tight">{stat.value}</span>
                                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Commune Grid - Glassmorphism Command Center */}
            <main className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {COMMUNES.map((commune, index) => {
                        const intel = COMMUNE_INTELLIGENCE[commune.slug];
                        const detail = COMMUNE_DETAILS[commune.slug];

                        return (
                            <motion.div
                                key={commune.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link href={`/mi-comuna/${commune.slug}`} className="block group h-full">
                                    <Card className="h-full bg-slate-900/40 border border-white/10 hover:border-amber-500/30 transition-all duration-500 rounded-[2rem] overflow-hidden backdrop-blur-xl group-hover:scale-[1.03] shadow-lg">
                                        <CardContent className="p-0 flex flex-col h-full">
                                            {/* Visual Header */}
                                            <div className="relative h-40 bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center overflow-hidden">
                                                <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                <MapPin className="h-12 w-12 text-white/10 group-hover:text-amber-500/40 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />

                                                {/* Identity Badge */}
                                                <div className="absolute bottom-4 left-4">
                                                    <Badge className="bg-slate-950/80 text-[10px] text-amber-500 border-amber-500/20 backdrop-blur-md">
                                                        DISTRITO 8
                                                    </Badge>
                                                </div>
                                            </div>

                                            {/* Body */}
                                            <div className="p-6 flex flex-col flex-grow">
                                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors uppercase tracking-tight">
                                                    {commune.name}
                                                </h3>
                                                <p className="text-sm text-gray-400 mb-6 font-light leading-relaxed flex-grow">
                                                    {detail?.identity.badge || `Territorio del Distrito 8`}
                                                </p>

                                                {/* Mini Metrics */}
                                                <div className="space-y-3 mb-6">
                                                    <div className="flex justify-between items-center text-[11px]">
                                                        <span className="text-gray-500 font-bold uppercase tracking-wider">Población</span>
                                                        <span className="text-white font-mono">{detail?.population || "---"}</span>
                                                    </div>
                                                    <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                                                        <div className="bg-amber-500/40 h-full w-[65%]" />
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between text-amber-500 font-bold text-xs uppercase tracking-widest border-t border-white/5 pt-4 group-hover:text-white transition-colors">
                                                    <span>Entrar al Centro de Mando</span>
                                                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Territorial Summary Section */}
                <section className="mt-24 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-blue-500/20 rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
                    >
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                    ¿Tu problema no está <span className="text-blue-400">gestionado</span>?
                                </h2>
                                <p className="text-lg text-gray-400 mb-8 leading-relaxed font-light">
                                    Cada comuna tiene desafíos específicos. Si tienes una situación que requiere atención parlamentaria o fiscalización directa, utiliza nuestra plataforma de Inteligencia Territorial.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button asChild className="bg-white text-slate-900 hover:bg-amber-500 h-14 px-8 rounded-2xl font-bold text-lg shadow-xl transition-all">
                                        <Link href="/preocupaciones" className="flex items-center gap-2">
                                            Ingresar Reporte <ArrowRight className="h-5 w-5" />
                                        </Link>
                                    </Button>
                                    <Button variant="outline" asChild className="border-white/10 text-white hover:bg-white/10 h-14 px-8 rounded-2xl font-bold text-lg">
                                        <Link href="/voluntarios">Ser Gestor Territorial</Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="bg-slate-950/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl relative">
                                <h4 className="font-bold text-amber-500 mb-6 uppercase text-xs tracking-widest flex items-center gap-2">
                                    <Activity className="h-4 w-4" />
                                    Métricas del Distrito 8
                                </h4>
                                <div className="space-y-6">
                                    {[
                                        { label: "Gestiones en Curso", value: "89", color: "bg-blue-500" },
                                        { label: "Casos Resueltos", value: "35", color: "bg-emerald-500" },
                                        { label: "Presupuesto Fiscalizado", value: "100%", color: "bg-purple-500" },
                                    ].map((metric, i) => (
                                        <div key={i} className="space-y-2">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-400">{metric.label}</span>
                                                <span className="font-bold text-white">{metric.value}</span>
                                            </div>
                                            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                                <div className={`${metric.color} h-full w-[${i === 0 ? '70%' : i === 1 ? '30%' : '100%'}]`} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3 text-xs text-gray-500">
                                    <Shield className="h-4 w-4 text-emerald-500" />
                                    Datos actualizados en tiempo real por el equipo territorial.
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>

            <footer className="py-12 border-t border-white/5 text-gray-500 text-xs text-center">
                © 2026 Oficina Parlamentaria Cristian Contreras. Distrito 8 - Inteligencia al servicio del territorio.
            </footer>
        </div>
    );
}
