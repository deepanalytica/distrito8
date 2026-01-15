export interface CommuneDetail {
    name: string;
    slug: string;
    population: string;
    description: string;
    identity: {
        badge: string;
        title: string;
        text: string;
    };
    priorities: { title: string; status: string; description: string }[];
    gestiones: { title: string; date: string; status: "RESPONDIDO" | "EN_GESTION" | "PENDIENTE" }[];
    contacts: { label: string; phone?: string; link?: string }[];

    // New Rich Data Fields
    history: { title: string; description: string; location?: string }[];
    gastronomy: { title: string; description: string; location?: string }[];
    nature: { title: string; description: string; location?: string }[];
}

export const COMMUNE_DETAILS: Record<string, CommuneDetail> = {
    maipu: {
        name: "Maipú",
        slug: "maipu",
        population: "578.605 hab.",
        description: "Maipú se erige como el pilar histórico del sector poniente. Su identidad es inseparable de la gesta independentista de 1818, pero su evolución contemporánea la ha transformado en una metrópolis dentro de la ciudad, con una vida cultural autónoma que honra su pasado mientras mira al futuro.",
        identity: {
            badge: "Patrimonio Histórico",
            title: "El Altar de la Patria",
            text: "Hogar del Templo Votivo y el Cerro Primo de Rivera, sitios donde se selló la libertad de Chile. Una comuna que mezcla tradición huasa con una moderna vida urbana y gastronómica."
        },
        history: [
            { title: "Templo Votivo de Maipú", description: "Icono nacional inaugurado en 1974. Su torre de 63 metros ofrece una vista panorámica de la cuenca de Santiago. Alberga el Museo del Carmen.", location: "Calle del Carmen 1750" },
            { title: "Cerro Primo de Rivera", description: "Monumento Nacional y antiguo puesto de mando del General San Martín durante la Batalla de Maipú. Hoy es un hermoso parque urbano.", location: "Av. Pajaritos / Anunciación" },
            { title: "Museo del Carmen", description: "Ubicado en el zócalo del Templo, guarda reliquias de la Independencia, carruajes presidenciales y arte colonial.", location: "Zócalo Templo Votivo" }
        ],
        gastronomy: [
            { title: "Chancho con Chaleco", description: "Restaurante centenario y leyenda local. Famoso por su arrollado, pernil y costillar, mantiene vivas las recetas criollas.", location: "Av. Pajaritos 3027" },
            { title: "Fiesta de la Vendimia", description: "Evento masivo en abril que celebra la tradición vitivinícola del Valle del Maipo con pisada de uvas y degustaciones.", location: "Plaza de Maipú (varía)" }
        ],
        nature: [
            { title: "Valle del Maipo", description: "Pese a la urbanización, Maipú conserva viñas históricas que son parte del prestigioso valle vitivinícola." }
        ],
        priorities: [
            { title: "Seguridad Ciudadana", status: "CRITICO", description: "Implementación de pórticos lectores de patentes y recuperación de espacios públicos en barrios residenciales." },
            { title: "Transporte Público", status: "EN_PROCESO", description: "Mejora de frecuencia de recorridos RED y extensión del Metro a poniente." },
            { title: "Salud Municipal", status: "PENDIENTE", description: "Reducción de listas de espera y dotación de especialistas en CESFAM." }
        ],
        gestiones: [
            { title: "Fiscalización vertederos ilegales", date: "Hace 2 días", status: "EN_GESTION" },
            { title: "Reunión Juntas de Vecinos Pajaritos", date: "Hace 1 semana", status: "RESPONDIDO" }
        ],
        contacts: [
            { label: "Seguridad Municipal", phone: "1418" },
            { label: "Carabineros", phone: "133" }
        ]
    },
    pudahuel: {
        name: "Pudahuel",
        slug: "pudahuel",
        population: "253.139 hab.",
        description: "Pudahuel es una comuna de escalas gigantescas: alberga el principal aeropuerto internacional, centros logísticos y reservas naturales que desafían la expansión urbana. Es un territorio de contrastes fascinantes entre la conexión global y la vida rural profunda.",
        identity: {
            badge: "Conexión Global",
            title: "Portal de Chile al Mundo",
            text: "Sede del Aeropuerto AMB y el Parque Laguna Carén, un polo de ciencia y futuro. Conserva intacta su vida rural en El Noviciado."
        },
        history: [
            { title: "Aeropuerto Arturo Merino Benítez", description: "La principal terminal aérea de Chile. Centro de 'plane spotting' donde aficionados fotografían operaciones aéreas.", location: "Sector Aeropuerto" }
        ],
        nature: [
            { title: "Parque Laguna Carén", description: "Administrado por la U. de Chile. Un polo de ciencia y biodiversidad, hogar del Tiny Fest (globos aerostáticos).", location: "Ruta 68, km 15" },
            { title: "Parque Mapocho Río", description: "Recuperación de la ribera del río con canchas, ciclovías y juegos de agua, integrando socialmente la zona.", location: "Ribera Río Mapocho" },
            { title: "El Noviciado", description: "Sector rural que mantiene la vida de campo, con ferias libres sostenibles y agricultura local.", location: "Ruta G-16" }
        ],
        gastronomy: [
            { title: "Picadas de El Noviciado", description: "Cocina chilena auténtica: cazuelas y pastel de choclo con ingredientes de chacras locales.", location: "Camino a Noviciado" }
        ],
        priorities: [
            { title: "Infraestructura Vial", status: "ALTA", description: "Mejoramiento de accesos y pavimentación en sector rural y urbano." },
            { title: "Medio Ambiente", status: "CRITICO", description: "Protección de humedales y fiscalización de industrias contaminantes." }
        ],
        gestiones: [
            { title: "Mesa de trabajo Aeropuerto", date: "Ayer", status: "EN_GESTION" }
        ],
        contacts: [
            { label: "Emergencia Municipal", phone: "1447" }
        ]
    },
    "estacion-central": {
        name: "Estación Central",
        slug: "estacion-central",
        population: "206.792 hab.",
        description: "Una comuna de flujos constantes, donde la historia ferroviaria se cruza con la arquitectura de vanguardia social y la devoción popular. Es un territorio de contrastes fascinantes, desde la Villa Portales hasta los santuarios populares.",
        identity: {
            badge: "Conectividad y Fe",
            title: "Punto de Encuentro",
            text: "Hogar de la Estación de Trenes, la emblemática Villa Portales y los santuarios del Padre Hurtado y Romualdito. Un crisol de integración social."
        },
        history: [
            { title: "Villa Portales", description: "Icono de la arquitectura brutalista y moderna en Latam. Un 'edificio ciudad' con pasarelas y parques internos.", location: "Av. Portales" },
            { title: "Santuario Padre Hurtado", description: "Lugar de peregrinación donde reposan los restos de San Alberto Hurtado. Incluye un museo moderno.", location: "Av. Padre Hurtado 1090" },
            { title: "Animita de Romualdito", description: "La animita más famosa de Santiago. Un fenómeno de fe popular lleno de placas de agradecimiento.", location: "San Francisco de Borja" }
        ],
        nature: [
            { title: "Planetario USACH", description: "El principal centro astronómico del país con proyección FullDome 360°. Un viaje a las estrellas en plena ciudad.", location: "Av. Libertador B. O'Higgins 3349" }
        ],
        gastronomy: [
            { title: "Barrio Estación", description: "Oferta gastronómica popular y rápida que alimenta a miles de viajeros diariamente." }
        ],
        priorities: [
            { title: "Comercio Ambulante", status: "CRITICO", description: "Ordenamiento del eje Alameda y recuperación de espacios peatonales." },
            { title: "Seguridad", status: "ALTA", description: "Mayor dotación policial en terminales de buses y trenes." }
        ],
        gestiones: [{ title: "Limpieza Eje Alameda", date: "Hace 3 días", status: "RESPONDIDO" }],
        contacts: [{ label: "Seguridad Vecinal", phone: "1440" }]
    },
    cerrillos: {
        name: "Cerrillos",
        slug: "cerrillos",
        population: "88.956 hab.",
        description: "Cerrillos ha redefinido su vocación, pasando de ser un aeródromo militar a convertirse en el polo de grandes eventos y arte contemporáneo de la capital, consolidándose como una Ciudad Parque.",
        identity: {
            badge: "Cultura y Futuro",
            title: "Ciudad Parque Bicentenario",
            text: "Anfitrión del Parque Bicentenario, Lollapalooza y el Centro Nacional de Arte Contemporáneo. Un pulmón verde que mira al futuro."
        },
        history: [
            { title: "Centro Nacional de Arte (CNAC)", description: "Ocupa el edificio del ex aeropuerto Los Cerrillos. Un laboratorio de creación visual y pensamiento contemporáneo.", location: "Av. Pedro Aguirre Cerda 6100" },
            { title: "Museo Aeronáutico", description: "Custodia la historia de la aviación chilena, incluyendo el 'Manutara' que voló a Isla de Pascua.", location: "Av. Pedro Aguirre Cerda 5000" }
        ],
        nature: [
            { title: "Parque Bicentenario", description: "Uno de los pulmones verdes más grandes de Santiago. Sede de Lollapalooza y el Tianfu Festival.", location: "Av. Pedro Aguirre Cerda 6100" }
        ],
        gastronomy: [
            { title: "Gastronomía en Eventos", description: "Durante festivales como Lollapalooza, la comuna se convierte en el epicentro de food trucks y sabores del mundo." }
        ],
        priorities: [
            { title: "Desarrollo Urbano", status: "EN_PROCESO", description: "Planificación de nuevos proyectos habitacionales integrados al parque." },
            { title: "Conectividad", status: "ALTA", description: "Mejora de conexiones con Metro Cerrillos." }
        ],
        gestiones: [{ title: "Coordinación Lollapalooza", date: "Hace 1 mes", status: "RESPONDIDO" }],
        contacts: [{ label: "Alerta Cerrillos", phone: "1402" }]
    },
    quilicura: {
        name: "Quilicura",
        slug: "quilicura",
        population: "254.694 hab.",
        description: "Quilicura, 'Tres Piedras' en mapudungun, se encuentra en una encrucijada entre su pasado agrícola, su presente industrial y un futuro que apuesta por la conservación ambiental y la multiculturalidad.",
        identity: {
            badge: "Eco-Diversidad",
            title: "Humedales y Multiculturalidad",
            text: "Protectora de humedales urbanos críticos y hogar de una vibrante comunidad multicultural. Un ejemplo de resistencia hídrica y social."
        },
        priorities: [
            { title: "Conectividad", status: "CRITICO", description: "Solución a tacos históricos en accesos a la comuna." },
            { title: "Medio Ambiente", status: "ALTA", description: "Protección oficial de humedales urbanos." }
        ],
        history: [
            { title: "Casco Histórico", description: "Vestigios de su pasado agrícola que conviven hoy con grandes parques industriales y data centers." }
        ],
        gastronomy: [
            { title: "Fiesta de la Chilenidad", description: "Celebración multicultural que integra gastronomía chilena, haitiana, peruana y colombiana en Fiestas Patrias.", location: "Cancha Santa Luisa" }
        ],
        nature: [
            { title: "Humedales Urbanos", description: "Sistema de humedales (O'Higgins, San Luis, San Claudio). Refugios de biodiversidad para avistamiento de aves.", location: "Sector O'Higgins / San Luis" }
        ],
        gestiones: [{ title: "Fiscalización Industrial", date: "Hace 5 días", status: "EN_GESTION" }],
        contacts: [{ label: "Emergencia Quilicura", phone: "1412" }]
    },
    colina: {
        name: "Colina",
        slug: "colina",
        population: "180.353 hab.",
        description: "Colina combina el desarrollo urbano moderno con zonas rurales profundas que custodian el patrimonio de la piedra y la fe. Es la capital de la tradición huasa y el deporte aventura en la región.",
        identity: {
            badge: "Tradición Viva",
            title: "Cuasimodo y Canteras",
            text: "Escenario del Cuasimodo más grande de Chile y hogar de las canteras que construyeron Santiago. Capital del deporte outdoor y el emprendimiento."
        },
        history: [
            { title: "Las Canteras", description: "Zona Típica de donde se extrajeron los adoquines de Santiago. Museo al aire libre del oficio de los picapedreros.", location: "Pueblo Las Canteras" },
            { title: "Fiesta de Cuasimodo", description: "La procesión religiosa a caballo más grande de Chile (Domingo post Pascua). Un tesoro de fe huasa.", location: "Calles de Colina" }
        ],
        nature: [
            { title: "Parque Chamisero Outlife", description: "Referente del MTB y trekking con senderos de alta gama y vistas al valle de Chacabuco.", location: "Chamisero" }
        ],
        gastronomy: [
            { title: "Cocina Criolla", description: "Fuerte presencia de restaurantes de carnes y comida chilena tradicional en sectores rurales y Chicureo." }
        ],
        priorities: [
            { title: "Agua Potable", status: "CRITICO", description: "Aseguramiento hídrico para zonas rurales y APR." },
            { title: "Transporte", status: "ALTA", description: "Mejor conectividad con Santiago Centro." }
        ],
        gestiones: [{ title: "Apoyo APR", date: "Hace 2 semanas", status: "RESPONDIDO" }],
        contacts: [{ label: "Seguridad Colina", phone: "1468" }]
    },
    lampa: {
        name: "Lampa",
        slug: "lampa",
        population: "126.898 hab.",
        description: "Lampa mantiene una atmósfera de pueblo tradicional, protegiendo uno de los humedales más importantes de Sudamérica y cultivando las tradiciones más profundas del campo chileno.",
        identity: {
            badge: "Santuario Natural",
            title: "Humedal de Batuco",
            text: "Custodia del Humedal de Batuco, santuario de biodiversidad internacional. Tierra de la Trilla a Yegua Suelta y tradiciones agrícolas."
        },
        priorities: [
            { title: "Seguridad Rural", status: "ALTA", description: "Patrullaje en zonas agrícolas y prevención de abigeato." },
            { title: "Salud", status: "EN_PROCESO", description: "Nuevo hospital zona norte." }
        ],
        history: [
            { title: "Trilla a Yegua Suelta", description: "Reconstrucción histórica de faenas agrícolas antiguas. Se celebra en enero con música y comida típica.", location: "Medialuna de Lampa" }
        ],
        gastronomy: [
            { title: "Hacienda del Jabalí", description: "Referente gastronómico de carnes exóticas y cocina criolla durante todo el año.", location: "Sector Rural" }
        ],
        nature: [
            { title: "Humedal de Batuco", description: "Santuario de la Naturaleza con pasarelas para observar flamencos y cisnes. Sitio prioritario de conservación.", location: "Localidad de Batuco" }
        ],
        gestiones: [{ title: "Limpieza Humedal", date: "Hace 4 días", status: "RESPONDIDO" }],
        contacts: [{ label: "Lampa Seguro", phone: "1421" }]
    },
    tiltil: {
        name: "Tiltil",
        slug: "tiltil",
        population: "21.477 hab.",
        description: "Tiltil es una comuna cargada de simbolismo histórico y productos agrícolas únicos. Es la frontera patriótica donde descansa la memoria de Manuel Rodríguez y se preserva el sabor del secano.",
        identity: {
            badge: "Memoria Heroica",
            title: "Tierra de Manuel Rodríguez",
            text: "El último refugio del guerrillero y hogar del Cerro El Roble (2.222 msnm). Famosa por sus tunas y aceitunas de sabor único."
        },
        priorities: [
            { title: "Zona de Sacrificio", status: "CRITICO", description: "Compensación ambiental y freno a nuevos proyectos contaminantes." },
            { title: "Transporte", status: "ALTA", description: "Retorno del Metrotren a Tiltil." }
        ],
        history: [
            { title: "Monumento Manuel Rodríguez", description: "Sitio exacto del asesinato del prócer. Lugar de peregrinación patriótica cada mes de mayo.", location: "Cancha del Gato" }
        ],
        nature: [
            { title: "Cerro El Roble", description: "Santuario de la Naturaleza (2.222 msnm). Protege el bosque de robles más al norte del hemisferio sur.", location: "Caleu" }
        ],
        gastronomy: [
            { title: "Festival de la Tuna y Aceituna", description: "Celebración en febrero de los productos estrellas del secano: aceitunas curadas y tunas.", location: "Tiltil Centro" },
            { title: "Productos Locales", description: "Venta directa de aceitunas de mesa y aceite de oliva artesanal por productores locales." }
        ],
        gestiones: [{ title: "Mesa Ambiental", date: "Ayer", status: "EN_GESTION" }],
        contacts: [{ label: "Emergencia Tiltil", phone: "14" }]
    }
};
