
import { CaseForm } from "@/components/forms/CaseForm";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default function IngresarCasoPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">


            <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-2xl mx-auto mb-8">
                    <Link
                        href="/"
                        className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-4"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Volver al inicio
                    </Link>

                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Ingresar Nuevo Caso</h1>
                    <p className="text-gray-600 leading-relaxed">
                        Utiliza este formulario para reportar problemas en tu comuna, solicitar gestiones o pedir orientación ante autoridades.
                    </p>
                </div>

                <Suspense fallback={<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto animate-pulse h-96">Cargando formulario...</div>}>
                    <CaseForm />
                </Suspense>
            </main>

            <footer className="bg-white border-t py-8 text-center text-sm text-gray-400">
                <div className="container mx-auto px-4">
                    <p>© 2026 Oficina Parlamentaria Cristian Contreras. Distrito 8.</p>
                </div>
            </footer>
        </div>
    );
}
