import { ActionFunctionArgs } from "@remix-run/node";
import { signIn } from "~/data/users.server";
import SignIn from "~/features/auth/SignIn";
import { authenticate } from "~/web/auth.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const original = Object.fromEntries(formData) as Record<string, string>;
  const result = await signIn(formData);

  if (result.errors) return { errors: result.errors, original };

  return authenticate(result.data, {
    redirectTo: result.data.redirectTo,
    rememberMe: result.data.rememberMe,
  }) as never;
};

export default function SignInPage() {
  return <SignIn />;
}
