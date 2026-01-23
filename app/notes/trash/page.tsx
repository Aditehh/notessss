import React from 'react'
import { getTrashNotes } from '@/lib/notes'

export default function TrashPage() {
    const trash = getTrashNotes();
    console.log(trash)
    return (
        <div>

        </div>
    )
}
