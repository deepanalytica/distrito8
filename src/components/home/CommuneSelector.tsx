"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { COMMUNES } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Trees, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CommuneSelector() {
    const router = useRouter();
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleCommuneClick = (slug: string) => {
        router.push(`/mi-comuna/${slug}`);
    };

    // Assign generic icons/features for visual variety since we don't have real images yet
    const getCommuneIcon = (index: number) => {
        const icons = [Building2, Trees, Users, GraduationCap];
        return icons[index % icons.length];
    };

    const getGradient = (index: number) => {
        const gradients = [
            "from-blue-600 to-indigo-700",
            "from-emerald-600 to-teal-700",
            "from-amber-500 to-orange-600",
            "from-purple-600 to-pink-700",
            "from-cyan-600 to-blue-700",
            "from-rose-600 to-red-700",
            "from-indigo-600 to-violet-700",
            "from-teal-600 to-emerald-700",
        ];
        return gradients[index % gradients.length];
    };

    return (
        <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {COMMUNES.map((commune, index) => {
                    const Icon = getCommuneIcon(index);
                    const gradient = getGradient(index);

                    return (
                        <motion.div
                            key={commune.slug}
                            whileHover={{ scale: 1.02, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative cursor-pointer"
                            onClick={() => handleCommuneClick(commune.slug)}
                        >
                            <div className={`
                                h-40 rounded-xl overflow-hidden shadow-lg 
                                bg-gradient-to-br ${gradient} p-4 
                                flex flex-col justify-between
                                border border-white/10
                            `}>
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                                    <div className="absolute -right-4 -bottom-4 bg-white/30 rounded-full w-24 h-24 blur-xl"></div>
                                    <div className="absolute -left-4 -top-4 bg-black/20 rounded-full w-20 h-20 blur-xl"></div>
                                </div>

                                <div className="relative z-10 flex justify-between items-start">
                                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                                        <Icon className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                                        <div className="bg-white/20 p-1.5 rounded-full backdrop-blur-sm">
                                            <ArrowRight className="h-4 w-4 text-white" />
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:translate-x-1 transition-transform">
                                        {commune.name}
                                    </h3>
                                    <p className="text-white/80 text-xs font-medium">
                                        Ver gestión local
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <p className="text-center text-gray-500 mt-6 text-sm">
                Selecciona tu comuna para acceder a información prioritaria y exclusiva.
            </p>
        </div>
    );
}
