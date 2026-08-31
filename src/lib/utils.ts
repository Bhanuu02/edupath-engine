import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amountLpa: number): string {
  return `₹${amountLpa} - ₹${(amountLpa * 2.2).toFixed(1)} LPA`;
}

export function formatDuration(years: number): string {
  return `${years} ${years === 1 ? 'year' : 'years'}`;
}
