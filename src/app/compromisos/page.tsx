"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { REFORMAS, DEPUTY_INFO } from "@/lib/constants";
import {
    GraduationCap,
    Heart,
    TrendingUp,
    Award,
    Scale,
    HeartPulse,
    Sparkles,
    Clock
} from "lucide-react";

const iconMap = {
    GraduationCap,
    Heart,
    TrendingUp,
    Award,
    Scale,
    HeartPulse,
    Sparkles,
    Clock,
};

const colorMap = {
    blue: "bg-blue-100 text-blue-700 border-blue-300",
    rose: "bg-rose-100 text-rose-700 border-rose-300",
    emerald: "bg-emerald-100 text-emerald-700 border-emerald-300",
    amber: "bg-amber-100 text-amber-700 border-amber-300",
    purple: "bg-purple-100 text-purple-700 border-purple-300",
    cyan: "bg-cyan-100 text-cyan-700 border-cyan-300",
    indigo: "bg-indigo-100 text-indigo-700 border-indigo-300",
    violet: "bg-violet-100 text-violet-700 border-violet-300",
};

export default function CompromisosPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Las 8 Grandes Reformas del Estado
                        </h1>
                        <p className="text-xl text-indigo-100 mb-6">
                            {DEPUTY_INFO.vision}
                        </p>
                        <blockquote className="text-lg italic border-l-4 border-white/50 pl-4 text-indigo-100">
                            &quot;{DEPUTY_INFO.motto}&quot;
                        </blockquote>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto mb-12">
                    <Card className="border-2 border-indigo-200 bg-white/80 backdrop-blur">
                        <CardHeader>
                            <CardTitle className="text-2xl">Transformación Estructural del Estado</CardTitle>
                            <CardDescription className="text-base">
                                Un proyecto político basado en sabiduría, justicia, eficiencia y libertad
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-gray-700 space-y-4">
                            <p>
                                Las 8 Grandes Reformas del Estado representan una visión holística para transformar
                                Chile desde sus fundamentos. Este proyecto nace de <strong>Politikon</strong>, una
                                propuesta única que fusiona ciencia, filosofía y espiritualidad.
                            </p>
                            <p>
                                Cada reforma está diseñada para abordar un aspecto fundamental de nuestra sociedad,
                                desde la educación hasta nuestra concepción del tiempo, con el objetivo de alcanzar
                                el equilibrio necesario para construir un Chile próspero y seguro.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Reformas Grid */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {REFORMAS.map((reforma) => {
                            const Icon = iconMap[reforma.icon as keyof typeof iconMap];
                            const colorClass = colorMap[reforma.color as keyof typeof colorMap];

                            return (
                                <Card
                                    key={reforma.id}
                                    className="border-2 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white"
                                >
                                    <CardHeader>
                                        <div className="flex items-start gap-4">
                                            <div className={`p-3 rounded-xl ${colorClass} border-2`}>
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Badge variant="outline" className="text-xs">
                                                        Reforma {reforma.id}
                                                    </Badge>
                                                </div>
                                                <CardTitle className="text-xl mb-2">
                                                    {reforma.name}
                                                </CardTitle>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-700 leading-relaxed">
                                            {reforma.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* Fundamento Filosófico */}
                <div className="max-w-4xl mx-auto mt-16">
                    <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
                        <CardHeader>
                            <CardTitle className="text-2xl flex items-center gap-2">
                                <Sparkles className="h-6 w-6 text-purple-600" />
                                Fundamento: Politikon
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-gray-700">
                            <p className="text-lg font-medium text-purple-900">
                                &quot;Todo el proyecto político y espiritual de Cristián Contreras Radovic
                                nace de esta obra fundamental: Politikon&quot;
                            </p>
                            <p>
                                <strong>Politikon</strong> es una propuesta única que fusiona:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Ciencia</strong> - Conocimiento verificable y riguroso</li>
                                <li><strong>Filosofía</strong> - Sabiduría de los grandes pensadores</li>
                                <li><strong>Espiritualidad</strong> - Conexión cósmica y trascendente</li>
                            </ul>
                            <p>
                                El objetivo es reformular el Estado desde una perspectiva cosmológica y moral,
                                entendiendo que el Estado es la más importante de todas las asociaciones y
                                requiere una transformación estructural profunda basada en valores universales
                                y eternos.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Call to Action */}
                <div className="max-w-4xl mx-auto mt-12 text-center">
                    <Card className="border-2 border-indigo-300 bg-gradient-to-r from-indigo-50 to-purple-50">
                        <CardContent className="py-8">
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">
                                Sé Parte de la Transformación
                            </h3>
                            <p className="text-gray-700 mb-6">
                                Estas reformas no son solo ideas, son compromisos que necesitan el apoyo
                                y participación activa de la ciudadanía.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/voluntarios"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                                >
                                    Únete como Voluntario
                                </a>
                                <a
                                    href="/preocupaciones"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
                                >
                                    Comparte tus Preocupaciones
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
