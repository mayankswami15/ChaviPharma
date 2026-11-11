import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a phone number for display.
 * Returns empty string if no phone is provided.
 */
export function formatPhone(phone: string): string {
  if (!phone) return "";
  return phone;
}

/**
 * Check if a string value is a non-empty, verified piece of information.
 */
export function isVerified(value: string | undefined | null): boolean {
  return !!value && value.trim().length > 0;
}
