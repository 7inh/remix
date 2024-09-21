import { Outlet } from "@remix-run/react";
import UnAuthLayout from "~/components/layouts/UnAuthLayout";

export default function AppPage() {
  return (
    <UnAuthLayout>
      <Outlet />
    </UnAuthLayout>
  );
}
