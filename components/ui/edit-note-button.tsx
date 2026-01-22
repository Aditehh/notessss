"use client";

import { Button } from "./button";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateNoteAction } from "@/lib/actions/notes";
import { Pencil } from "lucide-react";

interface EditNoteProps {
  noteId: string;
  currentTitle: string;
  currentContent: string;
}

export default function EditButton({ noteId, currentTitle, currentContent }: EditNoteProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Button to open dialog */}
      <DialogTrigger asChild>
        <button
          style={{
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "6px",
            border: "1px solid #ccc",
            background: "#f9fafb",
            cursor: "pointer",
          }}
        >
          <Pencil size={16} />

        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>Edit Note</DialogTitle>
          <DialogDescription>
            Make changes to your note here. Click Save when done.
          </DialogDescription>
        </DialogHeader>

        {/* Only one form, wrapping inputs and submit */}
        <form
          action={async (formData: FormData) => {
            const title = formData.get("title") as string;
            const content = formData.get("content") as string;

            await updateNoteAction(noteId, title, content); // call server action
            setOpen(false); // close dialog
          }}
        >
          <input type="hidden" name="noteId" value={noteId} />
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" defaultValue={currentTitle} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="content">Content</Label>
              <Input id="content" name="content" defaultValue={currentContent} required />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
