import { PropsWithChildren } from "react";
import SideBar from "~/components/ui/SideBar";

export interface DefaultLayoutProps extends PropsWithChildren {}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="h-lvh w-lvw flex bg-zinc-100">
      <aside className="sidebar w-[248px] flex-shrink-0">
        <SideBar />
      </aside>
      <main className="grow p-2">
        <div className="h-full flex flex-col lg:rounded-lg lg:bg-white overflow-hidden lg:shadow-sm lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
