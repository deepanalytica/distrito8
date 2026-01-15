"use client";

import { Suspense } from "react";
import { Card } from "@/components/ui/card";
import { ConcernsForm } from "@/components/forms/ConcernsForm";
import { Shield, FileText, MapPin } from "lucide-react";

export default function PreocupacionesPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-4xl mx-auto mb-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                        <MapPin className="h-4 w-4" />
                        Red de Inteligencia Territorial
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Inteligencia Territorial <span className="text-indigo-600">Distrito 8</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Ayúdanos a levantar información estratégica sobre tu comuna. Esta plataforma no es para casos individuales, sino para identificar patrones, problemas estructurales y oportunidades de desarrollo para el Distrito 8.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sidebar with Stats/Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card className="p-6 border-l-4 border-indigo-600 shadow-md">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Shield className="h-5 w-5 text-indigo-600" />
                                ¿Qué reportar?
                            </h3>
                            <ul className="space-y-3 text-gray-600 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="bg-indigo-100 text-indigo-700 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                                    <span>Denuncias de corrupción o ineficiencia estatal.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="bg-indigo-100 text-indigo-700 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                                    <span>Focos de delincuencia organizados.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="bg-indigo-100 text-indigo-700 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                                    <span>Eventos que afectan a toda una comunidad.</span>
                                </li>
                            </ul>
                        </Card>

                        <Card className="p-6 bg-gradient-to-br from-indigo-900 to-blue-900 text-white shadow-lg">
                            <h3 className="font-bold text-lg mb-4">Impacto Territorial</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="text-3xl font-bold text-indigo-200">8</div>
                                    <div className="text-xs text-indigo-100 uppercase">Comunas Monitoreadas</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-yellow-400">24h</div>
                                    <div className="text-xs text-indigo-100 uppercase">Análisis de Datos</div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Main Form Area */}
                    <div className="lg:col-span-2">
                        <Card className="shadow-lg border-t-4 border-indigo-500">
                            <div className="p-6 md:p-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                    <FileText className="h-6 w-6 text-indigo-600" />
                                    Nuevo Reporte Estratégico
                                </h2>
                                <Suspense fallback={<div>Cargando formulario...</div>}>
                                    <ConcernsForm />
                                </Suspense>
                            </div>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
}
