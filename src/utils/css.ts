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

export function toggleClass(el: string, className: string) {
  const element = document.querySelector(el);
  if (!element) return;

  element.classList.toggle(className);
}

export function addClass(el: string, className: string) {
  const element = document.querySelector(el);
  if (!element) return;

  element.classList.add(className);
}

export function removeClass(el: string, className: string) {
  const element = document.querySelector(el);
  if (!element) return;

  element.classList.remove(className);
}
