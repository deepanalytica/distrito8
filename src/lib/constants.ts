// ============================================
// SITE METADATA
// ============================================
export const SITE_CONFIG = {
    name: "Cristian Contreras Radovic - Diputado Distrito 8",
    shortName: "Cristian Contreras",
    description: "Equilibrio: El Camino hacia un Chile Próspero y Seguro",
    url: "https://cristiancontrerasradovic.cl",
    email: "contacto@mirefugioenelcampo.cl",
    district: "Distrito 8",
    region: "Región Metropolitana",
} as const;

// ============================================
// DEPUTY INFORMATION
// ============================================
export const DEPUTY_INFO = {
    fullName: "Cristián Alejandro Contreras Radovic",
    commonName: "Cristian Contreras",
    nickname: "Dr. File",
    party: "Partido de la Gente",
    district: 8,
    assumptionDate: "2026-03-11",
    vision: "Equilibrio: El Camino hacia un Chile Próspero y Seguro",
    motto: "El equilibrio es el único camino para ser feliz",
    bio: "Periodista, escritor, filósofo y político chileno. Diputado electo por el Distrito 8, comprometido con la transformación del Estado a través de las 8 Grandes Reformas.",
} as const;

// ============================================
// DISTRICT 8 COMMUNES
// ============================================
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

// ============================================
// 8 REFORMAS DEL ESTADO
// ============================================
export const REFORMAS = [
    {
        id: 1,
        name: "Filosofía y Educación",
        icon: "GraduationCap",
        description: "Incorporar la Filosofía Perfecta en todos los establecimientos educativos. Educación de calidad, integral y gratuita.",
        color: "blue",
    },
    {
        id: 2,
        name: "Antropología (Dignidad Humana)",
        icon: "Heart",
        description: "Restaurar la soberanía individual. Derechos fundamentales: casa digna, trabajo bien remunerado, salud integral, educación gratuita.",
        color: "rose",
    },
    {
        id: 3,
        name: "Economía (Equilibrio Empresarial)",
        icon: "TrendingUp",
        description: "Equilibrar grandes empresas con PYMES. Redistribuir equitativamente la riqueza global de Chile.",
        color: "emerald",
    },
    {
        id: 4,
        name: "Administración (Meritocracia)",
        icon: "Award",
        description: "Instaurar la meritocracia en el Estado. Eliminar nepotismo y corrupción. Incentivar la noble carrera funcionaria.",
        color: "amber",
    },
    {
        id: 5,
        name: "Política (Valores y Virtudes)",
        icon: "Scale",
        description: "Centrar actividad pública en valores y virtudes. Penas severas para actividades corruptas. Enfoque en Bien Común.",
        color: "purple",
    },
    {
        id: 6,
        name: "Salud (Salud Integral)",
        icon: "HeartPulse",
        description: "Incorporar salud integral, consciente y profunda. Comisión científica autónoma para investigar causas de enfermedades crónicas.",
        color: "cyan",
    },
    {
        id: 7,
        name: "Cultura (Espiritualidad Cósmica)",
        icon: "Sparkles",
        description: "Religar a la Persona Humana con el Universo. Enseñanza de sabiduría de grandes filósofos. Cultivar alta espiritualidad cósmica.",
        color: "indigo",
    },
    {
        id: 8,
        name: "Tiempo (Calendario Sagrado)",
        icon: "Clock",
        description: "Mantener calendario científico e incorporar calendario sagrado (13 meses). Concepción espiral del tiempo.",
        color: "violet",
    },
] as const;

export type ReformaId = (typeof REFORMAS)[number]["id"];

// ============================================
// LEGISLATIVE PROJECTS
// ============================================
export const LEGISLATIVE_PROJECTS = [
    {
        id: "retirar-oms",
        title: "Retirar a Chile de la OMS",
        description: "Proyecto para evaluar y potencialmente retirar a Chile de la Organización Mundial de la Salud.",
        category: "salud",
        priority: "alta",
    },
    {
        id: "eficiencia-gubernamental",
        title: "Crear Departamento de Eficiencia Gubernamental",
        description: "Establecer un departamento dedicado a optimizar la eficiencia del Estado.",
        category: "administracion",
        priority: "alta",
    },
    {
        id: "reducir-ministerios",
        title: "Reducir Número de Ministerios",
        description: "Propuesta para optimizar la estructura ministerial del gobierno.",
        category: "administracion",
        priority: "media",
    },
    {
        id: "inmigración",
        title: "Detener Inmigración Desordenada",
        description: "Regular y ordenar los procesos migratorios en Chile.",
        category: "seguridad",
        priority: "alta",
    },
    {
        id: "onu-paris",
        title: "Revisar Participación en ONU y Acuerdo Climático de París",
        description: "Evaluar la participación de Chile en organismos internacionales.",
        category: "politica",
        priority: "media",
    },
    {
        id: "pena-muerte",
        title: "Plebiscitar Pena de Muerte",
        description: "Consulta ciudadana sobre la pena de muerte para crímenes graves.",
        category: "justicia",
        priority: "alta",
    },
    {
        id: "impuestos-pymes",
        title: "Reducir Impuestos para PYMES",
        description: "Disminuir la carga tributaria para pequeñas y medianas empresas.",
        category: "economia",
        priority: "alta",
    },
] as const;

export type LegislativeProjectId = (typeof LEGISLATIVE_PROJECTS)[number]["id"];

// ============================================
// TOPICS & CATEGORIES
// ============================================
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

// ============================================
// CASE MANAGEMENT
// ============================================
export const CASE_STATUSES = [
    "RECIBIDO",
    "EN_REVISION",
    "EN_GESTION",
    "DERIVADO",
    "RESPONDIDO",
    "CERRADO",
] as const;

export type CaseStatus = (typeof CASE_STATUSES)[number];

// ============================================
// VOLUNTEER CATEGORIES
// ============================================
export const VOLUNTEER_AREAS = [
    { id: "educacion", name: "Educación", icon: "GraduationCap" },
    { id: "salud", name: "Salud", icon: "HeartPulse" },
    { id: "tecnologia", name: "Tecnología", icon: "Laptop" },
    { id: "comunicaciones", name: "Comunicaciones", icon: "Megaphone" },
    { id: "legal", name: "Legal", icon: "Scale" },
    { id: "social", name: "Trabajo Social", icon: "Users" },
] as const;

export const VOLUNTEER_AVAILABILITY = [
    { id: "tiempo_completo", name: "Tiempo Completo" },
    { id: "medio_tiempo", name: "Medio Tiempo" },
    { id: "ocasional", name: "Ocasional" },
] as const;

// ============================================
// CONCERN CATEGORIES
// ============================================
export const CONCERN_CATEGORIES = [
    { id: "seguridad", name: "Seguridad", icon: "Shield", color: "red" },
    { id: "salud", name: "Salud", icon: "HeartPulse", color: "blue" },
    { id: "educacion", name: "Educación", icon: "GraduationCap", color: "green" },
    { id: "infraestructura", name: "Infraestructura", icon: "Building", color: "orange" },
    { id: "economia", name: "Economía", icon: "TrendingUp", color: "purple" },
    { id: "otro", name: "Otro", icon: "HelpCircle", color: "gray" },
] as const;

export const CONCERN_PRIORITIES = [
    { id: "alta", name: "Alta", color: "red" },
    { id: "media", name: "Media", color: "yellow" },
    { id: "baja", name: "Baja", color: "green" },
] as const;
