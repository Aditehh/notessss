"use client";

import { motion } from "framer-motion";
import DeleteButton from "./delete-note-button";
import EditButton from "./edit-note-button";
import React from "react";
import PinToggleButton from "./toggle-pin-button";

interface Note {
    id: string;
    title: string;
    content: string;
}

interface NotesListProps {
    notes: Note[];
}

export default function NotesList({ notes }: NotesListProps) {
    return (
        <ul className="grid gap-4 pt-10">
            {notes.map((note, i) => (
                <motion.li
                    key={note.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="p-4 border rounded-md bg-gray-100 dark:bg-gray-800"
                >
                    <div className="flex justify-between">

                        <div className="flex flex-col gap-3">

                            <h3 className="font-bold text-[18px] text-gray-600">{note.title}</h3>
                            <p className="font-semibold text-lg text-gray-500">{note.content}</p>
                        </div>

                        <div className="flex gap-2 mt-2">
                            <EditButton noteId={note.id} currentTitle={note.title} currentContent={note.content} />
                            <DeleteButton noteId={note.id} />
                            <PinToggleButton noteId={note.id} pinned={false} />
                        </div>


                    </div>

                </motion.li>
            ))}
        </ul>
    );
}
