import {
    Shield,
    Bus,
    Home,
    HeartPulse,
    GraduationCap,
    Trees,
    Users,
    Briefcase,
} from "lucide-react";
import Link from "next/link";

const PROBLEMS = [
    { icon: Shield, label: "Seguridad", href: "/guias", color: "text-blue-600" },
    { icon: Bus, label: "Transporte", href: "/guias", color: "text-orange-600" },
    { icon: Home, label: "Vivienda", href: "/guias", color: "text-amber-600" },
    { icon: HeartPulse, label: "Salud", href: "/guias", color: "text-red-500" },
    { icon: GraduationCap, label: "Educación", href: "/guias", color: "text-sky-500" },
    { icon: Trees, label: "Medioambiente", href: "/guias", color: "text-emerald-600" },
    { icon: Users, label: "Convivencia", href: "/guias", color: "text-purple-600" },
    { icon: Briefcase, label: "Empleo", href: "/ingresar-caso", color: "text-slate-600" },
];

export function FrequentProblems() {
    return (
        <section className="py-10">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Problemas y Trámites Frecuentes
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 max-w-4xl mx-auto">
                {PROBLEMS.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 transition-all duration-200 group"
                    >
                        <div className={`mb-3 p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform`}>
                            <item.icon className={`h-6 w-6 ${item.color}`} />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
