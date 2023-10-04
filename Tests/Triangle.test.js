import { test, expect, describe } from 'vitest'
import Triangle from '.././src/Components/Triangle'
describe('Triangle', () => {
  test('should create a triangle pattern of the given height', () => {
    const height = 5
    const result = Triangle(height)

    const expectedPattern = '*\n**\n***\n****\n*****\n'

    expect(result).toBe(expectedPattern)
  })
})
