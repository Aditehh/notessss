import React from 'react'
import { getCurrentUser } from '@/lib/auth'

export default async function NotesPage() {

    const user = await getCurrentUser();
    console.log(user)
    return (
        <div>
            thisisthenotespagehehe
        </div>
    )
}
