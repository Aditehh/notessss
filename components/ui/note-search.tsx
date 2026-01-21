"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "./input";

export default function NotesSearch() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [query, setQuery] = useState(searchParams.get("q") || "");

    useEffect(() => {
        const timeout = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());

            if (query) {
                params.set("q", query);
            } else {
                params.delete("q");
            }

            router.replace(`/notes?${params.toString()}`);
        }, 300);

        return () => clearTimeout(timeout);
    }, [query]);

    return (
        <Input
            placeholder="Search notes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mb-4"
        />
    );
}
