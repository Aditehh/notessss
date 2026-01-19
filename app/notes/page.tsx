import { Button } from "@/components/ui/button";
import DeleteButton from "@/components/ui/delete-note-button";
import { getAppUser } from "@/lib/auth";
import { getNotes, deleteNote } from "@/lib/notes";
import createNote from "@/lib/notes";

export default async function NotesPage() {
    const user = await getAppUser();
    if (!user) return null;

    const notes = await getNotes();

    async function addNote(formData: FormData) {
        "use server";

        const title = formData.get("title") as string;
        const content = formData.get("content") as string;

        await createNote(title, content);
    }

    async function deleteOneNote(formData: FormData) {
        "use server";

        const noteId = formData.get("noteId") as string;
        await deleteNote(noteId);
    }

    return (
        <main>
            <h1>Your notes</h1>

            {/* ADD NOTE */}
            <form action={addNote} className="flex flex-col gap-2">
                <input name="title" placeholder="Title" required />
                <input name="content" placeholder="Content" required />
                <Button variant="outline">Add note</Button>
            </form>

            {notes.length === 0 && <p>No notes yet</p>}

            <ul>
                {notes.map(note => (
                    <li key={note.id}>
                        <h3>{note.title}</h3>
                        <p>{note.content}</p>

                        {/* DELETE NOTE */}
                        <form action={deleteOneNote}>
                            <input type="hidden" name="noteId" value={note.id} />
                            <DeleteButton />
                        </form>
                    </li>
                ))}
            </ul>
        </main>
    );
}
