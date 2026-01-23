import prisma from "./db";
import { Prisma } from "./generated/prisma/client";

export type NotewithTags = Prisma.NoteGetPayload<{
    include: {
        noteTags: {
            include: {
                tag: true
            }
        }
    }
}>;
