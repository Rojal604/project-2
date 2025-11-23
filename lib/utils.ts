import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to get the correct asset path for GitHub Pages
export const getAssetPath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/project-2' : '';
  return `${basePath}${path}`;
};
