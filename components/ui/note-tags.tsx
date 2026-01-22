"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import { addTagToNoteaction } from "@/lib/actions/notes"

interface NoteTagsProps {
    noteId: string
}

export default function NoteTags({ noteId }: NoteTagsProps) {

    const [color, setColor] = useState('#ffffff'); // Initial color

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };

    // console.log(addTagToNoteaction)

    const [tagInput, setTagInput] = useState("")

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">+tags</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="leading-none font-medium">Tags</h4>
                        <p className="text-muted-foreground text-sm">
                            Set the Tags for your note.
                        </p>
                    </div>
                    <div className="grid gap-2">

                        <form action={addTagToNoteaction}>

                            <div className="grid grid-cols-3 items-center gap-4">

                                <Input id="noteId" name="noteId" value={noteId} type="hidden" />
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    // defaultValue={currentName}
                                    className="col-span-2 h-8"
                                />
                            </div>

                            <div className="grid grid-cols-3 items-center gap-4">
                                {/* <Label htmlFor="color">Color</Label>
                                <Input
                                    id="color"
                                    name="color"
                                    defaultValue="none"
                                    className="col-span-2 h-8"
                                /> */}

                                <Label htmlFor="color-picker">Select Color: </Label>
                                <Input
                                    type="color"
                                    id="color"
                                    name="color"
                                    onChange={handleChange}
                                />

                            </div>
                            <div>
                                <Button type="submit">
                                    Add Tag
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
