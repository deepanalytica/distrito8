import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="border-b bg-white">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="font-bold text-xl text-blue-900">
                        Cristian Contreras
                    </Link>
                    <span className="text-sm text-gray-500 hidden sm:inline-block">
                        | Diputado Distrito 8
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
                    <Link href="/" className="hover:text-blue-900 transition-colors">
                        Inicio
                    </Link>
                    <Link href="/mi-comuna" className="hover:text-blue-900 transition-colors">
                        Mi Comuna
                    </Link>
                    <Link href="/guias" className="hover:text-blue-900 transition-colors">
                        Guías
                    </Link>
                    <Link href="/agenda" className="hover:text-blue-900 transition-colors">
                        Agenda
                    </Link>
                    <Link href="/avances" className="hover:text-blue-900 transition-colors">
                        Transparencia
                    </Link>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="outline" asChild className="hidden sm:inline-flex">
                        <Link href="/audiencia">Pedir Audiencia</Link>
                    </Button>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Link href="/ingresar-caso">Ingresar Caso</Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
}
