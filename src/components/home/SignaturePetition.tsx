"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Signature,
    Send,
    CheckCircle2,
    Users,
    Target,
    Activity,
    Lock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";

export function SignaturePetition() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
    const [signatures, setSignatures] = useState(45210);
    const target = 50000;
    const progress = (signatures / target) * 100;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setTimeout(() => {
            setStatus("success");
            setSignatures(prev => prev + 1);
        }, 1500);
    };

    return (
        <section id="petitorio" className="py-24 px-4 bg-slate-900 overflow-hidden relative border-y border-white/5">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 0h20v20H0V0z' fill='%23fff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
            }} />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Strategic Rationale */}
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest mb-6">
                                <Target className="h-3 w-3" />
                                Objetivo Estratégico #1
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-none mb-6">
                                PETICIÓN NACIONAL POR EL <br />
                                <span className="text-gradient-gold uppercase">EQUILIBRIO JUDICIAL</span>
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed font-light italic border-l-2 border-amber-500/30 pl-6">
                                "Exigimos una reforma profunda al sistema procesal penal. No más puertas giratorias para el crimen organizado. Es hora de que la balanza se incline hacia las víctimas."
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="bg-white/5 p-6 border border-white/10 rounded-sm">
                                <Users className="h-6 w-6 text-amber-500 mb-2" />
                                <div className="text-2xl font-black text-white">{signatures.toLocaleString()}</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Firmas Recabadas</div>
                            </div>
                            <div className="bg-white/5 p-6 border border-white/10 rounded-sm">
                                <Activity className="h-6 w-6 text-blue-400 mb-2" />
                                <div className="text-2xl font-black text-white">4.2k</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Actividad Hoy</div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                                <span className="text-slate-500">Progreso de la Campaña</span>
                                <span className="text-amber-500">{progress.toFixed(1)}%</span>
                            </div>
                            <Progress value={progress} className="h-2 bg-white/5" />
                            <p className="text-[10px] text-slate-500 text-right">Objetivo: 50.000 firmas para presentación formal en el Congreso.</p>
                        </div>
                    </div>

                    {/* Right Side: Sophisticated Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-950/50 p-8 md:p-12 border border-amber-500/20 backdrop-blur-xl relative"
                    >
                        <div className="absolute -top-4 -right-4 bg-amber-500 p-3 shadow-xl">
                            <Signature className="h-6 w-6 text-slate-950" />
                        </div>

                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12 space-y-6"
                                >
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500/20 rounded-full mb-4">
                                        <CheckCircle2 className="h-10 w-10 text-amber-500" />
                                    </div>
                                    <h3 className="text-3xl font-black text-white">FIRMA REGISTRADA</h3>
                                    <p className="text-slate-400 text-lg">Tu respaldo ha sido incorporado formalmente a nuestra ofensiva parlamentaria.</p>
                                    <Button
                                        onClick={() => setStatus("idle")}
                                        variant="outline"
                                        className="border-white/10 hover:bg-white/5 text-xs uppercase tracking-widest"
                                    >
                                        Firmar otra vez (familiar)
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="space-y-2">
                                        <Label className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500">Nombre Completo</Label>
                                        <Input
                                            required
                                            placeholder="EJ. JUAN PÉREZ GONZÁLEZ"
                                            className="bg-white/5 border-white/10 rounded-none h-14 focus:border-amber-500/50 focus:ring-0 text-white uppercase placeholder:text-slate-700 font-bold"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500">RUT / Identificación</Label>
                                            <Input
                                                required
                                                placeholder="12.345.678-9"
                                                className="bg-white/5 border-white/10 rounded-none h-14 focus:border-amber-500/50 focus:ring-0 text-white placeholder:text-slate-700 font-bold"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500">Correo Electrónico</Label>
                                            <Input
                                                required
                                                type="email"
                                                placeholder="nombre@email.com"
                                                className="bg-white/5 border-white/10 rounded-none h-14 focus:border-amber-500/50 focus:ring-0 text-white placeholder:text-slate-700 font-bold"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500">Comuna de Residencia</Label>
                                        <select className="w-full bg-white/5 border-white/10 rounded-none h-14 px-3 text-white focus:border-amber-500/50 outline-none font-bold uppercase text-sm">
                                            <option className="bg-slate-900">Maipú</option>
                                            <option className="bg-slate-900">Pudahuel</option>
                                            <option className="bg-slate-900">Estación Central</option>
                                            <option className="bg-slate-900">Cerrillos</option>
                                            <option className="bg-slate-900">Quilicura</option>
                                            <option className="bg-slate-900">Colina</option>
                                            <option className="bg-slate-900">Lampa</option>
                                            <option className="bg-slate-900">Tiltil</option>
                                        </select>
                                    </div>

                                    <div className="flex items-start gap-4 pt-2">
                                        <input type="checkbox" required className="mt-1 accent-amber-500" id="terms" />
                                        <label htmlFor="terms" className="text-[10px] text-slate-500 leading-tight uppercase font-bold tracking-wider">
                                            Doy mi respaldo formal a las propuestas legislativas del Diputado Cristian Contreras y autorizo el uso de estos datos para fines de representación política y comunicación directa.
                                        </label>
                                    </div>

                                    <Button
                                        disabled={status === "loading"}
                                        type="submit"
                                        className="w-full h-16 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-lg rounded-none shadow-lg transition-all group"
                                    >
                                        {status === "loading" ? (
                                            <span className="flex items-center gap-2">REGISTRANDO...</span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                ENVIAR RESPALDO FORMAL
                                                <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </span>
                                        )}
                                    </Button>

                                    <div className="flex items-center justify-center gap-2 text-[10px] text-slate-600 font-bold uppercase tracking-widest pt-2">
                                        <Lock className="h-3 w-3" />
                                        Conexión Encriptada Segura - Datos Protegidos
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
