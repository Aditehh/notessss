"use client"

import { Button } from './button';
import { useState } from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './dialog';
import { deleteNote } from '@/lib/notes'; // only the server action reference

interface DeleteButtonProps {
    noteId: string;
}

export default function DeleteButton({ noteId }: DeleteButtonProps) {
    const [open, setOpen] = useState(false); // controls the dialog

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {/* Button that opens the dialog */}
            <DialogTrigger asChild>
                <Button variant="outline">Delete</Button>
            </DialogTrigger>

            {/* Dialog content */}
            <DialogContent className="sm:max-w-106.25">
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>
                        Click Confirm to permanently delete this note.
                    </DialogDescription>
                </DialogHeader>

                {/* Form wraps only the Confirm button */}
                <form action={async (formData: FormData) => {
                    "use server";
                    const id = formData.get("noteId") as string;
                    if (!id) return;

                    await deleteNote(id);
                    setOpen(false); // close dialog after deletion
                }}>
                    <input type="hidden" name="noteId" value={noteId} />

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Confirm Delete</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
