"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, BookOpen, Map, MessageSquare, ShieldCheck, Calendar, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { href: "/", label: "Inicio", icon: Home },
        { href: "/biografia", label: "Biografía", icon: BookOpen },
        { href: "/compromisos", label: "8 Reformas", icon: ShieldCheck },
        { href: "/mi-comuna", label: "Distrito 8", icon: Map },
        { href: "/preocupaciones", label: "Inteligencia T.", icon: MessageSquare },
        { href: "/transparencia", label: "Transparencia", icon: GraduationCap },
        { href: "/agenda", label: "Agenda", icon: Calendar },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-slate-900/90 backdrop-blur-md border-b border-white/10 shadow-lg py-2"
                        : "bg-transparent py-4 md:py-6"
                )}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-3 group z-50 relative">
                        <div className="bg-amber-500 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-slate-900 font-bold text-lg shadow-lg group-hover:scale-105 transition-transform">
                            CC
                        </div>
                        <div className="flex flex-col">
                            <span className={cn(
                                "font-bold text-lg md:text-xl leading-none transition-colors",
                                isScrolled ? "text-white" : "text-white drop-shadow-md"
                            )}>
                                Cristian Contreras
                            </span>
                            <span className={cn(
                                "text-xs uppercase tracking-widest font-medium transition-colors",
                                isScrolled ? "text-gray-400" : "text-gray-200 drop-shadow-md"
                            )}>
                                Diputado Distrito 8
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full px-2 py-1 border border-white/10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                                    pathname === link.href
                                        ? "bg-amber-500 text-slate-900 shadow-md font-bold"
                                        : "text-gray-200 hover:text-white hover:bg-white/10"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Button
                            asChild
                            className="bg-white text-slate-900 hover:bg-gray-100 font-bold shadow-lg transition-transform hover:scale-105 rounded-full"
                        >
                            <Link href="/voluntarios">Ser Voluntario</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-white z-50 relative focus:outline-none bg-white/10 backdrop-blur-sm rounded-full active:bg-white/20"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-slate-900 border-l border-white/10 z-50 lg:hidden overflow-y-auto shadow-2xl"
                        >
                            <div className="flex flex-col h-full pt-28 pb-8 px-6">
                                <div className="space-y-6 flex-grow">
                                    <h3 className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-4 px-2">
                                        Navegación
                                    </h3>
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={cn(
                                                "flex items-center gap-4 p-3 rounded-xl transition-colors",
                                                pathname === link.href
                                                    ? "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                                                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                                            )}
                                        >
                                            <div className={cn(
                                                "p-2 rounded-lg",
                                                pathname === link.href ? "bg-amber-500 text-slate-900" : "bg-white/5"
                                            )}>
                                                <link.icon className="h-5 w-5" />
                                            </div>
                                            <span className="font-medium text-lg">{link.label}</span>
                                        </Link>
                                    ))}

                                    <div className="h-px bg-white/10 my-4" />

                                    <a
                                        href="https://www.camara.cl/transparencia/FormularioSolicitudAudiencia.aspx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-3 rounded-xl text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                                    >
                                        <div className="bg-white/5 p-2 rounded-lg">
                                            <MessageSquare className="h-5 w-5" />
                                        </div>
                                        <span className="font-medium">Solicitud Audiencia</span>
                                    </a>
                                </div>

                                <div className="mt-8">
                                    <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 h-14 text-lg font-bold rounded-xl shadow-lg">
                                        <Link href="/voluntarios">¡Únete al Equipo!</Link>
                                    </Button>
                                    <p className="text-center text-xs text-gray-500 mt-4">
                                        Oficina Parlamentaria Digital 2026
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
