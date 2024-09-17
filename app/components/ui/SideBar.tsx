import { SIDE_BAR } from "~/common/consts";
import NavItem from "~/components/ui/NavItem";

export interface SideBarProps {}

const SideBar = () => {
  return (
    <div className="relative flex h-full w-full max-w-[20rem] flex-col rounded-xl text-gray-700 py-2">
      <div className="flex items-center gap-4 p-4 py-2">
        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Logo
        </h5>
      </div>
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 py-1 font-sans text-base font-normal text-blue-gray-700 overflow-auto">
        {SIDE_BAR.map((item) => {
          const { title, Icon, href, children } = item;
          return (
            <NavItem
              key={title}
              title={title}
              Icon={Icon}
              href={href}
              subNav={children}
            />
          );
        })}

        {/* <hr className="my-2 border-blue-gray-50" /> */}
      </nav>
    </div>
  );
};

export default SideBar;
