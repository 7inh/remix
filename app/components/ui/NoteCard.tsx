import { Note } from "@prisma/client";
import { useFetcher } from "@remix-run/react";
import { CircleCheck, Palette, Pencil, Star } from "lucide-react";
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

  useEffect(() => {
    if (preState && preState !== isUpdated) {
      setIsEditing(false);
    }
  }, [isUpdated, preState]);

  return (
    <div className="relative w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 p-4">
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
        <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
          {note.title}
        </h4>
        <p className="text-gray-800 dark:text-gray-100 text-sm">{note.body}</p>
      </div>
      <div>
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
              note.favorite ? "ring-yellow-400" : "ring-zinc-700"
            } text-white flex items-center justify-center`}
          >
            <Star
              className={`size-4 ${
                note.favorite ? "fill-yellow-400" : "text-zinc-700"
              }`}
            />
          </button>
          <button
            onClick={() => setIsEditing(true)}
            className="size-6 rounded-full bg-zinc-700 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
          >
            <Pencil className="size-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
