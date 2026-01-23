"use client";

import { motion } from "framer-motion";
import SoftDeleteButton from "./soft-delete-note-button";
import EditButton from "./edit-note-button";
import PinToggleButton from "./toggle-pin-button";
import NoteTags from "./note-tags";
import { NotewithTags } from "@/lib/types";
import { Button } from "./button";

interface NotesListProps {

    notes: NotewithTags[]

}





export default function NotesList({ notes }: NotesListProps) {


    // const maxTagsReached = notes.noteTags.length >= 2;


    return (
        <ul className="grid gap-4 pt-10">
            {notes.map((note, i) => (
                <motion.li
                    key={note.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    layout
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    // transition={{ delay: i * 0.05 }}
                    className="p-4 border rounded-md bg-gray-100 dark:bg-gray-800"
                >
                    <div className="flex justify-between">

                        <div className="flex flex-col gap-3">

                            <h3 className="font-bold text-[18px] text-gray-600">{note.title}</h3>
                            <p className="font-semibold text-lg text-gray-500">{note.content}</p>
                            <h4>
                                {note.noteTags.map((noteTag) => (
                                    <Button
                                        variant={"secondary"}
                                        key={noteTag.tag.id}
                                        className={`px-2 mx-2 py-1 rounded-full text-sm font-medium text-white`}
                                        style={{ backgroundColor: noteTag.tag.color || "#000" }}
                                    >
                                        {noteTag.tag.name}

                                    </Button>
                                ))}
                            </h4>

                        </div>

                        <div className="flex gap-2 mt-2">
                            <NoteTags noteId={note.id} note={note} />
                            <EditButton noteId={note.id} currentTitle={note.title} currentContent={note.content} />
                            <SoftDeleteButton noteId={note.id} />
                            <PinToggleButton noteId={note.id} pinned={note.pinned} />
                        </div>


                    </div>

                </motion.li>
            ))}
        </ul>
    );
}
