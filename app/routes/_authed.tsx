import { Outlet } from "@remix-run/react";
import DefaultLayout from "~/components/layouts/DefaultLayout";

export default function AppPage() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
}
