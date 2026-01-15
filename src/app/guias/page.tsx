"use client";


import { GUIDES } from "@/lib/guide-data";
import {
    Search,
    BookOpen,
    Phone,
    Lightbulb
} from "lucide-react";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function GuiasPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const categories = useMemo(() => {
        const cats = Array.from(new Set(GUIDES.map(g => g.category)));
        return cats.sort();
    }, []);

    const filteredGuides = useMemo(() => {
        return GUIDES.filter(g => {
            const matchesSearch = g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                g.summary.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = !selectedCategory || g.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">


            <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Guías y Orientación</h1>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            Tutoriales paso a paso para resolver problemas cotidianos en tu comuna.
                            Encuentra el contacto correcto y los plazos legales.
                        </p>
                    </div>

                    {/* Search and Filters */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-10">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-grow">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <Input
                                    placeholder="¿Cuál es tu problema? (ej: ruidos, basura, agua...)"
                                    className="pl-12 h-12 bg-gray-50 border-none rounded-2xl"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                                <Button
                                    variant={selectedCategory === null ? "default" : "outline"}
                                    className="rounded-xl flex-shrink-0"
                                    onClick={() => setSelectedCategory(null)}
                                >
                                    Todos
                                </Button>
                                {categories.map(cat => (
                                    <Button
                                        key={cat}
                                        variant={selectedCategory === cat ? "default" : "outline"}
                                        className="rounded-xl flex-shrink-0"
                                        onClick={() => setSelectedCategory(cat)}
                                    >
                                        {cat}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Guides List */}
                    <div className="space-y-6">
                        {filteredGuides.length > 0 ? (
                            filteredGuides.map((guide) => (
                                <Accordion type="single" collapsible key={guide.slug} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                                    <AccordionItem value={guide.slug} className="border-none">
                                        <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                                            <div className="flex flex-col items-start text-left">
                                                <Badge variant="outline" className="mb-2 bg-blue-50 text-blue-700 border-blue-100 uppercase text-[10px] font-bold tracking-wider">
                                                    {guide.category}
                                                </Badge>
                                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                    {guide.title}
                                                </h3>
                                                <p className="text-sm text-gray-500 font-normal mt-1 leading-relaxed">
                                                    {guide.summary}
                                                </p>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-8 pb-8">
                                            <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-50">
                                                {/* Steps */}
                                                <div className="md:col-span-2 space-y-4">
                                                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                                                        <Lightbulb className="h-4 w-4 text-amber-500" />
                                                        Paso a paso
                                                    </h4>
                                                    <ol className="space-y-4">
                                                        {guide.steps.map((step, i) => (
                                                            <li key={i} className="flex gap-4">
                                                                <span className="flex-shrink-0 w-6 h-6 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center text-xs font-bold">
                                                                    {i + 1}
                                                                </span>
                                                                <p className="text-gray-600 text-sm leading-relaxed">{step}</p>
                                                            </li>
                                                        ))}
                                                    </ol>
                                                </div>

                                                {/* Contacts */}
                                                <div className="space-y-4">
                                                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                                                        <Phone className="h-4 w-4 text-blue-600" />
                                                        Contactos
                                                    </h4>
                                                    <div className="space-y-3">
                                                        {guide.contacts.map((contact, i) => (
                                                            <div key={i} className="bg-gray-50 p-4 rounded-2xl">
                                                                <p className="text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">{contact.label}</p>
                                                                <p className="text-sm font-bold text-blue-900">{contact.info}</p>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="pt-4">
                                                        <Button asChild variant="outline" className="w-full rounded-2xl text-xs gap-2 border-dashed">
                                                            <a href={`/ingresar-caso?tema=${guide.category}&guia=${guide.slug}`}>
                                                                No logré resolverlo, pedir ayuda
                                                            </a>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            ))
                        ) : (
                            <div className="text-center py-20 bg-white rounded-3xl border border-dashed text-gray-400">
                                <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-20" />
                                <p>No encontramos guías que coincidan con tu búsqueda.</p>
                                <Button variant="link" onClick={() => { setSearchQuery(""); setSelectedCategory(null) }} className="text-blue-600 mt-2">
                                    Ver todas las guías
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Footer Info */}
                    <div className="mt-16 text-center text-gray-400 text-sm bg-gray-50 py-8 px-4 rounded-3xl border border-gray-100">
                        <p className="max-w-xl mx-auto leading-relaxed">
                            ¿Falta alguna guía importante? Sugiere un nuevo tema de orientación escribiéndonos a
                            <span className="text-blue-600 font-medium"> contacto@cristiancontreras.cl</span>
                        </p>
                    </div>
                </div>
            </main>

            <footer className="py-12 bg-gray-900 text-gray-400 text-sm text-center">
                © 2026 Oficina Parlamentaria Cristian Contreras. Distrito 8.
            </footer>
        </div>
    );
}
