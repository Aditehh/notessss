// lib/actions/notes.ts
"use server";
import createNote, { deleteNote } from "@/lib/notes";
import { editNote } from "@/lib/notes";

export async function deleteNoteAction(noteId: string) {
    await deleteNote(noteId);
}

export async function updateNoteAction(noteid: string, title: string, content: string) {
    await editNote(noteid, title, content)
}

export async function createNoteAction(formdata: FormData) {
    const title = formdata.get("title") as string;
    const content = formdata.get("content") as string;

    if (!title || !content) throw new Error("Title and Content are required")

    await createNote(title, content)
}
