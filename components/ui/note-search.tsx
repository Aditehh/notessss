"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function NotesSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query) {
        router.replace(`/notes?q=${encodeURIComponent(query)}`);
      } else {
        router.replace("/notes");
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [query, router]); // ✅ SAFE

  return (
    <Input
      placeholder="Search notes..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
