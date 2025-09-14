// Simple utility functions for demonstration
export const formatCount = (count: number): string => {
  if (count === 0) return 'zero'
  if (count === 1) return 'one'
  if (count < 0) return 'negative'
  return count.toString()
}

export const incrementCounter = (current: number, step: number = 1): number => {
  return current + step
}

export const isEven = (num: number): boolean => {
  return num % 2 === 0
}
