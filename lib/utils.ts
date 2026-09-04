import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  if (date.toLowerCase() === 'present') {
    return 'Present'
  }

  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    const navOffset = 96
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const targetPosition = Math.max(0, elementPosition - navOffset)

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    })
  }
}
