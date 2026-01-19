// lib/actions/notes.ts
"use server";
import { deleteNote } from "@/lib/notes";
import { editNote } from "@/lib/notes";

export async function deleteNoteAction(noteId: string) {
    await deleteNote(noteId);
}

export async function updateNoteAction(noteid: string, title: string, content: string) {
    await editNote(noteid, title, content)
}
