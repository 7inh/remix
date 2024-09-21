import * as z from "zod";
// import { generateErrorMessage } from "zod-error";

export const serverEnvSchema = z.object({
  SECURE_AUTH_COOKIE: z.enum(["true", "false"]).transform((v) => v === "true"),
  SECRET_KEY_BASE: z.string(),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;

function buildEnv(): ServerEnv {
  try {
    return serverEnvSchema.parse(process.env);
  } catch (error: unknown) {
    console.error("Warning: invalid server env vars!");
    // console.error(
    //   generateErrorMessage((error as z.ZodError).issues, {
    //     delimiter: { error: "\n" },
    //   })
    // );

    return {} as ServerEnv;
  }
}

export const SERVER_ENV = buildEnv();
