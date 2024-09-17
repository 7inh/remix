import { Link, NavLink } from "@remix-run/react";
import { ChevronRight, LucideIcon } from "lucide-react";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/Collapsible";

export interface NavItemProps {
  title: string;
  href: string;
  Icon: LucideIcon;
  subNav: { title: string; href: string }[];
}

const NavItem = (props: NavItemProps) => {
  const { title, href, Icon, subNav } = props;
  const [open, setOpen] = useState(false);

  return (
    <Collapsible className="group" open={open}>
      <CollapsibleTrigger className="w-full">
        <div
          role="button"
          className="hover:bg-zinc-200 flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <NavLink
            to={subNav.length ? subNav[0].href : href}
            type="button"
            className={({ isActive }) =>
              `${
                isActive ? "text-black" : "text-gray-600"
              } flex items-center justify-between w-full p-2.5 py-1.5 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900`
            }
          >
            <div className="grid mr-4 place-items-center">
              <Icon className="size-5" />
            </div>
            <p className="block mr-auto font-sans text-base antialiased font-medium leading-relaxed">
              {title}
            </p>
            {subNav.length ? (
              <ChevronRight
                className="size-4 group-data-[state=open]:rotate-90 transition-all"
                onClick={(e) => {
                  if (subNav.length) {
                    setOpen(!open);
                    e.preventDefault();
                  }
                }}
              />
            ) : null}
          </NavLink>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        {subNav.length ? (
          <div className="overflow-hidden">
            <div className="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
              <nav className="flex flex-col gap-1 p-0 font-sans text-base font-normal text-gray-500">
                {subNav.map((child) => {
                  const { title, href } = child;
                  return (
                    <Link
                      to={href}
                      key={child.title}
                      role="button"
                      className="hover:bg-zinc-200 overflow-hidden flex items-center p-2.5 py-2 leading-tight transition-all rounded-lg hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80"
                    >
                      <div className="grid mr-4 place-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          stroke="currentColor"
                          aria-hidden="true"
                          className="w-5 h-3"
                        >
                          <circle cx={12} cy={12} r={3} fill="currentColor" />
                        </svg>
                      </div>
                      {title}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        ) : null}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default NavItem;
