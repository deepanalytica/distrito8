
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarDays, ChevronLeft, Users, Clock } from "lucide-react";
import Link from "next/link";

export default function AudienciaPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">


            <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-3xl mx-auto">
                    <Link
                        href="/"
                        className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-6"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Volver al inicio
                    </Link>

                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-blue-100 p-3 rounded-2xl">
                                <CalendarDays className="h-8 w-8 text-blue-600" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">Solicitar Audiencia</h1>
                                <p className="text-gray-600">Reunión con el Diputado Cristian Contreras</p>
                            </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8">
                            <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                                <Users className="h-5 w-5" />
                                ¿Quiénes pueden solicitar audiencia?
                            </h3>
                            <ul className="space-y-2 text-sm text-blue-800">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-0.5">•</span>
                                    <span>Juntas de Vecinos y organizaciones sociales del Distrito 8</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-0.5">•</span>
                                    <span>Dirigentes gremiales y sindicales</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-0.5">•</span>
                                    <span>Autoridades locales y municipales</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-0.5">•</span>
                                    <span>Grupos de vecinos (mínimo 5 personas) con problemática común</span>
                                </li>
                            </ul>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nombre de la Organización / Grupo
                                    </label>
                                    <Input placeholder="Ej: Junta de Vecinos Los Aromos" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Comuna
                                    </label>
                                    <Input placeholder="Selecciona tu comuna" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nombre del Representante
                                    </label>
                                    <Input placeholder="Nombre completo" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Correo Electrónico
                                    </label>
                                    <Input type="email" placeholder="correo@ejemplo.cl" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Teléfono de Contacto
                                </label>
                                <Input placeholder="+56 9 ..." />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Motivo de la Audiencia
                                </label>
                                <Textarea
                                    placeholder="Describe brevemente el tema que deseas tratar en la reunión..."
                                    className="min-h-[120px]"
                                />
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-gray-600" />
                                    Modalidades de Audiencia
                                </h4>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="modalidad" value="presencial" className="text-blue-600" />
                                        <span>Presencial en oficina parlamentaria</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="modalidad" value="terreno" className="text-blue-600" />
                                        <span>Visita en terreno (tu comuna)</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="modalidad" value="virtual" className="text-blue-600" />
                                        <span>Videollamada (Zoom/Meet)</span>
                                    </label>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 h-12">
                                    Enviar Solicitud
                                </Button>
                                <Button type="button" variant="outline" asChild className="h-12">
                                    <Link href="/">Cancelar</Link>
                                </Button>
                            </div>
                        </form>

                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <p className="text-sm text-gray-500 text-center">
                                <strong>Tiempo de respuesta:</strong> Nos contactaremos contigo en un plazo máximo de 5 días hábiles para coordinar fecha y hora.
                            </p>
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
