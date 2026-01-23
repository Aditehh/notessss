// RestoreNoteButton.tsx
"use client";
import { RotateCcw } from "lucide-react";
import { Button } from "./button";
import { restoreTrashNotesaction } from "@/lib/actions/notes";

interface RestoreNoteButtonProps {
    noteId: string;
}

export function RestoreNoteButton({ noteId }: RestoreNoteButtonProps) {
    return (
        <Button
            onClick={() => restoreTrashNotesaction(noteId)}
            variant={"link"}
            className="
        inline-flex items-center gap-2
        h-9 px-3
        rounded-md border border-green-200
        bg-green-50 text-green-700
        hover:bg-green-100
        transition-colors
      "
        >
            <RotateCcw className="h-4 w-4" />
            Restore
        </Button>
    );
}
