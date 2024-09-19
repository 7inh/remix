import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/Button";
import Drawer from "~/components/ui/Drawer";

export interface AppBarProps {}

const AppBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="pt-2.5">
        <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
          <Menu className="text-zinc-500" />
        </Button>
      </nav>
      <Drawer open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default AppBar;
