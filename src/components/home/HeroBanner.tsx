"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Slide {
    title: string;
    subtitle: string;
    description: string;
    cta: {
        text: string;
        href: string;
    };
    stats?: {
        value: string;
        label: string;
    }[];
    gradient: string;
    image: string;
}

const SLIDES: Slide[] = [
    {
        title: "Equilibrio: El Camino hacia un Chile Próspero y Seguro",
        subtitle: "Cristian Contreras Radovic - Diputado Distrito 8",
        description: "Transformando el Estado a través de las 8 Grandes Reformas. Un proyecto político basado en sabiduría, justicia, eficiencia y libertad para el bien común.",
        cta: {
            text: "Conoce las 8 Reformas",
            href: "/compromisos"
        },
        stats: [
            { value: "8", label: "Comunas" },
            { value: "8", label: "Reformas del Estado" },
            { value: "11 Mar", label: "Asunción 2026" }
        ],
        gradient: "from-indigo-600 to-purple-800",
        image: "/images/hero-parliamentary.png"
    },
    {
        title: "Sé Parte del Cambio",
        subtitle: "Portal de Voluntarios",
        description: "Únete al equipo que está transformando Chile. Buscamos personas comprometidas con el equilibrio, la transparencia y el desarrollo de nuestro país.",
        cta: {
            text: "Quiero ser Voluntario",
            href: "/voluntarios"
        },
        stats: [
            { value: "100+", label: "Voluntarios Activos" },
            { value: "6", label: "Áreas de Trabajo" },
            { value: "24/7", label: "Disponible" }
        ],
        gradient: "from-emerald-600 to-teal-700",
        image: "/images/transparency.png"
    },
    {
        title: "Tu Voz Importa",
        subtitle: "Sistema de Preocupaciones Ciudadanas",
        description: "Comparte las preocupaciones de tu comuna. Cada reporte es analizado y priorizado para crear soluciones legislativas efectivas.",
        cta: {
            text: "Reportar Preocupación",
            href: "/preocupaciones"
        },
        stats: [
            { value: "500+", label: "Reportes Recibidos" },
            { value: "8", label: "Comunas Activas" },
            { value: "48h", label: "Tiempo de Respuesta" }
        ],
        gradient: "from-blue-600 to-cyan-700",
        image: "/images/agenda.png"
    },
    {
        title: "Transparencia Total",
        subtitle: "Rendición de Cuentas Permanente",
        description: "Accede a votaciones, asistencia, gastos públicos y reuniones. Cada acción documentada y disponible para la ciudadanía.",
        cta: {
            text: "Ver Panel de Transparencia",
            href: "/transparencia"
        },
        stats: [
            { value: "100%", label: "Votaciones Públicas" },
            { value: "100%", label: "Gastos Documentados" },
            { value: "24h", label: "Actualización" }
        ],
        gradient: "from-amber-600 to-orange-700",
        image: "/images/guides.png"
    }
];

export function HeroBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
        setIsAutoPlaying(false);
    };

    const slide = SLIDES[currentSlide];

    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-90 transition-all duration-1000`}></div>

            {/* Content */}
            <div className="relative container mx-auto px-4 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
                    {/* Text Content */}
                    <div className="text-white space-y-6 animate-fade-in order-2 lg:order-1">
                        <div className="inline-block">
                            <span className="text-sm font-bold uppercase tracking-wider bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                                {slide.subtitle}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                            {slide.title}
                        </h1>

                        <p className="text-base md:text-lg text-white/90 leading-relaxed">
                            {slide.description}
                        </p>

                        {/* Stats */}
                        {slide.stats && (
                            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4">
                                {slide.stats.map((stat, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/20">
                                        <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                                        <div className="text-xs text-white/80 uppercase tracking-wide">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* CTA */}
                        <div className="pt-4">
                            <Button
                                asChild
                                size="lg"
                                className="bg-white text-gray-900 hover:bg-gray-100 h-12 md:h-14 px-6 md:px-8 text-base md:text-lg rounded-full shadow-2xl hover:scale-105 transition-transform"
                            >
                                <Link href={slide.cta.href} className="gap-2">
                                    {slide.cta.text}
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative order-1 lg:order-2 animate-fade-in">
                        <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none">
                            <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                width={500}
                                height={500}
                                className="relative z-10 w-full h-full object-contain p-6 md:p-8"
                                priority={currentSlide === 0}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-6 md:bottom-8 left-0 right-0">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-4">
                        {/* Previous Button */}
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {SLIDES.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => goToSlide(idx)}
                                    className={`h-2 rounded-full transition-all ${idx === currentSlide
                                        ? "w-8 bg-white"
                                        : "w-2 bg-white/50 hover:bg-white/70"
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={nextSlide}
                            className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
