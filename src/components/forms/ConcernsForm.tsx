"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { COMMUNES } from "@/lib/constants";
import { CheckCircle2, Shield, Eye, FileWarning, Lightbulb, Lock, Send, ShieldCheck, MapPin, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function ConcernsForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({
        tipologia: "",
        comuna: "",
        sector: "",
        descripcion: "",
        evidencia: "no",
        contacto: "",
        anonimo: "si"
    });

    useEffect(() => {
        const tipo = searchParams.get("tipo");
        if (tipo) {
            setFormData(prev => ({ ...prev, tipologia: tipo }));
        }
    }, [searchParams]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulating high-security encription and sending
        setTimeout(() => {
            console.log("Strategic Report - Encrypted:", btoa(JSON.stringify(formData)));
            setLoading(false);
            setSubmitted(true);
        }, 2000);
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 px-4"
            >
                <div className="relative inline-block mb-8">
                    <div className="bg-emerald-500/10 rounded-full p-6 border border-emerald-500/20">
                        <ShieldCheck className="h-16 w-16 text-emerald-500" />
                    </div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute -bottom-2 -right-2 bg-slate-950 p-2 rounded-full border border-emerald-500"
                    >
                        <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                    </motion.div>
                </div>

                <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">¡Reporte Encriptado y Enviado!</h3>
                <p className="text-gray-400 mb-10 max-w-lg mx-auto font-light leading-relaxed">
                    Su información ha sido procesada mediante nuestros protocolos de seguridad parlamentaria.
                    Agradecemos su valiente aporte a la red de inteligencia del <span className="text-amber-500 font-bold">Distrito 8</span>.
                </p>

                <div className="bg-slate-950/50 border border-white/5 rounded-2xl p-6 mb-10 max-w-md mx-auto text-left font-mono text-[10px] text-emerald-500/60 leading-tight">
                    <div className="mb-2 uppercase text-gray-600 font-bold">Receipt Log:</div>
                    &gt; SESSION_OPEN: {new Date().toISOString()}<br />
                    &gt; ENCRYPTION_PROVIDER: CHACHA20-POLY1305<br />
                    &gt; PACKET_STATUS: VERIFIED_SIGNED_CAPTURED<br />
                    &gt; REFERENCE_ID: RPT-{Math.random().toString(36).substring(7).toUpperCase()}
                </div>

                <Button
                    onClick={() => {
                        setSubmitted(false);
                        setFormData({
                            tipologia: "",
                            comuna: "",
                            sector: "",
                            descripcion: "",
                            evidencia: "no",
                            contacto: "",
                            anonimo: "si"
                        });
                    }}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold h-14 px-10 rounded-2xl shadow-xl transition-all"
                >
                    Generar Nuevo Reporte de Inteligencia
                </Button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-10">
            {/* Form Steps / Progress Area - Subtle */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <Label className="text-xs uppercase tracking-[0.2em] font-black text-amber-500/60 flex items-center gap-2">
                        <Activity className="h-3 w-3" />
                        Clasificación Estratégica
                    </Label>
                    <Select
                        required
                        value={formData.tipologia}
                        onValueChange={(value) => setFormData({ ...formData, tipologia: value })}
                    >
                        <SelectTrigger className="h-14 bg-slate-950/40 border-white/5 focus:border-amber-500/50 focus:ring-amber-500/20 text-white rounded-2xl">
                            <SelectValue placeholder="Categoría de Información" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-white/10 text-white">
                            <SelectItem value="seguridad" className="focus:bg-red-500/10 focus:text-red-500">
                                <div className="flex items-center gap-3">
                                    <div className="p-1.5 bg-red-500/10 rounded-lg"><Shield className="h-4 w-4 text-red-500" /></div>
                                    <span>Seguridad y Narcotráfico</span>
                                </div>
                            </SelectItem>
                            <SelectItem value="corrupcion" className="focus:bg-amber-500/10 focus:text-amber-500">
                                <div className="flex items-center gap-3">
                                    <div className="p-1.5 bg-amber-500/10 rounded-lg"><Eye className="h-4 w-4 text-amber-500" /></div>
                                    <span>Probidad y Corrupción Pública</span>
                                </div>
                            </SelectItem>
                            <SelectItem value="infraestructura" className="focus:bg-orange-500/10 focus:text-orange-500">
                                <div className="flex items-center gap-3">
                                    <div className="p-1.5 bg-orange-500/10 rounded-lg"><FileWarning className="h-4 w-4 text-orange-500" /></div>
                                    <span>Riesgos de Infraestructura</span>
                                </div>
                            </SelectItem>
                            <SelectItem value="propuesta" className="focus:bg-blue-500/10 focus:text-blue-500">
                                <div className="flex items-center gap-3">
                                    <div className="p-1.5 bg-blue-500/10 rounded-lg"><Lightbulb className="h-4 w-4 text-blue-500" /></div>
                                    <span>Levantamiento de Propuesta</span>
                                </div>
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-4">
                    <Label className="text-xs uppercase tracking-[0.2em] font-black text-amber-500/60 flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        Nodo Territorial
                    </Label>
                    <Select
                        required
                        value={formData.comuna}
                        onValueChange={(value) => setFormData({ ...formData, comuna: value })}
                    >
                        <SelectTrigger className="h-14 bg-slate-950/40 border-white/5 focus:border-amber-500/50 focus:ring-amber-500/20 text-white rounded-2xl">
                            <SelectValue placeholder="Seleccione Comuna" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-white/10 text-white">
                            {COMMUNES.map((commune) => (
                                <SelectItem key={commune.slug} value={commune.slug} className="focus:bg-amber-500/10 focus:text-amber-500">
                                    {commune.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="space-y-4">
                <Label htmlFor="sector" className="text-xs uppercase tracking-[0.2em] font-black text-amber-500/60">Ubicación Precisa (Referencial)</Label>
                <Input
                    id="sector"
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    placeholder="Ej: Barrio Poniente, Intersección X con Y..."
                    className="h-14 bg-slate-950/40 border-white/5 focus:border-amber-500/50 focus:ring-amber-500/20 text-white rounded-2xl placeholder:text-gray-600"
                />
            </div>

            <div className="space-y-4">
                <Label htmlFor="descripcion" className="text-xs uppercase tracking-[0.2em] font-black text-amber-500/60">Análisis y Detalle de la Situación</Label>
                <Textarea
                    id="descripcion"
                    required
                    value={formData.descripcion}
                    onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                    placeholder="Describa el patrón de comportamiento, las irregularidades detectadas o la necesidad urgente observada..."
                    rows={6}
                    className="resize-none bg-slate-950/40 border-white/5 focus:border-amber-500/50 focus:ring-amber-500/20 text-white rounded-[1.5rem] placeholder:text-gray-600 p-6 leading-relaxed"
                />
            </div>

            <div className="grid md:grid-cols-2 gap-12 pt-4">
                <div className="space-y-6">
                    <Label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 block mb-4">Disponibilidad de Evidencia</Label>
                    <RadioGroup
                        value={formData.evidencia}
                        onValueChange={(value) => setFormData({ ...formData, evidencia: value })}
                        className="flex gap-8"
                    >
                        <div className="flex items-center space-x-3 group cursor-pointer">
                            <RadioGroupItem value="si" id="ev-si" className="border-white/20 text-amber-500 focus:ring-amber-500 bg-slate-950" />
                            <Label htmlFor="ev-si" className="text-gray-400 font-bold text-sm group-hover:text-white transition-colors cursor-pointer">SÍ (ADJUNTO POSIBLE)</Label>
                        </div>
                        <div className="flex items-center space-x-3 group cursor-pointer">
                            <RadioGroupItem value="no" id="ev-no" className="border-white/20 text-amber-500 focus:ring-amber-500 bg-slate-950" />
                            <Label htmlFor="ev-no" className="text-gray-400 font-bold text-sm group-hover:text-white transition-colors cursor-pointer">NO</Label>
                        </div>
                    </RadioGroup>
                    <AnimatePresence>
                        {formData.evidencia === "si" && (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="flex items-center gap-2 bg-amber-500/5 border border-amber-500/20 p-3 rounded-xl"
                            >
                                <Lock className="h-3 w-3 text-amber-500" />
                                <span className="text-[10px] text-amber-500/80 font-bold uppercase">Canal seguro de transferencia habilitado post-envío</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="space-y-6">
                    <Label className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500 block mb-4">Protocolo de Identidad</Label>
                    <RadioGroup
                        value={formData.anonimo}
                        onValueChange={(value) => setFormData({ ...formData, anonimo: value })}
                        className="flex gap-8"
                    >
                        <div className="flex items-center space-x-3 group cursor-pointer">
                            <RadioGroupItem value="si" id="ano-si" className="border-white/20 text-amber-500 focus:ring-amber-500 bg-slate-950" />
                            <Label htmlFor="ano-si" className="text-gray-400 font-bold text-sm group-hover:text-white transition-colors cursor-pointer">100% ANÓNIMO</Label>
                        </div>
                        <div className="flex items-center space-x-3 group cursor-pointer">
                            <RadioGroupItem value="no" id="ano-no" className="border-white/20 text-amber-500 focus:ring-amber-500 bg-slate-950" />
                            <Label htmlFor="ano-no" className="text-gray-400 font-bold text-sm group-hover:text-white transition-colors cursor-pointer">CONTACTABLE</Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>

            <AnimatePresence>
                {formData.anonimo === "no" && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="space-y-4 pt-4 border-t border-white/5"
                    >
                        <Label htmlFor="contacto" className="text-xs uppercase tracking-[0.2em] font-black text-amber-500/60">Canal de Contacto Seguro</Label>
                        <Input
                            id="contacto"
                            required={formData.anonimo === "no"}
                            value={formData.contacto}
                            onChange={(e) => setFormData({ ...formData, contacto: e.target.value })}
                            placeholder="Email, Telegram o Teléfono para seguimiento..."
                            className="h-14 bg-slate-950/40 border-white/5 focus:border-amber-500/50 focus:ring-amber-500/20 text-white rounded-2xl placeholder:text-gray-600"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="pt-8 flex flex-col items-center gap-6">
                <Button
                    type="submit"
                    className="w-full h-16 text-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black shadow-2xl shadow-amber-500/20 hover:scale-[1.01] transition-all rounded-[1.5rem] flex items-center justify-center gap-4"
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <Activity className="h-6 w-6 animate-spin" />
                            ENCRIPTANDO...
                        </>
                    ) : (
                        <>
                            <Send className="h-6 w-6" />
                            EJECUTAR ENVÍO SEGURO
                        </>
                    )}
                </Button>

                <div className="flex items-center gap-3 text-[10px] text-gray-500 font-bold uppercase tracking-widest bg-white/5 py-3 px-6 rounded-full border border-white/5">
                    <ShieldCheck className="h-3 w-3 text-emerald-500" />
                    Verificado por Protocolo de Inteligencia Territorial Distrito 8
                </div>
            </div>
        </form>
    );
}
