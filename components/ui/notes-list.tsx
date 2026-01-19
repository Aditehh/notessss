"use client";

import { motion } from "framer-motion";
import DeleteButton from "./delete-note-button";
import EditButton from "./edit-note-button";
import React from "react";

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
    <ul className="grid gap-4">
      {notes.map((note, i) => (
        <motion.li
          key={note.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="p-4 border rounded-md bg-gray-100 dark:bg-gray-800"
        >
          <h3 className="font-semibold">{note.title}</h3>
          <p>{note.content}</p>

          <div className="flex gap-2 mt-2">
            <EditButton noteId={note.id} currentTitle={note.title} currentContent={note.content} />
            <DeleteButton noteId={note.id} />
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
