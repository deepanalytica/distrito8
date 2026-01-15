export interface CommuneDetail {
    name: string;
    slug: string;
    priorities: { title: string; status: string; description: string }[];
    gestiones: { title: string; date: string; status: "RESPONDIDO" | "EN_GESTION" | "PENDIENTE" }[];
    contacts: { label: string; phone?: string; link?: string }[];
}

export const COMMUNE_DETAILS: Record<string, CommuneDetail> = {
    maipu: {
        name: "Maipú",
        slug: "maipu",
        priorities: [
            { title: "Seguridad Ciudadana", status: "En curso", description: "Refuerzo de luminarias y coordinación con el Plan Comunal de Seguridad Pública (PCSP)." },
            { title: "Reparación de Calles", status: "Prioritario", description: "Gestión ante SERVIU por baches críticos en avenidas principales." },
            { title: "Salud Primaria", status: "En gestión", description: "Búsqueda de recursos para mejora de infraestructura en CESFAM local." },
        ],
        gestiones: [
            { title: "Oficio por ruidos molestos en zona industrial", date: "10 ENE 2026", status: "EN_GESTION" },
            { title: "Reunión con directiva vecinal Los Pajaritos", date: "05 ENE 2026", status: "RESPONDIDO" },
        ],
        contacts: [
            { label: "Municipalidad de Maipú", phone: "1515", link: "https://www.maipu.cl" },
            { label: "Seguridad Maipú (PCSP)", phone: "1414" },
            { label: "Consultas por Agua (SMAPA)", phone: "22 677 6000" },
        ],
    },
    pudahuel: {
        name: "Pudahuel",
        slug: "pudahuel",
        priorities: [
            { title: "Ruido Aeropuerto", status: "Crítico", description: "Mesas de trabajo por insonorización de viviendas cercanas al terminal." },
            { title: "Conectividad (Transantiago)", status: "En curso", description: "Solicitud de refuerzo de recorridos en horarios punta." },
            { title: "Seguridad en Paraderos", status: "Prioritario", description: "Instalación de cámaras y mejora de iluminación en ejes principales." },
        ],
        gestiones: [
            { title: "Denuncia ante DGAC por ruidos fuera de norma", date: "11 ENE 2026", status: "EN_GESTION" },
            { title: "Operativo de retiro de cables en desuso", date: "08 ENE 2026", status: "RESPONDIDO" },
        ],
        contacts: [
            { label: "Municipalidad de Pudahuel", phone: "22 445 4000", link: "https://www.mpudahuel.cl" },
            { label: "Seguridad Ciudadana", phone: "1405" },
        ],
    },
    "estacion-central": {
        name: "Estación Central",
        slug: "estacion-central",
        priorities: [
            { title: "Comercio Ambulante", status: "Crítico", description: "Coordinación con Interior para recuperación de espacios públicos." },
            { title: "Seguridad en Eje Alameda", status: "Prioritario", description: "Fiscalización conjunta con Carabineros y Municipio." },
            { title: "Regulación de Edificación", status: "En curso", description: "Seguimiento a planes reguladores para evitar 'guetos verticales'." },
        ],
        gestiones: [
            { title: "Oficio a Delegación Presidencial por seguridad", date: "12 ENE 2026", status: "EN_GESTION" },
            { title: "Fiscalización de arriendos abusivos", date: "03 ENE 2026", status: "RESPONDIDO" },
        ],
        contacts: [
            { label: "Municipalidad de Estación Central", phone: "22 677 3400", link: "https://www.estacioncentral.cl" },
            { label: "Seguridad Municipal", phone: "1413" },
        ],
    },
    cerrillos: {
        name: "Cerrillos",
        slug: "cerrillos",
        priorities: [
            { title: "Protección de Humedales", status: "Prioritario", description: "Gestiones para evitar rellenos y daños al ecosistema local." },
            { title: "Transporte y Estación Metro", status: "En curso", description: "Mejora de accesos y seguridad en entorno Estación Cerrillos." },
            { title: "Seguridad Vecinal", status: "En curso", description: "Instalación de alarmas comunitarias y recuperación de plazas." },
        ],
        gestiones: [
            { title: "Mesa técnica por Humedal Urbano", date: "09 ENE 2026", status: "RESPONDIDO" },
            { title: "Solicitud de reductores de velocidad", date: "04 ENE 2026", status: "PENDIENTE" },
        ],
        contacts: [
            { label: "Municipalidad de Cerrillos", phone: "22 339 6000", link: "https://www.mcerrillos.cl" },
            { label: "Seguridad Cerrillos", phone: "1404" },
        ],
    },
    quilicura: {
        name: "Quilicura",
        slug: "quilicura",
        priorities: [
            { title: "Transporte y Tacos", status: "Crítico", description: "Gestiones por nudos viales y mejora de flujo de salida de la comuna." },
            { title: "Humedal Quilicura", status: "En curso", description: "Defensa legal y ciudadana del patrimonio natural." },
            { title: "Seguridad en Parques Industriales", status: "Prioritario", description: "Coordinación con empresas para entornos más seguros." },
        ],
        gestiones: [
            { title: "Oficio al MOP por salida a Autopista", date: "07 ENE 2026", status: "EN_GESTION" },
            { title: "Caminata de seguridad en Villa Los Esteros", date: "02 ENE 2026", status: "RESPONDIDO" },
        ],
        contacts: [
            { label: "Municipalidad de Quilicura", phone: "22 366 6600", link: "https://www.quilicura.cl" },
            { label: "Quili Seguridad", phone: "1416" },
        ],
    },
    colina: {
        name: "Colina",
        slug: "colina",
        priorities: [
            { title: "Transporte Interurbano", status: "Crítico", description: "Fiscalización de frecuencias y tarifas de buses a Santiago." },
            { title: "Servicios de Salud", status: "Prioritario", description: "Gestión por nuevo hospital en la zona norte." },
            { title: "Seguridad Rural", status: "En curso", description: "Prevención de abigeato y patrullajes en zonas alejadas." },
        ],
        gestiones: [
            { title: "Reunión con MTT por servicios de buses", date: "11 ENE 2026", status: "EN_GESTION" },
            { title: "Solicitud de retén móvil para Esmeralda", date: "28 DIC 2025", status: "RESPONDIDO" },
        ],
        contacts: [
            { label: "Municipalidad de Colina", phone: "22 707 3300", link: "https://www.colina.cl" },
            { label: "Seguridad Colina (1404)", phone: "1404" },
        ],
    },
    lampa: {
        name: "Lampa",
        slug: "lampa",
        priorities: [
            { title: "Agua y Alcantarillado", status: "Crítico", description: "Soluciones definitivas para zonas rezagadas y APRs." },
            { title: "Conectividad Vial", status: "Prioritario", description: "Mejora de rutas peligrosas y pavimentación." },
            { title: "Infraestructura Escolar", status: "En curso", description: "Ampliación de cupos y mejora de liceos públicos." },
        ],
        gestiones: [
            { title: "Fiscalización por cortes de agua", date: "10 ENE 2026", status: "EN_GESTION" },
            { title: "Oficio por estado de Ruta G-16", date: "05 ENE 2026", status: "RESPONDIDO" },
        ],
        contacts: [
            { label: "Municipalidad de Lampa", phone: "22 485 7500", link: "https://www.lampa.cl" },
            { label: "Seguridad Lampa", phone: "1418" },
        ],
    },
    tiltil: {
        name: "Tiltil",
        slug: "tiltil",
        priorities: [
            { title: "Zona de Sacrificio", status: "Crítico", description: "Gestión para frenar nuevos proyectos contaminantes y asegurar compensaciones." },
            { title: "Escasez Hídrica", status: "Crítico", description: "Abastecimiento regular para consumo humano y pequeña agricultura." },
            { title: "Transporte a Til Til", status: "Prioritario", description: "Mejora de la oferta de transporte público hacia el centro." },
        ],
        gestiones: [
            { title: "Mesa de diálogo por vertedero KDM", date: "08 ENE 2026", status: "EN_GESTION" },
            { title: "Entrega de camiones aljibe gestionados", date: "30 DIC 2025", status: "RESPONDIDO" },
        ],
        contacts: [
            { label: "Municipalidad de Tiltil", phone: "22 813 9300", link: "https://www.militiltil.cl" },
            { label: "Seguridad Ciudadana", phone: "1415" },
        ],
    },
};
