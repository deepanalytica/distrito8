export interface IntelligenceLayerData {
    density: number; // hab/km2
    budgetPerCapita: number; // CLP
    vulnerability: number; // 0-100 index
    growth: number; // % annual growth
}

export interface MapPOI {
    id: string;
    type: "salud" | "seguridad" | "educacion" | "transporte" | "patrimonio";
    name: string;
    description: string;
    coord: [number, number];
}

export interface MapGestion {
    id: string;
    title: string;
    description: string;
    status: "completado" | "en_progreso" | "oficiado";
    coord: [number, number];
    commune: string;
}

export const MAP_THEMES = {
    dark: "mapbox://styles/mapbox/dark-v11",
    satellite: "mapbox://styles/mapbox/satellite-streets-v12",
    light: "mapbox://styles/mapbox/light-v11"
};
