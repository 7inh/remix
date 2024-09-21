import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ZodError } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isRequestSuccessful(response: any) {
  return response?.status === 200 || response?.status === 201;
}

export function jsonToFormData(json: Record<string, unknown>) {
  const formData = new FormData();

  Object.entries(json).forEach(([key, value]) => {
    formData.append(key, value as string);
  });

  return formData;
}

export function formatZodErrors(zodError: ZodError) {
  return Object.fromEntries(
    zodError.issues.map((errorObj) => [
      errorObj.path,
      errorObj.message.toLocaleLowerCase(),
    ])
  );
}
