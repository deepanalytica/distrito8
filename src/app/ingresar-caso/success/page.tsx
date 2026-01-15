"use client";


import { CheckCircle2, Copy, Search, House } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

import { Suspense } from "react";

function CaseSuccessContent() {
    const searchParams = useSearchParams();
    const caseId = searchParams.get("id") || "PENDIENTE";

    return (
        <main className="flex-grow flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
                <div className="flex justify-center mb-6">
                    <div className="bg-green-100 p-3 rounded-full">
                        <CheckCircle2 className="h-12 w-12 text-green-600" />
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-2">¡Caso Ingresado con Éxito!</h1>
                <p className="text-gray-600 mb-8">
                    Hemos recibido tu solicitud. Un integrante de nuestro equipo territorial revisará los antecedentes y te contactará a la brevedad.
                </p>

                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8">
                    <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider mb-2 block">
                        Tu Código de Seguimiento
                    </span>
                    <div className="flex items-center justify-center gap-3">
                        <span className="text-3xl font-mono font-bold text-blue-900">{caseId}</span>
                        <button
                            className="p-2 hover:bg-blue-100 rounded-full transition-colors text-blue-600"
                            onClick={() => navigator.clipboard.writeText(caseId)}
                            title="Copiar código"
                        >
                            <Copy className="h-5 w-5" />
                        </button>
                    </div>
                    <p className="text-xs text-blue-600 mt-4 leading-relaxed">
                        Guarda este código para consultar el estado de tu gestión en la sección de &quot;Seguimiento&quot;.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                    <Button asChild variant="outline" className="h-12 gap-2">
                        <Link href="/seguimiento">
                            <Search className="h-4 w-4" />
                            Seguir mi caso ahora
                        </Link>
                    </Button>
                    <Button asChild className="h-12 bg-blue-600 hover:bg-blue-700 gap-2">
                        <Link href="/">
                            <House className="h-4 w-4" />
                            Volver al Inicio
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}

export default function CaseSuccessPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">

            <Suspense fallback={<div className="flex-grow flex items-center justify-center">Cargando...</div>}>
                <CaseSuccessContent />
            </Suspense>
            <footer className="py-8 text-center text-gray-400 text-xs">
                © 2026 Oficina Parlamentaria Cristian Contreras.
            </footer>
        </div>
    );
}
