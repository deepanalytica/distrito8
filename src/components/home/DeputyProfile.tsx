
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

export function DeputyProfile() {
    return (
        <section className="py-20 px-4 bg-white overflow-hidden relative">
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>

                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/images/cristian/cristian1.png"
                                alt="Cristian Contreras Radovic"
                                width={600}
                                height={700}
                                className="w-full h-auto object-cover bg-gradient-to-br from-slate-100 to-slate-200"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                                <p className="font-serif italic text-lg opacity-90">
                                    &quot;El equilibrio es el único camino para ser feliz.&quot;
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                                <BookOpen className="h-4 w-4" />
                                Biografía
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Cristian Contreras <span className="text-indigo-600">&quot;Dr. File&quot;</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Periodista, Doctor en Filosofía y escritor. Con una destacada trayectoria en medios de comunicación y una profunda vocación intelectual, ha dedicado su vida a la búsqueda de la verdad y el conocimiento.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <Card className="p-6 border-l-4 border-l-indigo-600 shadow-sm bg-indigo-50/30 border-t-0 border-r-0 border-b-0 rounded-r-xl rounded-l-none">
                                <h3 className="font-bold text-gray-900 text-xl mb-2 flex items-center gap-2">
                                    Formación Académica
                                </h3>
                                <p className="text-gray-700">
                                    Doctor en Filosofía de la Ciencia, Magíster en Filosofía Política y Periodista. Su formación multidisciplinaria le permite abordar los desafíos legislativos con una visión integral y profunda.
                                </p>
                            </Card>

                            <Card className="p-6 border-l-4 border-l-emerald-600 shadow-sm bg-emerald-50/30 border-t-0 border-r-0 border-b-0 rounded-r-xl rounded-l-none">
                                <h3 className="font-bold text-gray-900 text-xl mb-2 flex items-center gap-2">
                                    Visión Política
                                </h3>
                                <p className="text-gray-700">
                                    Fundador del movimiento &quot;Centro Unido&quot; y promotor de la &quot;Política del Equilibrio&quot;. Busca superar la dicotomía izquierda-derecha mediante soluciones pragmáticas basadas en la razón y la ética.
                                </p>
                            </Card>
                        </div>

                        <div className="pt-4">
                            <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 h-14 text-lg shadow-lg">
                                <Link href="/transparencia">
                                    Conoce más sobre mi trabajo
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
