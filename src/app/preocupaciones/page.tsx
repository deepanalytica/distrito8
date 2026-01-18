"use client";

import { Suspense } from "react";
import { Card } from "@/components/ui/card";
import { ConcernsForm } from "@/components/forms/ConcernsForm";
import { Shield, FileText, MapPin } from "lucide-react";

export default function PreocupacionesPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            <div className="fixed inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5 pointer-events-none"></div>

            <main className="flex-grow container mx-auto px-4 py-12 relative z-10">
                <div className="max-w-4xl mx-auto mb-12 text-center">
                    <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 border border-amber-500/20 px-4 py-2 rounded-full text-sm font-bold mb-6">
                        <MapPin className="h-4 w-4" />
                        Red de Inteligencia Territorial
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                        Inteligencia Territorial <span className="text-gradient-gold">Distrito 8</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
                        Ayúdanos a levantar información estratégica sobre tu comuna. Esta plataforma no es para casos individuales, sino para identificar patrones, problemas estructurales y oportunidades de desarrollo.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sidebar with Stats/Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-xl border-l-4 border-amber-500">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-slate-900">
                                <Shield className="h-5 w-5 text-amber-500" />
                                ¿Qué reportar?
                            </h3>
                            <ul className="space-y-4 text-gray-600 text-sm">
                                <li className="flex items-start gap-3">
                                    <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                                    <span>Denuncias de corrupción o ineficiencia estatal grave.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                                    <span>Focos de delincuencia organizados o narcotráfico.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                                    <span>Eventos que afectan a toda una comunidad.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 bg-slate-900 text-white shadow-2xl rounded-2xl border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            <h3 className="font-bold text-lg mb-6 relative z-10">Impacto Territorial</h3>
                            <div className="space-y-6 relative z-10">
                                <div>
                                    <div className="text-4xl font-bold text-white mb-1">8</div>
                                    <div className="text-xs text-amber-400 uppercase tracking-widest font-bold">Comunas Monitoreadas</div>
                                </div>
                                <div className="h-px bg-white/10"></div>
                                <div>
                                    <div className="text-4xl font-bold text-amber-500">24h</div>
                                    <div className="text-xs text-gray-300 uppercase tracking-widest font-bold">Análisis de Datos</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Form Area */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="p-1 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
                            <div className="p-6 md:p-10">
                                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <FileText className="h-6 w-6 text-amber-500" />
                                    Nuevo Reporte Estratégico
                                </h2>
                                <Suspense fallback={<div className="flex items-center justify-center py-20 text-gray-500">Cargando formulario...</div>}>
                                    <ConcernsForm />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
