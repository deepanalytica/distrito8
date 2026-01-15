"use client";


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SeguimientoPage() {
    const [code, setCode] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [result, setResult] = useState<null | "NOT_FOUND" | "FOUND">(null);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!code) return;

        setIsSearching(true);
        setResult(null);

        // Simulate API call to check case status
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // For demo purposes, any 6+ char code is "found"
        if (code.length >= 4) {
            setResult("FOUND");
        } else {
            setResult("NOT_FOUND");
        }
        setIsSearching(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">


            <main className="flex-grow container mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
                <div className="max-w-xl w-full text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Seguimiento de Caso</h1>
                    <p className="text-gray-600">
                        Ingresa el código que recibiste al completar tu solicitud para conocer el estado actual de tu gestión.
                    </p>
                </div>

                <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                    <form onSubmit={handleSearch} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="code" className="text-sm font-semibold text-gray-700 ml-1">
                                Código de Seguimiento
                            </label>
                            <div className="relative">
                                <Input
                                    id="code"
                                    placeholder="Ej: AB1234"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                                    className="h-14 text-xl font-mono text-center tracking-widest uppercase border-2 focus:border-blue-500 rounded-2xl"
                                    maxLength={10}
                                />
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                                    <Search className="h-5 w-5" />
                                </div>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={isSearching || !code}
                            className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-lg shadow-md rounded-2xl gap-2 transition-all active:scale-95"
                        >
                            {isSearching ? (
                                <>
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                    Buscando...
                                </>
                            ) : (
                                <>
                                    Consultar Estado
                                    <ArrowRight className="h-5 w-5" />
                                </>
                            )}
                        </Button>
                    </form>

                    {result === "NOT_FOUND" && (
                        <div className="mt-8 p-4 bg-red-50 border border-red-100 text-red-700 rounded-2xl text-center text-sm">
                            No hemos encontrado ningún caso asociado a ese código. Por favor verifica que esté escrito correctamente.
                        </div>
                    )}

                    {result === "FOUND" && (
                        <div className="mt-8 space-y-4">
                            <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Estado Actual</span>
                                    <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                                        RECIBIDO
                                    </span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-1">Caso: #{code}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Tu caso ha sido recibido correctamente en nuestra plataforma y está en cola para ser revisado por un gestor territorial.
                                </p>
                                <div className="mt-6 pt-6 border-t border-blue-100">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex gap-4">
                                            <div className="h-3 w-3 rounded-full bg-blue-600 mt-1 shadow-[0_0_0_4px_rgba(37,99,235,0.1)]" />
                                            <div>
                                                <p className="text-xs font-bold text-gray-400">12 ENE, 2026 - 16:20</p>
                                                <p className="text-sm font-medium text-gray-700">Caso recibido en plataforma digital.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-12 text-center max-w-sm">
                    <p className="text-sm text-gray-400 mb-4">
                        ¿No tienes un código? Si ya ingresaste un caso y no lo recibiste, puedes contactarnos directamente.
                    </p>
                    <Button variant="link" className="text-blue-600 font-semibold" asChild>
                        <Link href="mailto:contacto@cristiancontreras.cl">
                            Contactar Soporte
                        </Link>
                    </Button>
                </div>
            </main>
        </div>
    );
}
