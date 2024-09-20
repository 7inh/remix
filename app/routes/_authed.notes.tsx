import { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { CircleCheck, Palette } from "lucide-react";
import { Button } from "~/components/ui/Button";
import NoteCard from "~/components/ui/NoteCard";
import {
  createNote,
  deleteNote,
  listNotes,
  updateNote,
} from "~/data/notes.server";

export interface NotesPageProps {}

export const meta: MetaFunction = () => {
  return [
    { title: "Notes" },
    {
      property: "og:title",
      content: "Very cool app",
    },
    {
      name: "description",
      content: "This app is the best",
    },
  ];
};

export const loader = async () => {
  const userId = 1; // TODO: get the user id from the cookie
  const notes = await listNotes(userId);

  return { notes };
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = new URLSearchParams(await request.text());
  const note = formData.get("note")?.trim();
  const noteId = formData.get("noteId")?.trim();
  const favorite = formData.get("favorite") === "true";

  switch (request.method) {
    case "POST": {
      if (note) {
        await createNote({
          authorId: 1,
          body: note,
          title: "New Note",
          createdAt: new Date(),
          favorite: false,
        });
      }
      return new Response(null, {
        status: 200,
      });
    }
    case "PATCH": {
      if (noteId) {
        await updateNote(Number(noteId), {
          body: note,
          favorite,
        });
      }
      return new Response(null, { status: 200 });
    }
    case "DELETE": {
      if (noteId) {
        await deleteNote(Number(noteId));
      }
      return new Response(null, { status: 200 });
    }
    default: {
      return new Response(null, { status: 405 });
    }
  }
};

const NotesPage = () => {
  const fetcher = useFetcher();
  const { notes } = useLoaderData<typeof loader>();

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    fetcher.submit(formData, {
      method: "POST",
    });
    e.currentTarget.reset();
  };

  return (
    <div className="h-full overflow-auto lg:p-4">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        <fetcher.Form
          className="relative group"
          method="post"
          onSubmit={handleSave}
        >
          <textarea
            name="note"
            className="resize-none w-full h-full flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 p-4"
            placeholder="Add new note"
          ></textarea>
          <div className="gap-1.5 hidden group-focus-within:flex absolute bottom-0 right-0 m-4 h-fit">
            <Button variant="icon" size="icon">
              <Palette className="text-primary" />
            </Button>
            <Button
              variant="icon"
              size="icon"
              type="submit"
              className="focus:ring-green-600"
            >
              <CircleCheck className="text-green-600 cursor-pointer" />
            </Button>
          </div>
        </fetcher.Form>
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={{
              ...note,
              createdAt: note.createdAt ? new Date(note.createdAt) : null,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesPage;
