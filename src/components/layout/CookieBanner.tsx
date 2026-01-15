"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-500">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-amber-100 p-2 rounded-xl">
                            <Cookie className="h-6 w-6 text-amber-600" />
                        </div>
                        <h3 className="font-bold text-gray-900">Uso de Cookies</h3>
                    </div>
                    <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-gray-600 p-1">
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                    Utilizamos cookies propias y de terceros para asegurar el funcionamiento del portal, realizar análisis estadísticos y mejorar tu experiencia. Consulta nuestra{" "}
                    <Link href="/privacidad" className="text-blue-600 font-medium underline">
                        Política de Privacidad
                    </Link>{" "}
                    para más información.
                </p>

                <div className="flex items-center gap-3 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 rounded-xl h-10" onClick={handleDecline}>
                        Rechazar
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-xl h-10" onClick={handleAccept}>
                        Aceptar todo
                    </Button>
                </div>
            </div>
        </div>
    );
}
