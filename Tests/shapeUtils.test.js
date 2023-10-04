import { describe, test, expect } from 'vitest'
import { createInnerLine, createFullLine } from '../src/Utils/shapeUtils'
describe('createInnerLine', () => {
  test('should return a line with the given character repeated the given number of times, with spaces in between', () => {
    expect(createInnerLine(7, '*')).toBe('*     *')
  })
})
describe('createFullLine', () => {
  test('should return a line with the given character repeated the given number of times', () => {
    expect(createFullLine(7, '*')).toBe('*******')
  })
})
