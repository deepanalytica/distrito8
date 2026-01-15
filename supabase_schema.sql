-- Digital Parliamentary Office - Supabase Schema Migration

-- 1. Tables

-- Communes
CREATE TABLE public.communes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Topics
CREATE TABLE public.topics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Citizen Cases
CREATE TYPE case_status AS ENUM ('RECIBIDO', 'EN_REVISION', 'EN_GESTION', 'DERIVADO', 'RESPONDIDO', 'CERRADO');

CREATE TABLE public.cases (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    commune_id UUID REFERENCES public.communes(id) NOT NULL,
    topic_id UUID REFERENCES public.topics(id) NOT NULL,
    description TEXT NOT NULL,
    location_text TEXT,
    contact_name TEXT NOT NULL,
    contact_email TEXT NOT NULL,
    contact_phone TEXT,
    consent_bool BOOLEAN NOT NULL DEFAULT FALSE,
    status case_status NOT NULL DEFAULT 'RECIBIDO',
    public_tracking_code TEXT NOT NULL UNIQUE, -- Non-guessable short code
    access_token_hash TEXT, -- For magic link access
    assigned_to_user_id UUID, -- For staff assignment
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Case Updates (Historial)
CREATE TABLE public.case_updates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    case_id UUID REFERENCES public.cases(id) ON DELETE CASCADE NOT NULL,
    visibility_public BOOLEAN NOT NULL DEFAULT TRUE,
    message TEXT NOT NULL,
    update_type TEXT, -- 'STATUS_CHANGE', 'COMMENT', 'INTERNAL_NOTE'
    created_at TIMESTAMPTZ DEFAULT now(),
    created_by UUID -- Staff user ID
);

-- Legislative Items
CREATE TABLE public.legislative_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    axis TEXT NOT NULL, -- e.g., 'Seguridad', 'Agua'
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    problem TEXT,
    change TEXT,
    status_stage TEXT, -- 'IDEA', 'INGRESADO', 'VOTACION', 'APROBADO'
    district8_impact TEXT,
    content_md TEXT,
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Events (Agenda)
CREATE TABLE public.events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    commune_id UUID REFERENCES public.communes(id),
    title TEXT NOT NULL,
    description TEXT,
    location TEXT,
    start_at TIMESTAMPTZ NOT NULL,
    end_at TIMESTAMPTZ,
    visibility_public BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Row Level Security (RLS)

ALTER TABLE public.communes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.legislative_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- 2.1 Public Access (Read content)
CREATE POLICY "Public items are viewable by everyone" ON public.communes FOR SELECT USING (true);
CREATE POLICY "Public topics are viewable by everyone" ON public.topics FOR SELECT USING (true);
CREATE POLICY "Public legislative items viewable by everyone" ON public.legislative_items FOR SELECT USING (true);
CREATE POLICY "Public events viewable by everyone" ON public.events FOR SELECT USING (visibility_public = true);

-- 2.2 Case Tracking (Access by tracking code)
-- NOTE: In a real app, we'd use a function to check tracking code + token
CREATE POLICY "Users can view their own case via tracking code" ON public.cases
    FOR SELECT USING (true); -- Filtered in application layer via tracking_code

CREATE POLICY "Users can view public updates for their case" ON public.case_updates
    FOR SELECT USING (visibility_public = true);

-- 2.3 Staff/Admin Access (Full access)
-- NOTE: Requires auth roles setup
-- CREATE POLICY "Staff can manage all cases" ON public.cases FOR ALL TO authenticated USING (true);

-- 3. Seeds (Initial Data)

INSERT INTO public.communes (name, slug) VALUES
('Maipú', 'maipu'),
('Pudahuel', 'pudahuel'),
('Estación Central', 'estacion-central'),
('Cerrillos', 'cerrillos'),
('Quilicura', 'quilicura'),
('Colina', 'colina'),
('Lampa', 'lampa'),
('Tiltil', 'tiltil');

INSERT INTO public.topics (name, slug, description) VALUES
('Seguridad', 'seguridad', 'Gestión de luminarias, patrullajes y prevención.'),
('Transporte', 'transporte', 'Mejoras en recorridos y conectividad.'),
('Vivienda', 'vivienda', 'Postulación a subsidios y regularización.'),
('Salud', 'salud', 'Acceso a CESFAM y especialistas.'),
('Educación', 'educacion', 'Becas y mejora de infraestructura escolar.'),
('Medioambiente', 'medioambiente', 'Zonas de sacrificio, agua y residuos.'),
('Convivencia', 'convivencia', 'Mediación vecinal y ruido.'),
('Empleo', 'empleo', 'Capacitación y vinculación laboral.');
