"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
        title: "Cristian Contreras Radovic",
        subtitle: "Diputado Electo Distrito 8",
        description: "Liderando 'El Camino del Equilibrio' para un Chile próspero y seguro. Transformando el Estado desde la sabiduría, la eficiencia y el compromiso real con las personas.",
        cta: {
            text: "Conoce mi Trayectoria",
            href: "/biografia"
        },
        stats: [
            { value: "40.000+", label: "Votos" },
            { value: "8", label: "Comunas" },
            { value: "11 Mar", label: "Asunción" }
        ],
        gradient: "from-blue-900 via-slate-900 to-indigo-900",
        image: "/images/cristian/cristian_hero_principal.png"
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
        gradient: "from-emerald-900 via-teal-900 to-emerald-800",
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
        gradient: "from-blue-900 via-cyan-900 to-blue-800",
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
        gradient: "from-amber-700 via-orange-900 to-red-900",
        image: "/images/guides.png"
    },
    {
        title: "Descubre el Corazón del Distrito 8",
        subtitle: "Identidad y Territorio",
        description: "Explora las 8 comunas que integran nuestro distrito. Conoce su historia, su cultura, su gastronomía y la identidad única que define a cada territorio.",
        cta: {
            text: "Explorar Comunas",
            href: "/mi-comuna"
        },
        stats: [
            { value: "8", label: "Comunas" },
            { value: "Riqueza", label: "Cultural" },
            { value: "Identidad", label: "Local" }
        ],
        gradient: "from-slate-800 via-gray-900 to-slate-900",
        image: "/images/hero-parliamentary.png"
    }
];

export function HeroBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 6000); // 6 seconds per slide

        return () => clearTimeout(timer);
    }, [currentSlide, isAutoPlaying]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false); // Pause on interaction
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
        <div
            className="relative overflow-hidden bg-gray-900 font-sans min-h-[800px] flex items-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Background Transitions */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}
                />
            </AnimatePresence>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Text Section */}
                    <div className="lg:col-span-7 order-2 lg:order-1 text-white space-y-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <motion.div
                                    className="inline-block mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <span className="text-sm font-bold uppercase tracking-[0.2em] bg-white/10 px-4 py-2 rounded-full border border-white/20 text-gold-400">
                                        {slide.subtitle}
                                    </span>
                                </motion.div>

                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
                                    {slide.title}
                                </h1>

                                <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mb-8 font-light">
                                    {slide.description}
                                </p>

                                <div className="flex flex-wrap gap-4 pt-2">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-primary hover:bg-amber-600 text-primary-foreground h-14 px-8 text-lg rounded-full shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        <Link href={slide.cta.href} className="flex items-center gap-2 font-bold">
                                            {slide.cta.text}
                                            <ArrowRight className="h-5 w-5" />
                                        </Link>
                                    </Button>

                                    {/* Secondary CTA style option if needed */}
                                    {/* <Button variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8 rounded-full">
                                        Más Información
                                    </Button> */}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Stats - Staggered Animation */}
                        {slide.stats && (
                            <motion.div
                                key={`stats-${currentSlide}`}
                                className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: { staggerChildren: 0.1, delayChildren: 0.5 }
                                    }
                                }}
                            >
                                {slide.stats.map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                    >
                                        <div className="text-2xl md:text-4xl font-bold text-amber-400 mb-1">{stat.value}</div>
                                        <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </div>

                    {/* Image Section */}
                    <div className="lg:col-span-5 order-1 lg:order-2 relative h-[400px] lg:h-[600px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative w-full h-full"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent z-10 radial-gradient"></div>
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                    priority={currentSlide === 0}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-8 left-0 right-0 z-20">
                <div className="container mx-auto px-4 flex justify-between items-end">

                    {/* Slide Indicators / Progress */}
                    <div className="flex gap-3">
                        {SLIDES.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide
                                    ? "w-12 bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                                    : "w-3 bg-white/20 hover:bg-white/40"
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* Arrows */}
                    <div className="flex gap-4">
                        <Button
                            onClick={prevSlide}
                            variant="ghost"
                            size="icon"
                            className="rounded-full text-white hover:bg-white/10 hover:text-amber-400 w-12 h-12 border border-white/20"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            onClick={nextSlide}
                            variant="ghost"
                            size="icon"
                            className="rounded-full text-white hover:bg-white/10 hover:text-amber-400 w-12 h-12 border border-white/20"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
