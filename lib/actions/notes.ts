// lib/actions/notes.ts
"use server";
import createNote, { hardDeleteNote } from "@/lib/notes";
import { softDeleteNote } from "@/lib/notes";
import { editNote } from "@/lib/notes";
import { togglePinNote } from "@/lib/notes";
import { revalidatePath } from "next/cache";
import { addTagToNote } from "@/lib/notes";

export async function hardDeleteNoteAction(noteId: string) {
    await hardDeleteNote(noteId);

    revalidatePath("/notes");

}

export async function softDeleteNoteAction(noteId: string) {
    await softDeleteNote(noteId);

    revalidatePath("/notes")
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

export async function addTagToNoteaction(formdata: FormData) {


    const noteId = formdata.get("noteId") as string
    const tagName = formdata.get("name") as string
    const color = formdata.get("color") as string


    await addTagToNote(noteId, tagName, color || undefined)

    revalidatePath("/notes")
}