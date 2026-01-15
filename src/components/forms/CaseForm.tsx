"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { COMMUNES, TOPICS } from "@/lib/constants";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { ShieldAlert, Info } from "lucide-react";

const formSchema = z.object({
    commune: z.string().min(1, "Selecciona tu comuna"),
    topic: z.string().min(1, "Selecciona un tema"),
    description: z.string().min(20, "Por favor describe el caso con más detalle (mínimo 20 caracteres)").max(1000, "Máximo 1000 caracteres"),
    contact_name: z.string().min(3, "Ingresa tu nombre completo"),
    contact_email: z.string().email("Ingresa un correo electrónico válido"),
    contact_phone: z.string().optional(),
    consent: z.boolean().refine((val) => val === true, {
        message: "Debes aceptar el tratamiento de datos para continuar",
    }),
});

export function CaseForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();

    // Check if there is a 'comuna' slug in the URL
    const communeSlug = searchParams.get("comuna");
    const initialCommune = COMMUNES.find(c => c.slug === communeSlug)?.name || "";

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            commune: initialCommune,
            topic: "",
            description: "",
            contact_name: "",
            contact_email: "",
            contact_phone: "",
            consent: false,
        },
    });

    useEffect(() => {
        if (initialCommune) {
            form.setValue("commune", initialCommune);
        }
    }, [initialCommune, form]);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            // Logic for Supabase insertion would go here
            console.log("Form values:", values);

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Navigate to success page
            router.push("/ingresar-caso/success?id=C" + Math.random().toString(36).substring(7).toUpperCase());
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6 p-4 bg-blue-50 text-blue-800 rounded-xl text-sm">
                <Info className="h-5 w-5 flex-shrink-0" />
                <p>
                    Tu información será tratada de forma confidencial por el equipo parlamentario para gestionar tu caso ante las autoridades correspondientes.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="commune"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Comuna</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Seleccionar comuna" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {COMMUNES.map((commune) => (
                                                <SelectItem key={commune.slug} value={commune.name}>
                                                    {commune.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="topic"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tema / Categoría</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Seleccionar tema" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {TOPICS.map((topic) => (
                                                <SelectItem key={topic.slug} value={topic.name}>
                                                    {topic.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Descripción del Caso</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Describe detalladamente el problema, adjuntando fechas y autoridades contactadas previamente si aplica."
                                        className="min-h-[120px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Máximo 1000 caracteres.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="space-y-4 pt-4 border-t border-gray-100">
                        <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                            <ShieldAlert className="h-4 w-4 text-gray-400" />
                            Información de Contacto
                        </h3>

                        <FormField
                            control={form.control}
                            name="contact_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre Completo</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ej: Juan Pérez Soto" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="contact_email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Correo Electrónico</FormLabel>
                                        <FormControl>
                                            <Input placeholder="ejemplo@correo.cl" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="contact_phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Teléfono (Opcional)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="+56 9 ..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <FormField
                        control={form.control}
                        name="consent"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-gray-50">
                                <FormControl>
                                    <input
                                        type="checkbox"
                                        checked={field.value}
                                        onChange={field.onChange}
                                        className="h-4 w-4 mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel className="text-sm font-normal text-gray-600">
                                        Acepto que mis datos sean utilizados exclusivamente por la oficina parlamentaria para gestionar este caso y recibir actualizaciones sobre el mismo.
                                    </FormLabel>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg shadow-md"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Enviando..." : "Ingresar Caso"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
