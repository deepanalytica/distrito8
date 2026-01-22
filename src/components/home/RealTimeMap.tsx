"use client";

import { useEffect, useMemo, useState } from "react";
import { Map, Marker, Popup, NavigationControl, FullscreenControl } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { AlertCircle, MapPin, ShieldAlert, Zap, Clock } from "lucide-react";
import { NEIGHBOR_REPORTS, NeighborReport } from "@/lib/map-intelligence-data";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";

interface RealTimeMapProps {
    communeSlug?: string;
    height?: string;
    interactive?: boolean;
}

export function RealTimeMap({ communeSlug, height = "100%", interactive = true }: RealTimeMapProps) {
    const [selectedReport, setSelectedReport] = useState<NeighborReport | null>(null);
    const [viewState, setViewState] = useState({
        longitude: -70.75,
        latitude: -33.45,
        zoom: 11,
        pitch: 45,
        bearing: 0
    });

    // Flatten all reports for the map
    const allReports = useMemo(() => {
        if (communeSlug && NEIGHBOR_REPORTS[communeSlug]) {
            return NEIGHBOR_REPORTS[communeSlug];
        }
        return Object.values(NEIGHBOR_REPORTS).flat();
    }, [communeSlug]);

    // Center map when commune changes
    useEffect(() => {
        if (communeSlug && NEIGHBOR_REPORTS[communeSlug]?.length > 0) {
            const firstReport = NEIGHBOR_REPORTS[communeSlug][0];
            setViewState(prev => ({
                ...prev,
                longitude: firstReport.coord[0],
                latitude: firstReport.coord[1],
                zoom: 13,
                transitionDuration: 1000
            }));
        }
    }, [communeSlug]);

    const getIcon = (type: string) => {
        switch (type) {
            case "seguridad": return <ShieldAlert className="h-4 w-4" />;
            case "infraestructura": return <Zap className="h-4 w-4" />;
            default: return <AlertCircle className="h-4 w-4" />;
        }
    };

    const getColor = (type: string) => {
        switch (type) {
            case "seguridad": return "bg-red-500 text-white";
            case "infraestructura": return "bg-amber-500 text-slate-900";
            default: return "bg-blue-500 text-white";
        }
    };

    return (
        <div style={{ height }} className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/5">
            <Map
                {...viewState}
                onMove={evt => setViewState(evt.viewState)}
                mapStyle="mapbox://styles/mapbox/dark-v11"
                mapboxAccessToken={MAPBOX_TOKEN}
                style={{ width: "100%", height: "100%" }}
                antialias={true}
                interactive={interactive}
            >
                <NavigationControl position="top-right" />
                <FullscreenControl position="top-right" />

                {allReports.map((report) => (
                    <Marker
                        key={report.id}
                        longitude={report.coord[0]}
                        latitude={report.coord[1]}
                        anchor="bottom"
                        onClick={e => {
                            e.originalEvent.stopPropagation();
                            setSelectedReport(report);
                        }}
                    >
                        <div className={`
                            relative group cursor-pointer p-2 rounded-full border-2 border-white shadow-lg
                            transition-transform duration-300 hover:scale-125
                            ${getColor(report.type)}
                        `}>
                            {getIcon(report.type)}

                            {/* Pulse effect */}
                            <div className={`absolute inset-0 rounded-full animate-ping opacity-40 ${getColor(report.type).split(' ')[0]}`}></div>
                        </div>
                    </Marker>
                ))}

                {selectedReport && (
                    <Popup
                        longitude={selectedReport.coord[0]}
                        latitude={selectedReport.coord[1]}
                        anchor="top"
                        onClose={() => setSelectedReport(null)}
                        closeButton={false}
                        className="custom-popup"
                        maxWidth="320px"
                    >
                        <div className="p-4 bg-slate-900 text-white rounded-2xl shadow-2xl border border-white/10 max-w-[280px]">
                            <div className="flex items-center gap-2 mb-2">
                                <Badge className={`${getColor(selectedReport.type)} border-none py-0 px-2 font-black text-[9px] uppercase tracking-widest`}>
                                    {selectedReport.type}
                                </Badge>
                                <span className="text-[10px] text-gray-500 font-mono">{selectedReport.id}</span>
                            </div>

                            <h4 className="font-bold text-sm mb-1 leading-tight">{selectedReport.title}</h4>
                            <p className="text-[11px] text-gray-400 leading-relaxed mb-3">{selectedReport.description}</p>

                            <div className="flex items-center justify-between border-t border-white/5 pt-3">
                                <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
                                    <Clock className="h-3 w-3" />
                                    {formatDistanceToNow(new Date(selectedReport.timestamp), { addSuffix: true, locale: es })}
                                </div>
                                <Badge variant="outline" className="text-[9px] py-0 border-white/10 text-emerald-500 font-bold uppercase">
                                    {selectedReport.status}
                                </Badge>
                            </div>
                        </div>
                    </Popup>
                )}
            </Map>

            {/* Float Overlay Legend */}
            <div className="absolute bottom-6 left-6 p-4 bg-slate-950/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Seguridad</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Infraestructura</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Servicios</span>
                    </div>
                </div>
            </div>

            {/* Top Indicator */}
            <div className="absolute top-6 left-6 flex items-center gap-3 px-4 py-2 bg-emerald-500/10 backdrop-blur-md rounded-full border border-emerald-500/20">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Sistema de Alerta Activo</span>
            </div>
        </div>
    );
}
