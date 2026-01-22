"use client";

import { motion } from "framer-motion";
import { ScrollText, ChevronLeft, Quote, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ManifiestoPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-serif selection:bg-amber-500/30">
            {/* Header / Navigation */}
            <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                        <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-sans text-xs font-bold uppercase tracking-widest">Volver al Portal</span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <Shield className="h-6 w-6 text-amber-500" />
                        <span className="font-sans text-sm font-black uppercase tracking-[0.2em] text-white">Manifiesto XXI</span>
                    </div>
                </div>
            </header>

            <main className="pt-32 pb-24 px-4">
                <article className="container mx-auto max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20 space-y-6"
                    >
                        <div className="inline-block p-4 bg-amber-500/5 border border-amber-500/20 rounded-full mb-4">
                            <ScrollText className="h-8 w-8 text-amber-500" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white italic leading-tight">
                            El Camino del <br />
                            <span className="text-gradient-gold not-italic">EQUILIBRIO</span>
                        </h1>
                        <p className="font-sans text-xs font-bold uppercase tracking-[0.4em] text-slate-500">
                            Hacia una Ofensiva Estratégica Nacional
                        </p>
                    </motion.div>

                    <div className="space-y-12 text-xl leading-relaxed text-slate-300">
                        <p className="first-letter:text-7xl first-letter:font-black first-letter:text-amber-500 first-letter:mr-3 first-letter:float-left">
                            Chile no necesita más promesas, necesita un rumbo. El sistema actual ha colapsado bajo el peso de la ineficiencia, la corrupción y el desorden. Lo que aquí presentamos no es un programa electoral, es una hoja de ruta para la restauración del Estado y la protección del ciudadano.
                        </p>

                        <div className="py-8 my-8 border-y border-white/10 relative">
                            <Quote className="absolute -top-4 left-0 h-8 w-8 text-amber-500/20" />
                            <p className="text-2xl md:text-3xl font-black italic text-white text-center leading-snug">
                                &quot;El equilibrio no es tibieza; es la tensión perfecta entre la autoridad necesaria y la libertad irrenunciable.&quot;
                            </p>
                        </div>

                        <section className="space-y-6">
                            <h2 className="font-sans text-xs font-black uppercase tracking-[0.3em] text-amber-500">I. La Soberanía como Pilar</h2>
                            <p>
                                Entendemos la soberanía no como un concepto abstracto, sino como la capacidad real de un pueblo para decidir su destino sin tutelajes internacionales ideologizados. Chile debe recuperar su autonomía frente a agendas globales que no consideran nuestra realidad territorial.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="font-sans text-xs font-black uppercase tracking-[0.3em] text-amber-500">II. Seguridad: El Derecho Primordial</h2>
                            <p>
                                Sin seguridad, no hay libertad. No puede existir un Estado que abdique de su primera obligación: el control del territorio. Nuestra propuesta es clara: tolerancia cero, desarticulación total del crimen organizado y un sistema de justicia que piense en la víctima, no en el victimario.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="font-sans text-xs font-black uppercase tracking-[0.3em] text-amber-500">III. Un Estado Eficiente (Menos es Más)</h2>
                            <p>
                                La &apos;grasa estatal&apos; consume el esfuerzo de todos los chilenos. Proponemos una reducción radical de la burocracia, la eliminación de cargos políticos de confianza y una digitalización total que devuelva el tiempo a las personas. Un Estado pequeño pero fuerte, ágil y al servicio real del ciudadano de a pie.
                            </p>
                        </section>

                        <div className="bg-white/5 p-12 border border-white/10 space-y-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full" />
                            <h3 className="text-3xl font-black text-white italic">El Compromiso del Distrito 8</h3>
                            <p className="font-sans text-base text-slate-400">
                                Como su representante, mi labor no termina en el hemiciclo. El Distrito 8 será el bastión desde donde demostraremos que la política territorial de impacto es posible. Cada firma en nuestro petitorio, cada alerta ciudadana atendida, es un paso más en esta ofensiva hacia el equilibrio.
                            </p>
                            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-none font-sans font-black w-full py-8 text-lg">
                                <Link href="/#petitorio">UNIRSE A LA OFENSIVA</Link>
                            </Button>
                        </div>
                    </div>

                    <footer className="mt-24 pt-12 border-t border-white/5 text-center">
                        <div className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-slate-600">
                            Oficina Parlamentaria XXI - Cristian Contreras Radovic
                        </div>
                        <div className="font-sans text-[8px] text-slate-700 mt-2 tracking-widest">
                            © 2026 TODOS LOS DERECHOS RESERVADOS. PROHIBIDA SU REPRODUCCIÓN PARCIAL SIN ATRIBUCIÓN.
                        </div>
                    </footer>
                </article>
            </main>
        </div>
    );
}
