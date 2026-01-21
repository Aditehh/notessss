// lib/actions/notes.ts
"use server";
import createNote, { deleteNote } from "@/lib/notes";
import { editNote } from "@/lib/notes";
import { togglePinNote } from "@/lib/notes";
import { revalidatePath } from "next/cache";

export async function deleteNoteAction(noteId: string) {
    await deleteNote(noteId);

    revalidatePath("/notes");

}

export async function updateNoteAction(noteid: string, title: string, content: string) {
    await editNote(noteid, title, content)

    revalidatePath("/notes");

}

export async function createNoteAction(formdata: FormData) {
    const title = formdata.get("title") as string;
    const content = formdata.get("content") as string;

    if (!title || !content) throw new Error("Title and Content are required")

    await createNote(title, content)

    revalidatePath("/notes");

}

export async function togglePinNoteaction(noteId: string) {
    await togglePinNote(noteId)

    revalidatePath("/notes");

}