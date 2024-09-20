import { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { CircleCheck, Palette } from "lucide-react";
import NodeCard from "~/components/ui/NoteCard";
import { createNote, listNotes } from "~/data/notes.server";

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
  switch (request.method) {
    case "POST": {
      const formData = new URLSearchParams(await request.text());
      const note = formData.get("note")?.trim();
      if (note) {
        await createNote({
          authorId: 1,
          body: note,
          title: "New Note",
          createdAt: new Date(),
        });
      }
      return new Response(null, {
        status: 200,
      });
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
            <button className="block">
              <Palette className="text-primary" />
            </button>
            <button type="submit" className="block">
              <CircleCheck className="text-green-600 cursor-pointer" />
            </button>
          </div>
        </fetcher.Form>
        {notes.map((note) => (
          <NodeCard
            key={note.id}
            note={{
              ...note,
              createdAt: note.createdAt ? new Date(note.createdAt) : null,
            }}
          />
        ))}
        <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 p-4">
          <div>
            <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
              13 things to work on
            </h4>
            <p className="text-gray-800 dark:text-gray-100 text-sm">
              Our interior design experts work with you to create the space that
              you have been dreaming about.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
              <p className="text-sm">March 28, 2020</p>
              <button className="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-64 flex flex-col justify-between bg-pink-300 rounded-lg border border-pink-300 p-4">
          <div>
            <h4 className="text-gray-800 font-bold mb-3">
              13 things to work on
            </h4>
            <p className="text-gray-800 text-sm">
              Our interior design experts work with you to create the space that
              you have been dreaming about.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between text-gray-800">
              <p className="text-sm">March 28, 2020</p>
              <button className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-pink-300   focus:ring-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-64 flex flex-col justify-between items-start bg-blue-300 rounded-lg border border-blue-300 p-4">
          <div>
            <h4 className="text-gray-800 font-bold mb-3">
              13 things to work on
            </h4>
            <p className="text-gray-800 text-sm">
              Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt,
              neque porro quisquam est, quid malum, sensu iudicari
            </p>
          </div>
          <div className="w-full flex flex-col items-start">
            <div
              className="mb-3 border border-gray-800 rounded-full px-3 py-1 text-gray-800 text-xs flex items-center"
              aria-label="Due on"
              role="contentinfo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-alarm"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx={12} cy={13} r={7} />
                <polyline points="12 10 12 13 14 13" />
                <line x1={7} y1={4} x2="4.25" y2={6} />
                <line x1={17} y1={4} x2="19.75" y2={6} />
              </svg>
              <p className="ml-2">7 Sept, 23:00</p>
            </div>
            <div className="flex items-center justify-between text-gray-800 w-full">
              <p className="text-sm">March 28, 2020</p>
              <button className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-blue-300  focus:ring-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 p-4">
          <div>
            <h3 className="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12">
              What does success as a UX designer look like and how to get there
              systematically
            </h3>
          </div>
          <div>
            <div className="flex items-center justify-between text-gray-800">
              <p className="dark:text-gray-100 text-sm">March 28, 2020</p>
              <button className="w-8 h-8 rounded-full dark:bg-gray-100 dark:text-gray-800 bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 p-4">
          <div>
            <h3 className="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12">
              What does success as a UX designer look like and how to get there
              systematically
            </h3>
          </div>
          <div>
            <div className="mb-3 flex items-center">
              <div
                className="border border-gray-300 dark:border-gray-700 rounded-full px-3 py-1 dark:text-gray-400 text-gray-600 text-xs flex items-center"
                aria-label="due on"
                role="contentinfo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-alarm"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx={12} cy={13} r={7} />
                  <polyline points="12 10 12 13 14 13" />
                  <line x1={7} y1={4} x2="4.25" y2={6} />
                  <line x1={17} y1={4} x2="19.75" y2={6} />
                </svg>
                <p className="ml-2 dark:text-gray-400">7 Sept, 23:00</p>
              </div>
              <button className="p-1 bg-gray-800 dark:bg-gray-100 rounded-full ml-2 text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-star"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between text-gray-800">
              <p className="dark:text-gray-100 text-sm">March 28, 2020</p>
              <button className="w-8 h-8 rounded-full dark:bg-gray-100 dark:text-gray-800 bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 p-4">
          <div>
            <h3 className="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12">
              What does success as a UX designer look like and how to get there
              systematically
            </h3>
          </div>
          <div>
            <div className="mb-3 flex items-center flex-no-wrap">
              <div className="w-6 h-6 bg-cover bg-center rounded-md">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png"
                  alt="read by Alia"
                  className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
                />
              </div>
              <div className="w-6 h-6 bg-cover rounded-md -ml-2">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png"
                  alt="read by jason"
                  className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
                />
              </div>
              <div className="w-6 h-6 bg-cover rounded-md bg-center -ml-2">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png"
                  alt="read by Kane"
                  className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-gray-800">
              <p className="dark:text-gray-100 text-sm">March 28, 2020</p>
              <button className="w-8 h-8 rounded-full dark:bg-gray-100 dark:text-gray-800 bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-64 flex flex-col justify-between items-start dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 p-4">
          <div>
            <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
              13 things to work on
            </h4>
            <p className="text-gray-800 dark:text-gray-100 text-sm">
              Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt,
              neque porro quisquam est, quid malum, sensu iudicari
            </p>
          </div>
          <div className="w-full flex flex-col items-start">
            <div
              aria-label="time"
              role="contentinfo"
              className="mb-3 border border-gray-800 rounded-full px-3 py-1 text-gray-800 dark:text-gray-400 dark:border-gray-700 text-xs flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-alarm"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx={12} cy={13} r={7} />
                <polyline points="12 10 12 13 14 13" />
                <line x1={7} y1={4} x2="4.25" y2={6} />
                <line x1={17} y1={4} x2="19.75" y2={6} />
              </svg>
              <p className="ml-2">7 Sept, 23:00</p>
            </div>
            <div className="flex items-center justify-between text-gray-800 dark:text-gray-100 w-full">
              <p className="text-sm">March 28, 2020</p>
              <button className="w-8 h-8 rounded-full bg-gray-800 dark:text-gray-800 dark:bg-gray-100 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-64 flex flex-col justify-between bg-gray-300 dark:bg-gray-700 dark:border-gray-700 rounded-lg border border-gray-300 p-4">
          <div>
            <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
              13 things to work on
            </h4>
            <p className="text-gray-800 dark:text-gray-100 text-sm">
              Our interior design experts work with you to create the space that
              you have been dreaming about.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
              <p className="text-sm">March 28, 2020</p>
              <button className="w-8 h-8 rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-gray-300  focus:ring-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-64 flex flex-col justify-between bg-yellow-400 rounded-lg border border-yellow-400 p-4">
          <div>
            <h4 className="text-gray-800 font-bold mb-3">
              13 things to work on
            </h4>
            <p className="text-gray-800 text-sm">
              Our interior design experts work with you to create the space that
              you have been dreaming about.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between text-gray-800">
              <p className="text-sm">March 28, 2020</p>
              <button className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-yellow-400  focus:ring-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 p-4">
          <div>
            <h3 className="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12">
              What does success as a UX designer look like and how to get there
              systematically
            </h3>
          </div>
          <div>
            <div className="mb-3 flex items-center">
              <button className="p-1 bg-gray-800 dark:bg-gray-100 rounded-full text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-star"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
              <p className="text-sm">March 28, 2020</p>
              <button className="w-8 h-8 rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 p-4">
          <div>
            <h3 className="text-gray-800 dark:text-gray-100 leading-7 font-semibold w-11/12">
              What does success as a UX designer look like and how to get there
              systematically
            </h3>
          </div>
          <div>
            <div className="mb-3 flex items-center flex-no-wrap">
              <div className="w-6 h-6 bg-cover bg-center rounded-md">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png"
                  alt="read by Alia"
                  className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
                />
              </div>
              <div className="w-6 h-6 bg-cover rounded-md -ml-2">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png"
                  alt="read by jason"
                  className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
                />
              </div>
              <div className="w-6 h-6 bg-cover rounded-md bg-center -ml-2">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png"
                  alt="read by Kane"
                  className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow"
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
              <p className="text-sm">March 28, 2020</p>
              <button className="w-8 h-8 rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-64 flex flex-col justify-between bg-red-300 rounded-lg border border-red-300 p-4">
          <div>
            <h3 className="text-gray-800 leading-7 font-semibold w-11/12">
              What does success as a UX designer look like and how to get there
              systematically
            </h3>
          </div>
          <div>
            <div className="flex items-center justify-between text-gray-800">
              <p className="text-sm">March 28, 2020</p>
              <button className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-red-300 focus:ring-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
