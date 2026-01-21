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
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import NotesSearch from "@/components/ui/note-search";

export default async function NotesPage({
    searchParams,
}: {
    searchParams: { q?: string };
}) {
    const user = await getAppUser();
    if (!user) return null;

    // const notes = await getNotes();

    const search = searchParams.q;
    const notes = await getNotes(search);



    return (
        <>
            <div className="sticky top-0 z-40 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 px-6 md:px-20 py-4">
                <Button
                    variant="ghost"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200/60 dark:hover:bg-gray-800 transition"
                >
                    <Link href={"/"}>
                        <ArrowLeft className="h-4 w-6" />

                    </Link>
                </Button>
            </div>

            {/* <NotesSearch /> */}

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
                {/* <NotesList notes={notes} /> */}

                {notes.length === 0 ? (
                    <p className="text-muted-foreground">
                        {search ? "No matching notes found." : "No notes yet."}
                    </p>
                ) : (
                    <NotesList notes={notes} />
                )}

            </main>
        </>

    );
}
