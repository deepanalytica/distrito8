"use client";

import { useRouter } from "next/navigation";
import { COMMUNES } from "@/lib/constants";
import { COMMUNE_DETAILS } from "@/lib/commune-data";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export function CommuneSelector() {
    const router = useRouter();

    const handleCommuneClick = (slug: string) => {
        router.push(`/mi-comuna/${slug}`);
    };

    const getGradient = (index: number) => {
        const gradients = [
            "from-blue-600/80 to-indigo-700/80",
            "from-emerald-600/80 to-teal-700/80",
            "from-amber-500/80 to-orange-600/80",
            "from-purple-600/80 to-pink-700/80",
            "from-cyan-600/80 to-blue-700/80",
            "from-rose-600/80 to-red-700/80",
            "from-indigo-600/80 to-violet-700/80",
            "from-teal-600/80 to-emerald-700/80",
        ];
        return gradients[index % gradients.length];
    };

    return (
        <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {COMMUNES.map((commune, index) => {
                    const detail = COMMUNE_DETAILS[commune.slug];
                    const gradient = getGradient(index);
                    const imageUrl = detail?.identity.image;

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
                                relative flex flex-col justify-between
                                border border-white/10
                            `}>
                                {/* Background Image with Gradient Overlay */}
                                {imageUrl && (
                                    <div
                                        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${imageUrl})` }}
                                    ></div>
                                )}
                                <div className={`absolute inset-0 z-0 bg-gradient-to-br ${gradient} mix-blend-multiply opacity-90 transition-opacity group-hover:opacity-75`}></div>

                                <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md border border-white/10">
                                            <MapPin className="h-5 w-5 text-white" />
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                                            <div className="bg-white/20 p-1.5 rounded-full backdrop-blur-md border border-white/10">
                                                <ArrowRight className="h-4 w-4 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:translate-x-1 transition-transform drop-shadow-md">
                                            {commune.name}
                                        </h3>
                                        <p className="text-white/80 text-[10px] font-black uppercase tracking-widest drop-shadow-md">
                                            Ver gestión local
                                        </p>
                                    </div>
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
