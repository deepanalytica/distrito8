
import { COMMUNE_DETAILS } from "@/lib/commune-data";
import { notFound } from "next/navigation";
import {
    ChevronLeft,
    MapPin,
    MessageSquarePlus,
    Phone,
    Globe,
    ExternalLink,
    History
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
                <div className="max-w-5xl mx-auto">
                    {/* Breadcrumb / Back */}
                    <Link
                        href="/mi-comuna"
                        className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-6"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Ver todas las comunas
                    </Link>

                    {/* Hero Comuna */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-blue-100 p-2 rounded-xl">
                                    <MapPin className="h-6 w-6 text-blue-600" />
                                </div>
                                <h1 className="text-3xl md:text-5xl font-bold text-gray-900">{detail.name}</h1>
                            </div>
                            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                                Prioridades locales y gestiones parlamentarias para los vecinos de {detail.name}.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <Button asChild className="bg-blue-600 hover:bg-blue-700 h-14 px-8 rounded-2xl shadow-lg gap-2 text-lg">
                                <Link href={`/ingresar-caso?comuna=${detail.slug}`}>
                                    <MessageSquarePlus className="h-5 w-5" />
                                    Reportar problema en {detail.name}
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column: Priorities and Gestiones */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Priorities */}
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <span className="w-1.5 h-8 bg-blue-600 rounded-full" />
                                    Prioridades Locales
                                </h2>
                                <div className="grid grid-cols-1 gap-4">
                                    {detail.priorities.map((p, idx) => (
                                        <Card key={idx} className="border-none shadow-sm bg-white overflow-hidden">
                                            <div className="p-6 flex flex-col sm:flex-row gap-4">
                                                <div className="flex-grow">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-100 uppercase text-[10px] font-bold tracking-wider">
                                                            {p.status}
                                                        </Badge>
                                                        <h3 className="font-bold text-gray-900">{p.title}</h3>
                                                    </div>
                                                    <p className="text-sm text-gray-600 leading-relaxed">
                                                        {p.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </section>

                            {/* Gestiones Recientes */}
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <History className="h-6 w-6 text-blue-600" />
                                    Gestiones en {detail.name}
                                </h2>
                                <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
                                    <div className="divide-y divide-gray-50">
                                        {detail.gestiones.map((g, idx) => (
                                            <div key={idx} className="p-6 flex items-start justify-between gap-4">
                                                <div className="flex-grow">
                                                    <p className="text-xs font-bold text-gray-400 mb-1">{g.date}</p>
                                                    <h4 className="font-semibold text-gray-900 mb-1">{g.title}</h4>
                                                    <div className="flex items-center gap-1.5">
                                                        {g.status === "RESPONDIDO" ? (
                                                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none px-2 h-5 text-[10px]">RESPONDIDO</Badge>
                                                        ) : g.status === "EN_GESTION" ? (
                                                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-2 h-5 text-[10px]">EN GESTIÓN</Badge>
                                                        ) : (
                                                            <Badge className="bg-gray-100 text-gray-600 hover:bg-gray-100 border-none px-2 h-5 text-[10px]">PENDIENTE</Badge>
                                                        )}
                                                    </div>
                                                </div>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                                                    <ExternalLink className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Right Column: Contacts and Useful Info */}
                        <div className="space-y-8">
                            {/* Contacts */}
                            <section>
                                <div className="bg-blue-900 rounded-3xl p-8 text-white shadow-xl">
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                        <Phone className="h-5 w-5 opacity-80" />
                                        Contactos Útiles
                                    </h3>
                                    <div className="space-y-6">
                                        {detail.contacts.map((c, idx) => (
                                            <div key={idx} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                                <p className="text-sm text-blue-200 mb-1">{c.label}</p>
                                                <div className="flex items-center justify-between">
                                                    {c.phone && (
                                                        <span className="text-lg font-bold font-mono tracking-wider">{c.phone}</span>
                                                    )}
                                                    {c.link && (
                                                        <Link href={c.link} target="_blank" className="hover:text-amber-400 transition-colors text-white/60">
                                                            <Globe className="h-5 w-5" />
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Guías rápidas info */}
                            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-4">¿Cómo funciona esta página?</h3>
                                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                                    Aquí mostramos el avance de los temas críticos para {detail.name}. Si ves que falta un tema urgente, repórtalo para gestionarlo ante las autoridades nacionales.
                                </p>
                                <Link href="/guias" className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:underline">
                                    Ver tutoriales de trámites
                                    <ExternalLink className="h-3 w-3" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-12 bg-gray-900 text-gray-400 text-sm text-center">
                © 2026 Oficina Parlamentaria Cristian Contreras. Distrito 8.
            </footer>
        </div>
    );
}
