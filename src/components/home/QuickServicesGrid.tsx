"use client";

import Link from "next/link";
import {
    Scale,
    HeartPulse,
    Users,
    Lightbulb,
    Shield,
    Briefcase,
    ArrowRight
} from "lucide-react";

export function QuickServicesGrid() {
    const services = [
        {
            title: "Asesoría Legal",
            description: "Orientación jurídica gratuita para vecinos.",
            icon: Scale,
            href: "/guias?categoria=legal",
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        {
            title: "Salud y Bienestar",
            description: "Operativos médicos y gestión de horas.",
            icon: HeartPulse,
            href: "/guias?categoria=salud",
            color: "text-rose-400",
            bg: "bg-rose-500/10",
            border: "border-rose-500/20"
        },
        {
            title: "Organizaciones",
            description: "Apoyo a juntas de vecinos y clubes.",
            icon: Users,
            href: "/guias?categoria=social",
            color: "text-amber-400",
            bg: "bg-amber-500/10",
            border: "border-amber-500/20"
        },
        {
            title: "Emprendimiento",
            description: "Capacitación y fondos concursables.",
            icon: Lightbulb,
            href: "/guias?categoria=emprendimiento",
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20"
        },
        {
            title: "Seguridad",
            description: "Denuncias anónimas y alarmas comunitarias.",
            icon: Shield,
            href: "/preocupaciones?tipo=seguridad",
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20"
        },
        {
            title: "Empleo",
            description: "Bolsa laboral y talleres de oficio.",
            icon: Briefcase,
            href: "/guias?categoria=empleo",
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
            border: "border-cyan-500/20"
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
                        Servicios a la Comunidad
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Gestión que Soluciona
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Acceso rápido a los servicios y apoyos más solicitados por nuestros vecinos.
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
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
