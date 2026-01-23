import { getTrashNotes } from "@/lib/notes";

export default async function TrashPage() {
    const trashNotes = await getTrashNotes();

    return (
        <main className="min-h-screen px-6 md:px-20 py-12">
            <h1 className="text-3xl font-bold mb-6">Trash</h1>

            {trashNotes.length === 0 && (
                <p className="text-gray-500">Trash is empty</p>
            )}

            <ul className="grid gap-4">
                {trashNotes.map(note => (
                    <li
                        key={note.id}
                        className="p-4 border rounded-md bg-gray-100 dark:bg-gray-800"
                    >
                        <h3 className="font-semibold">{note.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            {note.content}
                        </p>

                        <p className="text-xs text-gray-400 mt-2">
                            Deleted at: {note.deletedAt?.toLocaleString()}
                        </p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
