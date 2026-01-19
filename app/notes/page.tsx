import { getCurrentUser, getAppUser } from "@/lib/auth";
import { getNotes } from "@/lib/notes";
import createNote from "@/lib/notes";

export default async function NotesPage() {
    const user = await getAppUser();
    if (!user) return null;

    const notes = await getNotes();

    if (notes.length === 0) {
        await createNote(
            "My first note",
            "this note was auto-created"
        );
    }

    const updatedNotes = await getNotes();

    return (
        <main>
            <h1>Your notes</h1>

            {updatedNotes.length === 0 && <p>No notes yet</p>}

            <ul>
                {updatedNotes.map(note => (
                    <li key={note.id}>
                        <h3>{note.title}</h3>
                        <p>{note.content}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
