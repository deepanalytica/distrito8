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
        title: "Tu Voz en el Congreso",
        subtitle: "Gestión Parlamentaria al Servicio del Distrito 8",
        description: "Reporta problemas, solicita audiencias y sigue el avance de las gestiones en tu comuna. Un canal directo entre vecinos y el trabajo legislativo.",
        cta: {
            text: "Ingresar un Caso",
            href: "/ingresar-caso"
        },
        stats: [
            { value: "8", label: "Comunas" },
            { value: "150+", label: "Casos Gestionados" },
            { value: "24/7", label: "Disponible" }
        ],
        gradient: "from-blue-600 to-blue-800",
        image: "/images/hero-parliamentary.png"
    },
    {
        title: "Transparencia Total",
        subtitle: "Resultados Semanales y Evidencia Documentada",
        description: "Accede a oficios enviados, respuestas de autoridades y métricas actualizadas. Cada gestión con su evidencia y seguimiento público.",
        cta: {
            text: "Ver Avances",
            href: "/avances"
        },
        stats: [
            { value: "12", label: "Casos Resueltos" },
            { value: "28", label: "En Gestión" },
            { value: "8", label: "Oficios Enviados" }
        ],
        gradient: "from-emerald-600 to-teal-700",
        image: "/images/transparency.png"
    },
    {
        title: "Agenda Territorial",
        subtitle: "Presencia Activa en Cada Comuna",
        description: "Operativos de salud, reuniones vecinales y visitas en terreno. Conoce dónde y cuándo estará el diputado en tu sector.",
        cta: {
            text: "Ver Agenda",
            href: "/agenda"
        },
        stats: [
            { value: "5", label: "Eventos Próximos" },
            { value: "15", label: "Reuniones/Mes" },
            { value: "100%", label: "Distrito Cubierto" }
        ],
        gradient: "from-purple-600 to-indigo-700",
        image: "/images/agenda.png"
    },
    {
        title: "Guías y Orientación",
        subtitle: "Soluciones Paso a Paso para Problemas Cotidianos",
        description: "Tutoriales prácticos para ruidos molestos, cortes de servicios, trámites municipales y más. Con contactos directos y plazos legales.",
        cta: {
            text: "Explorar Guías",
            href: "/guias"
        },
        stats: [
            { value: "10", label: "Guías Disponibles" },
            { value: "6", label: "Categorías" },
            { value: "100%", label: "Gratuito" }
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
