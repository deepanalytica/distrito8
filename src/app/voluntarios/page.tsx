"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { COMMUNES, VOLUNTEER_AREAS, VOLUNTEER_AVAILABILITY } from "@/lib/constants";
import { Users, Heart, CheckCircle2, GraduationCap, HeartPulse, Laptop, Megaphone, Scale } from "lucide-react";

const iconMap = {
    GraduationCap,
    HeartPulse,
    Laptop,
    Megaphone,
    Scale,
    Users,
};

export default function VoluntariosPage() {
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
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
                <Card className="max-w-md w-full border-2 border-emerald-300">
                    <CardContent className="pt-8 text-center">
                        <div className="mb-6">
                            <CheckCircle2 className="h-16 w-16 text-emerald-600 mx-auto" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">¡Gracias por Unirte!</h2>
                        <p className="text-gray-700 mb-6">
                            Tu registro ha sido recibido exitosamente. Pronto nos pondremos en contacto contigo
                            para coordinar tu participación en el equipo.
                        </p>
                        <Button
                            onClick={() => window.location.href = "/"}
                            className="bg-emerald-600 hover:bg-emerald-700"
                        >
                            Volver al Inicio
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Users className="h-16 w-16 mx-auto mb-4" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Sé Parte del Cambio
                        </h1>
                        <p className="text-xl text-emerald-100">
                            Únete al equipo que está transformando Chile a través de las 8 Grandes Reformas
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-5xl mx-auto">
                    {/* Why Volunteer */}
                    <Card className="mb-8 border-2 border-emerald-200">
                        <CardHeader>
                            <CardTitle className="text-2xl flex items-center gap-2">
                                <Heart className="h-6 w-6 text-emerald-600" />
                                ¿Por Qué Ser Voluntario?
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h3 className="font-bold text-lg mb-2">Impacto Real</h3>
                                <p className="text-gray-700">
                                    Contribuye directamente a la transformación del Estado y el bienestar de tu comuna.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Desarrollo Personal</h3>
                                <p className="text-gray-700">
                                    Aprende, crece y conecta con personas comprometidas con el bien común.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Equilibrio</h3>
                                <p className="text-gray-700">
                                    Forma parte de un proyecto basado en sabiduría, justicia y eficiencia.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Areas de Trabajo */}
                    <Card className="mb-8 border-2 border-emerald-200">
                        <CardHeader>
                            <CardTitle className="text-2xl">Áreas de Trabajo</CardTitle>
                            <CardDescription>
                                Selecciona las áreas en las que te gustaría colaborar
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {VOLUNTEER_AREAS.map((area) => {
                                    const Icon = iconMap[area.icon as keyof typeof iconMap];
                                    const isSelected = formData.areasInteres.includes(area.id);

                                    return (
                                        <button
                                            key={area.id}
                                            type="button"
                                            onClick={() => toggleArea(area.id)}
                                            className={`p-4 rounded-lg border-2 transition-all text-left ${isSelected
                                                    ? "border-emerald-500 bg-emerald-50"
                                                    : "border-gray-200 hover:border-emerald-300"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                {Icon && <Icon className="h-5 w-5 text-emerald-600" />}
                                                <span className="font-medium">{area.name}</span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Registration Form */}
                    <Card className="border-2 border-emerald-200">
                        <CardHeader>
                            <CardTitle className="text-2xl">Formulario de Registro</CardTitle>
                            <CardDescription>
                                Completa tus datos y nos pondremos en contacto contigo
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="nombre">Nombre Completo *</Label>
                                        <Input
                                            id="nombre"
                                            required
                                            value={formData.nombre}
                                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                                            placeholder="Tu nombre completo"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="tu@email.com"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="telefono">Teléfono</Label>
                                        <Input
                                            id="telefono"
                                            type="tel"
                                            value={formData.telefono}
                                            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                                            placeholder="+56 9 1234 5678"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="comuna">Comuna *</Label>
                                        <Select
                                            required
                                            value={formData.comuna}
                                            onValueChange={(value) => setFormData({ ...formData, comuna: value })}
                                        >
                                            <SelectTrigger>
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

                                    <div className="space-y-2">
                                        <Label htmlFor="disponibilidad">Disponibilidad *</Label>
                                        <Select
                                            required
                                            value={formData.disponibilidad}
                                            onValueChange={(value) => setFormData({ ...formData, disponibilidad: value })}
                                        >
                                            <SelectTrigger>
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

                                    <div className="space-y-2">
                                        <Label htmlFor="habilidades">Habilidades Principales</Label>
                                        <Input
                                            id="habilidades"
                                            value={formData.habilidades}
                                            onChange={(e) => setFormData({ ...formData, habilidades: e.target.value })}
                                            placeholder="Ej: Diseño gráfico, programación, etc."
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="motivacion">¿Por qué quieres ser voluntario? *</Label>
                                    <Textarea
                                        id="motivacion"
                                        required
                                        value={formData.motivacion}
                                        onChange={(e) => setFormData({ ...formData, motivacion: e.target.value })}
                                        placeholder="Cuéntanos tu motivación para unirte al equipo..."
                                        rows={4}
                                    />
                                </div>

                                {formData.areasInteres.length > 0 && (
                                    <div>
                                        <Label>Áreas de Interés Seleccionadas:</Label>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {formData.areasInteres.map((areaId) => {
                                                const area = VOLUNTEER_AREAS.find(a => a.id === areaId);
                                                return (
                                                    <Badge key={areaId} variant="secondary">
                                                        {area?.name}
                                                    </Badge>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg h-12"
                                    disabled={formData.areasInteres.length === 0}
                                >
                                    Registrarme como Voluntario
                                </Button>

                                {formData.areasInteres.length === 0 && (
                                    <p className="text-sm text-amber-600 text-center">
                                        Por favor selecciona al menos un área de interés
                                    </p>
                                )}
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
