import React from 'react'
import { getCurrentUser } from '@/lib/auth'
import { getAppUser } from '@/lib/auth';
import { getNotes } from '@/lib/notes';
import createNote from '@/lib/notes';
import { preconnect } from 'react-dom';

export default async function NotesPage() {

    const user1 = await getAppUser();

    const user = await getCurrentUser();

    console.log(user)

    const notes = await getNotes();

    if (notes.length === 0) {
        await createNote("My first note", "this note was auto-created")
    }

    const updatedNotes = await getNotes();


    return (
        <pre>
            {JSON.stringify(updatedNotes, null, 2)}
        </pre>
    )
}
