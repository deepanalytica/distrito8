"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { communeBoundaries, DISTRICT_CENTER, DISTRICT_ZOOM } from "@/lib/commune-boundaries";
import { useRouter } from "next/navigation";

// Set your Mapbox access token here
// Using Mapbox public demo token - replace with your own for production
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";

export function InteractiveMap() {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const [hoveredCommune, setHoveredCommune] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    // Ensure component only renders on client side
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || !mapContainer.current || map.current) return;

        // Initialize map
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/dark-v11",
            center: DISTRICT_CENTER,
            zoom: DISTRICT_ZOOM,
            pitch: 0,
            bearing: 0,
        });

        map.current.on("load", () => {
            if (!map.current) return;

            // Add commune boundaries source
            map.current.addSource("communes", {
                type: "geojson",
                data: communeBoundaries,
            });

            // Add fill layer for commune polygons
            map.current.addLayer({
                id: "commune-fills",
                type: "fill",
                source: "communes",
                paint: {
                    "fill-color": ["get", "color"],
                    "fill-opacity": [
                        "case",
                        ["boolean", ["feature-state", "hover"], false],
                        0.7,
                        0.4
                    ],
                },
            });

            // Add outline layer
            map.current.addLayer({
                id: "commune-borders",
                type: "line",
                source: "communes",
                paint: {
                    "line-color": "#ffffff",
                    "line-width": [
                        "case",
                        ["boolean", ["feature-state", "hover"], false],
                        3,
                        1.5
                    ],
                    "line-opacity": 0.8,
                },
            });

            // Add labels
            map.current.addLayer({
                id: "commune-labels",
                type: "symbol",
                source: "communes",
                layout: {
                    "text-field": ["get", "name"],
                    "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
                    "text-size": 14,
                    "text-offset": [0, 0],
                },
                paint: {
                    "text-color": "#ffffff",
                    "text-halo-color": "#000000",
                    "text-halo-width": 2,
                },
            });

            let hoveredStateId: string | number | null = null;

            // Mouse move handler
            map.current.on("mousemove", "commune-fills", (e) => {
                if (!map.current) return;

                map.current.getCanvas().style.cursor = "pointer";

                if (e.features && e.features.length > 0) {
                    if (hoveredStateId !== null) {
                        map.current.setFeatureState(
                            { source: "communes", id: hoveredStateId },
                            { hover: false }
                        );
                    }

                    hoveredStateId = e.features[0].id!;
                    const communeName = e.features[0].properties?.name;

                    setHoveredCommune(communeName);

                    map.current.setFeatureState(
                        { source: "communes", id: hoveredStateId },
                        { hover: true }
                    );
                }
            });

            // Mouse leave handler
            map.current.on("mouseleave", "commune-fills", () => {
                if (!map.current) return;

                map.current.getCanvas().style.cursor = "";

                if (hoveredStateId !== null) {
                    map.current.setFeatureState(
                        { source: "communes", id: hoveredStateId },
                        { hover: false }
                    );
                }

                hoveredStateId = null;
                setHoveredCommune(null);
            });

            // Click handler
            map.current.on("click", "commune-fills", (e) => {
                if (e.features && e.features.length > 0) {
                    const slug = e.features[0].properties?.slug;
                    if (slug) {
                        router.push(`/mi-comuna/${slug}`);
                    }
                }
            });
        });

        // Add navigation controls
        map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

        return () => {
            map.current?.remove();
        };
    }, [router, mounted]);

    // Show loading state during SSR
    if (!mounted) {
        return (
            <div className="relative w-full h-full bg-slate-800 rounded-xl flex items-center justify-center">
                <div className="text-white text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-sm">Cargando mapa...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full">
            <div ref={mapContainer} className="w-full h-full rounded-xl overflow-hidden shadow-2xl" />

            {/* Tooltip */}
            {hoveredCommune && (
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg border border-white/20">
                    <p className="text-sm font-medium">{hoveredCommune}</p>
                    <p className="text-xs text-gray-300 mt-1">Click para ver información</p>
                </div>
            )}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white px-4 py-3 rounded-lg shadow-lg border border-white/20">
                <h3 className="text-sm font-bold mb-2">Distrito 8</h3>
                <p className="text-xs text-gray-300">8 Comunas</p>
                <div className="mt-2 flex gap-2 flex-wrap">
                    {communeBoundaries.features.map((feature) => (
                        <div key={feature.properties.slug} className="flex items-center gap-1">
                            <div
                                className="w-3 h-3 rounded-sm"
                                style={{ backgroundColor: feature.properties.color }}
                            />
                            <span className="text-xs">{feature.properties.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
