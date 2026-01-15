"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { COMMUNES, CONCERN_CATEGORIES, CONCERN_PRIORITIES } from "@/lib/constants";
import { AlertCircle, CheckCircle2, Shield, HeartPulse, GraduationCap, Building, TrendingUp, HelpCircle } from "lucide-react";

const iconMap = {
    Shield,
    HeartPulse,
    GraduationCap,
    Building,
    TrendingUp,
    HelpCircle,
};

export default function PreocupacionesPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        comuna: "",
        categoria: "",
        prioridad: "",
        titulo: "",
        descripcion: "",
        ubicacion: "",
        email: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Integrate with Supabase
        console.log("Citizen concern:", formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
                <Card className="max-w-md w-full border-2 border-blue-300">
                    <CardContent className="pt-8 text-center">
                        <div className="mb-6">
                            <CheckCircle2 className="h-16 w-16 text-blue-600 mx-auto" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">¡Preocupación Recibida!</h2>
                        <p className="text-gray-700 mb-6">
                            Tu reporte ha sido registrado exitosamente. Nuestro equipo lo analizará y
                            priorizará para crear soluciones legislativas efectivas.
                        </p>
                        <p className="text-sm text-gray-600 mb-6">
                            Tiempo estimado de respuesta: <strong>48 horas</strong>
                        </p>
                        <Button
                            onClick={() => window.location.href = "/"}
                            className="bg-blue-600 hover:bg-blue-700"
                        >
                            Volver al Inicio
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <AlertCircle className="h-16 w-16 mx-auto mb-4" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Tu Voz Importa
                        </h1>
                        <p className="text-xl text-blue-100">
                            Comparte las preocupaciones de tu comuna y ayúdanos a crear soluciones legislativas efectivas
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-5xl mx-auto">
                    {/* Stats */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <Card className="border-2 border-blue-200">
                            <CardContent className="pt-6 text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                                <div className="text-gray-700">Reportes Recibidos</div>
                            </CardContent>
                        </Card>
                        <Card className="border-2 border-blue-200">
                            <CardContent className="pt-6 text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                                <div className="text-gray-700">Comunas Activas</div>
                            </CardContent>
                        </Card>
                        <Card className="border-2 border-blue-200">
                            <CardContent className="pt-6 text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">48h</div>
                                <div className="text-gray-700">Tiempo de Respuesta</div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Categories */}
                    <Card className="mb-8 border-2 border-blue-200">
                        <CardHeader>
                            <CardTitle className="text-2xl">Categorías de Preocupaciones</CardTitle>
                            <CardDescription>
                                Selecciona la categoría que mejor describe tu preocupación
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {CONCERN_CATEGORIES.map((category) => {
                                    const Icon = iconMap[category.icon as keyof typeof iconMap];
                                    const isSelected = formData.categoria === category.id;

                                    return (
                                        <button
                                            key={category.id}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, categoria: category.id })}
                                            className={`p-4 rounded-lg border-2 transition-all text-left ${isSelected
                                                    ? "border-blue-500 bg-blue-50"
                                                    : "border-gray-200 hover:border-blue-300"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                {Icon && <Icon className="h-5 w-5 text-blue-600" />}
                                                <span className="font-medium">{category.name}</span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Report Form */}
                    <Card className="border-2 border-blue-200">
                        <CardHeader>
                            <CardTitle className="text-2xl">Reportar Preocupación</CardTitle>
                            <CardDescription>
                                Completa el formulario con el mayor detalle posible
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
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
                                        <Label htmlFor="prioridad">Prioridad *</Label>
                                        <Select
                                            required
                                            value={formData.prioridad}
                                            onValueChange={(value) => setFormData({ ...formData, prioridad: value })}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Selecciona la prioridad" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {CONCERN_PRIORITIES.map((priority) => (
                                                    <SelectItem key={priority.id} value={priority.id}>
                                                        <div className="flex items-center gap-2">
                                                            <div className={`w-2 h-2 rounded-full bg-${priority.color}-500`}></div>
                                                            {priority.name}
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="titulo">Título de la Preocupación *</Label>
                                    <Input
                                        id="titulo"
                                        required
                                        value={formData.titulo}
                                        onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                                        placeholder="Ej: Falta de iluminación en parque local"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="descripcion">Descripción Detallada *</Label>
                                    <Textarea
                                        id="descripcion"
                                        required
                                        value={formData.descripcion}
                                        onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                                        placeholder="Describe tu preocupación con el mayor detalle posible..."
                                        rows={6}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="ubicacion">Ubicación Específica (opcional)</Label>
                                    <Input
                                        id="ubicacion"
                                        value={formData.ubicacion}
                                        onChange={(e) => setFormData({ ...formData, ubicacion: e.target.value })}
                                        placeholder="Ej: Calle Principal esquina Avenida Central"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email de Contacto (opcional)</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="tu@email.com"
                                    />
                                    <p className="text-sm text-gray-500">
                                        Si deseas recibir actualizaciones sobre tu reporte
                                    </p>
                                </div>

                                {formData.categoria && (
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                        <div className="flex items-start gap-3">
                                            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-blue-900 mb-1">Categoría Seleccionada:</p>
                                                <Badge variant="secondary">
                                                    {CONCERN_CATEGORIES.find(c => c.id === formData.categoria)?.name}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-lg h-12"
                                    disabled={!formData.categoria}
                                >
                                    Enviar Preocupación
                                </Button>

                                {!formData.categoria && (
                                    <p className="text-sm text-amber-600 text-center">
                                        Por favor selecciona una categoría antes de enviar
                                    </p>
                                )}
                            </form>
                        </CardContent>
                    </Card>

                    {/* Privacy Note */}
                    <Card className="mt-8 border-2 border-gray-200 bg-gray-50">
                        <CardContent className="pt-6">
                            <p className="text-sm text-gray-600 text-center">
                                <strong>Privacidad:</strong> Tu información será utilizada únicamente para dar seguimiento
                                a tu preocupación. Los reportes pueden ser publicados de forma anónima para transparencia.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
