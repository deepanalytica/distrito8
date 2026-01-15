
import { COMMUNE_DETAILS } from "@/lib/commune-data";
import { notFound } from "next/navigation";
import {
    ChevronLeft,
    MapPin,
    MessageSquarePlus,
    Phone,
    Globe,
    History,
    Utensils,
    Trees,
    Landmark,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function CommunePage({ params }: { params: { slug: string } }) {
    const detail = COMMUNE_DETAILS[params.slug];

    if (!detail) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-6xl mx-auto">
                    {/* Breadcrumb */}
                    <Link
                        href="/mi-comuna"
                        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Volver al mapa
                    </Link>

                    {/* HERO & IDENTITY SECTION */}
                    <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-gray-100 mb-10 overflow-hidden relative">
                        {/* Abstract Background Element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl opacity-60" />

                        <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-start">
                            <div className="flex-grow space-y-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-100 px-3 py-1 text-sm font-semibold tracking-wide">
                                            DISTRITO 8
                                        </Badge>
                                        <Badge variant="outline" className="bg-gray-50 text-gray-600 border-gray-100 px-3 py-1 text-xs uppercase tracking-wider font-bold">
                                            {detail.population}
                                        </Badge>
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-none">
                                        {detail.name}
                                    </h1>
                                </div>

                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
                                    {detail.description}
                                </p>

                                {/* Identity Box */}
                                <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl border border-indigo-100 mt-6 inline-flex flex-col sm:flex-row gap-5 items-start">
                                    <div className="bg-white p-3 rounded-full shadow-sm text-indigo-600">
                                        <Globe className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-indigo-900 uppercase tracking-wider mb-1">
                                            {detail.identity.badge}
                                        </h3>
                                        <p className="text-gray-700 font-medium leading-snug">
                                            {detail.identity.text}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="w-full lg:w-auto flex flex-col gap-3 flex-shrink-0 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1 text-center lg:text-left">
                                    Gestión Vecinal
                                </h4>
                                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg shadow-lg shadow-blue-900/10">
                                    <Link href={`/ingresar-caso?comuna=${detail.slug}`}>
                                        <MessageSquarePlus className="h-5 w-5 mr-2" />
                                        Reportar Problema
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" className="w-full h-12 border-gray-300 hover:bg-white text-gray-600">
                                    <Link href="/audiencia">
                                        <Phone className="h-4 w-4 mr-2" />
                                        Solicitar Audiencia
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 md:gap-12">

                        {/* LEFT COLUMN: DISCOVERY (Historical, Nature, Gastronomy) - Spans 7 cols */}
                        <div className="xl:col-span-7 space-y-12">

                            {/* Heritage Section */}
                            {detail.history && detail.history.length > 0 && (
                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <div className="bg-amber-100 p-2 rounded-lg text-amber-700">
                                            <Landmark className="h-6 w-6" />
                                        </div>
                                        Patrimonio e Historia
                                    </h2>
                                    <div className="space-y-4">
                                        {detail.history.map((item, idx) => (
                                            <Card key={idx} className="p-5 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                                <p className="text-gray-600 leading-relaxed mb-3 text-sm">{item.description}</p>
                                                {item.location && (
                                                    <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 bg-gray-50 inline-flex px-2 py-1 rounded">
                                                        <MapPin className="h-3 w-3" />
                                                        {item.location}
                                                    </div>
                                                )}
                                            </Card>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Nature Section */}
                            {detail.nature && detail.nature.length > 0 && (
                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <div className="bg-emerald-100 p-2 rounded-lg text-emerald-700">
                                            <Trees className="h-6 w-6" />
                                        </div>
                                        Naturaleza y Entorno
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {detail.nature.map((item, idx) => (
                                            <Card key={idx} className="p-5 border-emerald-100 bg-emerald-50/30 shadow-none">
                                                <h3 className="text-lg font-bold text-emerald-900 mb-2">{item.title}</h3>
                                                <p className="text-emerald-800/80 text-sm leading-relaxed mb-3">{item.description}</p>
                                                {item.location && (
                                                    <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                                                        <MapPin className="h-3 w-3" />
                                                        {item.location}
                                                    </div>
                                                )}
                                            </Card>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Gastronomy Section */}
                            {detail.gastronomy && detail.gastronomy.length > 0 && (
                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <div className="bg-orange-100 p-2 rounded-lg text-orange-700">
                                            <Utensils className="h-6 w-6" />
                                        </div>
                                        Vida Local y Gastronomía
                                    </h2>
                                    <div className="space-y-4">
                                        {detail.gastronomy.map((item, idx) => (
                                            <div key={idx} className="flex gap-4 items-start group">
                                                <div className="w-2 h-2 rounded-full bg-orange-300 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                                <div>
                                                    <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                                                    {item.location && (
                                                        <p className="text-xs text-gray-400 mt-1 italic">{item.location}</p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                        </div>

                        {/* RIGHT COLUMN: POLITICAL MANAGEMENT (Sticky Sidebar) - Spans 5 cols */}
                        <div className="xl:col-span-5 space-y-8">

                            {/* Priorities Card */}
                            <Card className="border-none shadow-xl shadow-blue-900/5 bg-white overflow-hidden rounded-3xl ring-1 ring-gray-100">
                                <div className="bg-gray-50 p-6 border-b border-gray-100 flex justify-between items-center">
                                    <h2 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                                        <div className="w-1.5 h-6 bg-red-500 rounded-full" />
                                        Urgencias Comunales
                                    </h2>
                                    <Badge variant="secondary" className="bg-white text-xs font-bold border border-gray-200">
                                        {detail.priorities.length} Activas
                                    </Badge>
                                </div>
                                <div className="p-2">
                                    {detail.priorities.map((p, idx) => (
                                        <div key={idx} className="p-4 hover:bg-gray-50 rounded-xl transition-colors border-b last:border-0 border-gray-50 border-dashed">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Badge className={`h-5 text-[10px] uppercase font-bold border-none px-2 ${p.status === "CRITICO" ? "bg-red-100 text-red-700" :
                                                    p.status === "ALTA" ? "bg-orange-100 text-orange-700" :
                                                        "bg-blue-100 text-blue-700"
                                                    }`}>
                                                    {p.status}
                                                </Badge>
                                            </div>
                                            <h3 className="font-bold text-gray-900 text-sm mb-1">{p.title}</h3>
                                            <p className="text-xs text-gray-500 leading-relaxed">
                                                {p.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-4 bg-gray-50 text-center">
                                    <Link href="/participa" className="text-sm font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                                        Votar prioridades
                                        <ArrowRight className="h-3 w-3" />
                                    </Link>
                                </div>
                            </Card>

                            {/* Gestiones Widget */}
                            <div className="bg-white rounded-3xl border border-gray-200 p-6">
                                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <History className="h-5 w-5 text-gray-400" />
                                    Últimas Gestiones
                                </h3>
                                <div className="space-y-6 relative">
                                    {/* Timeline Line */}
                                    <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-gray-100" />

                                    {detail.gestiones.map((g, idx) => (
                                        <div key={idx} className="relative pl-6">
                                            <div className="absolute left-0 top-1.5 w-3.5 h-3.5 bg-white border-2 border-blue-500 rounded-full z-10" />
                                            <p className="text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">{g.date}</p>
                                            <h4 className="font-semibold text-gray-900 text-sm mb-2">{g.title}</h4>
                                            <Badge variant="outline" className="h-5 text-[10px] bg-gray-50 text-gray-600 border-gray-200">
                                                {g.status.replace("_", " ")}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Box */}
                            <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-lg">
                                <h3 className="font-bold mb-4 flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-slate-400" />
                                    Teléfonos Clave
                                </h3>
                                <div className="grid gap-3">
                                    {detail.contacts.map((c, idx) => (
                                        <div key={idx} className="flex items-center justify-between text-sm py-2 border-b border-slate-800 last:border-0">
                                            <span className="text-slate-300">{c.label}</span>
                                            <span className="font-mono font-bold text-amber-400">{c.phone}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-8 bg-white border-t border-gray-100 mt-auto">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm text-gray-400">
                        Diputado Cristian Contreras • Distrito 8 • Región Metropolitana
                    </p>
                </div>
            </footer>
        </div>
    );
}
