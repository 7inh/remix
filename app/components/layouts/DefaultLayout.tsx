import { PropsWithChildren } from "react";
import AppBar from "~/components/ui/AppBar";
import SideBar from "~/components/ui/SideBar";

export interface DefaultLayoutProps extends PropsWithChildren {}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="relative isolate flex min-h-svh w-full bg-white max-lg:flex-col lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
      <aside className="sidebar w-[248px] flex-shrink-0 fixed inset-y-0 left-0 max-lg:hidden">
        <SideBar />
      </aside>
      <header className="flex items-center px-4 lg:hidden">
        <AppBar />
      </header>
      <main className="grow p-2 flex flex-1 flex-col pb-2 lg:min-w-0 lg:pl-64 lg:pr-2 lg:pt-2 h-dvh overflow-hidden">
        <div className="px-4 lg:p-0 h-full flex flex-col lg:rounded-lg lg:bg-white overflow-hidden lg:shadow-sm lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
