"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { COMMUNES, VOLUNTEER_AREAS, VOLUNTEER_AVAILABILITY } from "@/lib/constants";
import { Users, CheckCircle2, GraduationCap, HeartPulse, Laptop, Megaphone, Scale, ArrowRight } from "lucide-react";

const iconMap = {
    GraduationCap,
    HeartPulse,
    Laptop,
    Megaphone,
    Scale,
    Users,
};

export function VolunteerForm() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        comuna: "",
        habilidades: "",
        disponibilidad: "",
        areasInteres: [] as string[],
        motivacion: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Integrate with Supabase
        console.log("Volunteer registration:", formData);
        setSubmitted(true);
    };

    const toggleArea = (areaId: string) => {
        setFormData(prev => ({
            ...prev,
            areasInteres: prev.areasInteres.includes(areaId)
                ? prev.areasInteres.filter(id => id !== areaId)
                : [...prev.areasInteres, areaId]
        }));
    };

    if (submitted) {
        return (
            <div className="text-center py-16 animate-in fade-in zoom-in duration-500 bg-white/5 rounded-3xl border border-white/10 p-8">
                <div className="bg-amber-500/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 ring-4 ring-amber-500/10">
                    <CheckCircle2 className="h-12 w-12 text-amber-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-white">¡Gracias por Unirte!</h2>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto text-lg">
                    Tu registro ha sido recibido exitosamente. Tu compromiso es el primer paso para construir el Distrito 8 que soñamos. Pronto te contactaremos.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button
                        onClick={() => window.location.href = "/"}
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/10"
                    >
                        Volver al Inicio
                    </Button>
                    <Button
                        onClick={() => setSubmitted(false)}
                        className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold"
                    >
                        Inscribir a otra persona
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {VOLUNTEER_AREAS.map((area) => {
                        const Icon = iconMap[area.icon as keyof typeof iconMap];
                        const isSelected = formData.areasInteres.includes(area.id);

                        return (
                            <button
                                key={area.id}
                                type="button"
                                onClick={() => toggleArea(area.id)}
                                className={`p-4 rounded-xl border transition-all text-left relative overflow-hidden group ${isSelected
                                    ? "border-amber-500 bg-amber-500/10"
                                    : "border-gray-200 hover:border-amber-300 bg-white hover:shadow-lg"
                                    }`}
                            >
                                <div className="flex items-start gap-4 z-10 relative">
                                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-amber-500 text-slate-900' : 'bg-slate-100 text-slate-600 group-hover:bg-amber-100 group-hover:text-amber-600'}`}>
                                        {Icon && <Icon className="h-6 w-6" />}
                                    </div>
                                    <div>
                                        <span className={`font-bold block mb-1 ${isSelected ? 'text-amber-500' : 'text-slate-700'}`}>{area.name}</span>
                                        <span className="text-xs text-gray-500 leading-tight block">Haz click para seleccionar</span>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
                {formData.areasInteres.length === 0 && (
                    <div className="flex items-center gap-2 text-amber-600 bg-amber-50 p-3 rounded-lg text-sm">
                        <ArrowRight className="h-4 w-4" />
                        Selecciona al menos una área de interés para continuar
                    </div>
                )}
            </div>

            <div className={`space-y-8 transition-all duration-500 ${formData.areasInteres.length === 0 ? 'opacity-50 pointer-events-none filter grayscale' : 'opacity-100'}`}>
                <div className="grid md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="space-y-3">
                        <Label htmlFor="nombre" className="text-slate-900 font-semibold">Nombre Completo *</Label>
                        <Input
                            id="nombre"
                            required
                            value={formData.nombre}
                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                            placeholder="Tu nombre completo"
                            className="h-12 border-gray-200 focus:border-amber-500 focus:ring-amber-500"
                        />
                    </div>

                    <div className="space-y-3">
                        <Label htmlFor="email" className="text-slate-900 font-semibold">Email *</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="tu@email.com"
                            className="h-12 border-gray-200 focus:border-amber-500 focus:ring-amber-500"
                        />
                    </div>

                    <div className="space-y-3">
                        <Label htmlFor="telefono" className="text-slate-900 font-semibold">Teléfono</Label>
                        <Input
                            id="telefono"
                            type="tel"
                            value={formData.telefono}
                            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                            placeholder="+56 9 1234 5678"
                            className="h-12 border-gray-200 focus:border-amber-500 focus:ring-amber-500"
                        />
                    </div>

                    <div className="space-y-3">
                        <Label htmlFor="comuna" className="text-slate-900 font-semibold">Comuna *</Label>
                        <Select
                            required
                            value={formData.comuna}
                            onValueChange={(value) => setFormData({ ...formData, comuna: value })}
                        >
                            <SelectTrigger className="h-12 border-gray-200 focus:border-amber-500 focus:ring-amber-500">
                                <SelectValue placeholder="Selecciona tu comuna" />
                            </SelectTrigger>
                            <SelectContent>
                                {COMMUNES.map((commune) => (
                                    <SelectItem key={commune.slug} value={commune.slug}>
                                        {commune.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-3">
                        <Label htmlFor="disponibilidad" className="text-slate-900 font-semibold">Disponibilidad *</Label>
                        <Select
                            required
                            value={formData.disponibilidad}
                            onValueChange={(value) => setFormData({ ...formData, disponibilidad: value })}
                        >
                            <SelectTrigger className="h-12 border-gray-200 focus:border-amber-500 focus:ring-amber-500">
                                <SelectValue placeholder="Selecciona tu disponibilidad" />
                            </SelectTrigger>
                            <SelectContent>
                                {VOLUNTEER_AVAILABILITY.map((option) => (
                                    <SelectItem key={option.id} value={option.id}>
                                        {option.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-3">
                        <Label htmlFor="habilidades" className="text-slate-900 font-semibold">Habilidades Principales</Label>
                        <Input
                            id="habilidades"
                            value={formData.habilidades}
                            onChange={(e) => setFormData({ ...formData, habilidades: e.target.value })}
                            placeholder="Ej: Diseño gráfico, programación, organización..."
                            className="h-12 border-gray-200 focus:border-amber-500 focus:ring-amber-500"
                        />
                    </div>
                </div>

                <div className="space-y-3">
                    <Label htmlFor="motivacion" className="text-slate-900 font-semibold">¿Por qué quieres ser voluntario? *</Label>
                    <Textarea
                        id="motivacion"
                        required
                        value={formData.motivacion}
                        onChange={(e) => setFormData({ ...formData, motivacion: e.target.value })}
                        placeholder="Cuéntanos tu motivación para unirte al equipo..."
                        rows={4}
                        className="resize-none border-gray-200 focus:border-amber-500 focus:ring-amber-500"
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg h-14 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all rounded-xl"
                    disabled={formData.areasInteres.length === 0}
                >
                    Registrarme como Voluntario
                </Button>
            </div>
        </form>
    );
}
