"use client";
import { Button } from './button';
import { useState } from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './dialog';
import { softDeleteNoteAction } from '@/lib/actions/notes';
import { Trash2 } from "lucide-react";



interface DeleteButtonProps {
    noteId: string;
}

export default function SoftDeleteButton({ noteId }: DeleteButtonProps) {

    const [open, setOpen] = useState(false);

    return (

        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        padding: "6px 10px",
                        borderRadius: "6px",
                        border: "1px solid #fca5a5",
                        background: "#fee2e2",
                        color: "#b91c1c",
                        cursor: "pointer",
                    }}
                >
                    <Trash2 size={16} />

                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-106.25">
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>You can always go to trash to restore the notes!</DialogDescription>
                </DialogHeader>

                {/* Form wraps only the Confirm button */}
                <form action={async (formData: FormData) => {

                    const id = formData.get("noteId") as string;
                    if (!id) return;

                    await softDeleteNoteAction(id); // call server action from server file
                    setOpen(false);
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
