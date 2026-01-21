"use client";

import { Button } from "./button";
import { togglePinNoteaction } from "@/lib/actions/notes";
import { Pin } from "lucide-react";
import { motion } from "framer-motion";
import { useTransition } from "react";

interface ToggleButtonProps {
    noteId: string;
    pinned: boolean;
}

export default function PinToggleButton({ noteId, pinned }: ToggleButtonProps) {
    const [isPending, startTransition] = useTransition();

    return (
        <Button
            variant="ghost"
            size="icon"
            disabled={isPending}
            onClick={() =>
                startTransition(() => togglePinNoteaction(noteId))
            }
            className="relative"
        >
            <motion.div
                key={pinned ? "pinned" : "unpinned"}
                initial={{ scale: 0.8, rotate: -30, opacity: 0 }}
                animate={{
                    scale: 1,
                    rotate: pinned ? 0 : -45,
                    opacity: 1,
                }}  
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <Pin
                    className={`h-4 w-4 transition-colors ${pinned
                        ? "text-yellow-700 fill-yellow-500"
                        : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        }`}
                />
            </motion.div>
        </Button>
    );
}
