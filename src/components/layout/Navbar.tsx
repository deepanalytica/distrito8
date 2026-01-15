"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    const navLinks = [
        { href: "/", label: "Inicio" },
        { href: "/compromisos", label: "8 Reformas" },
        { href: "/mi-comuna", label: "Distrito 8" },
        { href: "/preocupaciones", label: "Inteligencia T." },
        { href: "/transparencia", label: "Transparencia" },
        { href: "/agenda", label: "Agenda" },
    ];

    return (
        <nav className="border-b bg-white sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2 z-50 relative">
                    <Link href="/" onClick={closeMenu} className="font-bold text-xl text-blue-900 flex items-center gap-2">
                        Cristian Contreras
                    </Link>
                    <span className="text-sm text-gray-500 hidden lg:inline-block border-l pl-2 border-gray-300">
                        Diputado Distrito 8
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-blue-900 transition-colors font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="https://www.camara.cl/transparencia/FormularioSolicitudAudiencia.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-900 transition-colors font-medium flex items-center gap-1"
                    >
                        Audiencia (Ley del Lobby)
                    </a>
                </div>

                <div className="hidden lg:flex items-center gap-3">
                    <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg transition-all">
                        <Link href="/voluntarios">Ser Voluntario</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-gray-700 z-50 relative focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out lg:hidden flex flex-col pt-24 px-6 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="flex flex-col gap-6 text-lg font-medium text-gray-800">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="py-2 border-b border-gray-100 hover:text-blue-600 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="https://www.camara.cl/transparencia/FormularioSolicitudAudiencia.aspx"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                            className="py-2 border-b border-gray-100 hover:text-blue-600 transition-colors"
                        >
                            Solicitar Audiencia (Ley del Lobby)
                        </a>
                    </div>

                    <div className="flex flex-col gap-4 mt-8">
                        <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-12 text-lg">
                            <Link href="/voluntarios" onClick={closeMenu}>Ser Voluntario</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
