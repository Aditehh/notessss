"use client";

import { Button } from "@/components/ui/button";
import DeleteButton from "@/components/ui/delete-note-button";
import EditButton from "@/components/ui/edit-note-button";
import { getAppUser } from "@/lib/auth";
import { getNotes } from "@/lib/notes";
import createNote from "@/lib/notes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";

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

  return (
    <main className="min-h-screen px-6 md:px-20 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-6">Your Notes</h1>

      {/* Add Note Form */}
      <form action={addNote} className="flex flex-col gap-3 max-w-md mb-10">
        <input
          name="title"
          placeholder="Title"
          required
          className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <input
          name="content"
          placeholder="Content"
          required
          className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <Button variant="outline">Add Note</Button>
      </form>

      {/* No notes message */}
      {notes.length === 0 && (
        <p className="text-gray-600 dark:text-gray-300">No notes yet. Start by adding one above!</p>
      )}

      {/* Notes List */}
      <ul className="grid gap-4">
        {notes.map((note, i) => (
          <motion.li
            key={note.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl flex justify-between items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Note Content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{note.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-1">{note.content}</p>
            </div>

            {/* Edit/Delete Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="px-2 py-1 text-gray-500 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">
                •••
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <EditButton
                    noteId={note.id}
                    currentTitle={note.title}
                    currentContent={note.content}
                  />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <DeleteButton noteId={note.id} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.li>
        ))}
      </ul>
    </main>
  );
}
