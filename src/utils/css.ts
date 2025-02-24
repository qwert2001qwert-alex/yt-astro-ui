import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names into a single string, merging Tailwind CSS classes as needed.
 *
 * @param {ClassValue[]} inputs - An array of class names or conditional class value mappings.
 * @return {string} Returns a string of combined and merged class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
