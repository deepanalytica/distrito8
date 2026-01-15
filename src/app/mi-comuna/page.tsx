import { Navbar } from "@/components/layout/Navbar";
import { COMMUNES } from "@/lib/constants";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MiComunaIndex() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Distrito 8: Tu Territorio</h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Representamos a 8 comunas con realidades diversas. Selecciona la tuya para ver las prioridades locales, gestiones en curso y recursos útiles.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {COMMUNES.map((commune) => (
                        <Link key={commune.slug} href={`/mi-comuna/${commune.slug}`}>
                            <Card className="h-full hover:shadow-xl transition-all duration-300 border-none bg-white group overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="h-32 bg-blue-900 flex items-center justify-center group-hover:bg-blue-800 transition-colors">
                                        <MapPin className="h-10 w-10 text-white/50 group-hover:text-white/80 transition-all group-hover:scale-110" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">{commune.name}</h3>
                                        <p className="text-sm text-gray-500 mb-4">
                                            Ver prioridades y gestiones en {commune.name}
                                        </p>
                                        <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                                            Explorar Comuna
                                            <ArrowRight className="h-4 w-4 ml-1" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                <section className="mt-20 bg-white rounded-3xl p-8 md:p-12 border border-blue-50 max-w-5xl mx-auto shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿No ves tu problema listado?</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Cada comuna tiene desafíos únicos. Si tienes una situación específica que requiere atención parlamentaria, ingresa un caso ahora.
                            </p>
                            <Button asChild className="bg-blue-600 hover:bg-blue-700 h-12 px-8 rounded-xl shadow-md">
                                <Link href="/ingresar-caso">Ingresar Caso de mi Comuna</Link>
                            </Button>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h4 className="font-bold text-blue-900 mb-4 uppercase text-xs tracking-widest">Resumen Territorial</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500">Gestiones activas</span>
                                    <span className="font-bold text-gray-900">124</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500">Comunas cubiertas</span>
                                    <span className="font-bold text-gray-900">8 / 8</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500">Última actualización</span>
                                    <span className="font-bold text-gray-900">Hoy, 16:30</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-12 bg-gray-900 text-gray-400 text-sm text-center">
                © 2026 Oficina Parlamentaria Cristian Contreras. Distrito 8.
            </footer>
        </div>
    );
}
