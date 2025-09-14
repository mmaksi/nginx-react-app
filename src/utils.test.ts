import { describe, it, expect } from 'vitest'
import { formatCount, incrementCounter, isEven } from './utils.ts'

describe('Utils', () => {
  describe('formatCount', () => {
    it('returns "zero" for count 0', () => {
      expect(formatCount(0)).toBe('zero')
    })

    it('returns "one" for count 1', () => {
      expect(formatCount(1)).toBe('one')
    })

    it('returns "negative" for negative numbers', () => {
      expect(formatCount(-1)).toBe('negative')
      expect(formatCount(-10)).toBe('negative')
    })

    it('returns string representation for other positive numbers', () => {
      expect(formatCount(2)).toBe('2')
      expect(formatCount(10)).toBe('10')
      expect(formatCount(100)).toBe('100')
    })
  })

  describe('incrementCounter', () => {
    it('increments by 1 by default', () => {
      expect(incrementCounter(0)).toBe(1)
      expect(incrementCounter(5)).toBe(6)
    })

    it('increments by specified step', () => {
      expect(incrementCounter(0, 2)).toBe(2)
      expect(incrementCounter(5, 3)).toBe(8)
    })

    it('handles negative steps (decrement)', () => {
      expect(incrementCounter(5, -1)).toBe(4)
      expect(incrementCounter(10, -3)).toBe(7)
    })
  })

  describe('isEven', () => {
    it('returns true for even numbers', () => {
      expect(isEven(0)).toBe(true)
      expect(isEven(2)).toBe(true)
      expect(isEven(4)).toBe(true)
      expect(isEven(-2)).toBe(true)
    })

    it('returns false for odd numbers', () => {
      expect(isEven(1)).toBe(false)
      expect(isEven(3)).toBe(false)
      expect(isEven(-1)).toBe(false)
      expect(isEven(-3)).toBe(false)
    })
  })
})
