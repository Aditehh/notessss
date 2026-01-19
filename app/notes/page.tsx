// "use client";

import DeleteButton from "@/components/ui/delete-note-button";
import EditButton from "@/components/ui/edit-note-button";
import { getAppUser } from "@/lib/auth";
import { getNotes } from "@/lib/notes";
import createNote from "@/lib/notes";
import AddNoteForm from "@/components/ui/add-note-form";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import NotesList from "@/components/ui/notes-list";

export default async function NotesPage() {
    const user = await getAppUser();
    if (!user) return null;

    const notes = await getNotes();



    return (
        <main className="min-h-screen px-6 md:px-20 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-6">Your Notes</h1>

            {/* Add Note Form */}
            <AddNoteForm />

            {/* No notes message */}
            {notes.length === 0 && (
                <p className="text-gray-600 dark:text-gray-300">No notes yet. Start by adding one above!</p>
            )}

            {/* Notes List */}
            <NotesList notes={notes} />
        </main>
    );
}
