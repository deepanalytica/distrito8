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

export interface NeighborReport {
    id: string;
    type: "seguridad" | "infraestructura" | "salud" | "otro";
    title: string;
    description: string;
    status: "recibido" | "verificado" | "en_gestion";
    timestamp: string;
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

export const NEIGHBOR_REPORTS: Record<string, NeighborReport[]> = {
    maipu: [
        {
            id: "R-MA-001",
            type: "seguridad",
            title: "Robo frustrado en Pajaritos",
            description: "Vecinos reportan intento de robo de vehículo. Carabineros ya en el lugar.",
            status: "verificado",
            timestamp: "2024-01-22T03:30:00Z",
            coord: [-70.7570, -33.5110],
            commune: "maipu"
        },
        {
            id: "R-MA-002",
            type: "infraestructura",
            title: "Falla de semáforo",
            description: "Intersección Camino a Melipilla con Américo Vespucio.",
            status: "recibido",
            timestamp: "2024-01-22T04:15:00Z",
            coord: [-70.7750, -33.5300],
            commune: "maipu"
        },
        {
            id: "R-MA-003",
            type: "otro",
            title: "Microbasural detectado",
            description: "Acumulación de escombros en sitio eriazo sector Rinconada.",
            status: "en_gestion",
            timestamp: "2024-01-21T18:00:00Z",
            coord: [-70.8120, -33.5250],
            commune: "maipu"
        }
    ],
    pudahuel: [
        {
            id: "R-PU-001",
            type: "infraestructura",
            title: "Rotura de matriz de agua",
            description: "Gran fuga de agua en calle Teniente Merino. Aguas Andinas notificada.",
            status: "en_gestion",
            timestamp: "2024-01-22T04:45:00Z",
            coord: [-70.7490, -33.4390],
            commune: "pudahuel"
        },
        {
            id: "R-PU-002",
            type: "seguridad",
            title: "Iluminación deficiente",
            description: "Paradero 14 de San Pablo sin luz. Riesgo de asaltos.",
            status: "verificado",
            timestamp: "2024-01-21T21:30:00Z",
            coord: [-70.7350, -33.4420],
            commune: "pudahuel"
        }
    ],
    "estacion-central": [
        {
            id: "R-EC-001",
            type: "seguridad",
            title: "Comercio ambulante desbordado",
            description: "Bloqueo total de vereda en salida Metro Estación Central.",
            status: "recibido",
            timestamp: "2024-01-22T08:00:00Z",
            coord: [-70.6780, -33.4510],
            commune: "estacion-central"
        },
        {
            id: "R-EC-002",
            type: "infraestructura",
            title: "Evento (Hoyo) profundo",
            description: "Socavón en Alameda con General Velásquez puede causar accidentes.",
            status: "en_gestion",
            timestamp: "2024-01-21T15:20:00Z",
            coord: [-70.6920, -33.4540],
            commune: "estacion-central"
        }
    ],
    quilicura: [
        {
            id: "R-QU-001",
            type: "seguridad",
            title: "Carreras clandestinas",
            description: "Ruidos y riesgo en sector industrial Américo Vespucio.",
            status: "verificado",
            timestamp: "2024-01-22T01:15:00Z",
            coord: [-70.7250, -33.3550],
            commune: "quilicura"
        },
        {
            id: "R-QU-002",
            type: "otro",
            title: "Mal olor persistente",
            description: "Emanaciones químicas detectadas por vecinos sector Lo Boza.",
            status: "recibido",
            timestamp: "2024-01-21T10:45:00Z",
            coord: [-70.7410, -33.3750],
            commune: "quilicura"
        }
    ],
    cerrillos: [
        {
            id: "R-CE-001",
            type: "infraestructura",
            title: "Cunetas obstruidas",
            description: "Basura acumulada en desagües de Avenida Suiza.",
            status: "verificado",
            timestamp: "2024-01-22T09:30:00Z",
            coord: [-70.7120, -33.4950],
            commune: "cerrillos"
        },
        {
            id: "R-CE-002",
            type: "seguridad",
            title: "Consumo de drogas en plaza",
            description: "Plaza Bicentenario con baja vigilancia nocturna.",
            status: "en_gestion",
            timestamp: "2024-01-21T23:00:00Z",
            coord: [-70.7050, -33.5150],
            commune: "cerrillos"
        }
    ],
    colina: [
        {
            id: "R-CO-001",
            type: "otro",
            title: "Sequía en canal Lo Seco",
            description: "Bajo caudal afecta a agricultores locales. Posible desvío ilegal.",
            status: "verificado",
            timestamp: "2024-01-22T07:15:00Z",
            coord: [-70.6750, -33.2050],
            commune: "colina"
        },
        {
            id: "R-CO-002",
            type: "seguridad",
            title: "Robo en lugar habitado",
            description: "Alerta en Condominio Piedra Roja. Guardia de civil herido.",
            status: "verificado",
            timestamp: "2024-01-22T02:40:00Z",
            coord: [-70.6550, -33.3250],
            commune: "colina"
        }
    ],
    lampa: [
        {
            id: "R-LA-001",
            type: "infraestructura",
            title: "Caminos de tierra en mal estado",
            description: "Sector Batuco intransitable tras rotura de cañería.",
            status: "en_gestion",
            timestamp: "2024-01-22T06:20:00Z",
            coord: [-70.8250, -33.2250],
            commune: "lampa"
        },
        {
            id: "R-LA-002",
            type: "salud",
            title: "Posta rural sin insumos",
            description: "Vecinos informan falta de medicamentos básicos en Posta Lampa.",
            status: "recibido",
            timestamp: "2024-01-21T11:00:00Z",
            coord: [-70.8750, -33.2850],
            commune: "lampa"
        }
    ],
    tiltil: [
        {
            id: "R-TI-001",
            type: "otro",
            title: "Olores molestos KDM",
            description: "Nuevas emanaciones afectan la calidad de vida en el pueblo.",
            status: "verificado",
            timestamp: "2024-01-22T05:30:00Z",
            coord: [-70.7950, -33.0850],
            commune: "tiltil"
        },
        {
            id: "R-TI-002",
            type: "infraestructura",
            title: "Falta de presión de agua",
            description: "Sector Polpaico con cortes intermitentes desde ayer.",
            status: "en_gestion",
            timestamp: "2024-01-21T20:15:00Z",
            coord: [-70.8250, -33.1250],
            commune: "tiltil"
        }
    ]
};

export const MAP_THEMES = {
    dark: "mapbox://styles/mapbox/dark-v11",
    satellite: "mapbox://styles/mapbox/satellite-streets-v12",
    light: "mapbox://styles/mapbox/light-v11"
};
