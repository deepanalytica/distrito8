export interface CommuneDetail {
    name: string;
    slug: string;
    population: string; // Censo 2024
    description: string;
    identity: {
        badge: string;
        title: string;
        text: string;
        image?: string;
    };

    // High Fidelity Model: Zero-Hallucination Metrics
    stats: {
        density: string;      // hab/km2 (Calculated)
        ips: number;          // Indice Prioridad Social 2022/23
        growth: string;      // % annual (Censo vs Censo)
        gender: { m: number; f: number }; // % (Censo 2024)
    };
    economics: {
        mainSector: string;
        municipalRevenue: string; // Total CLP (SINIM 2024)
        budgetPerCapita: string;  // Calculation: Revenue / Population
    };
    infrastructure: {
        health: {
            cesfamCount: number;
            hospitals: string[];
        };
        security: {
            vehicles: number;
            inspectors?: number;
            emergencyLine: string;
        };
    };

    priorities: { title: string; status: string; description: string }[];
    gestiones: { title: string; date: string; status: "RESPONDIDO" | "EN_GESTION" | "PENDIENTE" }[];
    contacts: { label: string; phone?: string; link?: string }[];
    history: { title: string; description: string; location?: string }[];
    gastronomy: { title: string; description: string; location?: string }[];
    nature: { title: string; description: string; location?: string }[];

    sources: {
        demografía: string;
        economía: string;
        vulnerabilidad: string;
    };

    // Citizen Utility MVP Modules
    procedures: { id: string; title: string; deadline: string; type: "MUNICIPAL" | "ESTATAL"; url: string }[];
    benefits: { title: string; target: "ADULTO_MAYOR" | "JOVENES" | "MUJERES" | "GENERAL"; location: string; schedule: string }[];
    securityTrends: { text: string; value: number; metric: string; source: string };
    works: { title: string; status: "EJECUCION" | "LICITACION" | "FINALIZADO"; mandante: string; investment: string }[];
}

export const COMMUNE_DETAILS: Record<string, CommuneDetail> = {
    maipu: {
        name: "Maipú",
        slug: "maipu",
        population: "503.635 hab.",
        description: "Maipú se consolida como la segunda comuna más poblada de Chile según el Censo 2024. Es un polo de desarrollo histórico y comercial clave para la Región Metropolitana, con una robusta identidad patriótica vinculada a la independencia nacional.",
        identity: {
            badge: "Identidad Patriótica",
            title: "El Altar de la Patria",
            text: "Cuna de la libertad y motor demográfico del sector poniente.",
            image: "/images/communes/maipu.png"
        },
        stats: {
            density: "3.719 hab/km²",
            ips: 60.86,
            growth: "0.8%",
            gender: { m: 48.5, f: 51.5 }
        },
        economics: {
            mainSector: "Servicios e Industria",
            municipalRevenue: "M$ 191.211.776",
            budgetPerCapita: "$379.664"
        },
        infrastructure: {
            health: {
                cesfamCount: 9,
                hospitals: ["Hospital El Carmen", "CRS Maipú"]
            },
            security: {
                vehicles: 42,
                inspectors: 56,
                emergencyLine: "1418"
            }
        },
        sources: {
            demografía: "Censo 2024 (INE)",
            economía: "Presupuesto Municipal 2024 (SINIM)",
            vulnerabilidad: "Indice Prioridad Social 2022 (MDSF)"
        },
        history: [
            { title: "Templo Votivo de Maipú", description: "Santuario Nacional y Monumento Histórico, centro de la fe republicana.", location: "Calle del Carmen 1750" },
            { title: "Cerro Primo de Rivera", description: "Antiguo puesto de mando estratégico durante la Batalla de Maipú.", location: "Av. Pajaritos / Anunciación" }
        ],
        nature: [
            { title: "Quebrada de la Plata", description: "Sitio prioritario de conservación biológica en la Cordillera de la Costa." }
        ],
        gastronomy: [
            { title: "Chancho con Chaleco", description: "Hito gastronómico criollo con más de un siglo de tradición.", location: "Av. Pajaritos 3027" }
        ],
        priorities: [
            { title: "Seguridad Ciudadana", status: "CRITICO", description: "Prevención de delitos violentos y control de comercio ambulante." },
            { title: "Infraestructura Vial", status: "ALTA", description: "Reparación de calzadas y mejora de conectividad urbana." }
        ],
        gestiones: [
            { title: "Inauguración CESFAM El Abrazo", date: "Octubre 2024", status: "RESPONDIDO" },
            { title: "Refuerzo flota de seguridad (32 vehículos)", date: "Julio 2023", status: "RESPONDIDO" }
        ],
        contacts: [
            { label: "Seguridad Ciudadana", phone: "1418" },
            { label: "Ambulancia (SAMU)", phone: "131" }
        ],

        // Citizen Utility Data (MVP)
        procedures: [
            { id: "p1", title: "Pago Patente Comercial", deadline: "31 Enero", type: "MUNICIPAL", url: "#" },
            { id: "p2", title: "Permiso de Circulación", deadline: "31 Marzo", type: "MUNICIPAL", url: "#" },
            { id: "p3", title: "Postulación Subsidio Arriendo", deadline: "15 Octubre", type: "ESTATAL", url: "#" }
        ],
        benefits: [
            { title: "Farmacia Municipal", target: "GENERAL", location: "Av. Pajaritos 2000", schedule: "Lun-Vie 09:00 - 18:00" },
            { title: "Taller Adulto Mayor", target: "ADULTO_MAYOR", location: "CAM Santiago Bueras", schedule: "Mar-Jue 10:00 - 12:00" },
            { title: "Beca Municipal", target: "JOVENES", location: "DIDECO", schedule: "Postulaciones Marzo" }
        ],
        securityTrends: {
            text: "Disminución en robo de vehículos",
            value: -12,
            metric: "Robos Violentos (Var. 12 meses)",
            source: "CEAD 2024"
        },
        works: [
            { title: "Repavimentación Camino Melipilla", status: "EJECUCION", mandante: "SERVIU", investment: "M$ 4.500.000" },
            { title: "Nueva Comisaría La Farfana", status: "LICITACION", mandante: "MOP", investment: "M$ 2.100.000" }
        ]
    },
    pudahuel: {
        name: "Pudahuel",
        slug: "pudahuel",
        population: "227.820 hab.",
        description: "Pudahuel opera como el nodo logístico de mayor importancia en Chile, albergando el Aeropuerto Arturo Merino Benítez. Su geografía integra una densa zona urbana con extensos territorios rurales y reservas naturales.",
        identity: {
            badge: "Nodo Logístico",
            title: "Portal de Chile",
            text: "Puerta de entrada internacional y pulmón verde del sector poniente.",
            image: "/images/communes/pudahuel.png"
        },
        stats: {
            density: "1.156 hab/km²",
            ips: 65.62,
            growth: "0.2%",
            gender: { m: 49.1, f: 50.9 }
        },
        economics: {
            mainSector: "Logística y Transporte",
            municipalRevenue: "M$ 128.650.454",
            budgetPerCapita: "$564.702"
        },
        infrastructure: {
            health: {
                cesfamCount: 10,
                hospitals: ["-"]
            },
            security: {
                vehicles: 18,
                inspectors: 28,
                emergencyLine: "1447"
            }
        },
        sources: {
            demografía: "Censo 2024 (INE)",
            economía: "SINIM (2024)",
            vulnerabilidad: "IPS 2023 (MDSF)"
        },
        history: [
            { title: "Aeropuerto AMB", description: "Motor económico y conectividad estratégica de nivel continental." }
        ],
        nature: [
            { title: "Laguna Carén", description: "Centro científico y tecnológico con ecosistema de humedal.", location: "Ruta 68, km 15" }
        ],
        gastronomy: [
            { title: "Picadas El Noviciado", description: "Tradición campesina y parrilladas en el sector rural." }
        ],
        priorities: [
            { title: "Medio Ambiente", status: "CRITICO", description: "Protección de humedales y control de contaminación industrial." },
            { title: "Seguridad", status: "ALTA", description: "Consolidación del plan 'Pudahuel Más Seguro'." }
        ],
        gestiones: [
            { title: "Lanzamiento Pudahuel Más Seguro", date: "Noviembre 2023", status: "RESPONDIDO" }
        ],
        contacts: [
            { label: "Emergencias", phone: "1447" }
        ],
        procedures: [],
        benefits: [],
        securityTrends: { text: "Análisis en curso", value: 0, metric: "-", source: "CEAD" },
        works: []
    },
    quilicura: {
        name: "Quilicura",
        slug: "quilicura",
        population: "205.624 hab.",
        description: "Quilicura se ha transformado en uno de los centros industriales y logísticos más potentes de la capital. Su identidad actual destaca por una rica multiculturalidad e importantes esfuerzos de conservación ambiental urbana.",
        identity: {
            badge: "Polo Industrial",
            title: "Tres Piedras",
            text: "Eje industrial estratégico y vanguardia multicultural en la zona norte.",
            image: "/images/communes/quilicura.png"
        },
        stats: {
            density: "3.545 hab/km²",
            ips: 60.36,
            growth: "1.2%",
            gender: { m: 49.3, f: 50.7 }
        },
        economics: {
            mainSector: "Industria y Comercio",
            municipalRevenue: "M$ 72.337.996",
            budgetPerCapita: "$351.797"
        },
        infrastructure: {
            health: {
                cesfamCount: 3,
                hospitals: ["-"]
            },
            security: {
                vehicles: 20,
                inspectors: 40,
                emergencyLine: "1412"
            }
        },
        sources: {
            demografía: "Censo 2024 (INE)",
            economía: "SINIM (2024)",
            vulnerabilidad: "IPS 2022 (MDSF)"
        },
        priorities: [
            { title: "Transporte/Movilidad", status: "CRITICO", description: "Descongestión de accesos y expansión de red de metro." },
            { title: "Humedales", status: "ALTA", description: "Protección legal del Humedal de Quilicura." }
        ],
        nature: [
            { title: "Humedales Urbanos", description: "Reserva de biodiversidad crítica contra el cambio climático." }
        ],
        gestiones: [
            { title: "Inversión Seguridad $2.000 Millones", date: "Marzo 2023", status: "RESPONDIDO" }
        ],
        contacts: [
            { label: "Seguridad", phone: "1412" }
        ],
        procedures: [],
        benefits: [],
        securityTrends: { text: "Análisis en curso", value: 0, metric: "-", source: "CEAD" },
        works: [],
        history: [{ title: "Origen Agrícola", description: "Evolución desde fundos rurales a nodo industrial país." }],
        gastronomy: [{ title: "Fusión Multicultural", description: "Encuentro de sabores chilenos, haitianos y latinoamericanos." }]
    },
    colina: {
        name: "Colina",
        slug: "colina",
        population: "173.293 hab.",
        description: "Capital de la Provincia de Chacabuco, Colina es un territorio que preserva sus raíces huasas mientras integra desarrollos urbanos de alto estándar. Destaca por su vida rural y sus famosas canteras de piedra.",
        identity: {
            badge: "Campo y Modernidad",
            title: "Tierra de Canteras",
            text: "Custodia de tradiciones del campo y motor deportivo de la Región Metropolitana.",
            image: "/images/communes/colina.png"
        },
        stats: {
            density: "178 hab/km²",
            ips: 61.82,
            growth: "2.5%",
            gender: { m: 49.8, f: 50.2 }
        },
        economics: {
            mainSector: "Servicios y Recursos Naturales",
            municipalRevenue: "M$ 90.974.473",
            budgetPerCapita: "$524.974"
        },
        infrastructure: {
            health: {
                cesfamCount: 3,
                hospitals: ["-"]
            },
            security: {
                vehicles: 28,
                inspectors: 35,
                emergencyLine: "1468"
            }
        },
        sources: {
            demografía: "Censo 2024 (INE)",
            economía: "SINIM (2024)",
            vulnerabilidad: "IPS 2022 (MDSF)"
        },
        history: [{ title: "Zona Típica Las Canteras", description: "Hogar de los maestros picapedreros que pavimentaron el Santiago histórico." }],
        nature: [{ title: "Entorno Montañoso", description: "Zona privilegiada para el trekking y deportes de montaña." }],
        gastronomy: [{ title: "Miel de Colina", description: "Producto con identidad local y calidad de exportación." }],
        priorities: [
            { title: "Gestión Hídrica", status: "CRITICO", description: "Aseguramiento de agua potable para sectores rurales." }
        ],
        gestiones: [
            { title: "Flota Gogoro Eléctrica", date: "Enero 2026", status: "RESPONDIDO" }
        ],
        contacts: [
            { label: "Seguridad", phone: "1468" }
        ],
        procedures: [],
        benefits: [],
        securityTrends: { text: "Análisis en curso", value: 0, metric: "-", source: "CEAD" },
        works: []
    },
    lampa: {
        name: "Lampa",
        slug: "lampa",
        population: "145.160 hab.",
        description: "Lampa es la comuna con el mayor crecimiento porcentual en el Distrito 8, aumentando casi un 30% su población en 7 años. Es el corazón natural de la zona norte, albergando el santuario hídrico más relevante de la región.",
        identity: {
            badge: "Crecimiento Explosivo",
            title: "Corazón del Secano Norte",
            text: "Líder en expansión urbana sustentable y refugio de biodiversidad.",
            image: "/images/communes/lampa.png"
        },
        stats: {
            density: "320 hab/km²",
            ips: 63.30,
            growth: "4.2%",
            gender: { m: 49.6, f: 50.4 }
        },
        economics: {
            mainSector: "Agricultura y Residencial",
            municipalRevenue: "M$ 45.400.000",
            budgetPerCapita: "$312.758"
        },
        infrastructure: {
            health: {
                cesfamCount: 2,
                hospitals: ["FUTURO HOSPITAL NORTE"]
            },
            security: {
                vehicles: 12,
                inspectors: 20,
                emergencyLine: "1421"
            }
        },
        sources: {
            demografía: "Censo 2024 (INE)",
            economía: "Proyección SINIM 2024",
            vulnerabilidad: "IPS 2023 (MDSF)"
        },
        nature: [
            { title: "Humedal de Batuco", description: "Reserva natural crítica para la migración de aves y biodiversidad.", location: "Localidad de Batuco" }
        ],
        history: [{ title: "Pasado Agroindustrial", description: "Referente del secano costero y la vida de campo tradicional." }],
        gastronomy: [{ title: "Producción Local", description: "Tierra de olivos y productos de campo." }],
        priorities: [
            { title: "Infraestructura Salud", status: "CRITICO", description: "Aceleración de implementación de nuevo Hospital para la zona norte." }
        ],
        gestiones: [
            { title: "Fiscalización Humedal", date: "Diciembre 2024", status: "RESPONDIDO" }
        ],
        contacts: [
            { label: "Lampa Seguro", phone: "1421" }
        ],
        procedures: [],
        benefits: [],
        securityTrends: { text: "Análisis en curso", value: 0, metric: "-", source: "CEAD" },
        works: []
    },
    tiltil: {
        name: "Tiltil",
        slug: "tiltil",
        population: "19.742 hab.",
        description: "Tiltil es un territorio de profunda carga histórica patriótica y desafíos ambientales. Conocida por su valor agrícola en tunas y aceitunas, la comuna lucha por equilibrar el desarrollo industrial con la calidad de vida de sus habitantes.",
        identity: {
            badge: "Santuario Patriótico",
            title: "Tierra de Manuel Rodríguez",
            text: "Custodia de la memoria independentista y tradición agrícola del secano.",
            image: "/images/communes/tiltil.png"
        },
        stats: {
            density: "30 hab/km²",
            ips: 68.38,
            growth: "0.5%",
            gender: { m: 50.1, f: 49.9 }
        },
        economics: {
            mainSector: "Minería y Agricultura",
            municipalRevenue: "M$ 10.200.000",
            budgetPerCapita: "$516.664"
        },
        infrastructure: {
            health: {
                cesfamCount: 2,
                hospitals: ["Hospital Tiltil (Baja)"]
            },
            security: {
                vehicles: 6,
                inspectors: 10,
                emergencyLine: "14"
            }
        },
        sources: {
            demografía: "Censo 2024 (INE)",
            economía: "SINIM 2024",
            vulnerabilidad: "IPS 2023 (MDSF)"
        },
        history: [
            { title: "Hito de Manuel Rodríguez", description: "Sitio de memoria del prócer de la Independencia.", location: "Cuesta de Tiltil" }
        ],
        nature: [
            { title: "Cerro El Roble", description: "Santuario de la naturaleza con ejemplares únicos de roble de Santiago." }
        ],
        gastronomy: [
            { title: "Capital de la Tuna", description: "Producción artesanal de tunas y aceitunas con sello local." }
        ],
        priorities: [
            { title: "Justicia Ambiental", status: "CRITICO", description: "Reducción de carga contaminante y vertederos." }
        ],
        gestiones: [
            { title: "Nuevo CESFAM Huertos Familiares", date: "Inicio 2024", status: "EN_GESTION" }
        ],
        contacts: [
            { label: "Municipalidad", phone: "2 2485 0900" }
        ],
        procedures: [],
        benefits: [],
        securityTrends: { text: "Análisis en curso", value: 0, metric: "-", source: "CEAD" },
        works: []
    },
    "estacion-central": {
        name: "Estación Central",
        slug: "estacion-central",
        population: "181.049 hab.",
        description: "Estación Central es el centro neurálgico del transporte ferroviario y terrestre en Santiago. Caracterizada por una densificación urbana vertical acelerada y una dinámica económica comercial vibrante.",
        identity: {
            badge: "Centro Ferroviario",
            title: "Puente del Viajero",
            text: "Corazón del transporte nacional y hogar de la solidaridad.",
            image: "/images/communes/estacion-central.png"
        },
        stats: {
            density: "12.840 hab/km²",
            ips: 70.92,
            growth: "2.1%",
            gender: { m: 50.4, f: 49.6 }
        },
        economics: {
            mainSector: "Comercio y Transporte",
            municipalRevenue: "M$ 65.400.000",
            budgetPerCapita: "$361.228"
        },
        infrastructure: {
            health: {
                cesfamCount: 4,
                hospitals: ["Mutual de Seguridad", "H. del Profesor"]
            },
            security: {
                vehicles: 14,
                inspectors: 30,
                emergencyLine: "1440"
            }
        },
        sources: {
            demografía: "Censo 2024 (INE)",
            economía: "SINIM (2024)",
            vulnerabilidad: "IPS 2023 (MDSF)"
        },
        history: [
            { title: "Estación Central de Ferrocarriles", description: "Monumento Nacional diseñado por industrias Eiffel.", location: "Eje Alameda" }
        ],
        nature: [{ title: "Planetario USACH", description: "Referente cultural y científico del país." }],
        gastronomy: [{ title: "Barrio Meiggs", description: "Referente de comida callejera y platos internacionales rápida." }],
        priorities: [
            { title: "Espacios Públicos", status: "CRITICO", description: "Recuperación de Alameda y control de ocupaciones ilegales." }
        ],
        gestiones: [
            { title: "Plan de Orden Alameda", date: "Continuo 2024", status: "EN_GESTION" }
        ],
        contacts: [
            { label: "Seguridad Vecinal", phone: "1440" }
        ],
        procedures: [],
        benefits: [],
        securityTrends: { text: "Análisis en curso", value: 0, metric: "-", source: "CEAD" },
        works: []
    },
    cerrillos: {
        name: "Cerrillos",
        slug: "cerrillos",
        population: "85.041 hab.",
        description: "Cerrillos evoluciona desde su pasado aeronáutico hacia una 'Ciudad Parque' moderna. Sede de los eventos masivos más relevantes del país y polo de vivienda social integrada de alto estándar.",
        identity: {
            badge: "Ciudad del Aire",
            title: "Corazón Cultural Surponiente",
            text: "Sede de vanguardia artística y el pulmón verde más joven de Santiago.",
            image: "/images/communes/cerrillos.png"
        },
        stats: {
            density: "4.049 hab/km²",
            ips: 65.71,
            growth: "0.4%",
            gender: { m: 49.0, f: 51.0 }
        },
        economics: {
            mainSector: "Servicios y Cultura",
            municipalRevenue: "M$ 38.000.000",
            budgetPerCapita: "$446.843"
        },
        infrastructure: {
            health: {
                cesfamCount: 3,
                hospitals: ["Hospital El Carmen (Maipú)"]
            },
            security: {
                vehicles: 10,
                inspectors: 25,
                emergencyLine: "1402"
            }
        },
        sources: {
            demografía: "Censo 2024 (INE)",
            economía: "SINIM (2024)",
            vulnerabilidad: "IPS 2023 (MDSF)"
        },
        nature: [
            { title: "Parque Bicentenario Cerrillos", description: "Espacio de 250 hectáreas para recreación y cultura.", location: "Av. Pedro Aguirre Cerda" }
        ],
        history: [{ title: "Ex Aeródromo Cerrillos", description: "Cuna de la aviación militar y civil chilena." }],
        gastronomy: [{ title: "Circuitos Lollapalooza", description: "Punto estratégico de grandes servicios de alimentación masiva." }],
        priorities: [
            { title: "Viviendas Ciudad Parque", status: "EN_PROCESO", description: "Entrega de soluciones habitacionales integradas." }
        ],
        gestiones: [
            { title: "Centro Nacional de Arte Contemporáneo", date: "Consolidado 2024", status: "RESPONDIDO" }
        ],
        contacts: [
            { label: "Seguridad Cerrillos", phone: "1402" }
        ],
        procedures: [],
        benefits: [],
        securityTrends: { text: "Análisis en curso", value: 0, metric: "-", source: "CEAD" },
        works: []
    }
};
