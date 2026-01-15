"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { COMMUNES } from "@/lib/constants";

export function CommuneSelector() {
    const router = useRouter();

    const handleValueChange = (value: string) => {
        // Find the commune slug and navigate
        const commune = COMMUNES.find(c => c.name === value);
        if (commune) {
            router.push(`/mi-comuna/${commune.slug}`);
        }
    };

    return (
        <div className="w-full max-w-sm mx-auto">
            <div className="relative">
                <Select onValueChange={handleValueChange}>
                    <SelectTrigger className="w-full h-12 text-lg bg-white shadow-sm border-gray-200">
                        <div className="flex items-center gap-2 text-gray-700">
                            <MapPin className="h-5 w-5 text-blue-600" />
                            <SelectValue placeholder="Selecciona tu comuna" />
                        </div>
                    </SelectTrigger>
                    <SelectContent>
                        {COMMUNES.map((commune) => (
                            <SelectItem key={commune.slug} value={commune.name}>
                                {commune.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
                Elige tu comuna para ver información local prioritaria
            </p>
        </div>
    );
}
