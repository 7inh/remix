import { X } from "lucide-react";
import { Button } from "~/components/ui/Button";
import SideBar from "~/components/ui/SideBar";

export interface DrawerProps {
  open: boolean;
  onClose?: () => void;
}

const Drawer = ({ open, onClose }: DrawerProps) => {
  return (
    <div>
      <div
        className={`${
          open ? "opacity-1 z-50" : "opacity-0 -z-50"
        } fixed bg-black/30  h-dvh w-full inset-0`}
      ></div>
      <div
        className={`fixed inset-0 h-dvh w-[320px] z-[51] p-2 ${
          open ? "left-0" : "-left-80"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="bg-white h-full rounded-lg relative">
          <SideBar />

          <Button
            variant="ghost"
            size="icon"
            className="absolute z-[51] right-3 top-3 size-9"
            onClick={onClose}
          >
            <X className="text-zinc-500" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
