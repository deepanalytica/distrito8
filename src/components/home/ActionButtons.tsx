import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquarePlus, CalendarDays, TrendingUp } from "lucide-react";

export function ActionButtons() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto py-8">
            <Button
                asChild
                className="h-auto py-6 flex flex-col items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-transform hover:scale-105"
            >
                <Link href="/ingresar-caso">
                    <MessageSquarePlus className="h-8 w-8" />
                    <div className="text-center">
                        <span className="block text-lg font-bold">Necesito Ayuda</span>
                        <span className="block text-sm font-normal opacity-90">Ingresar o consultar un caso</span>
                    </div>
                </Link>
            </Button>

            <Button
                asChild
                variant="outline"
                className="h-auto py-6 flex flex-col items-center gap-3 border-2 border-blue-100 hover:border-blue-200 hover:bg-blue-50 text-blue-900 shadow-sm transition-transform hover:scale-105"
            >
                <Link href="/audiencia">
                    <CalendarDays className="h-8 w-8 text-blue-600" />
                    <div className="text-center">
                        <span className="block text-lg font-bold">Pedir Audiencia</span>
                        <span className="block text-sm font-normal opacity-80">Reunión con el diputado</span>
                    </div>
                </Link>
            </Button>

            <Button
                asChild
                variant="outline"
                className="h-auto py-6 flex flex-col items-center gap-3 border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50 text-gray-800 shadow-sm transition-transform hover:scale-105"
            >
                <Link href="/avances">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                    <div className="text-center">
                        <span className="block text-lg font-bold">Ver Avances</span>
                        <span className="block text-sm font-normal opacity-80">Resultados de esta semana</span>
                    </div>
                </Link>
            </Button>
        </div>
    );
}
