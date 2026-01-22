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

export const COMMUNE_INTELLIGENCE: Record<string, IntelligenceLayerData> = {
    maipu: {
        density: 4361,
        budgetPerCapita: 345000,
        vulnerability: 42,
        growth: 1.2
    },
    pudahuel: {
        density: 1285,
        budgetPerCapita: 512000,
        vulnerability: 38,
        growth: 0.9
    },
    quilicura: {
        density: 4380,
        budgetPerCapita: 320000,
        vulnerability: 45,
        growth: 1.5
    },
    colina: {
        density: 185,
        budgetPerCapita: 480000,
        vulnerability: 25,
        growth: 2.1
    },
    lampa: {
        density: 280,
        budgetPerCapita: 310000,
        vulnerability: 35,
        growth: 1.8
    },
    tiltil: {
        density: 32,
        budgetPerCapita: 420000,
        vulnerability: 30,
        growth: 0.5
    },
    "estacion-central": {
        density: 14714,
        budgetPerCapita: 298000,
        vulnerability: 52,
        growth: 3.2
    },
    cerrillos: {
        density: 4230,
        budgetPerCapita: 380000,
        vulnerability: 40,
        growth: 0.7
    }
};

export const MAP_THEMES = {
    dark: "mapbox://styles/mapbox/dark-v11",
    satellite: "mapbox://styles/mapbox/satellite-streets-v12",
    light: "mapbox://styles/mapbox/light-v11"
};
