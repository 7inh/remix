import {
  AtSign,
  CalendarDays,
  LayoutDashboard,
  MessagesSquare,
  NotebookPen,
  Settings,
  SquareCheck,
} from "lucide-react";

export const SIDE_BAR = [
  {
    title: "Dashboard",
    Icon: LayoutDashboard,
    href: "/dashboard",
    children: [],
  },
  {
    title: "Mail",
    Icon: AtSign,
    href: "/mail",
    children: [],
  },
  // {
  //   title: "Notifications",
  //   Icon: Bell,
  //   href: "/notifications",
  //   children: [],
  // },
  {
    title: "Calendar",
    Icon: CalendarDays,
    href: "/calendar",
    children: [],
  },
  {
    title: "Tasks",
    Icon: SquareCheck,
    href: "/tasks",
    children: [
      {
        title: "All Tasks",
        href: "/tasks",
      },
      {
        title: "Add Task",
        href: "/tasks/add",
      },
      {
        title: "In Progress",
        href: "/tasks/in-progress",
      },
    ],
  },
  {
    title: "Notes",
    Icon: NotebookPen,
    href: "/notes",
    children: [],
  },
  {
    title: "Chat",
    Icon: MessagesSquare,
    href: "/chat",
    children: [],
  },
  {
    title: "Settings",
    Icon: Settings,
    href: "/settings",
    children: [
      // {
      //   title: "Profile",
      //   href: "/settings/profile",
      // },
      // {
      //   title: "Account",
      //   href: "/settings/account",
      // },
      // {
      //   title: "Appearance",
      //   href: "/settings/appearance",
      // },
      // {
      //   title: "Notifications",
      //   href: "/settings/notifications",
      // },
      // {
      //   title: "Display",
      //   href: "/settings/display",
      // },
    ],
  },
  // {
  //   title: "Users",
  //   Icon: BookUser,
  //   href: "/users",
  //   children: [
  //     {
  //       title: "All Users",
  //       href: "/users/all",
  //     },
  //     {
  //       title: "Add User",
  //       href: "/users/add",
  //     },
  //   ],
  // },
];
