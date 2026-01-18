import React from 'react'
import { getCurrentUser } from '@/lib/auth'
import { getAppUser } from '@/lib/auth';

export default async function NotesPage() {

    const user1 = await getAppUser();

    const user = await getCurrentUser();
    console.log(user)

    return (
        <div>
            thisisthenotespagehehe
            loggedin as {user1?.email}
        </div>
    )
}
