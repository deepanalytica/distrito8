export interface Event {
    id: string;
    commune: string;
    title: string;
    description: string;
    location: string;
    date: string;
    time: string;
    type: "OPERATIVO" | "REUNION" | "VISITA" | "CONGRESO";
}

export const EVENTS: Event[] = [
    {
        id: "1",
        commune: "Maipú",
        title: "Operativo de Salud en Plaza Mayor",
        description: "Atención médica básica, toma de presión y orientación sobre beneficios de salud.",
        location: "Plaza de Maipú (Frente al monumento)",
        date: "14 ENE 2026",
        time: "10:00 - 14:00",
        type: "OPERATIVO"
    },
    {
        id: "2",
        commune: "Cerrillos",
        title: "Reunión Vecinal Sector Los Presidentes",
        description: "Diálogo sobre problemas de seguridad y luminarias en el barrio.",
        location: "Sede J.V. Los Presidentes (Calle Arica 123)",
        date: "15 ENE 2026",
        time: "18:30 - 20:00",
        type: "REUNION"
    },
    {
        id: "3",
        commune: "Pudahuel",
        title: "Visita Territorial y Diálogo con feriantes",
        description: "Recorrido por feria local para escuchar demandas sobre infraestructura y comercio.",
        location: "Feria Libre San Francisco",
        date: "17 ENE 2026",
        time: "11:00 - 13:00",
        type: "VISITA"
    },
    {
        id: "4",
        commune: "Tiltil",
        title: "Mesa Técnica por Agua Potable Rural (APR)",
        description: "Sesión de trabajo con dirigentes de APR para evaluar proyectos de inversión.",
        location: "Edificio Municipal de Til Til",
        date: "20 ENE 2026",
        time: "15:00 - 17:00",
        type: "REUNION"
    },
    {
        id: "5",
        commune: "Valparaíso",
        title: "Sesión de Sala: Votación Ley de Seguridad",
        description: "Votación de proyectos prioritarios para el control de armas y crimen organizado.",
        location: "Congreso Nacional",
        date: "21 ENE 2026",
        time: "10:00 - 18:00",
        type: "CONGRESO"
    }
];
