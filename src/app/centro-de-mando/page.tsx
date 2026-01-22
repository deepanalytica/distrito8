"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ShieldCheck,
    ArrowLeft,
    MapPin,
    TrendingUp,
    TrendingDown,
    Users,
    AlertTriangle,
    Zap,
    Activity,
    Clock,
    Filter,
    Layers,
    ChevronDown,
    Search
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { COMMUNES } from "@/lib/constants";
import { COMMUNE_INTELLIGENCE, DEPUTY_GESTIONES, NEIGHBOR_REPORTS, NeighborReport } from "@/lib/map-intelligence-data";
import { RealTimeMap } from "@/components/home/RealTimeMap";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

export default function CommandCenterPage() {
    const [selectedCommune, setSelectedCommune] = useState<string>("maipu");
    const [filter, setFilter] = useState<string>("all");

    const activeCommune = useMemo(() => COMMUNES.find(c => c.slug === selectedCommune) || COMMUNES[0], [selectedCommune]);
    const intel = useMemo(() => COMMUNE_INTELLIGENCE[selectedCommune], [selectedCommune]);

    const reports = useMemo(() => {
        const communeReports = NEIGHBOR_REPORTS[selectedCommune] || [];
        if (filter === "all") return communeReports;
        return communeReports.filter(r => r.type === filter);
    }, [selectedCommune, filter]);

    const stats = useMemo(() => {
        const allReports = Object.values(NEIGHBOR_REPORTS).flat();
        return {
            total: allReports.length,
            security: allReports.filter(r => r.type === "seguridad").length,
            infra: allReports.filter(r => r.type === "infraestructura").length,
            activeNodes: Object.keys(NEIGHBOR_REPORTS).length
        };
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col pt-[72px]">
            {/* Control Bar */}
            <header className="h-16 border-b border-white/5 bg-slate-900/50 backdrop-blur-xl px-6 flex items-center justify-between sticky top-[72px] z-50">
                <div className="flex items-center gap-6">
                    <Link href="/" className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                        <ArrowLeft className="h-5 w-5 text-gray-400" />
                    </Link>
                    <div className="h-6 w-px bg-white/10"></div>
                    <div>
                        <h1 className="text-sm font-black uppercase tracking-[0.2em] text-amber-500">Centro de Mando Territorial</h1>
                        <p className="text-[10px] text-gray-500 font-mono">D8.PLATFORM.V2 // LIVE_FEEDS</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-slate-950/50 rounded-xl border border-white/10 px-4 h-10">
                        <Search className="h-4 w-4 text-gray-500" />
                        <select
                            value={selectedCommune}
                            onChange={(e) => setSelectedCommune(e.target.value)}
                            className="bg-transparent border-none outline-none text-xs font-bold text-white pr-4 appearance-none cursor-pointer"
                        >
                            {COMMUNES.map(c => (
                                <option key={c.slug} value={c.slug} className="bg-slate-900">{c.name.toUpperCase()}</option>
                            ))}
                        </select>
                        <ChevronDown className="h-3 w-3 text-gray-500 -ml-2" />
                    </div>

                    <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Sincronizado</span>
                    </div>
                </div>
            </header>

            <main className="flex-grow flex flex-col lg:flex-row h-[calc(100vh-144px)] overflow-hidden">
                {/* Left Sidebar: Intel & List */}
                <aside className="w-full lg:w-[400px] border-r border-white/5 p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar bg-slate-950/20">
                    {/* Commune KPI Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                            <div className="flex items-center justify-between mb-2">
                                <Users className="h-3.5 w-3.5 text-blue-400" />
                                <TrendingUp className="h-3 h-3 text-emerald-500" />
                            </div>
                            <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest">Crecimiento</p>
                            <span className="text-xl font-black text-white">{intel?.growth}%</span>
                        </div>
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                            <div className="flex items-center justify-between mb-2">
                                <Zap className="h-3.5 w-3.5 text-amber-400" />
                                <Activity className="h-3 h-3 text-emerald-500" />
                            </div>
                            <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest">Presupuesto p/c</p>
                            <span className="text-xl font-black text-white">${(intel?.budgetPerCapita || 0) / 1000}K</span>
                        </div>
                    </div>

                    {/* Report Feed Header */}
                    <div className="flex items-center justify-between">
                        <h3 className="text-xs font-black uppercase tracking-widest text-white flex items-center gap-2">
                            <Activity className="h-4 w-4 text-amber-500" />
                            Reportes en Tiempo Real
                        </h3>
                        <Badge variant="outline" className="text-[9px] border-white/10 text-gray-400">
                            {reports.length} ACTIVOS
                        </Badge>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex gap-2">
                        {["all", "seguridad", "infraestructura"].map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`
                                    flex-1 py-2 rounded-lg text-[9px] font-black uppercase tracking-tighter transition-all
                                    ${filter === f ? 'bg-amber-500 text-slate-950' : 'bg-white/5 text-gray-500 hover:bg-white/10'}
                                `}
                            >
                                {f === 'all' ? 'Todos' : f}
                            </button>
                        ))}
                    </div>

                    {/* Scrollable Feed */}
                    <div className="flex flex-col gap-3">
                        <AnimatePresence mode="popLayout">
                            {reports.map((report, idx) => (
                                <motion.div
                                    key={report.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="p-4 bg-slate-900/40 border border-white/5 rounded-2xl hover:border-amber-500/30 transition-all cursor-pointer group"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge className={`
                                            text-[8px] py-0 px-1.5 border-none font-black uppercase tracking-widest
                                            ${report.type === 'seguridad' ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}
                                        `}>
                                            {report.type}
                                        </Badge>
                                        <div className="flex items-center gap-1.5 text-[9px] text-gray-600 font-mono">
                                            <Clock className="h-2.5 w-2.5" />
                                            {formatDistanceToNow(new Date(report.timestamp), { locale: es })}
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-white text-xs mb-1 group-hover:text-amber-500 transition-colors uppercase">{report.title}</h4>
                                    <p className="text-[10px] text-gray-500 leading-relaxed line-clamp-2">{report.description}</p>

                                    <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                                            <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                                            {report.status.toUpperCase()}
                                        </div>
                                        <span className="text-[8px] font-mono text-gray-700">{report.id}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {reports.length === 0 && (
                            <div className="text-center py-12 opacity-20">
                                <Filter className="h-12 w-12 mx-auto mb-4" />
                                <p className="text-[10px] font-black uppercase tracking-[0.2em]">Sin reportes registrados</p>
                            </div>
                        )}
                    </div>
                </aside>

                {/* Main: Interactive Map */}
                <section className="flex-grow relative bg-slate-900">
                    <RealTimeMap communeSlug={selectedCommune} />

                    {/* HUD Overlays */}
                    <div className="absolute top-8 right-8 flex flex-col gap-3 pointer-events-none">
                        <div className="p-4 bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-48 pointer-events-auto">
                            <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-3">Capas de Inteligencia</p>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-2">
                                        <Activity className="h-3 w-3 text-emerald-500" />
                                        <span className="text-[10px] font-bold text-white">Tráfico Real</span>
                                    </div>
                                    <div className="h-3 w-6 bg-emerald-500 rounded-full opacity-30"></div>
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="h-3 w-3 text-blue-500" />
                                        <span className="text-[10px] font-bold text-white">Patrullas</span>
                                    </div>
                                    <div className="h-3 w-6 bg-blue-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-48 pointer-events-auto">
                            <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-3">Global D8 Status</p>
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold text-white">Nodos Activos</span>
                                <span className="text-[10px] text-amber-500 font-black">{stats.activeNodes}/8</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Access Floating Action */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 bg-slate-950/80 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-3xl">
                        <Button size="sm" className="bg-amber-500 text-slate-950 hover:bg-amber-600 font-black text-[10px] h-10 px-6 rounded-xl">
                            NUEVO REPORTE CIUDADANO
                        </Button>
                        <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 font-black text-[10px] h-10 px-6 rounded-xl">
                            <Layers className="h-4 w-4 mr-2" /> VISTA SATELITAL
                        </Button>
                    </div>
                </section>
            </main>

            {/* Sub-footer HUD */}
            <footer className="h-10 border-t border-white/5 bg-slate-900 px-6 flex items-center justify-between">
                <div className="flex items-center gap-4 text-[9px] font-mono text-gray-500">
                    <span className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> LATENCY: 24ms
                    </span>
                    <span className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> THREAT_LEVEL: LOW
                    </span>
                </div>
                <div className="text-[9px] font-mono text-gray-600">
                    © 2024 D8_COMMAND_CENTER_CORE_ENGINE
                </div>
            </footer>
        </div>
    );
}
