import { Button } from "@/components/ui/button";
import { RestoreNoteButton } from "@/components/ui/restore-note-button";
import { getTrashNotes } from "@/lib/notes";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";





export default async function TrashPage() {

    const trashNotes = await getTrashNotes();

    return (
        <>

            <div className="sticky top-0 z-40 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 px-6 md:px-20 py-4">
                <Button
                    variant="ghost"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200/60 dark:hover:bg-gray-800 transition"
                >
                    <Link href={"/"}>
                        <ArrowLeft className="h-4 w-6" />

                    </Link>
                </Button>

            </div>

            <main className="min-h-screen px-6 md:px-20 py-12">

                <h1 className="text-3xl font-bold mb-6">Trash</h1>

                {trashNotes.length === 0 && (
                    <p className="text-gray-500">Trash is empty</p>
                )}

                <ul className="grid gap-4">
                    {trashNotes.map(note => (
                        <div
                            key={note.id}
                            className="p-4 border rounded-md bg-gray-100 dark:bg-gray-800 justify-between flex"
                        >
                            <div>

                                <h3 className="font-semibold">{note.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {note.content}
                                </p>

                                <p className="text-xs text-gray-400 mt-2">
                                    Deleted at: {note.deletedAt?.toLocaleString()}
                                </p>
                            </div>
                            <div>
                                <RestoreNoteButton noteId={note.id} />
                            </div>
                        </div>
                    ))}
                </ul>



            </main>
        </>
    );
}
