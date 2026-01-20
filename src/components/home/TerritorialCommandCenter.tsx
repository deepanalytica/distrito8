"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ShieldCheck,
    ArrowRight,
    Zap,
    FileText,
    Users,
    TrendingUp,
    Building2,
    CheckCircle2,
    ExternalLink,
    ChevronRight,
    Search
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { COMMUNES } from "@/lib/constants";
import { DEPUTY_GESTIONES, COMMUNE_INTELLIGENCE } from "@/lib/map-intelligence-data";
import { COMMUNE_DETAILS } from "@/lib/commune-data";
import Link from "next/link";

export function TerritorialCommandCenter() {
    const [selectedId, setSelectedId] = useState<string | null>("maipu");
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const activeCommune = COMMUNES.find(c => c.slug === selectedId) || COMMUNES[0];
    const gestiones = DEPUTY_GESTIONES.filter(g => g.commune === selectedId);
    const intel = selectedId ? COMMUNE_INTELLIGENCE[selectedId] : null;

    return (
        <div className="flex flex-col lg:flex-row gap-8 min-h-[700px]">
            {/* Visual Navigation - The "Blueprint" */}
            <div className="lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-blue-500/5 rounded-[3rem] -z-10 blur-xl"></div>

                <div className="glass-card bg-slate-900/40 border border-white/10 rounded-[3rem] p-8 h-full flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Background Grid Accent */}
                    <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5 pointer-events-none"></div>

                    {/* Header for visual part */}
                    <div className="absolute top-8 left-8">
                        <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mb-2 py-1 px-3">
                            NAVEGACIÓN ESTRATÉGICA
                        </Badge>
                        <h3 className="text-xl font-bold text-white tracking-tight">Distrito 8 Blueprint</h3>
                    </div>

                    {/* Highly Stylized SVG Map (Blueprint Style) */}
                    <div className="relative w-full aspect-square max-w-md">
                        <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                            {/* Abstract Hexagonal/Circuit representations for communes */}
                            {COMMUNES.map((com, i) => {
                                const angle = (i / COMMUNES.length) * Math.PI * 2;
                                const r = 140;
                                const x = 200 + Math.cos(angle) * r;
                                const y = 200 + Math.sin(angle) * r;
                                const isActive = selectedId === com.slug;
                                const isHovered = hoveredId === com.slug;

                                return (
                                    <g
                                        key={com.slug}
                                        className="cursor-pointer"
                                        onMouseEnter={() => setHoveredId(com.slug)}
                                        onMouseLeave={() => setHoveredId(null)}
                                        onClick={() => setSelectedId(com.slug)}
                                    >
                                        {/* Connection line to center */}
                                        <motion.line
                                            x1="200" y1="200" x2={x} y2={y}
                                            stroke={isActive ? "#fbbf24" : "#ffffff10"}
                                            strokeWidth={isActive ? "2" : "1"}
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                        />

                                        {/* Commune Node */}
                                        <motion.circle
                                            cx={x} cy={y} r={isActive ? 35 : 28}
                                            className={`${isActive ? "fill-amber-500" : isHovered ? "fill-slate-700" : "fill-slate-800"} stroke-white/20 transition-all duration-300`}
                                            strokeWidth="2"
                                            animate={{
                                                scale: isActive ? 1.1 : 1,
                                                filter: isActive ? "blur(0px)" : "blur(0.5px)"
                                            }}
                                        />

                                        <text
                                            x={x} y={y + (isActive ? 50 : 45)}
                                            textAnchor="middle"
                                            className={`text-[10px] uppercase tracking-widest font-black ${isActive ? "fill-amber-500" : "fill-gray-500"}`}
                                        >
                                            {com.name}
                                        </text>

                                        {/* Status indicator pulse for active or gestiones */}
                                        {isActive && (
                                            <circle cx={x} cy={y} r="45" className="fill-none stroke-amber-500/30 animate-ping opacity-20" />
                                        )}
                                    </g>
                                );
                            })}

                            {/* Center Node: The Hub */}
                            <circle cx="200" cy="200" r="12" className="fill-blue-500 animate-pulse shadow-glow" />
                            <circle cx="200" cy="200" r="18" className="fill-none stroke-blue-500/40" strokeWidth="1" />
                        </svg>

                        {/* Overlay Tooltip-like Info */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                            <h4 className="text-3xl font-black text-white/10 uppercase tracking-[0.5em]">D8</h4>
                        </div>
                    </div>

                    {/* Legend / Status */}
                    <div className="absolute bottom-8 right-8 text-right">
                        <div className="flex items-center gap-2 justify-end mb-1">
                            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Canal de Datos Activo</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        </div>
                        <p className="text-[10px] text-gray-500 font-mono">ENCRYPTED: {Math.random().toString(16).substring(2, 8).toUpperCase()}</p>
                    </div>
                </div>
            </div>

            {/* Action Pane - Direct Transparency Dashboard */}
            <div className="lg:w-1/2 flex flex-col gap-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedId}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col h-full gap-6"
                    >
                        {/* Header Info */}
                        <div className="glass-card bg-slate-900 p-8 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Building2 className="h-24 w-24 text-white" />
                            </div>

                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 mb-2 py-1 px-3 font-bold tracking-widest">
                                        CENTRO DE MANDO: {activeCommune.name.toUpperCase()}
                                    </Badge>
                                    <h2 className="text-4xl font-black text-white tracking-tighter uppercase">{activeCommune.name}</h2>
                                </div>
                                <Search className="h-5 w-5 text-gray-600 hover:text-white transition-colors cursor-pointer" />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Crecimiento</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold text-white">{intel?.growth || "0"}%</span>
                                        <TrendingUp className="h-4 w-4 text-emerald-500" />
                                    </div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Presupuesto p/c</p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold text-white">${(intel?.budgetPerCapita || 0) / 1000}K</span>
                                        <Zap className="h-4 w-4 text-amber-500" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button asChild className="flex-1 bg-white text-slate-900 hover:bg-amber-500 font-black tracking-widest text-xs h-12 rounded-xl">
                                    <Link href={`/mi-comuna/${selectedId}`}>
                                        PANEL COMPLETO <ChevronRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button className="bg-white/5 hover:bg-white/10 border-white/10 text-white font-bold text-xs h-12 rounded-xl">
                                    <FileText className="mr-2 h-4 w-4" /> RECURSOS
                                </Button>
                            </div>
                        </div>

                        {/* Action Ledger (Verifiable Gestiones) */}
                        <div className="glass-card bg-slate-950/60 p-8 rounded-[3rem] border border-white/5 shadow-inner flex flex-col flex-grow relative">
                            <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                                <div className="w-8 h-px bg-amber-500"></div>
                                Libro de Gestión Verificable
                            </h4>

                            <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar max-h-[300px]">
                                {gestiones.length > 0 ? (
                                    gestiones.map((g, i) => (
                                        <motion.div
                                            key={g.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="group p-5 bg-slate-900/40 border border-white/5 rounded-2xl hover:bg-white/5 hover:border-white/10 transition-all cursor-default"
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <Badge variant="outline" className={`text-[9px] py-0 border-white/10 font-bold ${g.status === 'completado' ? 'text-emerald-500' : 'text-amber-500'}`}>
                                                    {g.status === 'oficiado' ? 'OFICIO ENVIADO' : g.status.toUpperCase()}
                                                </Badge>
                                                <span className="text-[10px] font-mono text-gray-600">{g.id}</span>
                                            </div>
                                            <h5 className="font-bold text-white text-sm mb-1 group-hover:text-amber-500 transition-colors uppercase tracking-tight">{g.title}</h5>
                                            <p className="text-xs text-gray-500 leading-relaxed font-light mb-4">{g.description}</p>

                                            <div className="flex items-center gap-4 border-t border-white/5 pt-3">
                                                <button className="text-[10px] font-black text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors uppercase tracking-widest">
                                                    <ExternalLink className="h-3 w-3" /> Ver Documento
                                                </button>
                                                <div className="h-3 w-px bg-white/5"></div>
                                                <button className="text-[10px] font-black text-gray-600 hover:text-white flex items-center gap-1.5 transition-colors uppercase tracking-widest">
                                                    <Zap className="h-3 w-3" /> Trazabilidad
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-12 text-center opacity-30">
                                        <Search className="h-12 w-12 mb-4" />
                                        <p className="text-xs font-mono uppercase tracking-widest">Sin acciones registradas en este nodo</p>
                                    </div>
                                )}
                            </div>

                            <div className="mt-auto pt-6 flex items-center justify-between text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                                <span className="flex items-center gap-2">
                                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                                    Datos Auditados
                                </span>
                                <Link href="/transparencia" className="text-amber-500/60 hover:text-amber-500 flex items-center gap-1 transition-colors">
                                    VER TODA LA GESTIÓN <ArrowRight className="h-3 w-3" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
