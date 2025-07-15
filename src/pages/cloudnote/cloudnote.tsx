import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Note, { NoteProps } from "./note.tsx";

type FullNote = NoteProps;

const getRandomColor = () =>
  `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;

const CloudNote = () => {
  const [notes, setNotes] = useState<FullNote[]>(() => {
    const saved = localStorage.getItem("chaos-notes");
    return saved ? JSON.parse(saved) : [];
  });
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem("chaos-notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const handlePasteShortcut = async (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "v") {
        try {
          const clipboardItems = await navigator.clipboard.read();

          for (const item of clipboardItems) {
            for (const type of item.types) {
              const blob = await item.getType(type);

              if (type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = () => {
                  const newNote: FullNote = {
                    id: uuidv4(),
                    x: 100 + Math.random() * 300,
                    y: 100 + Math.random() * 300,
                    width: 250,
                    height: 250,
                    content: reader.result as string, // data URL
                    color: getRandomColor(),
                    onUpdate: () => {},
                    onDelete: () => {},
                  };
                  setNotes((prev) => [...prev, newNote]);
                };
                reader.readAsDataURL(blob);
                return;
              } else if (type === "text/plain") {
                const text = await blob.text();
                if (text.trim()) {
                  const newNote: FullNote = {
                    id: uuidv4(),
                    x: 100 + Math.random() * 300,
                    y: 100 + Math.random() * 300,
                    width: 200,
                    height: 150,
                    content: text,
                    color: getRandomColor(),
                    onUpdate: () => {},
                    onDelete: () => {},
                  };
                  setNotes((prev) => [...prev, newNote]);
                  return;
                }
              }
            }
          }
        } catch (err) {
          console.error("Clipboard access failed:", err);
        }
      }
    };

    window.addEventListener("keydown", handlePasteShortcut);
    return () => window.removeEventListener("keydown", handlePasteShortcut);
  }, []);

  const addNote = () => {
    const newNote: FullNote = {
      id: uuidv4(),
      x: 100,
      y: 100,
      width: 200,
      height: 150,
      content: "Type something...",
      color: getRandomColor(),
      rotation: 0, 
      onUpdate: () => {},
      onDelete: () => {},
    };
    setNotes([...notes, newNote]);
  };

  const updateNote = (id: string, updates: Partial<FullNote>) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, ...updates } : note))
    );
    setActiveNoteId(id); // bring to front!
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="w-full h-screen relative bg-slate-100 overflow-auto">
      <button
        onClick={addNote}
        className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 z-50"
      >
        Add Note
      </button>

      <div
        style={{
          width: Math.max(
            ...notes.map((n) => n.x + n.width),
            window.innerWidth
          ),
          height: Math.max(
            ...notes.map((n) => n.y + n.height),
            window.innerHeight
          ),
          position: "relative",
        }}
      >
        {notes.map((note) => (
          <Note
            key={note.id}
            {...note}
            onUpdate={updateNote}
            onDelete={deleteNote}
            zIndex={note.id === activeNoteId ? 999 : 1}
          />
        ))}
      </div>
    </div>
  );
};

export default CloudNote;
