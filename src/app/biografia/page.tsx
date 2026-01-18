"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Quote, Star, Award, Mic, GraduationCap, Users } from "lucide-react";
import Link from "next/link";

export default function BiographyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-repeat opacity-10"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900"></div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-amber-500 hover:bg-amber-600 text-slate-900 px-4 py-1 text-sm font-bold tracking-wider">
              MI TRAYECTORIA
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              El Camino del <span className="text-gradient-gold">Equilibrio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Desde el periodismo y la filosofía hasta el servicio público. Una vida dedicada a la búsqueda de la verdad y el bienestar de Chile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section with Photo */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/cristian/cristian_hero_principal.png"
                  alt="Cristian Contreras"
                  fill
                  className="object-cover bg-slate-100"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs">
                <Quote className="h-8 w-8 text-amber-500 mb-2" />
                <p className="text-slate-800 font-medium italic">
                  &quot;El equilibrio es el único camino para ser genuinamente feliz y construir una sociedad justa.&quot;
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Periodista, Filósofo y Político
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Cristian Contreras Radovic, conocido popularmente como &quot;Dr. File&quot;, ha dedicado su vida al estudio profundo de la realidad, cuestionando los paradigmas establecidos y buscando soluciones integrales para los desafíos de nuestra sociedad.
                </p>
                <p>
                  Doctor en Filosofía y reconocido periodista, su carrera ha estado marcada por la valentía de abordar temas complejos y la capacidad de comunicar ideas profundas de manera accesible.
                </p>
                <p>
                  Hoy, como Diputado electo por el Distrito 8, canaliza toda su experiencia y sabiduría en un proyecto político transformador: las 8 Grandes Reformas del Estado, fundamentadas en la filosofía del equilibrio y la meritocracia.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <BookOpen className="h-6 w-6 text-blue-600 mb-2" />
                  <h4 className="font-bold text-slate-900">Doctor en Filosofía</h4>
                  <p className="text-sm text-gray-500">U. Autónoma de Barcelona</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <Mic className="h-6 w-6 text-amber-600 mb-2" />
                  <h4 className="font-bold text-slate-900">Comunicador</h4>
                  <p className="text-sm text-gray-500">Más de 20 años de trayectoria</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Hitos de una Vida</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {TIMELINE_EVENTS.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center md:justify-between ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-[45%] ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-3 border border-blue-100">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>

                  {/* Icon/Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-amber-500 shadow-lg z-10 hidden md:flex">
                    <event.icon className="h-5 w-5 text-amber-600" />
                  </div>

                  {/* Spacer for mobile */}
                  <div className="hidden md:block w-[45%]"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Únete al Movimiento del Equilibrio</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Este no es solo un proyecto político, es un llamado a transformar nuestra nación desde sus cimientos. Tu participación es fundamental para construir el Chile que soñamos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 text-slate-900 hover:bg-amber-400 font-bold h-14 px-8 text-lg rounded-full"
            >
              <Link href="/voluntarios">
                Quiero ser Voluntario <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/10 h-14 px-8 text-lg rounded-full"
            >
              <Link href="/preocupaciones">
                Reportar un Problema
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

const TIMELINE_EVENTS = [
  {
    year: "1994-1998",
    title: "Formación Académica",
    description: "Licenciatura en Comunicación Social y Periodista en la Universidad Diego Portales. Inicio de una carrera marcada por la investigación.",
    icon: GraduationCap
  },
  {
    year: "2002-2006",
    title: "Doctorado en Filosofía",
    description: "Obtención del grado de Doctor en Filosofía de la Ciencia por la Universidad Autónoma de Barcelona, España.",
    icon: BookOpen
  },
  {
    year: "2010-2020",
    title: "Periodismo de Investigación",
    description: "Reconocido por su participación en programas de televisión abordando temas de conspiraciones, ciencia y misterios, ganándose el apodo de 'Dr. File'.",
    icon: Mic
  },
  {
    year: "2021",
    title: "Fundación Centro Unido",
    description: "Lidera la creación de un nuevo referente político centrado en el equilibrio y la superación de la dicotomía izquierda-derecha.",
    icon: Users
  },
  {
    year: "2024",
    title: "Candidatura a Diputado",
    description: "Lanza su candidatura por el Distrito 8 con un programa enfocado en 8 Grandes Reformas para transformar el Estado.",
    icon: Star
  },
  {
    year: "2026",
    title: "Diputado de la República",
    description: "Asume como parlamentario con una alta votación, comprometiéndose a trabajar incansablemente por Maipú, Pudahuel y todo el distrito.",
    icon: Award
  }
];
