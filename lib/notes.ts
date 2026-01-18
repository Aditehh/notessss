import prisma from "./db";
import { getAppUser } from "./auth";

export default async function createNote(title: string, content: string) {
    const user = await getAppUser();
    if (!user) throw new Error("Not logged in")

    const note = await prisma.note.create({
        data: {
            title,
            content,
            appUserId: user.id
        }
    })
    return note;
}

export async function getNotes() {
    const user = await getAppUser();
    if (!user)
        return []

    const notes = await prisma.note.findMany({
        where: { appUserId: user.id },
        orderBy: [
            { pinned: "desc" },
            { createdAt: "desc" }
        ]
    })
    return notes;
}
