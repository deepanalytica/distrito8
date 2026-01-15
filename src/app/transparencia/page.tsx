"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    Shield
} from "lucide-react";

export default function TransparenciaPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Eye className="h-16 w-16 mx-auto mb-4" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Transparencia Total
                        </h1>
                        <p className="text-xl text-amber-100">
                            Rendición de cuentas permanente. Cada acción documentada y disponible para la ciudadanía.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-7xl mx-auto">
                    {/* Stats Overview */}
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        <Card className="border-2 border-amber-200">
                            <CardContent className="pt-6 text-center">
                                <CheckCircle2 className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                                <div className="text-3xl font-bold text-amber-600 mb-1">100%</div>
                                <div className="text-sm text-gray-700">Votaciones Públicas</div>
                            </CardContent>
                        </Card>
                        <Card className="border-2 border-amber-200">
                            <CardContent className="pt-6 text-center">
                                <DollarSign className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                                <div className="text-3xl font-bold text-amber-600 mb-1">100%</div>
                                <div className="text-sm text-gray-700">Gastos Documentados</div>
                            </CardContent>
                        </Card>
                        <Card className="border-2 border-amber-200">
                            <CardContent className="pt-6 text-center">
                                <Clock className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                                <div className="text-3xl font-bold text-amber-600 mb-1">24h</div>
                                <div className="text-sm text-gray-700">Actualización</div>
                            </CardContent>
                        </Card>
                        <Card className="border-2 border-amber-200">
                            <CardContent className="pt-6 text-center">
                                <Users className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                                <div className="text-3xl font-bold text-amber-600 mb-1">100%</div>
                                <div className="text-sm text-gray-700">Reuniones Registradas</div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Deputy Information */}
                    <Card className="mb-8 border-2 border-amber-200">
                        <CardHeader>
                            <CardTitle className="text-2xl">Información del Diputado</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold text-lg mb-4">Datos Personales</h3>
                                    <dl className="space-y-2">
                                        <div>
                                            <dt className="text-sm text-gray-600">Nombre Completo</dt>
                                            <dd className="font-medium">{DEPUTY_INFO.fullName}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-sm text-gray-600">Conocido como</dt>
                                            <dd className="font-medium">{DEPUTY_INFO.nickname}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-sm text-gray-600">Partido</dt>
                                            <dd className="font-medium">{DEPUTY_INFO.party}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-sm text-gray-600">Distrito</dt>
                                            <dd className="font-medium">Distrito {DEPUTY_INFO.district}</dd>
                                        </div>
                                    </dl>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-4">Mandato</h3>
                                    <dl className="space-y-2">
                                        <div>
                                            <dt className="text-sm text-gray-600">Fecha de Asunción</dt>
                                            <dd className="font-medium">11 de Marzo de 2026</dd>
                                        </div>
                                        <div>
                                            <dt className="text-sm text-gray-600">Visión</dt>
                                            <dd className="font-medium">{DEPUTY_INFO.vision}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-sm text-gray-600">Biografía</dt>
                                            <dd className="text-sm text-gray-700">{DEPUTY_INFO.bio}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Votaciones Section */}
                    <Card className="mb-8 border-2 border-amber-200">
                        <CardHeader>
                            <CardTitle className="text-2xl flex items-center gap-2">
                                <FileText className="h-6 w-6 text-amber-600" />
                                Votaciones en el Congreso
                            </CardTitle>
                            <CardDescription>
                                Registro completo de votaciones y posiciones en proyectos de ley
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                                <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                                <p className="text-gray-700 mb-2">
                                    <strong>Próximamente disponible</strong>
                                </p>
                                <p className="text-sm text-gray-600">
                                    El registro de votaciones estará disponible después de la asunción el 11 de marzo de 2026.
                                    Se integrará con la API del Congreso Nacional para mostrar datos en tiempo real.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Proyectos de Ley */}
                    <Card className="mb-8 border-2 border-amber-200">
                        <CardHeader>
                            <CardTitle className="text-2xl flex items-center gap-2">
                                <Shield className="h-6 w-6 text-amber-600" />
                                Proyectos de Ley Prioritarios
                            </CardTitle>
                            <CardDescription>
                                Iniciativas legislativas comprometidas para el Distrito 8
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {LEGISLATIVE_PROJECTS.map((project) => (
                                    <div
                                        key={project.id}
                                        className="border-2 border-gray-200 rounded-lg p-4 hover:border-amber-300 transition-colors"
                                    >
                                        <div className="flex items-start justify-between gap-4 mb-2">
                                            <h3 className="font-bold text-lg">{project.title}</h3>
                                            <Badge
                                                variant={project.priority === "alta" ? "default" : "secondary"}
                                                className={project.priority === "alta" ? "bg-red-600" : ""}
                                            >
                                                {project.priority === "alta" ? "Alta Prioridad" : "Media Prioridad"}
                                            </Badge>
                                        </div>
                                        <p className="text-gray-700 mb-2">{project.description}</p>
                                        <div className="flex items-center gap-2">
                                            <Badge variant="outline" className="text-xs">
                                                {project.category}
                                            </Badge>
                                            <Badge variant="outline" className="text-xs bg-yellow-50">
                                                En Preparación
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Gastos Públicos */}
                    <Card className="mb-8 border-2 border-amber-200">
                        <CardHeader>
                            <CardTitle className="text-2xl flex items-center gap-2">
                                <DollarSign className="h-6 w-6 text-amber-600" />
                                Gastos Públicos
                            </CardTitle>
                            <CardDescription>
                                Detalle de uso de recursos y presupuesto parlamentario
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                                <p className="text-gray-700 mb-2">
                                    <strong>Próximamente disponible</strong>
                                </p>
                                <p className="text-sm text-gray-600">
                                    El registro de gastos estará disponible mensualmente a partir de marzo 2026.
                                    Incluirá desglose detallado de todos los gastos parlamentarios.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Reuniones y Lobbies */}
                    <Card className="mb-8 border-2 border-amber-200">
                        <CardHeader>
                            <CardTitle className="text-2xl flex items-center gap-2">
                                <Users className="h-6 w-6 text-amber-600" />
                                Reuniones y Lobbies
                            </CardTitle>
                            <CardDescription>
                                Registro público de todas las reuniones y audiencias
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                                <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                                <p className="text-gray-700 mb-2">
                                    <strong>Próximamente disponible</strong>
                                </p>
                                <p className="text-sm text-gray-600">
                                    Todas las reuniones serán registradas y publicadas en un plazo máximo de 24 horas.
                                    Incluirá participantes, temas tratados y compromisos adquiridos.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Compromiso de Transparencia */}
                    <Card className="border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50">
                        <CardContent className="pt-6">
                            <div className="text-center max-w-3xl mx-auto">
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                                    Compromiso de Transparencia
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    La transparencia no es opcional, es un deber fundamental. Cada acción, cada decisión,
                                    cada peso gastado será documentado y puesto a disposición de la ciudadanía.
                                </p>
                                <blockquote className="text-lg italic text-amber-900 border-l-4 border-amber-500 pl-4">
                                    &quot;La rendición de cuentas permanente es la base de la confianza entre
                                    representantes y representados.&quot;
                                </blockquote>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
