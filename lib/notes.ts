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

        where: {
            appUserId: user.id,
            deletedAt: null,
        },


        orderBy: [
            { pinned: "desc" },
            { createdAt: "desc" }
        ],

        include: {
            noteTags: {
                include: {
                    tag: true
                }
            }
        }
    })
}


// export async function deleteNote(noteId: string) {
//     const user = await getAppUser();
//     if (!user)
//         throw new Error("not authenticated")

//     const note = await prisma.note.findFirst({
//         where: {
//             id: noteId,
//             appUserId: user.id,
//         }
//     })
//     if (!note) {
//         throw new Error("no notes found")
//     }
//     return prisma.note.delete({
//         where: {
//             id: noteId,
//         }

//     })
// }



export async function editNote(noteId: string, title: string, content: string) {
    const user = await getAppUser();
    if (!user) {
        throw new Error("unauthorized")
    }

    const note = await prisma.note.findFirst({
        where: {
            id: noteId,
            appUserId: user.id
        }
    })

    if (!note) {
        throw new Error("no notes found")
    }

    return prisma.note.update({
        where: { id: noteId },
        data: { title, content }
    })
}




export async function togglePinNote(noteId: string) {
    const user = await getAppUser();
    if (!user) throw new Error("cannot pin/unpin notes")

    const note = await prisma.note.findFirst({
        where: {
            id: noteId,
            appUserId: user.id,
        }
    })

    if (!note) {
        throw new Error("note not found")
    }

    return prisma.note.update({
        where: { id: noteId },
        data: {
            pinned: !note.pinned
        }
    })
}


export async function addTagToNote(noteId: string, tagName: string, color?: string) {

    const user = await getAppUser();
    if (!user) throw new Error("unauthorized")




    //this creates a tag if the tag doesn't exist
    const tag = await prisma.tag.upsert({
        where: {
            name_appUserId: { name: tagName, appUserId: user.id }
        },
        create: { name: tagName, color, appUserId: user.id },
        update: {}
    })


    //this adds tag to the note
    await prisma.noteTag.upsert({
        where: {
            noteId_tagId: { noteId, tagId: tag.id }
        },
        create: { noteId, tagId: tag.id },
        update: {}
    })

}

export async function softDeleteNote(noteId: string) {
    const user = await getAppUser();
    if (!user) throw new Error("unauthorized")

    return prisma.note.update({
        where: {
            id: noteId,
            appUserId: user.id
        },
        data: {
            deletedAt: new Date()
        }
    })
}

export async function getTrashNotes() {
    const user = await getAppUser();
    if (!user) throw new Error("unauthorized")

    return prisma.note.findMany({
        where: {
            appUserId: user.id,
            deletedAt: {
                not: null
            }
        },
        orderBy: {
            deletedAt: "desc",
        },
        include: {
            noteTags: {
                include: {
                    tag: true,
                }
            }
        }

    })
}