"use client";

import { VolunteerForm } from "@/components/forms/VolunteerForm";
import { Users, Heart, Star, Shield } from "lucide-react";

export default function VoluntariosPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            {/* Decorative Background */}
            <div className="fixed inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5 pointer-events-none"></div>

            {/* Hero Section */}
            <div className="relative bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 z-0"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0"></div>

                <div className="container mx-auto px-4 py-20 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-4 py-2 rounded-full text-sm font-bold mb-8 backdrop-blur-sm">
                            <Users className="h-4 w-4" />
                            Únete al Equipo
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Sé Parte del <span className="text-gradient-gold">Cambio</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Únete al equipo que está transformando el Distrito 8 a través de un trabajo territorial serio, transparente y cercano.
                        </p>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-4 py-16 -mt-10 relative z-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12">

                        {/* Sidebar Info */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-24">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <Heart className="h-6 w-6 text-amber-500 fill-amber-500" />
                                    ¿Por Qué Unirte?
                                </h3>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="bg-slate-100 p-3 rounded-xl h-fit">
                                            <Shield className="h-6 w-6 text-slate-700" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg">Impacto Real</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mt-1">
                                                Contribuye directamente a soluciones concretas para tu barrio y comuna.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="bg-slate-100 p-3 rounded-xl h-fit">
                                            <Star className="h-6 w-6 text-slate-700" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg">Liderazgo</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mt-1">
                                                Accede a formación política y herramientas de liderazgo social.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="bg-slate-100 p-3 rounded-xl h-fit">
                                            <Users className="h-6 w-6 text-slate-700" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg">Comunidad</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mt-1">
                                                Conecta con vecinos comprometidos con el bien común.
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="mt-8 p-6 bg-slate-900 rounded-2xl text-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors"></div>
                                    <p className="text-amber-500 font-bold relative z-10 mb-2">¿Tienes dudas?</p>
                                    <p className="text-white text-sm relative z-10">Escríbenos a <br /><span className="font-bold">voluntarios@cristiancontreras.cl</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Main Form Area */}
                        <div className="lg:col-span-8">
                            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                                <div className="p-1 bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500"></div>
                                <div className="p-8 md:p-12">
                                    <div className="mb-10 text-center md:text-left">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Formulario de Registro</h2>
                                        <p className="text-gray-600">Completa tus datos y selecciona las áreas donde te gustaría aportar. ¡No se requiere experiencia previa!</p>
                                    </div>
                                    <VolunteerForm />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
