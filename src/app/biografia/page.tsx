
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  GraduationCap,
  Mic,
  Globe,
  Quote,
  ChevronLeft
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BiographyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
            <ChevronLeft className="h-5 w-5" />
            <span className="font-medium">Volver al Inicio</span>
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* Header Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 space-y-6">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none px-4 py-1.5 text-sm font-bold uppercase tracking-wider">
                Diputado Electo Distrito 8
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Cristian <br />
                <span className="text-blue-600">Contreras Radovic</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Periodista, Doctor en Filosofía y Escritor. Un hombre de pensamiento y acción comprometido con el despertar de la conciencia y el equilibrio social.
              </p>

              <div className="flex gap-4 pt-4">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 btn-lg h-12">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Leer Libros
                </Button>
                <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full px-8 h-12">
                  Ver Propuestas
                </Button>
              </div>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-[8px] border-white ring-1 ring-gray-100/50">
                <Image
                  src="/images/cristian/cristian1.png"
                  alt="Cristian Contreras Radovic"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                  <p className="text-white font-serif italic text-lg leading-relaxed opacity-90">
                    "La política debe recuperar su esencia filosófica: la búsqueda del bien común a través de la razón y la virtud."
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-10 right-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -z-10 bottom-10 left-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-60"></div>
            </div>
          </div>

          <div className="h-px bg-gray-100 my-16" />

          {/* Trayectoria Section */}
          <div className="space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Trayectoria y Formación</h2>
              <p className="text-gray-500">
                Una vida dedicada al estudio, la investigación periodística y la divulgación del conocimiento.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Academic */}
              <Card className="border-none shadow-lg bg-slate-50 relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-default">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <GraduationCap className="h-24 w-24 text-slate-900" />
                </div>
                <CardContent className="p-8 space-y-4">
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                    <GraduationCap className="h-6 w-6 text-slate-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Formación Académica</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      <span><strong>Doctor en Filosofía</strong><br />Universidad Autónoma de Barcelona</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      <span><strong>Periodista</strong><br />Universidad Gabriela Mistral</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                      <span>Magíster en Filosofía Política</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Media */}
              <Card className="border-none shadow-lg bg-blue-50 relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-default">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Mic className="h-24 w-24 text-blue-900" />
                </div>
                <CardContent className="p-8 space-y-4">
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                    <Mic className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Medios de Comunicación</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Reconocido por su labor en televisión como investigador y panelista en programas de debate y misterio. Conductor de espacios dedicados al análisis de la actualidad nacional e internacional, destacando siempre por su estilo directo y documentado.
                  </p>
                </CardContent>
              </Card>

              {/* Political */}
              <Card className="border-none shadow-lg bg-indigo-50 relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-default">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Globe className="h-24 w-24 text-indigo-900" />
                </div>
                <CardContent className="p-8 space-y-4">
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">
                    <Globe className="h-6 w-6 text-indigo-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Visión Política</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Fundador de <strong>Centro Unido</strong>. Su propuesta política busca superar la división ideológica tradicional mediante la "Política del Equilibrio", integrando la eficiencia económica con la justicia social y la ética pública.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="h-px bg-gray-100 my-16" />

          {/* Philosophy Quote */}
          <div className="bg-gray-900 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden">
            <Quote className="h-16 w-16 text-white/20 absolute top-8 left-8" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h3 className="text-2xl md:text-4xl font-serif italic leading-relaxed">
                "El verdadero cambio no está en las estructuras externas, sino en la transformación de la conciencia humana. Chile necesita líderes que piensen, sientan y actúen desde el equilibrio."
              </h3>
              <div className="flex items-center justify-center gap-2 text-gray-400 font-bold uppercase tracking-widest text-sm">
                <span className="w-8 h-px bg-gray-600"></span>
                Dr. File
                <span className="w-8 h-px bg-gray-600"></span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
