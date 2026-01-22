"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    Zap,
    Users,
    TrendingUp,
    Building2,
    ChevronRight,
    Search,
    ExternalLink
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { COMMUNES } from "@/lib/constants";
import { SimpleInteractiveMap } from "./SimpleInteractiveMap";
import { COMMUNE_INTELLIGENCE } from "@/lib/map-intelligence-data";
import Link from "next/link";

export function TerritorialCommandCenter() {
    const [selectedId, setSelectedId] = useState<string>("maipu");

    const activeCommune = useMemo(() => COMMUNES.find(c => c.slug === selectedId) || COMMUNES[0], [selectedId]);
    const intel = COMMUNE_INTELLIGENCE[selectedId];

    return (
        <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
            {/* Visual Pane - Simplified Interactive Map */}
            <div className="lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-blue-500/5 rounded-[3rem] -z-10 blur-xl"></div>

                <div className="glass-card bg-slate-900/40 border border-white/10 rounded-[3rem] p-4 h-[500px] lg:h-full flex flex-col relative overflow-hidden">
                    <div className="absolute top-8 left-8 z-10">
                        <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mb-2 py-1 px-3 uppercase tracking-widest text-[10px] font-black">
                            Mapa Distrital
                        </Badge>
                        <h3 className="text-xl font-bold text-white tracking-tight">Presencia Territorial</h3>
                    </div>

                    <div className="flex-grow w-full rounded-[2.5rem] overflow-hidden mt-16 shadow-2xl">
                        <SimpleInteractiveMap />
                    </div>

                    <div className="absolute bottom-8 left-8 right-8 flex gap-2 overflow-x-auto pb-2 custom-scrollbar z-10">
                        {COMMUNES.map((com) => (
                            <button
                                key={com.slug}
                                onClick={() => setSelectedId(com.slug)}
                                className={`
                                    whitespace-nowrap px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all
                                    ${selectedId === com.slug ? 'bg-amber-500 text-slate-950' : 'bg-slate-950/80 text-gray-400 hover:bg-slate-900 border border-white/5'}
                                `}
                            >
                                {com.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Action Pane - Info Display */}
            <div className="lg:w-1/2 flex flex-col gap-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedId}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col h-full gap-6"
                    >
                        <div className="glass-card bg-slate-900 p-8 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden flex-grow">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Building2 className="h-24 w-24 text-white" />
                            </div>

                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 mb-2 py-1 px-3 font-bold tracking-widest text-[10px]">
                                        TERRITORIO: {activeCommune.name.toUpperCase()}
                                    </Badge>
                                    <h2 className="text-4xl font-black text-white tracking-tighter uppercase">{activeCommune.name}</h2>
                                </div>
                                <Search className="h-5 w-5 text-gray-600 hover:text-white transition-colors cursor-pointer" />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Crecimiento Anual</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold text-white">{intel.growth}%</span>
                                        <TrendingUp className="h-4 w-4 text-emerald-500" />
                                    </div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Presupuesto p/c</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold text-white">${intel.budgetPerCapita / 1000}K</span>
                                        <Zap className="h-4 w-4 text-amber-500" />
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-400 leading-relaxed mb-8">
                                Estamos trabajando activamente en {activeCommune.name} para mejorar la calidad de vida de todos los vecinos. Conoce nuestras gestiones y proyectos locales.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild className="flex-1 bg-amber-500 text-slate-950 hover:bg-amber-600 font-black tracking-widest text-xs h-12 rounded-xl">
                                    <Link href={`/mi-comuna/${selectedId}`}>
                                        VER PERFIL COMUNAL <ChevronRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" className="flex-1 bg-white/5 hover:bg-white/10 border-white/10 text-white font-bold text-xs h-12 rounded-xl">
                                    <Link href="/transparencia">
                                        PROYECTOS <ExternalLink className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="glass-card bg-slate-950/60 p-6 rounded-[2.5rem] border border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-500/20 p-3 rounded-2xl border border-blue-500/20">
                                    <Users className="h-6 w-6 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest leading-none mb-1">Tu opinión importa</p>
                                    <p className="text-sm font-bold text-white">Reporta problemas de tu barrio</p>
                                </div>
                            </div>
                            <Button asChild size="sm" className="bg-white text-slate-900 hover:bg-amber-500 rounded-xl font-black text-[10px] tracking-widest h-10 px-4">
                                <Link href="/preocupaciones">REPORTAR <ArrowRight className="ml-1 h-3 w-3" /></Link>
                            </Button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
