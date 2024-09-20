import { Note } from "@prisma/client";
import { useFetcher } from "@remix-run/react";
import { CircleCheck, Palette, Pencil, Star, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/Button";
import usePrevious from "~/hooks/usePrevious";

export interface NodeCardProps {
  note: Note;
}

export const NoteController = () => {
  return (
    <div className="gap-1.5 flex absolute bottom-0 right-0 m-4 h-fit">
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
  );
};

const NoteCard = ({ note }: NodeCardProps) => {
  const fetcher = useFetcher();
  const isUpdated = fetcher.formData ? true : null;
  const preState = usePrevious(isUpdated);
  const favorite = fetcher.formData
    ? fetcher.formData.get("favorite") === "true"
    : note.favorite;

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    fetcher.submit(formData, {
      method: "PATCH",
      action: "/notes",
    });
  };

  const handleToggleFavorite = async () => {
    const formData = new FormData();
    formData.append("noteId", note.id.toString());
    formData.append("favorite", note.favorite ? "false" : "true");
    fetcher.submit(formData, {
      method: "PATCH",
      action: "/notes",
    });
  };

  const handleDelete = async () => {
    const formData = new FormData();
    formData.append("noteId", note.id.toString());
    fetcher.submit(formData, {
      method: "DELETE",
      action: "/notes",
    });
  };

  useEffect(() => {
    if (preState && preState !== isUpdated) {
      setIsEditing(false);
    }
  }, [isUpdated, preState]);

  return (
    <div className="group relative w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-200 p-4 hover:shadow-sm">
      {isEditing ? (
        <form onSubmit={handleEdit}>
          <input
            type="text"
            name="noteId"
            value={note.id}
            className="hidden"
            readOnly
          />
          <textarea
            className="absolute rounded-lg resize-none p-4 inset-0"
            name="note"
            id=""
            defaultValue={note.body || ""}
          ></textarea>
          <NoteController />
        </form>
      ) : null}
      <div>
        {/* <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
          {note.title}
        </h4> */}
        <p className="text-gray-800 dark:text-gray-100 text-sm">{note.body}</p>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="flex items-center justify-between text-gray-800 dark:text-gray-100 gap-2">
          <p className="text-sm flex-grow">
            {note.createdAt &&
              new Date(note.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
          </p>
          <button
            onClick={handleToggleFavorite}
            className={`size-6 rounded-full ring-1 ${
              note.favorite ? "ring-zinc-700" : "ring-zinc-700"
            } text-white flex items-center justify-center`}
          >
            <Star
              className={`size-4 ${
                favorite ? "fill-zinc-700" : "text-zinc-700"
              }`}
            />
          </button>
          <button
            onClick={() => setIsEditing(true)}
            className="size-6 rounded-full text-zing-700 ring-1 ring-zinc-900 flex items-center justify-center"
          >
            <Pencil className="size-3" />
          </button>
          <button
            onClick={handleDelete}
            className={`hover:bg-destructive hover:text-white size-6 rounded-full ring-1 ring-destructive text-destructive flex items-center justify-center`}
          >
            <Trash2 className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
