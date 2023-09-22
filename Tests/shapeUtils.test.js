import { test, expect } from 'vitest'
import { createInnerLine, createFullLine } from '../src/Utils/shapeUtils'
const width = 7

test('createInnerLine returns a line with one * in the start and one * in the end with blank spaces inside', () => {
  const innerLine = createInnerLine(width, '*')

  expect(innerLine).toBe('*          *')
})

test('createFullLine returns a complete line with seven * in sequence', () => {
  const character = '*'
  const expectedFullLine = '*******'

  const fullLine = createFullLine(width, character)

  expect(fullLine).toBe(expectedFullLine)
})
