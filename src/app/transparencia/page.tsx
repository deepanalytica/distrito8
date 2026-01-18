"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DEPUTY_INFO, LEGISLATIVE_PROJECTS } from "@/lib/constants";
import {
    Eye,
    FileText,
    DollarSign,
    Users,
    Calendar,
    CheckCircle2,
    Clock,
    TrendingUp,
    Shield,
    ArrowUpRight,
    Scale
} from "lucide-react";
import Link from "next/link";

export default function TransparenciaPage() {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-100">
            {/* Decorative Background */}
            <div className="fixed inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5 pointer-events-none"></div>

            {/* Hero Section */}
            <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 z-0"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center p-4 bg-amber-500/10 rounded-full mb-8 ring-1 ring-amber-500/20 backdrop-blur-md">
                            <Eye className="h-10 w-10 text-amber-500" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                            Transparencia <span className="text-gradient-gold">Total</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                            Nuestra política es de <span className="text-white font-medium">libros abiertos</span>. Cada voto, cada reunión y cada peso gastado está a disposición de la ciudadanía.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
                <div className="max-w-7xl mx-auto">
                    {/* Stats Overview */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-8 rounded-3xl text-center hover:border-amber-500/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/10 group">
                            <CheckCircle2 className="h-10 w-10 text-emerald-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <div className="text-4xl font-black text-white mb-2">100%</div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Votaciones Públicas</div>
                        </div>
                        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-8 rounded-3xl text-center hover:border-amber-500/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/10 group">
                            <DollarSign className="h-10 w-10 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <div className="text-4xl font-black text-white mb-2">100%</div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Gastos Documentados</div>
                        </div>
                        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-8 rounded-3xl text-center hover:border-amber-500/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/10 group">
                            <Clock className="h-10 w-10 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <div className="text-4xl font-black text-white mb-2">24h</div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Actualización</div>
                        </div>
                        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-8 rounded-3xl text-center hover:border-amber-500/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/10 group">
                            <Users className="h-10 w-10 text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <div className="text-4xl font-black text-white mb-2">100%</div>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Lobby Registrado</div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-10">
                        {/* Main Content Column */}
                        <div className="lg:col-span-8 space-y-10">

                            {/* Votaciones Section */}
                            <section className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-12">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-amber-500/10 rounded-2xl">
                                        <Scale className="h-8 w-8 text-amber-500" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-white">Votaciones en Sala</h2>
                                        <p className="text-slate-400">Posiciones oficiales frente a proyectos de ley</p>
                                    </div>
                                </div>

                                <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-8 text-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-grid-slate-800/20 [mask-image:linear-gradient(0deg,white,transparent)]"></div>
                                    <Calendar className="h-16 w-16 text-slate-700 mx-auto mb-6" />
                                    <h3 className="text-xl font-bold text-white mb-2">Próximamente disponible</h3>
                                    <p className="text-slate-400 max-w-lg mx-auto mb-6 leading-relaxed">
                                        El registro de votaciones se activará automáticamente tras la asunción el 11 de marzo de 2026, integrándose en tiempo real con la API de la Cámara de Diputados.
                                    </p>
                                    <Badge variant="outline" className="bg-amber-500/5 text-amber-500 border-amber-500/20 px-4 py-2">
                                        API Connector Standing By
                                    </Badge>
                                </div>
                            </section>

                            {/* Gastos Públicos */}
                            <section className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-12">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-emerald-500/10 rounded-2xl">
                                        <TrendingUp className="h-8 w-8 text-emerald-500" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-white">Uso de Recursos</h2>
                                        <p className="text-slate-400">Desglose detallado de asignaciones parlamentarias</p>
                                    </div>
                                </div>

                                <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-8 text-center">
                                    <FileText className="h-16 w-16 text-slate-700 mx-auto mb-6" />
                                    <h3 className="text-xl font-bold text-white mb-2">Reportes Mensuales</h3>
                                    <p className="text-slate-400 max-w-lg mx-auto mb-6 leading-relaxed">
                                        A partir de marzo 2026, publicaremos mensualmente el detalle de gastos operacionales, personal de apoyo y asesorías externas.
                                    </p>
                                    <div className="flex justify-center gap-4 opacity-50 pointer-events-none">
                                        <div className="h-24 w-32 bg-slate-800 rounded-xl animate-pulse"></div>
                                        <div className="h-24 w-32 bg-slate-800 rounded-xl animate-pulse delay-100"></div>
                                        <div className="h-24 w-32 bg-slate-800 rounded-xl animate-pulse delay-200"></div>
                                    </div>
                                </div>
                            </section>

                            {/* Proyectos de Ley */}
                            <section className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-12">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-blue-500/10 rounded-2xl">
                                        <Shield className="h-8 w-8 text-blue-500" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-white">Agenda Legislativa</h2>
                                        <p className="text-slate-400">Proyectos e iniciativas comprometidas</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {LEGISLATIVE_PROJECTS.map((project) => (
                                        <div
                                            key={project.id}
                                            className="group border border-slate-800 bg-slate-950/50 rounded-2xl p-6 hover:border-amber-500/50 hover:bg-slate-900 transition-all hover:shadow-lg"
                                        >
                                            <div className="flex items-start justify-between gap-4 mb-3">
                                                <h3 className="font-bold text-xl text-white group-hover:text-amber-400 transition-colors">{project.title}</h3>
                                                <Badge
                                                    className={project.priority === "alta" ? "bg-red-500/20 text-red-400 hover:bg-red-500/30 border-red-500/20" : "bg-blue-500/20 text-blue-400 border-blue-500/20"}
                                                >
                                                    {project.priority === "alta" ? "Alta Prioridad" : "Media Prioridad"}
                                                </Badge>
                                            </div>
                                            <p className="text-slate-400 mb-4 leading-relaxed max-w-2xl">{project.description}</p>
                                            <div className="flex items-center gap-3 mt-auto">
                                                <Badge variant="outline" className="text-xs border-slate-700 text-slate-500">
                                                    {project.category}
                                                </Badge>
                                                <Badge variant="outline" className="text-xs border-amber-500/20 text-amber-500 bg-amber-500/5">
                                                    En Preparación
                                                </Badge>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            {/* Deputy Info Card */}
                            <div className="bg-white rounded-[2rem] p-8 text-slate-900 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-bl-[4rem]"></div>
                                <h3 className="text-2xl font-black mb-6">Ficha Parlamentaria</h3>
                                <dl className="space-y-6">
                                    <div className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                        <dt className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Diputado</dt>
                                        <dd className="font-bold text-lg">{DEPUTY_INFO.fullName}</dd>
                                    </div>
                                    <div className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                        <dt className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Distrito</dt>
                                        <dd className="font-bold text-lg">Distrito {DEPUTY_INFO.district}</dd>
                                        <dd className="text-sm text-gray-500">Región Metropolitana</dd>
                                    </div>
                                    <div className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                        <dt className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Periodo</dt>
                                        <dd className="font-bold text-lg">2026 — 2030</dd>
                                    </div>
                                    <div className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                        <dt className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Militancia</dt>
                                        <dd className="font-bold text-lg">{DEPUTY_INFO.party}</dd>
                                    </div>
                                </dl>
                            </div>

                            {/* Contact Reform */}
                            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden border border-indigo-500/20">
                                <h3 className="text-xl font-bold mb-4 z-10 relative">¿Necesitas información específica?</h3>
                                <p className="text-indigo-200 text-sm mb-6 z-10 relative">
                                    Si no encuentras lo que buscas, puedes solicitar información vía Ley de Transparencia.
                                </p>
                                <Link href="#" className="inline-flex items-center text-amber-500 font-bold hover:text-amber-400 transition-colors z-10 relative gap-2">
                                    Solicitar Info
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Compromiso Section */}
                    <div className="mt-20 border-t border-slate-800 pt-16 text-center">
                        <h3 className="text-3xl font-black text-white mb-6">
                            Nuestro Compromiso
                        </h3>
                        <blockquote className="text-2xl md:text-3xl italic text-slate-400 max-w-4xl mx-auto font-serif leading-relaxed">
                            &quot;La transparencia no es una opción, es un deber ético. Trabajamos de cara a la ciudadanía, sin secretos y con los libros abiertos.&quot;
                        </blockquote>
                        <div className="mt-8 flex justify-center">
                            <div className="h-1 w-20 bg-amber-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
