"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, ScrollText, Signature } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroBanner() {
    return (
        <div className="relative overflow-hidden bg-slate-950 font-sans min-h-[85vh] flex items-center pt-20 lg:pt-32 border-b border-amber-500/10">
            {/* Background Sophisticated Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,41,59,1),rgba(2,6,23,1))]" />

            {/* Subtle Animated Gold Dust / Particles */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-amber-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
                <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-amber-200 rounded-full animate-ping shadow-[0_0_15px_rgba(251,191,36,0.3)]"></div>
                <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-amber-500 rounded-full animate-bounce"></div>
            </div>

            {/* Pattern Overlay - Parliamentary Guilloche Style */}
            <div className="absolute inset-0 opacity-5 mix-blend-overlay">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10C30 10 30 40 50 40C70 40 70 10 90 10' fill='none' stroke='%23fbbf24' stroke-width='0.5'/%3E%3Cpath d='M10 90C30 90 30 60 50 60C70 60 70 90 90 90' fill='none' stroke='%23fbbf24' stroke-width='0.5'/%3E%3C/svg%3E")`,
                    backgroundSize: '100px 100px'
                }}></div>
            </div>

            <div className="relative container mx-auto px-4 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left: Strategic Content */}
                    <div className="lg:col-span-7 text-white space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-3 mb-8 bg-amber-500/5 px-5 py-2.5 rounded-full border border-amber-500/20 backdrop-blur-md">
                                <Shield className="h-5 w-5 text-amber-500" />
                                <span className="text-xs font-black uppercase tracking-[0.3em] text-amber-200/80">
                                    Ofensiva Parlamentaria por Chile
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8 text-white">
                                EL <span className="text-gradient-gold">EQUILIBRIO</span> <br />
                                <span className="text-slate-400">ES NUESTRA</span> <br />
                                FORTALEZA
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl mb-12 font-light italic border-l-2 border-amber-500/30 pl-6">
                                "No somos una alternativa más, somos la respuesta estratégica a la crisis del Estado. Aquí no se viene a prometer, se viene a ejecutar."
                            </p>

                            <div className="flex flex-wrap gap-5">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 h-16 px-10 text-xl rounded-none font-black shadow-[0_10px_30px_rgba(245,158,11,0.2)] transition-all duration-300 hover:-translate-y-1 relative group"
                                >
                                    <Link href="/manifiesto" className="flex items-center gap-3">
                                        <ScrollText className="h-6 w-6" />
                                        REVISAR MANIFIESTO
                                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="border-white/10 text-white hover:bg-white/5 h-16 px-10 text-xl font-bold rounded-none transition-all duration-300 border-2"
                                >
                                    <Link href="#petitorio" className="flex items-center gap-3">
                                        <Signature className="h-6 w-6 text-amber-500" />
                                        FIRMAR PETITORIO
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>

                        {/* Strategic KPIs - Staggered */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/5"
                        >
                            {[
                                { label: "Comunas en Alerta", value: "8" },
                                { label: "Gestiones Activas", value: "142" },
                                { label: "Propuestas de Ley", value: "12" },
                                { label: "Respaldo Civil", value: "45K+" }
                            ].map((kpi, idx) => (
                                <div key={idx} className="space-y-1">
                                    <div className="text-3xl font-black text-white">{kpi.value}</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{kpi.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Imposing Presence */}
                    <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] flex items-end justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="relative w-full h-full"
                        >
                            {/* Halo effect behind the image */}
                            <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-[120px] scale-75 -z-10 animate-pulse" />

                            <Image
                                src="/images/cristian/cristian_hero_principal.png"
                                alt="Cristian Contreras"
                                fill
                                className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)] z-20"
                                priority
                            />

                            {/* Decorative Frame Elements */}
                            <div className="absolute top-10 right-0 w-20 h-20 border-t-2 border-r-2 border-amber-500/30 -z-0"></div>
                            <div className="absolute bottom-10 left-0 w-20 h-20 border-b-2 border-l-2 border-amber-500/30 -z-0"></div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Bottom Strategic Bar */}
            <div className="absolute bottom-0 left-0 w-full h-12 bg-amber-500/5 backdrop-blur-sm border-t border-white/5 flex items-center overflow-hidden">
                <div className="flex gap-20 animate-marquee whitespace-nowrap text-[10px] font-black tracking-[0.4em] text-amber-500/40 px-4">
                    <span>FISCALIZACIÓN TOTAL</span>
                    <span>SOBERANÍA NACIONAL</span>
                    <span>EQUILIBRIO ESTRATÉGICO</span>
                    <span>ACCIÓN TERRITORIAL</span>
                    <span>FISCALIZACIÓN TOTAL</span>
                    <span>SOBERANÍA NACIONAL</span>
                    <span>EQUILIBRIO ESTRATÉGICO</span>
                    <span>ACCIÓN TERRITORIAL</span>
                </div>
            </div>
        </div>
    );
}
