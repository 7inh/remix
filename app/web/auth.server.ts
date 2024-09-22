import { createCookie, redirect } from "@remix-run/node";
import { SERVER_ENV } from "~/env/env.server";

const ONE_HOUR = 3600;
const ONE_YEAR = 31536000;

const authCookie = createCookie("auth", {
  secrets: [SERVER_ENV.SECRET_KEY_BASE],
  sameSite: "strict",
  httpOnly: true,
  secure: SERVER_ENV.SECURE_AUTH_COOKIE,
});

export async function authenticate(
  user: { id: number },
  { redirectTo = "/", rememberMe = false } = {}
) {
  return redirect(redirectTo, {
    status: 302,
    headers: {
      location: redirectTo,
      "Set-Cookie": await authCookie.serialize(
        {
          userId: user.id,
        },
        {
          maxAge: rememberMe ? ONE_YEAR : ONE_HOUR,
        }
      ),
    },
  });
}

export async function userFromRequest(request: Request) {
  const cookieHeader = request.headers.get("Cookie");
  const user = (await authCookie.parse(cookieHeader)) || {};

  return user;
}
