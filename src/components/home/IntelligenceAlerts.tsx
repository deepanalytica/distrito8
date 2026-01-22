"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    AlertTriangle,
    ArrowRight,
    ShieldCheck,
    Zap,
    MessageSquare,
    MapPin,
    Clock
} from "lucide-react";
import { motion } from "framer-motion";

const ALERTS = [
    {
        id: 1,
        type: "CRÍTICO",
        title: "CRISIS DE SEGURIDAD EN PUDAHUEL",
        description: "Denuncias masivas por robo con violencia en sector sur. Se ha enviado oficio urgente al Ministerio del Interior solicitando intervención de unidades especiales.",
        location: "Pudahuel",
        time: "Hace 2 horas",
        color: "red",
        impact: "Estratégico"
    },
    {
        id: 2,
        type: "GESTIÓN",
        title: "FISCALIZACIÓN VERTEDERO TILTIL",
        description: "Nuevas emanaciones reportadas. Nuestro equipo jurídico prepara recurso de protección por vulneración de derechos medioambientales.",
        location: "Tiltil",
        time: "Hace 5 horas",
        color: "amber",
        impact: "Social"
    },
    {
        id: 3,
        type: "LOGRO",
        title: "APROBACIÓN LEY 'CHAO CABLES'",
        description: "Se concreta obligatoriedad de retiro de cables en desuso. Gran victoria para la estética y seguridad de nuestros barrios.",
        location: "Distrito 8",
        time: "Ayer",
        color: "emerald",
        impact: "Legislativo"
    }
];

export function IntelligenceAlerts() {
    return (
        <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 px-4">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-[0.2em]">
                            <Zap className="h-3 w-3" />
                            Actualizaciones en Tiempo Real
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-none">
                            INTELIGENCIA <br />
                            <span className="text-gradient-gold">TERRITORIAL</span>
                        </h2>
                    </div>
                    <Button variant="outline" className="border-white/10 text-slate-400 hover:bg-white/5 hover:text-white rounded-none border-2 h-12 px-6 font-bold text-xs tracking-widest uppercase mb-2">
                        Ver Historial de Gestión
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {ALERTS.map((alert, index) => (
                        <motion.div
                            key={alert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`
                                group bg-slate-900/40 border border-white/5 p-8 relative overflow-hidden transition-all duration-300 hover:border-amber-500/30
                                ${index === 0 ? 'md:col-span-1 border-red-500/20 shadow-[0_0_40px_rgba(239,68,68,0.05)]' : ''}
                            `}
                        >
                            {/* Accent Line */}
                            <div className={`absolute left-0 top-0 w-1 h-full ${alert.color === 'red' ? 'bg-red-500' :
                                    alert.color === 'amber' ? 'bg-amber-500' : 'bg-emerald-500'
                                }`} />

                            <div className="flex justify-between items-start mb-6">
                                <Badge className={`
                                    rounded-none px-3 py-1 text-[10px] font-black tracking-widest
                                    ${alert.color === 'red' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                                        alert.color === 'amber' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                                            'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'}
                                `}>
                                    {alert.type}
                                </Badge>
                                <div className="flex items-center gap-2 text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                                    <Clock className="h-3 w-3" />
                                    {alert.time}
                                </div>
                            </div>

                            <h3 className="text-xl font-black text-white mb-4 group-hover:text-amber-500 transition-colors leading-tight">
                                {alert.title}
                            </h3>

                            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light line-clamp-3 italic">
                                "{alert.description}"
                            </p>

                            <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/5 rounded-sm">
                                        <MapPin className="h-4 w-4 text-slate-500" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Localidad</div>
                                        <div className="text-xs font-black text-white uppercase">{alert.location}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Efecto</div>
                                    <div className="text-xs font-black text-amber-500/80 uppercase">{alert.impact}</div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Button variant="ghost" className="p-0 h-auto hover:bg-transparent text-white group/btn">
                                    <span className="flex items-center gap-2 text-xs font-black tracking-widest uppercase">
                                        Detalles de la Gestión
                                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </span>
                                </Button>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-8 h-8 opacity-10">
                                <div className="absolute top-0 right-0 w-full h-[1px] bg-white"></div>
                                <div className="absolute top-0 right-0 w-[1px] h-full bg-white"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8 px-4 opacity-50 hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-4">
                        <ShieldCheck className="h-8 w-8 text-amber-500" />
                        <div>
                            <div className="text-xs font-black text-white uppercase tracking-widest">Canal de Denuncia Oficial</div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Oficina Parlamentaria Distrito 8</div>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="text-right">
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Respuesta Promedio</div>
                            <div className="text-sm font-black text-white font-mono">24-48 HORAS</div>
                        </div>
                        <div className="text-right border-l border-white/10 pl-6">
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Casos Cerrados</div>
                            <div className="text-sm font-black text-amber-500 font-mono">1,204</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
