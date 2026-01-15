"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { COMMUNES } from "@/lib/constants";
import { AlertCircle, CheckCircle2, Shield, Eye, MapPin, FileWarning, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ConcernsForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        tipologia: "",
        comuna: "",
        sector: "",
        descripcion: "",
        evidencia: "no",
        contacto: "",
        anonimo: "si"
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulating API call
        setTimeout(() => {
            console.log("Strategic Report:", formData);
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    if (submitted) {
        return (
            <div className="text-center py-8 animate-in fade-in zoom-in duration-500">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Reporte Ingresado!</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Tu información ha sido encriptada y enviada a nuestra central de inteligencia territorial.
                    Agradecemos tu aporte a la seguridad y desarrollo del Distrito 8.
                </p>
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
                    className="bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                    Ingresar Nuevo Reporte
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 animate-in slide-in-from-bottom-5 duration-500">
            <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                    <h3 className="font-semibold text-blue-900 flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        Confidencialidad Garantizada
                    </h3>
                    <p className="text-sm text-blue-700 mt-1">
                        Esta información es utilizada para análisis estratégico. Tu identidad (si decides compartirla)
                        está protegida bajo estricto secreto profesional.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                    <Label className="text-base font-semibold">Tipo de Información</Label>
                    <Select
                        required
                        value={formData.tipologia}
                        onValueChange={(value) => setFormData({ ...formData, tipologia: value })}
                    >
                        <SelectTrigger className="h-12">
                            <SelectValue placeholder="Selecciona categoría" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="seguridad">
                                <div className="flex items-center gap-2">
                                    <Shield className="h-4 w-4 text-red-500" />
                                    <span>Seguridad y Delincuencia</span>
                                </div>
                            </SelectItem>
                            <SelectItem value="corrupcion">
                                <div className="flex items-center gap-2">
                                    <Eye className="h-4 w-4 text-amber-500" />
                                    <span>Corrupción / Falta de Probidad</span>
                                </div>
                            </SelectItem>
                            <SelectItem value="infraestructura">
                                <div className="flex items-center gap-2">
                                    <FileWarning className="h-4 w-4 text-orange-500" />
                                    <span>Infraestructura Crítica</span>
                                </div>
                            </SelectItem>
                            <SelectItem value="propuesta">
                                <div className="flex items-center gap-2">
                                    <Lightbulb className="h-4 w-4 text-blue-500" />
                                    <span>Propuesta de Desarrollo</span>
                                </div>
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-3">
                    <Label className="text-base font-semibold">Comuna Afectada</Label>
                    <Select
                        required
                        value={formData.comuna}
                        onValueChange={(value) => setFormData({ ...formData, comuna: value })}
                    >
                        <SelectTrigger className="h-12">
                            <SelectValue placeholder="Selecciona comuna" />
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
            </div>

            <div className="space-y-3">
                <Label htmlFor="sector" className="text-base font-semibold">Sector / Barrio (Opcional)</Label>
                <Input
                    id="sector"
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    placeholder="Ej: Villa Los Héroes, Centro Cívico, etc."
                    className="h-12"
                />
            </div>

            <div className="space-y-3">
                <Label htmlFor="descripcion" className="text-base font-semibold">Detalle del Reporte</Label>
                <Textarea
                    id="descripcion"
                    required
                    value={formData.descripcion}
                    onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                    placeholder="Describa la situación con el mayor detalle posible (fechas, horas, implicados, modus operandi)..."
                    rows={6}
                    className="resize-none"
                />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                    <Label className="text-base font-semibold">¿Cuenta con evidencia?</Label>
                    <RadioGroup
                        value={formData.evidencia}
                        onValueChange={(value) => setFormData({ ...formData, evidencia: value })}
                        className="flex gap-4"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="si" id="ev-si" />
                            <Label htmlFor="ev-si">Sí (Fotos/Videos/Docs)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="ev-no" />
                            <Label htmlFor="ev-no">No</Label>
                        </div>
                    </RadioGroup>
                    {formData.evidencia === "si" && (
                        <p className="text-xs text-amber-600 mt-1">
                            * Nuestro equipo le contactará para solicitar la evidencia de forma segura.
                        </p>
                    )}
                </div>

                <div className="space-y-3">
                    <Label className="text-base font-semibold">Anonimato</Label>
                    <RadioGroup
                        value={formData.anonimo}
                        onValueChange={(value) => setFormData({ ...formData, anonimo: value })}
                        className="flex gap-4"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="si" id="ano-si" />
                            <Label htmlFor="ano-si">Mantener Anónimo</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="ano-no" />
                            <Label htmlFor="ano-no">Pueden contactarme</Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>

            {formData.anonimo === "no" && (
                <div className="space-y-3 animate-in fade-in duration-300">
                    <Label htmlFor="contacto" className="text-base font-semibold">Email o Teléfono</Label>
                    <Input
                        id="contacto"
                        required={formData.anonimo === "no"}
                        value={formData.contacto}
                        onChange={(e) => setFormData({ ...formData, contacto: e.target.value })}
                        placeholder="Contacto para seguimiento..."
                        className="h-12"
                    />
                </div>
            )}

            <Button
                type="submit"
                className="w-full h-14 text-lg bg-gradient-to-r from-indigo-700 to-blue-700 hover:from-indigo-800 hover:to-blue-800 text-white shadow-xl transition-all"
                disabled={loading}
            >
                {loading ? "Encriptando y Enviando..." : "Enviar Reporte Seguro"}
            </Button>
        </form>
    );
}
