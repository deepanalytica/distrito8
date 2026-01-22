
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
    Users,
    TrendingUp,
    Zap,
    Briefcase,
    Shield,
    HeartPulse,
    GraduationCap,
    Activity,
    CalendarClock,
    FileCheck,
    HardHat,
    ArrowUpRight,
    ArrowDownRight,
    Search
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function generateStaticParams() {
    return Object.keys(COMMUNE_DETAILS).map((slug) => ({
        slug: slug,
    }));
}

export default function CommunePage({ params }: { params: { slug: string } }) {
    const detail = COMMUNE_DETAILS[params.slug];

    if (!detail) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-100 pb-20">
            {/* Decorative Background */}
            <div className="fixed inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5 pointer-events-none"></div>
            {detail.identity.image && (
                <div
                    className="fixed inset-0 z-0 pointer-events-none opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.8), rgba(2, 6, 23, 1)), url(${detail.identity.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>
            )}
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 z-0 pointer-events-none"></div>

            <main className="flex-grow container mx-auto px-4 pt-24 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Header Controls */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
                        <Link
                            href="/#comunas"
                            className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400 transition-colors bg-slate-900/50 hover:bg-slate-800 px-4 py-2 rounded-full border border-slate-800 backdrop-blur-sm group w-fit"
                        >
                            <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Regresar al Mando Territorial
                        </Link>

                        <div className="flex items-center gap-3">
                            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 animate-pulse">
                                CANAL DE DATOS ACTIVO
                            </Badge>
                            <span className="text-xs font-mono text-slate-600">ID_NODE: {detail.slug.toUpperCase()}</span>
                        </div>
                    </div>

                    {/* HERO & STRATEGIC KPIs */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                        {/* Title & Description Container */}
                        <div className="lg:col-span-8 space-y-8">
                            <div className="space-y-4">
                                <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20 px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
                                    CONTROL TERRITORIAL FIDELIDAD ALTA
                                </Badge>
                                <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
                                    {detail.name}
                                </h1>
                                <p className="text-xl text-slate-400 leading-relaxed font-light max-w-3xl">
                                    {detail.description}
                                </p>
                            </div>

                            {/* Strategic KPI Grid */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    { label: "Población", value: detail.population, icon: Users, color: "text-blue-400" },
                                    { label: "Prioridad Social", value: detail.stats.ips.toFixed(1), icon: TrendingUp, color: "text-red-400" },
                                    { label: "Crecimiento Anual", value: detail.stats.growth, icon: Activity, color: "text-emerald-400" },
                                    { label: "Género (F/M %)", value: `${detail.stats.gender.f}/${detail.stats.gender.m}`, icon: Zap, color: "text-amber-400" },
                                ].map((kpi, i) => (
                                    <Card key={i} className="bg-slate-900/40 border-white/5 backdrop-blur-xl group hover:border-amber-500/20 transition-all">
                                        <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                                            <kpi.icon className={`h-5 w-5 ${kpi.color} mb-2 group-hover:scale-110 transition-transform`} />
                                            <span className="text-lg font-bold text-white leading-none tracking-tight">{kpi.value}</span>
                                            <span className="text-[10px] uppercase font-black text-slate-600 tracking-widest mt-1">{kpi.label}</span>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Action Sidebar */}
                        <div className="lg:col-span-4 glass-card bg-slate-900/60 p-8 rounded-[3rem] border-white/10 flex flex-col gap-4">
                            <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest text-center mb-2">Protocolos de Acción</h3>
                            <Button asChild className="h-16 rounded-2xl bg-white text-slate-950 hover:bg-amber-500 font-black tracking-widest text-lg transition-all hover:scale-[1.02]">
                                <Link href={`/ingresar-caso?comuna=${detail.slug}`}>
                                    REPORTAR CASO <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" asChild className="h-14 rounded-2xl border-white/10 text-white hover:bg-white/5 font-bold">
                                <Link href="/audiencia">SOLICITAR AUDIENCIA</Link>
                            </Button>

                            <div className="mt-4 pt-6 border-t border-white/5 space-y-3">
                                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Línea de Emergencia {detail.name}</p>
                                <div className="flex items-center justify-between p-3 bg-slate-950/50 rounded-xl border border-white/5 group cursor-pointer hover:border-emerald-500/30 transition-all">
                                    <span className="text-xs font-mono text-emerald-500 font-bold">{detail.infrastructure.security.emergencyLine}</span>
                                    <Phone className="h-4 w-4 text-emerald-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CITIZEN UTILITY LAYER (MVP: Modules 2 & 3) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Procedures (Trámites) */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <div className="bg-amber-500/10 p-2 rounded-xl text-amber-500">
                                    <FileCheck className="h-5 w-5" />
                                </div>
                                Trámites y Plazos
                            </h3>
                            <div className="space-y-4">
                                {detail.procedures.length > 0 ? detail.procedures.map((proc, i) => (
                                    <div key={i} className="group relative p-5 bg-slate-900/40 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-all">
                                        <div className="absolute top-5 right-5 flex items-center gap-2">
                                            <Badge variant="outline" className="text-[10px] bg-slate-950 border-white/10 text-slate-400">{proc.type}</Badge>
                                        </div>
                                        <h4 className="font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">{proc.title}</h4>
                                        <div className="flex items-center gap-2 text-sm text-slate-400">
                                            <CalendarClock className="h-4 w-4 text-amber-500" />
                                            <span>Vence: <strong className="text-slate-200">{proc.deadline}</strong></span>
                                        </div>
                                    </div>
                                )) : (
                                    <div className="p-6 rounded-2xl border border-dashed border-white/10 text-center text-slate-500 text-sm">
                                        No hay trámites urgentes activos para este mes.
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Benefits (Beneficios) */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                    <div className="bg-emerald-500/10 p-2 rounded-xl text-emerald-500">
                                        <Search className="h-5 w-5" />
                                    </div>
                                    Red de Beneficios
                                </h3>
                                <Badge className="bg-emerald-500 text-slate-950 hover:bg-emerald-400">Activos</Badge>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {detail.benefits.length > 0 ? detail.benefits.map((ben, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-slate-900/20 rounded-2xl border border-white/5 hover:bg-slate-900/40 transition-colors">
                                        <div className="shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-emerald-500 text-xs text-center leading-none px-1">
                                            {ben.target.substring(0, 3)}
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-white text-sm">{ben.title}</h5>
                                            <p className="text-xs text-slate-400 mt-1">{ben.location}</p>
                                            <p className="text-[10px] text-emerald-500 font-mono mt-1 uppercase">{ben.schedule}</p>
                                        </div>
                                    </div>
                                )) : (
                                    <div className="p-6 rounded-2xl border border-dashed border-white/10 text-center text-slate-500 text-sm">
                                        Consultando red de beneficios...
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* SECURITY & WORKS GRID (MVP: Modules 4 & 5) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {/* Security Trends (Trends) */}
                        <Card className="bg-slate-900/40 border-white/10 rounded-[3rem] p-8 border-t-4 border-t-red-500">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-red-500/20 p-2 rounded-xl text-red-500">
                                        <Shield className="h-5 w-5" />
                                    </div>
                                    Seguridad y Tendencia
                                </div>
                                <Badge variant="outline" className="text-[9px] border-white/10 text-slate-400 uppercase tracking-widest">{detail.securityTrends.source}</Badge>
                            </h3>
                            <div className="flex items-end gap-4 mb-8">
                                <div className="text-5xl font-black text-white">{detail.securityTrends.value > 0 ? `+${detail.securityTrends.value}%` : `${detail.securityTrends.value}%`}</div>
                                <div className={`flex items-center gap-1 text-sm font-bold mb-2 ${detail.securityTrends.value > 0 ? 'text-red-400' : 'text-emerald-400'}`}>
                                    {detail.securityTrends.value > 0 ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                                    {detail.securityTrends.metric}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-slate-950 rounded-2xl border border-white/5">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Dotación</p>
                                    <p className="text-xl font-bold text-white">{detail.infrastructure.security.vehicles} Vehículos</p>
                                </div>
                                <div className="p-4 bg-slate-950 rounded-2xl border border-white/5">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Emergencia</p>
                                    <p className="text-xl font-bold text-red-500">{detail.infrastructure.security.emergencyLine}</p>
                                </div>
                            </div>
                        </Card>

                        {/* Public Works (Inversión) */}
                        <Card className="bg-slate-900/40 border-white/10 rounded-[3rem] p-8 border-t-4 border-t-blue-500">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-500/20 p-2 rounded-xl text-blue-400">
                                        <HardHat className="h-5 w-5" />
                                    </div>
                                    Mapa de Obras
                                </div>
                            </h3>
                            <div className="space-y-4">
                                {detail.works.length > 0 ? detail.works.map((work, i) => (
                                    <div key={i} className="p-4 bg-slate-950/30 rounded-2xl border border-white/5 flex gap-4 items-center">
                                        <div className={`w-2 h-2 rounded-full ${work.status === 'EJECUCION' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                                        <div className="flex-grow">
                                            <h5 className="text-sm font-bold text-white mb-0.5">{work.title}</h5>
                                            <p className="text-xl text-white font-black">{work.investment}</p>
                                            <p className="text-[10px] text-slate-500 uppercase font-black mt-1">{work.mandante} • {work.status}</p>
                                        </div>
                                    </div>
                                )) : (
                                    <p className="text-sm text-slate-500 italic">No hay obras mayores reportadas en este periodo.</p>
                                )}
                            </div>
                        </Card>
                    </div>

                    {/* TRANSPARENCY & INFRASTRUCTURE (MVP: Module 5 & 6) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 opacity-80 hover:opacity-100 transition-opacity">
                        {/* Economic Pulse */}
                        <Card className="bg-slate-900/20 border-white/5 rounded-[2rem] p-6 border-l-2 border-l-slate-700">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Briefcase className="h-5 w-5 text-slate-500" />
                                Transparencia Presupuestaria
                            </h3>
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Presupuesto p/c</p>
                                    <p className="text-2xl font-bold text-white">{detail.economics.budgetPerCapita}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Ingresos Totales</p>
                                    <p className="text-xl font-bold text-slate-300">{detail.economics.municipalRevenue}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                                <p className="text-[9px] text-slate-600 uppercase font-bold italic font-mono">Verificado via Transparencia Activa</p>
                            </div>
                        </Card>

                        {/* Health Infrastructure */}
                        <Card className="bg-slate-900/20 border-white/5 rounded-[2rem] p-6 border-l-2 border-l-slate-700">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <HeartPulse className="h-5 w-5 text-slate-500" />
                                Infraestructura Salud
                            </h3>
                            <div className="flex gap-4">
                                <div className="p-3 bg-slate-950 rounded-xl border border-white/5">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">CESFAM</p>
                                    <p className="text-xl font-black text-white">{detail.infrastructure.health.cesfamCount}</p>
                                </div>
                                <div className="flex-grow p-3 bg-slate-950 rounded-xl border border-white/5">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Hospitals</p>
                                    <div className="flex flex-wrap gap-1">
                                        {detail.infrastructure.health.hospitals.map((h, i) => (
                                            <Badge key={i} variant="secondary" className="bg-slate-900 text-[10px] text-slate-400">{h}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* RED SECTION: SOCIAL PRIORITY CITATION */}
                    <div className="mb-16 p-8 rounded-[3rem] bg-red-950/10 border border-red-500/10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <TrendingUp className="h-32 w-32 text-red-500" />
                        </div>
                        <div className="bg-red-500/20 p-6 rounded-3xl text-red-500">
                            <TrendingUp className="h-10 w-10" />
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center gap-2 mb-2">
                                <h4 className="text-xl font-black text-white leading-none">Indice de Prioridad Social: {detail.stats.ips}</h4>
                                <Badge className="bg-red-500 text-[10px] font-black uppercase">Crítico</Badge>
                            </div>
                            <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
                                Este territorio presenta un índice IPS de <b>{detail.stats.ips}</b>. Nuestra gestión parlamentaria prioriza cerrar las brechas identificadas por el MDSF en vivienda, salud y capital humano para esta comuna.
                            </p>
                        </div>
                        <div className="text-right shrink-0">
                            <p className="text-[10px] font-black text-red-500/50 uppercase tracking-widest">Fuente Citada</p>
                            <p className="text-xs font-mono text-slate-600 font-bold">MDSF Metropolitano 2023</p>
                        </div>
                    </div>

                    {/* CONTENT TABS: HERITAGE, NATURE, GESTION */}
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
                        {/* Discovery Column */}
                        <div className="xl:col-span-8 space-y-16">
                            {/* Heritage */}
                            <section>
                                <h4 className="text-xs font-black text-amber-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                                    <div className="w-12 h-px bg-amber-500"></div>
                                    Identidad & Patrimonio
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {detail.history.map((item, idx) => (
                                        <div key={idx} className="glass-card bg-slate-900/40 p-6 rounded-3xl border-white/5 hover:border-amber-500/30 transition-all group">
                                            <Landmark className="h-8 w-8 text-slate-700 mb-4 group-hover:text-amber-500 transition-colors" />
                                            <h5 className="text-lg font-bold text-white mb-2">{item.title}</h5>
                                            <p className="text-sm text-slate-400 font-light leading-relaxed">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Natural Resources */}
                            <section>
                                <h4 className="text-xs font-black text-emerald-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                                    <div className="w-12 h-px bg-emerald-500"></div>
                                    Recursos Naturales
                                </h4>
                                <div className="space-y-4">
                                    {detail.nature.map((item, idx) => (
                                        <div key={idx} className="flex gap-6 items-start p-6 bg-slate-900/20 rounded-[2rem] border border-white/5">
                                            <div className="bg-emerald-500/10 p-4 rounded-2xl text-emerald-500">
                                                <Trees className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h5 className="text-lg font-bold text-white mb-2">{item.title}</h5>
                                                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                                                {item.location && <p className="text-[10px] font-mono text-emerald-500/60 mt-3 uppercase font-bold tracking-widest">LOCALIZADA EN: {item.location}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Ledger Column */}
                        <div className="xl:col-span-4 space-y-8">
                            {/* Urgent Matters */}
                            <Card className="bg-slate-900 border-white/10 rounded-[3rem] overflow-hidden">
                                <div className="p-8 border-b border-white/5 bg-slate-800/20">
                                    <h3 className="font-bold text-white flex items-center gap-3">
                                        <AlertCircle className="h-5 w-5 text-red-500" />
                                        Prioridades Críticas
                                    </h3>
                                </div>
                                <div className="p-4 space-y-2">
                                    {detail.priorities.map((p, idx) => (
                                        <div key={idx} className="p-4 rounded-2xl bg-slate-950/40 border border-white/5">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${p.status === 'CRITICO' ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-500'}`}>
                                                    {p.status}
                                                </span>
                                            </div>
                                            <h6 className="font-bold text-white text-sm mb-1">{p.title}</h6>
                                            <p className="text-xs text-slate-500 leading-relaxed">{p.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            {/* Latest Actions */}
                            <div className="p-8 bg-slate-950/40 rounded-[3rem] border border-white/5">
                                <h3 className="font-bold text-white mb-8 flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                    Libro de Gestión
                                </h3>
                                <div className="space-y-8 relative">
                                    <div className="absolute left-2.5 top-0 bottom-0 w-px bg-slate-800" />
                                    {detail.gestiones.map((g, idx) => (
                                        <div key={idx} className="relative pl-10">
                                            <div className="absolute left-0 top-1.5 w-5 h-5 bg-slate-950 border-2 border-slate-800 rounded-full z-10 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                            </div>
                                            <p className="text-[10px] font-black text-slate-600 mb-1 uppercase tracking-widest">{g.date}</p>
                                            <h6 className="font-bold text-slate-200 text-sm mb-2">{g.title}</h6>
                                            <Badge variant="outline" className="text-[9px] bg-slate-900 border-white/5">{g.status}</Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </main >
        </div >
    );
}
