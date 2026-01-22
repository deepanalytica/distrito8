"use client";

import Link from "next/link";
import {
    Phone,
    ShieldAlert,
    Smartphone,
    MapPin,
    Stethoscope,
    AlertTriangle,
    ArrowRight,
    MessageCircle,
    HeartPulse
} from "lucide-react";

export function QuickServicesGrid() {
    const services = [
        {
            title: "Emergencias Seguridad",
            description: "Carabineros (133) y PDI (134) para respuesta inmediata ante delitos.",
            icon: ShieldAlert,
            href: "tel:133",
            color: "text-red-400",
            bg: "bg-red-500/10",
            border: "border-red-500/20",
            actionText: "Llamar 133"
        },
        {
            title: "Salud Mental",
            description: "Fono *4141. Prevención del suicidio, atención experta y confidencial 24/7.",
            icon: HeartPulse,
            href: "tel:4141",
            color: "text-indigo-400",
            bg: "bg-indigo-500/10",
            border: "border-indigo-500/20",
            actionText: "Llamar *4141"
        },
        {
            title: "Violencia de Género",
            description: "Fono Ayuda (1455) de SERNAMEG. Orientación 24/7 y confidencial.",
            icon: HeartPulse,
            href: "tel:1455",
            color: "text-rose-400",
            bg: "bg-rose-500/10",
            border: "border-rose-500/20",
            actionText: "Ayuda 1455"
        },
        {
            title: "Denuncia Seguro",
            description: "Denuncia anónima (*4242) para tráfico de drogas y delitos violentos.",
            icon: Smartphone,
            href: "tel:4242",
            color: "text-amber-400",
            bg: "bg-amber-500/10",
            border: "border-amber-500/20",
            actionText: "Denunciar *4242"
        },
        {
            title: "Ruidos Molestos",
            description: "Reporte a fiscalización municipal o Carabineros según la comuna.",
            icon: AlertTriangle,
            href: "/preocupaciones?tipo=ruidos",
            color: "text-orange-400",
            bg: "bg-orange-500/10",
            border: "border-orange-500/20",
            actionText: "Ver Guía"
        },
        {
            title: "Salud Responde",
            description: "600 360 77 77. Orientación médica telefónica del MINSAL.",
            icon: Stethoscope,
            href: "tel:6003607777",
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20",
            actionText: "Llamar"
        },
        {
            title: "Calles y Luminarias",
            description: "Reporte de baches o fallas en el alumbrado público a tu municipio.",
            icon: MapPin,
            href: "/preocupaciones?tipo=infraestructura",
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20",
            actionText: "Reportar Problema"
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full bg-slate-950 -z-20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2 block">
                        Servicios Útiles para el Vecino
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Información y <span className="text-gradient-gold">Recursos</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Acceso directo a herramientas de reporte, números de emergencia y servicios públicos esenciales del Distrito 8.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            className={`
                                group relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300
                                ${service.bg} ${service.border} hover:bg-white/5 hover:-translate-y-1 decoration-transparent
                            `}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-slate-900/50 ${service.color}`}>
                                    <service.icon className="h-8 w-8" />
                                </div>
                                <div className="p-2 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowRight className="h-4 w-4 text-white" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <div className={`mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${service.color} group-hover:translate-x-1 transition-transform`}>
                                {service.actionText}
                                <ArrowRight className="h-3 w-3" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
