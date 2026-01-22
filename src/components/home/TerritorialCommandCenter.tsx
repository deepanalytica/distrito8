"use client";

import { useState, useMemo } from "react";
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
    Search,
    Activity,
    Clock,
    ShieldAlert
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { COMMUNES } from "@/lib/constants";
import { DEPUTY_GESTIONES, COMMUNE_INTELLIGENCE, NEIGHBOR_REPORTS } from "@/lib/map-intelligence-data";
import { RealTimeMap } from "./RealTimeMap";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

export function TerritorialCommandCenter() {
    const [selectedId, setSelectedId] = useState<string>("maipu");
    const [viewMode, setViewMode] = useState<"gestiones" | "reportes">("gestiones");

    const activeCommune = useMemo(() => COMMUNES.find(c => c.slug === selectedId) || COMMUNES[0], [selectedId]);
    const gestiones = useMemo(() => DEPUTY_GESTIONES.filter(g => g.commune === selectedId), [selectedId]);
    const reports = useMemo(() => NEIGHBOR_REPORTS[selectedId] || [], [selectedId]);
    const intel = useMemo(() => COMMUNE_INTELLIGENCE[selectedId], [selectedId]);

    return (
        <div className="flex flex-col lg:flex-row gap-8 min-h-[700px]">
            {/* Visual Pane - High Fidelity Map */}
            <div className="lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-blue-500/5 rounded-[3rem] -z-10 blur-xl"></div>

                <div className="glass-card bg-slate-900/40 border border-white/10 rounded-[3rem] p-4 h-[500px] lg:h-full flex flex-col relative overflow-hidden">
                    {/* Header for visual part */}
                    <div className="absolute top-8 left-8 z-10">
                        <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 mb-2 py-1 px-3">
                            CONEXIÓN EN TIEMPO REAL
                        </Badge>
                        <h3 className="text-xl font-bold text-white tracking-tight">Geointeligencia D8</h3>
                    </div>

                    {/* Integrated RealTimeMap */}
                    <div className="flex-grow w-full rounded-[2.5rem] overflow-hidden mt-16 shadow-2xl">
                        <RealTimeMap communeSlug={selectedId} interactive={true} />
                    </div>

                    {/* Commune Nav Strip */}
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
                                        MANDO TERRITORIAL: {activeCommune.name.toUpperCase()}
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
                                    <Link href="/centro-de-mando">
                                        CENTRO COMPLETO <ChevronRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button asChild variant="ghost" className="bg-white/5 hover:bg-white/10 border-white/10 text-white font-bold text-xs h-12 rounded-xl">
                                    <Link href={`/mi-comuna/${selectedId}`}>
                                        MISIÓN LOCAL <ExternalLink className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Switchable Ledger (Official vs Citizen) */}
                        <div className="glass-card bg-slate-950/60 p-8 rounded-[3rem] border border-white/5 shadow-inner flex flex-col flex-grow relative">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setViewMode("gestiones")}
                                        className={`text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 transition-colors ${viewMode === 'gestiones' ? 'text-white' : 'text-gray-600'}`}
                                    >
                                        <ShieldCheck className={`h-4 w-4 ${viewMode === 'gestiones' ? 'text-amber-500' : ''}`} />
                                        Gestión Oficial
                                    </button>
                                    <button
                                        onClick={() => setViewMode("reportes")}
                                        className={`text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 transition-colors ${viewMode === 'reportes' ? 'text-white' : 'text-gray-600'}`}
                                    >
                                        <Activity className={`h-4 w-4 ${viewMode === 'reportes' ? 'text-emerald-500' : ''}`} />
                                        Alertas Vecinales
                                    </button>
                                </div>
                                <Badge className="bg-white/5 text-[9px] font-mono">{viewMode === 'gestiones' ? gestiones.length : reports.length} DATA_NODES</Badge>
                            </div>

                            <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar max-h-[350px]">
                                {viewMode === "gestiones" ? (
                                    gestiones.length > 0 ? (
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
                                                </div>
                                            </motion.div>
                                        ))
                                    ) : (
                                        <EmptyState message="Sin acciones oficiales registradas" />
                                    )
                                ) : (
                                    reports.length > 0 ? (
                                        reports.map((r, i) => (
                                            <motion.div
                                                key={r.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="group p-5 bg-slate-900/40 border border-white/5 rounded-2xl hover:bg-white/5 hover:border-white/10 transition-all cursor-default"
                                            >
                                                <div className="flex justify-between items-start mb-2">
                                                    <Badge className={`
                                                        text-[9px] py-0 px-2 border-none font-bold uppercase
                                                        ${r.type === 'seguridad' ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}
                                                    `}>
                                                        {r.type}
                                                    </Badge>
                                                    <div className="flex items-center gap-1.5 text-[9px] text-gray-600">
                                                        <Clock className="h-2.5 w-2.5" />
                                                        {formatDistanceToNow(new Date(r.timestamp), { locale: es })}
                                                    </div>
                                                </div>
                                                <h5 className="font-bold text-white text-sm mb-1 group-hover:text-amber-500 transition-colors uppercase tracking-tight">{r.title}</h5>
                                                <p className="text-xs text-gray-500 leading-relaxed font-light mb-4">{r.description}</p>

                                                <div className="flex items-center justify-between border-t border-white/5 pt-3">
                                                    <div className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-500 uppercase">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                                        {r.status}
                                                    </div>
                                                    <span className="text-[10px] font-mono text-gray-700">{r.id}</span>
                                                </div>
                                            </motion.div>
                                        ))
                                    ) : (
                                        <EmptyState message="Sin reportes vecinales en este sector" />
                                    )
                                )}
                            </div>

                            <div className="mt-auto pt-6 flex items-center justify-between text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                                <span className="flex items-center gap-2">
                                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                                    Sincronización Activa
                                </span>
                                <Link href="/transparencia" className="text-amber-500/60 hover:text-amber-500 flex items-center gap-1 transition-colors">
                                    AUDITORÍA COMPLETA <ArrowRight className="h-3 w-3" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

function EmptyState({ message }: { message: string }) {
    return (
        <div className="flex flex-col items-center justify-center py-12 text-center opacity-30">
            <Search className="h-12 w-12 mb-4" />
            <p className="text-xs font-mono uppercase tracking-widest">{message}</p>
        </div>
    );
}
