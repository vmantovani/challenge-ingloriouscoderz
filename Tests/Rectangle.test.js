import { describe, test, expect } from 'vitest'
import Rectangle from '../src/Components/Rectangle'

describe('Rectangle', () => {
  test('should create a rectangle pattern made of asterisks', () => {
    const width = 7
    const height = 5
    const result = Rectangle(width, height)

    const expectedPattern = '*******\n*     *\n*     *\n*     *\n*******'

    expect(result).toBe(expectedPattern)
  })
})
