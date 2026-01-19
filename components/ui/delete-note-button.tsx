"use client"
import { Button } from './button'
import { useState } from 'react'
import { deleteNote } from '@/lib/notes'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './dialog'




export default function DeleteButton({ }) {


    async function deleteAction(formData: FormData) {
        "use server";

        const noteId = formData.get("noteId") as string;
        await deleteNote(noteId);
    }


    const [open, setOpen] = useState(false)

    return (
        <Dialog>
            <form action={deleteAction}>
                <DialogTrigger asChild>
                    <Button variant="outline">Delete</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-106.25">
                    <DialogHeader>
                        <DialogTitle>Are you sure?</DialogTitle>
                        <DialogDescription>
                            Click Confirm to Delete
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Delete</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
