
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
    ArrowRight,
    AlertCircle,
    CheckCircle2,
    Building2,
    Users
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
        <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-100">
            {/* Decorative Background */}
            <div className="fixed inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5 pointer-events-none"></div>
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 z-0 pointer-events-none"></div>

            <main className="flex-grow container mx-auto px-4 py-8 md:py-12 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb */}
                    <Link
                        href="/#comunas"
                        className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400 transition-colors mb-8 bg-slate-900/50 hover:bg-slate-800 px-4 py-2 rounded-full border border-slate-800 backdrop-blur-sm group"
                    >
                        <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Volver al mapa
                    </Link>

                    {/* HERO & IDENTITY SECTION */}
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900/60 border border-slate-800 backdrop-blur-md shadow-2xl mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        {/* Gradient Accent */}
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0 opacity-50"></div>

                        <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-start">
                            <div className="flex-grow space-y-8">
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20 px-4 py-1.5 text-sm font-bold tracking-wider uppercase backdrop-blur-md">
                                            DISTRITO 8
                                        </Badge>
                                        <Badge variant="outline" className="bg-slate-800/50 text-slate-300 border-slate-700 px-4 py-1.5 text-sm uppercase tracking-wider font-semibold backdrop-blur-md">
                                            <Users className="w-3 h-3 mr-2 text-indigo-400" />
                                            {detail.population}
                                        </Badge>
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none bg-clip-text">
                                        {detail.name}
                                    </h1>
                                </div>

                                <p className="text-xl text-slate-300 leading-relaxed max-w-3xl font-light border-l-4 border-amber-500/30 pl-6">
                                    {detail.description}
                                </p>

                                {/* Identity Box */}
                                <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 inline-flex flex-col sm:flex-row gap-5 items-center sm:items-start backdrop-blur-sm hover:bg-slate-800/60 transition-colors">
                                    <div className="bg-amber-500/20 p-4 rounded-full text-amber-500 shadow-inner ring-1 ring-amber-500/20">
                                        <Globe className="h-8 w-8" />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">
                                            Identidad Local
                                        </h3>
                                        <p className="text-lg text-slate-200 font-medium leading-snug max-w-md italic">
                                            "{detail.identity.text}"
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="w-full lg:w-auto flex flex-col gap-4 flex-shrink-0 bg-slate-950/50 p-6 rounded-3xl border border-slate-800/50 backdrop-blur-md lg:min-w-[320px]">
                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 text-center">
                                    Centro de Acción
                                </h4>
                                <Button asChild className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold h-14 text-lg shadow-lg shadow-amber-900/20 rounded-xl transition-all hover:scale-[1.02]">
                                    <Link href={`/ingresar-caso?comuna=${detail.slug}`}>
                                        <MessageSquarePlus className="h-5 w-5 mr-2" />
                                        Reportar Problema
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" className="w-full h-12 border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl bg-transparent transition-all hover:border-slate-600">
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
                                <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                        <div className="bg-slate-800 p-2.5 rounded-xl text-amber-500 shadow-md border border-slate-700">
                                            <Landmark className="h-6 w-6" />
                                        </div>
                                        Patrimonio e Historia
                                    </h2>
                                    <div className="grid gap-4">
                                        {detail.history.map((item, idx) => (
                                            <div key={idx} className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all hover:shadow-lg hover:shadow-amber-900/10 backdrop-blur-sm">
                                                <h3 className="text-lg font-bold text-amber-100 group-hover:text-amber-400 transition-colors mb-2">{item.title}</h3>
                                                <p className="text-slate-400 leading-relaxed mb-4 text-sm">{item.description}</p>
                                                {item.location && (
                                                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-950/50 inline-flex px-3 py-1.5 rounded-lg border border-slate-800">
                                                        <MapPin className="h-3 w-3" />
                                                        {item.location}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Nature Section */}
                            {detail.nature && detail.nature.length > 0 && (
                                <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                        <div className="bg-slate-800 p-2.5 rounded-xl text-emerald-400 shadow-md border border-slate-700">
                                            <Trees className="h-6 w-6" />
                                        </div>
                                        Naturaleza y Entorno
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {detail.nature.map((item, idx) => (
                                            <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all hover:bg-slate-800/30">
                                                <h3 className="text-lg font-bold text-emerald-300 mb-2">{item.title}</h3>
                                                <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>
                                                {item.location && (
                                                    <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-500/80">
                                                        <MapPin className="h-3 w-3" />
                                                        {item.location}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Gastronomy Section */}
                            {detail.gastronomy && detail.gastronomy.length > 0 && (
                                <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                        <div className="bg-slate-800 p-2.5 rounded-xl text-orange-400 shadow-md border border-slate-700">
                                            <Utensils className="h-6 w-6" />
                                        </div>
                                        Vida Local y Gastronomía
                                    </h2>
                                    <div className="space-y-4">
                                        {detail.gastronomy.map((item, idx) => (
                                            <div key={idx} className="flex gap-5 items-start p-4 hover:bg-slate-900/50 rounded-2xl transition-colors border border-transparent hover:border-slate-800/50 group">
                                                <div className="w-2 h-2 rounded-full bg-orange-400 mt-2.5 flex-shrink-0 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(251,146,60,0.5)] transition-all" />
                                                <div>
                                                    <h3 className="font-bold text-slate-200 group-hover:text-orange-400 transition-colors text-lg">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">{item.description}</p>
                                                    {item.location && (
                                                        <p className="text-xs text-slate-600 mt-2 italic font-mono">{item.location}</p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                        </div>

                        {/* RIGHT COLUMN: POLITICAL MANAGEMENT (Sticky Sidebar) - Spans 5 cols */}
                        <div className="xl:col-span-5 space-y-8 animate-in fade-in slide-in-from-right-8 duration-700 delay-500">

                            {/* Looking for Problems/Needs/Priorities */}
                            <Card className="border-0 bg-slate-900 shadow-2xl shadow-black/20 overflow-hidden rounded-[2rem] ring-1 ring-slate-800">
                                <div className="bg-slate-800/50 p-6 border-b border-slate-800 flex justify-between items-center backdrop-blur-sm">
                                    <h2 className="font-bold text-white text-lg flex items-center gap-3">
                                        <AlertCircle className="h-5 w-5 text-red-500" />
                                        Urgencias Comunales
                                    </h2>
                                    <Badge variant="secondary" className="bg-slate-950 text-slate-300 text-xs font-bold border border-slate-800 shadow-inner">
                                        {detail.priorities.length} Activas
                                    </Badge>
                                </div>
                                <div className="divide-y divide-slate-800/50">
                                    {detail.priorities.map((p, idx) => (
                                        <div key={idx} className="p-5 hover:bg-slate-800/30 transition-colors group">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Badge className={`h-5 text-[10px] uppercase font-bold border-none px-2 tracking-wide ${p.status === "CRITICO" ? "bg-red-500/20 text-red-400 group-hover:bg-red-500/30" :
                                                    p.status === "ALTA" ? "bg-orange-500/20 text-orange-400 group-hover:bg-orange-500/30" :
                                                        "bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30"
                                                    }`}>
                                                    {p.status}
                                                </Badge>
                                            </div>
                                            <h3 className="font-bold text-slate-100 text-sm mb-1.5">{p.title}</h3>
                                            <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                                {p.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-5 bg-slate-950/30 text-center border-t border-slate-800">
                                    <Link href="/participa" className="text-sm font-bold text-amber-500 hover:text-amber-400 inline-flex items-center gap-2 transition-colors hover:gap-3">
                                        Votar prioridades
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </Card>

                            {/* Gestiones Widget */}
                            <div className="bg-slate-900 rounded-[2rem] border border-slate-800 p-8 shadow-xl">
                                <h3 className="font-bold text-white mb-8 flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                    Últimos Avances
                                </h3>
                                <div className="space-y-8 relative">
                                    {/* Timeline Line */}
                                    <div className="absolute left-2.5 top-3 bottom-3 w-px bg-gradient-to-b from-slate-700 via-slate-800 to-transparent" />

                                    {detail.gestiones.map((g, idx) => (
                                        <div key={idx} className="relative pl-10 group">
                                            <div className="absolute left-0 top-1.5 w-5 h-5 bg-slate-900 border-2 border-emerald-500/50 rounded-full z-10 group-hover:border-emerald-500 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all">
                                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full absolute inset-0 m-auto opacity-50 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <p className="text-[10px] font-bold text-slate-500 mb-1 uppercase tracking-widest">{g.date}</p>
                                            <h4 className="font-bold text-slate-200 text-sm mb-2 group-hover:text-emerald-400 transition-colors">{g.title}</h4>
                                            <Badge variant="outline" className="h-5 text-[10px] bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-2">
                                                {g.status.replace("_", " ")}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Box */}
                            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-[2rem] p-8 text-white shadow-lg shadow-orange-900/20 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Phone className="w-32 h-32 rotate-12 -translate-y-8 translate-x-8" />
                                </div>
                                <h3 className="font-bold mb-6 flex items-center gap-2 relative z-10 text-lg">
                                    <Phone className="h-5 w-5" />
                                    Teléfonos Directos
                                </h3>
                                <div className="grid gap-4 relative z-10">
                                    {detail.contacts.map((c, idx) => (
                                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-sm py-3 border-b border-white/20 last:border-0 hover:bg-white/10 rounded-lg px-2 -mx-2 transition-colors">
                                            <span className="text-amber-100 font-medium">{c.label}</span>
                                            <span className="font-mono font-bold text-white text-base tracking-wider">{c.phone}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-8 bg-slate-950 border-t border-slate-900 mt-auto relative z-10">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm text-slate-600 flex items-center justify-center gap-2">
                        <span>Diputado Cristian Contreras</span>
                        <span className="w-1 h-1 rounded-full bg-slate-700" />
                        <span>Distrito 8</span>
                        <span className="w-1 h-1 rounded-full bg-slate-700" />
                        <span>Región Metropolitana</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}
