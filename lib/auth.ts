import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./db";
import { headers } from "next/headers";


export const auth = betterAuth({

    database: prismaAdapter(prisma, {
        provider: "postgresql"
    }),
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        }
    }
})

export async function getCurrentUser() {
    const reqHeaders = await headers();

    const session = await auth.api.getSession({
        headers: reqHeaders,
    });

    if (!session || !session.user) {
        return null;
    }

    return {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name
    }

}

export async function getAppUser() {
    const authUser = await getCurrentUser();
    if (!authUser) return null;

    const appUser = await prisma.appUser.upsert({
        where: { id: authUser.id },
        update: {},
        create: {
            id: authUser.id,
            email: authUser.email,
            name: authUser.name
        }
    })
    return appUser;
}