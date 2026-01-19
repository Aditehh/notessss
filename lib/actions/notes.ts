// lib/actions/notes.ts
"use server";
import { deleteNote } from "@/lib/notes";

export async function deleteNoteAction(noteId: string) {
    await deleteNote(noteId);
}
