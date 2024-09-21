import { User } from "@prisma/client";
import * as z from "zod";
import { zfd } from "zod-form-data";
import { DataResult } from "~/common/types";
import prisma from "~/data/prisma.instance";
import { formatZodErrors } from "~/lib/utils";
import argon from "argon2";

export const loginSchema = zfd.formData({
  email: zfd.text(z.string().email()),
  password: zfd.text(),
  redirectTo: zfd.text(z.string().optional()),
  rememberMe: zfd.checkbox().optional(),
});

export type LoginParams = z.infer<typeof loginSchema> | FormData;

export async function encryptPassword(password: string): Promise<string> {
  return argon.hash(password);
}

export async function verifyPassword({
  password,
  hash,
}: {
  hash: string;
  password: string;
}): Promise<boolean> {
  return argon.verify(hash, password);
}

export async function signIn(
  params: LoginParams
): Promise<DataResult<User & { rememberMe?: boolean; redirectTo?: string }>> {
  const parsedSchema = loginSchema.safeParse(params);

  if (!parsedSchema.success)
    return { data: null, errors: formatZodErrors(parsedSchema.error) };

  const { email, password, rememberMe, redirectTo } = parsedSchema.data;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !user?.password)
    return { data: null, errors: { email: "Email/Password combo not found" } };

  if (
    await verifyPassword({
      password,
      hash: user.password,
    })
  ) {
    user.password = "";

    return { data: { ...user, rememberMe, redirectTo }, errors: null };
  }

  return { data: null, errors: { email: "Email/Password combo not found" } };
}
