"use client";

import { Suspense } from "react";
import { ConcernsForm } from "@/components/forms/ConcernsForm";
import { Shield, FileText, Activity, Fingerprint, Lock, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function PreocupacionesPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden pt-20">
            {/* Background Decorations */}
            <div className="fixed inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5 pointer-events-none"></div>
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-amber-500/5 via-transparent to-transparent -z-10 blur-[120px] opacity-30"></div>

            <main className="flex-grow container mx-auto px-4 py-16 md:py-24 relative z-10">
                <div className="max-w-5xl mx-auto mb-16 md:mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge className="bg-amber-500/20 text-amber-500 border-amber-500/20 mb-8 py-2 px-6 rounded-full text-xs font-bold tracking-widest uppercase">
                            Seguridad & Gestión de Datos
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter leading-tight">
                            Inteligencia <span className="text-gradient-gold italic">Territorial</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-light leading-relaxed">
                            Plataforma de despliegue estratégico para el Distrito 8. Identificamos patrones, anomalías y problemas estructurales mediante el levantamiento ciudadano de información.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                    {/* Sidebar with Stats/Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card bg-slate-900/40 border border-white/10 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-amber-500 opacity-50"></div>
                            <h3 className="font-bold text-xl mb-8 flex items-center gap-3 text-white">
                                <Shield className="h-6 w-6 text-amber-500" />
                                Protocolo de Reporte
                            </h3>
                            <ul className="space-y-6 text-gray-400">
                                {[
                                    { id: "01", title: "Corrupción Estatal", desc: "Denuncias de ineficiencia o falta de probidad administrativa." },
                                    { id: "02", title: "Seguridad Crítica", desc: "Focos de delincuencia organizada o hotspots de narcotráfico." },
                                    { id: "03", title: "Infraestructura", desc: "Fallas sistémicas que afectan la calidad de vida comunal." }
                                ].map((step) => (
                                    <li key={step.id} className="flex gap-4 group/item">
                                        <span className="text-[10px] font-mono text-amber-500/50 mt-1 font-bold">{step.id}</span>
                                        <div>
                                            <div className="text-white font-bold mb-1 group-hover/item:text-amber-500 transition-colors">{step.title}</div>
                                            <p className="text-xs leading-relaxed">{step.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-card bg-slate-950/80 p-8 shadow-2xl rounded-[2rem] border border-white/5 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Activity className="h-32 w-32 text-amber-500" />
                            </div>
                            <h3 className="font-bold text-lg mb-8 relative z-10 flex items-center gap-2">
                                <Fingerprint className="h-5 w-5 text-amber-500" />
                                Red de Análisis Distrital
                            </h3>
                            <div className="grid grid-cols-2 gap-8 relative z-10">
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">8</div>
                                    <div className="text-[10px] text-amber-500 uppercase tracking-widest font-bold">Comunas Activas</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">24/7</div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Monitoreo</div>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
                                <div className="flex items-center gap-2 text-[11px] text-gray-500 mb-4">
                                    <Lock className="h-3 w-3" />
                                    Encriptación de grado militar AES-256
                                </div>
                                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "85%" }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="bg-amber-500 h-full"
                                    />
                                </div>
                                <div className="mt-2 text-[10px] text-amber-500/60 font-mono text-right uppercase">Conexión Segura ... OK</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Main Form Area */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass-card bg-slate-900/30 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
                        >
                            <div className="h-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600"></div>
                            <div className="p-8 md:p-12">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                                    <h2 className="text-3xl font-bold text-white flex items-center gap-3 tracking-tight">
                                        <div className="bg-amber-500/10 p-3 rounded-2xl border border-amber-500/20">
                                            <FileText className="h-6 w-6 text-amber-500" />
                                        </div>
                                        Ingreso de Reporte Estratégico
                                    </h2>
                                    <Badge variant="outline" className="border-emerald-500/30 text-emerald-500 bg-emerald-500/5 px-4 py-1.5 rounded-full flex gap-2 items-center">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                                        Canal Seguro Activo
                                    </Badge>
                                </div>

                                <Suspense fallback={<div className="flex flex-col items-center justify-center py-24 gap-4">
                                    <Activity className="h-10 w-10 text-amber-500 animate-spin" />
                                    <span className="text-gray-500 text-sm font-mono uppercase tracking-widest">Iniciando Protocolo...</span>
                                </div>}>
                                    <ConcernsForm />
                                </Suspense>
                            </div>
                        </motion.div>

                        <div className="mt-8 flex items-center justify-center gap-6 text-gray-500 text-[11px] uppercase tracking-widest font-bold opacity-60">
                            <div className="flex items-center gap-2">
                                <Shield className="h-3 w-3" />
                                Datos Protegidos
                            </div>
                            <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                            <div className="flex items-center gap-2">
                                <Eye className="h-3 w-3" />
                                Revisión Parlamentaria
                            </div>
                            <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                            <div className="flex items-center gap-2 text-amber-500/60">
                                <Lock className="h-3 w-3" />
                                ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
