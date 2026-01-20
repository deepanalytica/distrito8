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

export const DISTRICT_POIS: MapPOI[] = [
    {
        id: "hosp-maipu",
        type: "salud",
        name: "Hospital El Carmen",
        description: "Urgencias 24h. Tel: +56 2 2612 1100",
        coord: [-70.7675, -33.5158]
    },
    {
        id: "crs-maipu",
        type: "salud",
        name: "CRS Maipú",
        description: "Especialidades médicas y dental.",
        coord: [-70.7620, -33.5100]
    },
    {
        id: "comisaria-maipu",
        type: "seguridad",
        name: "25ª Comisaría Maipú",
        description: "Denuncias y emergencias: 133",
        coord: [-70.7580, -33.5090]
    },
    {
        id: "hosp-pudahuel",
        type: "salud",
        name: "CESFAM Pudahuel Estrella",
        description: "Urgencia primaria (SAPU).",
        coord: [-70.7480, -33.4350]
    },
    {
        id: "comisaria-pudahuel",
        type: "seguridad",
        name: "26ª Comisaría Pudahuel",
        description: "Asistencia policial sector norte.",
        coord: [-70.7520, -33.4380]
    },
    {
        id: "aeropuerto-amb",
        type: "transporte",
        name: "Aeropuerto AMB",
        description: "Hub logístico internacional.",
        coord: [-70.7853, -33.3930]
    }
];

export const DEPUTY_GESTIONES: MapGestion[] = [
    {
        id: "OF-2024-001",
        title: "Oficio por Megaincendios",
        description: "Fiscalización de protocolos de emergencia y recursos para bomberos.",
        status: "oficiado",
        coord: [-70.7572, -33.5105],
        commune: "maipu"
    },
    {
        id: "RS-2023-442",
        title: "Pavimentación Calle Longitudinal",
        description: "Gestión con SERVIU para reparación tras 5 años de abandono.",
        status: "completado",
        coord: [-70.7700, -33.5200],
        commune: "maipu"
    },
    {
        id: "OF-2024-112",
        title: "Seguridad en Paraderos",
        description: "Solicitud de mayor iluminación y cámaras en sector Pudahuel Sur.",
        status: "en_progreso",
        coord: [-70.7450, -33.4500],
        commune: "pudahuel"
    },
    {
        id: "OF-2024-089",
        title: "Fiscalización Vertedero Santa Marta",
        description: "Oficio a la SMA por superación de niveles contaminantes.",
        status: "oficiado",
        coord: [-70.7020, -33.5600],
        commune: "cerrillos"
    }
];

export const MAP_THEMES = {
    dark: "mapbox://styles/mapbox/dark-v11",
    satellite: "mapbox://styles/mapbox/satellite-streets-v12",
    light: "mapbox://styles/mapbox/light-v11"
};
