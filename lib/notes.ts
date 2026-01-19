import prisma from "./db";
import { getAppUser } from "./auth";

export default async function createNote(title: string, content: string) {
    const user = await getAppUser();
    if (!user) throw new Error("Not logged in")

    return prisma.note.create({
        data: {
            title,
            content,
            appUserId: user.id
        }
    })
    // return note;
}

export async function getNotes() {
    const user = await getAppUser();
    if (!user)
        return []

    return prisma.note.findMany({
        where: { appUserId: user.id },
        orderBy: [
            { pinned: "desc" },
            { createdAt: "desc" }
        ]
    })
    // return notes;
}

export async function deleteNote(noteId: string) {
    const user = await getAppUser();
    if (!user)
        throw new Error("not authenticated")

    const note = await prisma.note.findFirst({
        where: {
            id: noteId,
            appUserId: user.id,
        }
    })
    if (!note) {
        throw new Error("no notes found")
    }
    return prisma.note.delete({
        where: {
            id: noteId,
        }

    })
}
