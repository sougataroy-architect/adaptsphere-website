import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  iso: string | undefined,
  options?: Intl.DateTimeFormatOptions,
) {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
    ...options,
  }).format(date);
}

export function countWords(text: string): number {
  return text
    .replace(/[*_`#>[\]()]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

export function readingMinutes(words: number, wordsPerMinute = 220): number {
  return Math.max(1, Math.round(words / wordsPerMinute));
}
