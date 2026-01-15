
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    TrendingUp,
    CheckCircle2,
    Clock,
    FileText,
    Users,
    ChevronLeft,
    Download,
    ExternalLink
} from "lucide-react";
import Link from "next/link";

export default function AvancesPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">


            <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-5xl mx-auto">
                    <Link
                        href="/"
                        className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-6"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Volver al inicio
                    </Link>

                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                            Transparencia y Avances
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            Resultados semanales de la gestión parlamentaria y territorial del Distrito 8.
                        </p>
                    </div>

                    {/* Metrics Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                        <Card className="p-6 bg-white border-none shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                                <CheckCircle2 className="h-8 w-8 text-green-600" />
                                <span className="text-xs text-gray-500 font-bold uppercase">Esta semana</span>
                            </div>
                            <p className="text-3xl font-bold text-gray-900">12</p>
                            <p className="text-sm text-gray-600">Casos Resueltos</p>
                        </Card>

                        <Card className="p-6 bg-white border-none shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                                <Clock className="h-8 w-8 text-blue-600" />
                                <span className="text-xs text-gray-500 font-bold uppercase">En Gestión</span>
                            </div>
                            <p className="text-3xl font-bold text-gray-900">28</p>
                            <p className="text-sm text-gray-600">Casos Activos</p>
                        </Card>

                        <Card className="p-6 bg-white border-none shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                                <FileText className="h-8 w-8 text-purple-600" />
                                <span className="text-xs text-gray-500 font-bold uppercase">Oficios</span>
                            </div>
                            <p className="text-3xl font-bold text-gray-900">8</p>
                            <p className="text-sm text-gray-600">Enviados</p>
                        </Card>

                        <Card className="p-6 bg-white border-none shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                                <Users className="h-8 w-8 text-amber-600" />
                                <span className="text-xs text-gray-500 font-bold uppercase">Audiencias</span>
                            </div>
                            <p className="text-3xl font-bold text-gray-900">5</p>
                            <p className="text-sm text-gray-600">Realizadas</p>
                        </Card>
                    </div>

                    {/* Recent Achievements */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <TrendingUp className="h-6 w-6 text-green-600" />
                            Logros de esta Semana
                        </h2>
                        <div className="space-y-4">
                            <Card className="p-6 bg-white border-none shadow-sm">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">
                                                RESUELTO
                                            </Badge>
                                            <span className="text-xs text-gray-400 font-bold">MAIPÚ</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2">
                                            Reparación de luminarias en Av. Pajaritos
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Tras oficio enviado a SERVIU, se concretó la instalación de 15 nuevas luminarias LED en el sector crítico reportado por vecinos.
                                        </p>
                                    </div>
                                    <Button variant="ghost" size="icon" className="text-gray-400">
                                        <ExternalLink className="h-4 w-4" />
                                    </Button>
                                </div>
                            </Card>

                            <Card className="p-6 bg-white border-none shadow-sm">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">
                                                RESUELTO
                                            </Badge>
                                            <span className="text-xs text-gray-400 font-bold">CERRILLOS</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2">
                                            Reposición de señalética vial en zona escolar
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Coordinación exitosa con Municipalidad para instalar señalética de seguridad en el entorno del Colegio República de Israel.
                                        </p>
                                    </div>
                                    <Button variant="ghost" size="icon" className="text-gray-400">
                                        <ExternalLink className="h-4 w-4" />
                                    </Button>
                                </div>
                            </Card>

                            <Card className="p-6 bg-white border-none shadow-sm">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none">
                                                EN GESTIÓN
                                            </Badge>
                                            <span className="text-xs text-gray-400 font-bold">TIL TIL</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2">
                                            Fiscalización de vertedero y gestión de olores
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Oficio enviado a Superintendencia del Medio Ambiente solicitando fiscalización urgente. Respuesta esperada en 10 días hábiles.
                                        </p>
                                    </div>
                                    <Button variant="ghost" size="icon" className="text-gray-400">
                                        <ExternalLink className="h-4 w-4" />
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </section>

                    {/* Documents Library */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <FileText className="h-6 w-6 text-blue-600" />
                            Biblioteca de Oficios y Evidencias
                        </h2>
                        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
                            <div className="divide-y divide-gray-50">
                                <div className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                    <div className="flex-grow">
                                        <p className="font-bold text-gray-900 mb-1">
                                            Oficio N° 245 - Solicitud Fiscalización Vertedero Til Til
                                        </p>
                                        <p className="text-sm text-gray-500">10 ENE 2026 • PDF • 245 KB</p>
                                    </div>
                                    <Button variant="ghost" size="sm" className="gap-2">
                                        <Download className="h-4 w-4" />
                                        Descargar
                                    </Button>
                                </div>
                                <div className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                    <div className="flex-grow">
                                        <p className="font-bold text-gray-900 mb-1">
                                            Respuesta SERVIU - Luminarias Av. Pajaritos
                                        </p>
                                        <p className="text-sm text-gray-500">08 ENE 2026 • PDF • 189 KB</p>
                                    </div>
                                    <Button variant="ghost" size="sm" className="gap-2">
                                        <Download className="h-4 w-4" />
                                        Descargar
                                    </Button>
                                </div>
                                <div className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                    <div className="flex-grow">
                                        <p className="font-bold text-gray-900 mb-1">
                                            Acta Reunión Junta de Vecinos Los Presidentes
                                        </p>
                                        <p className="text-sm text-gray-500">05 ENE 2026 • PDF • 312 KB</p>
                                    </div>
                                    <Button variant="ghost" size="sm" className="gap-2">
                                        <Download className="h-4 w-4" />
                                        Descargar
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="mt-12 bg-blue-900 rounded-3xl p-8 text-white text-center">
                        <h3 className="text-2xl font-bold mb-4">¿Tienes un problema que reportar?</h3>
                        <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                            Ingresa tu caso para que podamos gestionarlo ante las autoridades correspondientes.
                        </p>
                        <Button asChild className="bg-white text-blue-900 hover:bg-blue-50 h-12 px-8 rounded-2xl">
                            <Link href="/ingresar-caso">Ingresar Caso</Link>
                        </Button>
                    </div>
                </div>
            </main>

            <footer className="py-12 bg-gray-900 text-gray-400 text-sm text-center">
                © 2026 Oficina Parlamentaria Cristian Contreras. Distrito 8.
            </footer>
        </div>
    );
}
