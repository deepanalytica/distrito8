# Guía Completa de Despliegue - Vercel + Supabase (Gratis)

## 🎯 Stack Completo con Costo $0

- **Frontend**: Vercel (Next.js)
- **Base de Datos**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage
- **Dominio**: Vercel (.vercel.app gratis)

**Costo mensual**: $0 hasta que realmente necesites escalar

---

## Parte 1: Configurar Supabase (Base de Datos)

### Paso 1: Crear Cuenta en Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Click en "Start your project"
3. Regístrate con GitHub (gratis)

### Paso 2: Crear Nuevo Proyecto

1. Click en "New Project"
2. Completa:
   - **Name**: `cristian-contreras-platform`
   - **Database Password**: (guarda esta contraseña)
   - **Region**: `South America (São Paulo)` (más cercano a Chile)
   - **Pricing Plan**: Free ($0/mes)

3. Click en "Create new project"
4. Espera 2-3 minutos mientras Supabase configura tu base de datos

### Paso 3: Obtener Credenciales

1. En tu proyecto, ve a **Settings** → **API**
2. Copia y guarda:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon/public key**: `eyJhbGc...` (clave larga)

### Paso 4: Crear Tablas

1. Ve a **SQL Editor** en el menú lateral
2. Copia y pega el siguiente SQL:

```sql
-- Tabla de Voluntarios
CREATE TABLE voluntarios (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL,
    telefono TEXT,
    comuna TEXT NOT NULL,
    habilidades TEXT,
    disponibilidad TEXT NOT NULL,
    areas_interes TEXT[] NOT NULL,
    motivacion TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de Preocupaciones Ciudadanas
CREATE TABLE preocupaciones_ciudadanas (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    comuna TEXT NOT NULL,
    categoria TEXT NOT NULL,
    prioridad TEXT NOT NULL,
    titulo TEXT NOT NULL,
    descripcion TEXT NOT NULL,
    ubicacion TEXT,
    email TEXT,
    estado TEXT DEFAULT 'pendiente',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de Casos (ya existente en tu schema)
CREATE TABLE IF NOT EXISTS casos (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL,
    telefono TEXT,
    comuna TEXT NOT NULL,
    tema TEXT NOT NULL,
    descripcion TEXT NOT NULL,
    estado TEXT DEFAULT 'RECIBIDO',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para mejorar performance
CREATE INDEX idx_voluntarios_comuna ON voluntarios(comuna);
CREATE INDEX idx_preocupaciones_comuna ON preocupaciones_ciudadanas(comuna);
CREATE INDEX idx_preocupaciones_categoria ON preocupaciones_ciudadanas(categoria);
CREATE INDEX idx_casos_comuna ON casos(comuna);
CREATE INDEX idx_casos_estado ON casos(estado);

-- Habilitar Row Level Security (RLS)
ALTER TABLE voluntarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE preocupaciones_ciudadanas ENABLE ROW LEVEL SECURITY;
ALTER TABLE casos ENABLE ROW LEVEL SECURITY;

-- Políticas de acceso (permitir inserción pública)
CREATE POLICY "Permitir inserción pública de voluntarios"
ON voluntarios FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Permitir inserción pública de preocupaciones"
ON preocupaciones_ciudadanas FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Permitir inserción pública de casos"
ON casos FOR INSERT
TO anon
WITH CHECK (true);

-- Permitir lectura pública (opcional, para dashboard)
CREATE POLICY "Permitir lectura pública de preocupaciones"
ON preocupaciones_ciudadanas FOR SELECT
TO anon
USING (true);
```

3. Click en "Run" para ejecutar el SQL
4. Verifica que las tablas se crearon en **Table Editor**

---

## Parte 2: Configurar Variables de Entorno Locales

1. En tu proyecto, crea un archivo `.env.local`:

```bash
# En la raíz del proyecto
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
NEXT_PUBLIC_MAPBOX_TOKEN=tu_token_mapbox
```

2. Reemplaza con tus valores reales de Supabase

3. Reinicia el servidor de desarrollo:
```bash
# Detén el servidor actual (Ctrl+C)
npm run dev
```

---

## Parte 3: Actualizar Código para Usar Supabase

Tu archivo `src/lib/supabase.ts` ya está configurado. Solo necesitas actualizar los formularios para guardar datos:

### Actualizar Formulario de Voluntarios

Abre `src/app/voluntarios/page.tsx` y actualiza la función `handleSubmit`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
        const { data, error } = await supabase
            .from('voluntarios')
            .insert([formData]);

        if (error) throw error;

        setSubmitted(true);
    } catch (error) {
        console.error('Error al registrar voluntario:', error);
        alert('Hubo un error al enviar el formulario. Por favor intenta nuevamente.');
    }
};
```

### Actualizar Formulario de Preocupaciones

Abre `src/app/preocupaciones/page.tsx` y actualiza la función `handleSubmit`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
        const { data, error } = await supabase
            .from('preocupaciones_ciudadanas')
            .insert([formData]);

        if (error) throw error;

        setSubmitted(true);
    } catch (error) {
        console.error('Error al enviar preocupación:', error);
        alert('Hubo un error al enviar el formulario. Por favor intenta nuevamente.');
    }
};
```

---

## Parte 4: Desplegar en Vercel

### Paso 1: Preparar Repositorio

```bash
# Asegúrate de que todo esté commiteado
git add .
git commit -m "feat: Integrate Supabase and prepare for production"
git push origin master
```

### Paso 2: Crear Cuenta en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Click en "Sign Up"
3. Selecciona "Continue with GitHub"
4. Autoriza a Vercel

### Paso 3: Importar Proyecto

1. En Vercel, click en "Add New Project"
2. Selecciona tu repositorio de GitHub
3. Click en "Import"

### Paso 4: Configurar Variables de Entorno

En la sección "Environment Variables", agrega:

```
NEXT_PUBLIC_SUPABASE_URL = https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGc...
NEXT_PUBLIC_MAPBOX_TOKEN = tu_token_mapbox
NEXT_PUBLIC_SITE_URL = https://tu-proyecto.vercel.app
```

**Importante**: Usa los mismos valores que en tu `.env.local`

### Paso 5: Deploy

1. Click en "Deploy"
2. Espera 2-3 minutos
3. ¡Listo! Tu app estará en línea

---

## 📊 Límites del Plan Gratuito

### Vercel Free
- ✅ 100 GB bandwidth/mes
- ✅ Deploy ilimitados
- ✅ Preview deployments
- ✅ HTTPS automático
- ✅ Dominio .vercel.app

### Supabase Free
- ✅ 500 MB database storage
- ✅ 1 GB file storage
- ✅ 2 GB bandwidth/mes
- ✅ 50,000 usuarios activos/mes
- ✅ Backups automáticos (7 días)

**Suficiente para**:
- Miles de visitantes al mes
- Miles de registros en base de datos
- Desarrollo y testing completo

---

## 💰 Cuándo Necesitarás Pagar

### Vercel
**$20/mes** cuando necesites:
- Más de 100 GB bandwidth
- Analytics avanzados
- Más miembros en el equipo

### Supabase
**$25/mes** cuando necesites:
- Más de 500 MB en base de datos
- Más de 2 GB bandwidth
- Backups de 30 días
- Soporte prioritario

**Estimación**: Con el plan gratuito puedes manejar fácilmente:
- 10,000+ visitantes/mes
- 50,000+ registros en DB
- 100+ voluntarios registrados
- 1,000+ preocupaciones ciudadanas

---

## 🔄 Escalabilidad Futura

Cuando el proyecto crezca, puedes:

1. **Mes 1-6**: Plan gratuito (suficiente para lanzamiento)
2. **Mes 6-12**: Upgrade a Supabase Pro ($25/mes) si necesitas más DB
3. **Año 2+**: Considerar Vercel Pro ($20/mes) para analytics

**Total estimado primer año**: $0-300 (dependiendo del crecimiento)

---

## ✅ Checklist de Deploy

- [ ] Cuenta Supabase creada
- [ ] Proyecto Supabase configurado (región São Paulo)
- [ ] Tablas creadas con el SQL proporcionado
- [ ] Credenciales de Supabase copiadas
- [ ] `.env.local` configurado localmente
- [ ] Formularios actualizados para usar Supabase
- [ ] Código testeado localmente
- [ ] Código pusheado a GitHub
- [ ] Cuenta Vercel creada
- [ ] Proyecto importado en Vercel
- [ ] Variables de entorno configuradas en Vercel
- [ ] Deploy exitoso

---

## 🧪 Probar la Integración

Después del deploy:

1. Ve a tu URL de Vercel
2. Navega a `/voluntarios`
3. Completa el formulario
4. En Supabase, ve a **Table Editor** → `voluntarios`
5. Deberías ver el nuevo registro

---

## 🆘 Solución de Problemas

### Error: "Failed to fetch from Supabase"

1. Verifica que las variables de entorno estén correctas en Vercel
2. Asegúrate de que RLS esté configurado correctamente
3. Revisa los logs en Supabase → Logs

### Error: "Insert failed"

1. Verifica que las políticas de RLS permitan inserción pública
2. Revisa que los nombres de columnas coincidan
3. Chequea los logs en Supabase

---

## 📈 Monitoreo

### En Supabase
- **Database** → Ver uso de storage
- **Logs** → Ver queries y errores
- **API** → Ver requests

### En Vercel
- **Analytics** → Ver tráfico
- **Logs** → Ver errores de deploy
- **Usage** → Ver bandwidth

---

## 🎯 Próximos Pasos Después del Deploy

1. **Configurar dominio personalizado** (opcional)
   - En Vercel: Settings → Domains
   - Agregar `cristiancontrerasradovic.cl`

2. **Configurar emails** (futuro)
   - Usar Resend o SendGrid (planes gratuitos disponibles)
   - Para notificaciones de formularios

3. **Agregar analytics** (opcional)
   - Google Analytics
   - Vercel Analytics (incluido en plan Pro)

---

*Última actualización: 15 de Enero de 2026*
