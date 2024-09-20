import { Note } from "@prisma/client";
import { Pencil } from "lucide-react";

export interface NodeCardProps {
  note: Note;
}

const NodeCard = ({ note }: NodeCardProps) => {
  return (
    <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 p-4">
      <div>
        <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
          {note.title}
        </h4>
        <p className="text-gray-800 dark:text-gray-100 text-sm">{note.body}</p>
      </div>
      <div>
        <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
          <p className="text-sm">
            {note.createdAt &&
              new Date(note.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
          </p>
          <button className="w-8 h-8 rounded-full bg-zinc-700 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black">
            <Pencil className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NodeCard;
