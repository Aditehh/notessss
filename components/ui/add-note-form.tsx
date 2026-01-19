"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createNoteAction } from "@/lib/actions/notes";
import React from "react";

export default function AddNoteForm() {
    return (
        <form
            action={createNoteAction} // <-- server action imported
            className="flex flex-col gap-3 max-w-md"
        >
            <div className="flex flex-col gap-1">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" required />
            </div>

            <div className="flex flex-col gap-1">
                <Label htmlFor="content">Content</Label>
                <Input id="content" name="content" required />
            </div>

            <Button type="submit" variant="outline">
                Add Note
            </Button>
        </form>
    );
}
