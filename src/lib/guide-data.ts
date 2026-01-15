export interface Guide {
    title: string;
    slug: string;
    category: string;
    summary: string;
    steps: string[];
    contacts: { label: string; info: string }[];
}

export const GUIDES: Guide[] = [
    {
        title: "Ruidos Molestos: Cómo denunciar",
        slug: "ruidos-molestos",
        category: "Convivencia",
        summary: "Pasos para reportar ruidos excesivos de vecinos, locales comerciales o industrias.",
        steps: [
            "Identifica el origen: ¿Es un vecino, una fiesta, un local o una construcción?",
            "Dialoga primero: Si es un vecino, intenta conversar cordialmente.",
            "Llama a Carabineros (133) o Seguridad Municipal: Registra el número de reclamo.",
            "Denuncia ante el Juzgado de Policía Local: Si el problema persiste, inicia una querella infraccional.",
            "En caso de industrias: Reporta ante la Superintendencia del Medio Ambiente (SMA)."
        ],
        contacts: [
            { label: "Carabineros", info: "133" },
            { label: "Superintendencia del Medio Ambiente", info: "Portal SMA" }
        ]
    },
    {
        title: "Corte de Luz o Agua: Qué hacer",
        slug: "corte-servicios-basicos",
        category: "Servicios Básicos",
        summary: "Protocolo ante suspensiones no programadas de suministros básicos.",
        steps: [
            "Verifica con tus vecinos: Confirma si es un problema de tu casa o del sector.",
            "Reporta a la empresa (Enel/CGE o SMAPA/Aguas Andinas): Obtén tu número de cliente.",
            "Anota el número de incidencia y la hora estimada de reposición.",
            "Si no hay respuesta en el tiempo legal: Ingresa reclamo ante la SEC o SISS.",
            "Solicita compensación si el corte excede el límite permitido."
        ],
        contacts: [
            { label: "SEC (Electricidad)", info: "sec.cl" },
            { label: "SISS (Agua)", info: "siss.cl" }
        ]
    },
    {
        title: "Seguridad Ciudadana: Reportar delitos",
        slug: "reportar-delitos",
        category: "Seguridad",
        summary: "Guía para denunciar robos, hurtos o actividad sospechosa de forma segura.",
        steps: [
            "Emergencia inmediata: Llama al 133 (Carabineros) o 134 (PDI).",
            "No manipules la escena: Si entran a tu casa, espera a que llegue la policía.",
            "Denuncia formal: Acude a la comisaría más cercana o fiscalía.",
            "Denuncia Seguro (*4242): Llama de forma anónima para reportar narcotráfico o armas.",
            "Registra cámaras: Si tienes videos, guárdalos como evidencia para la fiscalía."
        ],
        contacts: [
            { label: "Denuncia Seguro", info: "*4242" },
            { label: "Carabineros", info: "133" }
        ]
    },
    {
        title: "Basura y Escombros en la vía pública",
        slug: "basura-escombros",
        category: "Medioambiente",
        summary: "Cómo solicitar retiro de voluminosos o denunciar vertederos clandestinos.",
        steps: [
            "Contacta el servicio de aseo municipal: Muchas comunas tienen días para 'cachureos'.",
            "No pagues a furgones informales: Suelen botar la basura en terrenos baldíos cercanos.",
            "Denuncia vertederos: Saca una foto de la patente si ves a alguien botando basura.",
            "Ingresa el caso en nuestra plataforma: Si el municipio no responde a la limpieza."
        ],
        contacts: [
            { label: "Aseo Municipal", info: "Ver página de tu comuna" }
        ]
    },
    {
        title: "Postulación a Subsidios de Vivienda",
        slug: "subsidios-vivienda",
        category: "Vivienda",
        summary: "Guía básica para entender el proceso del MINVU.",
        steps: [
            "Abre tu cuenta de ahorro para la vivienda: Antigüedad mínima 12 meses.",
            "Registra tu Registro Social de Hogares (RSH): Mantén tus datos actualizados.",
            "Define el tramo: ¿Es para comprar o construir en sitio propio?",
            "Postula en los llamados oficiales del MINVU (Marzo y Noviembre usualmente).",
            "Si tienes subsidio y no encuentras proyecto: Busca asesoría en la EGIS municipal."
        ],
        contacts: [
            { label: "MINVU Alo", info: "600 901 1111" }
        ]
    },
    {
        title: "Violencia Intrafamiliar: Canales urgentes",
        slug: "violencia-intrafamiliar",
        category: "Salud",
        summary: "Apoyo y canales de protección para víctimas de VIF.",
        steps: [
            "Llamado urgente: 1455 (SernamEG) para orientación 24/7.",
            "Denuncia obligatoria: 149 (Fono Familia de Carabineros).",
            "Busca red de apoyo: Acude al Centro de la Mujer de tu comuna.",
            "Solicita medida cautelar: Pide prohibición de acercamiento en la denuncia inicial."
        ],
        contacts: [
            { label: "SernamEG", info: "1455" },
            { label: "Fono Familia", info: "149" }
        ]
    },
    {
        title: "Buscador de Beneficios Estatales",
        slug: "beneficios-estatales",
        category: "Empleo",
        summary: "Cómo acceder a bonos, becas y apoyos al empleo.",
        steps: [
            "Ingresa a Red de Protección Social con tu ClaveÚnica.",
            "Revisa tu RSH: El 90% de los beneficios dependen de tu porcentaje de vulnerabilidad.",
            "Inscríbete en la OMIL de tu comuna: Para acceder a bolsas de trabajo locales.",
            "Postula a bonos específicos: IFE Laboral, Bono al Trabajo de la Mujer, etc."
        ],
        contacts: [
            { label: "Red Protección", info: "reddeproteccion.cl" }
        ]
    },
    {
        title: "Maltrato Animal: Cómo actuar",
        slug: "maltrato-animal",
        category: "Convivencia",
        summary: "Denuncia ante abandono, peleas o agresiones a animales.",
        steps: [
            "Reúne evidencia: Fotos o videos del animal en mal estado o agresión.",
            "Identifica al responsable: Nombre del dueño o dirección exacta.",
            "Denuncia en BIDEMA (PDI) o Carabineros: Bajo la Ley Cholito.",
            "Coordina con organización local: Para rescate o atención veterinaria de urgencia."
        ],
        contacts: [
            { label: "BIDEMA PDI", info: "22 708 0000" }
        ]
    },
    {
        title: "Conflictos con Aeropuerto (Ruido)",
        slug: "ruido-aeropuerto-pudahuel",
        category: "Medioambiente",
        summary: "Guía específica para vecinos de Pudahuel y alrededores.",
        steps: [
            "Descarga la App de monitoreo de ruido: Si tu comuna cuenta con una.",
            "Registra hora y fecha del evento: Especialmente vuelos nocturnos.",
            "Ingresa reclamo ante la DGAC: Por sobrevuelos fuera de las rutas acordadas.",
            "Súmate a la consulta ciudadana: Participa en las mesas de mitigación ambiental."
        ],
        contacts: [
            { label: "DGAC Reclamos", info: "www.dgac.gob.cl" }
        ]
    },
    {
        title: "Bullying y Acoso Escolar",
        slug: "bullying-escolar",
        category: "Educación",
        summary: "Actuación ante situaciones de violencia en establecimientos educacionales.",
        steps: [
            "Infórmate con el Reglamento Interno: Conoce el protocolo de convivencia del colegio.",
            "Solicita entrevista con el encargado de convivencia: Deja registro por escrito.",
            "Si el colegio no aplica el protocolo: Denuncia ante la Superintendencia de Educación.",
            "Busca apoyo psicológico: Para el niño/a afectado desde el primer momento."
        ],
        contacts: [
            { label: "Supereduc", info: "600 3600 390" }
        ]
    }
];
