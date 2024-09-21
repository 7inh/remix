import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import DefaultLayout from "~/components/layouts/DefaultLayout";
import { userFromRequest } from "~/web/auth.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await userFromRequest(request);
  if (!user?.userId) {
    const url = new URL(request.url);
    const redirectTo = encodeURI(
      `${url.pathname}${url.search ? `?${url.search}` : ``}`
    );
    throw redirect(`/sign-in?redirectTo=${redirectTo}`);
  }

  return { user };
};

export default function AppPage() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
}
