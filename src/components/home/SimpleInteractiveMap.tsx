"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { communeBoundaries } from "@/lib/commune-boundaries";

export function SimpleInteractiveMap() {
    const [hoveredCommune, setHoveredCommune] = useState<string | null>(null);
    const router = useRouter();

    // Convert lat/lng to SVG coordinates (expanded bounds for full RM)
    const latLngToSVG = (lng: number, lat: number) => {
        const minLng = -71.2;
        const maxLng = -70.4;
        const minLat = -33.7;
        const maxLat = -32.85;

        const x = ((lng - minLng) / (maxLng - minLng)) * 1000;
        const y = ((maxLat - lat) / (maxLat - minLat)) * 800;

        return { x, y };
    };

    const handleClick = (slug: string) => {
        router.push(`/mi-comuna/${slug}`);
    };

    return (
        <div className="relative w-full h-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl">
            <svg
                viewBox="0 0 1000 800"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
                style={{ background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)" }}
            >
                {/* Grid lines for reference */}
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="rgba(255,255,255,0.03)"
                            strokeWidth="1"
                        />
                    </pattern>
                </defs>
                <rect width="1000" height="800" fill="url(#grid)" />

                {/* Render District 8 commune polygons with real coordinates */}
                {communeBoundaries.features.map((feature) => {
                    const coords = feature.geometry.coordinates[0];
                    const svgPoints = coords.map(([lng, lat]) => {
                        const { x, y } = latLngToSVG(lng, lat);
                        return `${x},${y}`;
                    }).join(" ");

                    const isHovered = hoveredCommune === feature.properties.name;

                    return (
                        <g key={feature.properties.slug}>
                            {/* Polygon fill */}
                            <polygon
                                points={svgPoints}
                                fill={feature.properties.color}
                                fillOpacity={isHovered ? 0.8 : 0.5}
                                stroke="#ffffff"
                                strokeWidth={isHovered ? 3 : 2}
                                strokeOpacity={0.9}
                                className="cursor-pointer transition-all duration-200"
                                onMouseEnter={() => setHoveredCommune(feature.properties.name)}
                                onMouseLeave={() => setHoveredCommune(null)}
                                onClick={() => handleClick(feature.properties.slug)}
                            />

                            {/* Commune label */}
                            <text
                                x={latLngToSVG(feature.properties.center[0], feature.properties.center[1]).x}
                                y={latLngToSVG(feature.properties.center[0], feature.properties.center[1]).y}
                                fill="#ffffff"
                                fontSize="13"
                                fontWeight="bold"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                stroke="#000000"
                                strokeWidth="2.5"
                                paintOrder="stroke"
                                className="pointer-events-none select-none"
                            >
                                {feature.properties.name}
                            </text>
                        </g>
                    );
                })}
            </svg>

            {/* Tooltip */}
            {hoveredCommune && (
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg border border-white/20 animate-in fade-in duration-200">
                    <p className="text-sm font-medium">{hoveredCommune}</p>
                    <p className="text-xs text-gray-300 mt-1">Click para ver información</p>
                </div>
            )}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white px-4 py-3 rounded-lg shadow-lg border border-white/20 max-w-xs">
                <h3 className="text-sm font-bold mb-2">Distrito 8</h3>
                <p className="text-xs text-gray-300 mb-2">8 Comunas con coordenadas reales</p>
                <div className="grid grid-cols-2 gap-2">
                    {communeBoundaries.features.map((feature) => (
                        <div key={feature.properties.slug} className="flex items-center gap-1.5">
                            <div
                                className="w-3 h-3 rounded-sm flex-shrink-0"
                                style={{ backgroundColor: feature.properties.color }}
                            />
                            <span className="text-xs truncate">{feature.properties.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
