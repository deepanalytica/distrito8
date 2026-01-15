export const COMMUNES = [
    { name: "Maipú", slug: "maipu" },
    { name: "Pudahuel", slug: "pudahuel" },
    { name: "Estación Central", slug: "estacion-central" },
    { name: "Cerrillos", slug: "cerrillos" },
    { name: "Quilicura", slug: "quilicura" },
    { name: "Colina", slug: "colina" },
    { name: "Lampa", slug: "lampa" },
    { name: "Tiltil", slug: "tiltil" },
] as const;

export type CommuneName = (typeof COMMUNES)[number]["name"];
export type CommuneSlug = (typeof COMMUNES)[number]["slug"];

export const TOPICS = [
    { name: "Seguridad", slug: "seguridad", icon: "Shield" },
    { name: "Transporte", slug: "transporte", icon: "Bus" },
    { name: "Vivienda", slug: "vivienda", icon: "Home" },
    { name: "Salud", slug: "salud", icon: "HeartPulse" },
    { name: "Educación", slug: "educacion", icon: "GraduationCap" },
    { name: "Medioambiente", slug: "medioambiente", icon: "Trees" },
    { name: "Convivencia", slug: "convivencia", icon: "Users" },
    { name: "Empleo", slug: "empleo", icon: "Briefcase" },
] as const;

export type TopicName = (typeof TOPICS)[number]["name"];
export type TopicSlug = (typeof TOPICS)[number]["slug"];

export const CASE_STATUSES = [
    "RECIBIDO",
    "EN_REVISION",
    "EN_GESTION",
    "DERIVADO",
    "RESPONDIDO",
    "CERRADO",
] as const;

export type CaseStatus = (typeof CASE_STATUSES)[number];
