import { Note } from "@prisma/client";
import prisma from "~/data/prisma.instance";

export async function createNote(payload: Omit<Note, "id">): Promise<Note> {
  const { authorId, ...noteParams } = payload;
  return prisma.note.create({
    data: {
      ...noteParams,
      author: {
        connect: { id: authorId },
      },
    },
  });
}

export async function listNotes(authorId: number): Promise<Note[]> {
  if (!authorId) return [];

  return prisma.note.findMany({
    where: {
      authorId,
    },
    orderBy: [
      {
        favorite: "desc",
      },
      {
        createdAt: "desc",
      },
      {
        id: "desc",
      },
    ],
  });
}

export async function updateNote(
  noteId: number,
  payload: Partial<Note>
): Promise<Note> {
  return prisma.note.update({
    where: {
      id: noteId,
    },
    data: payload,
  });
}

export async function deleteNote(noteId: number): Promise<void> {
  await prisma.note.delete({
    where: {
      id: noteId,
    },
  });
}
