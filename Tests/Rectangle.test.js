import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import Rectangle from '../src/Components/Rectangle'

describe(Rectangle, () => {
  test('renders a rectangle on the screen', async () => {
    render(Rectangle)

    const rectangleItem = screen.getByText((content) => {
      const cleanedContent = content.replace(/\s+/g, '')
      const expectedText =
        '*******\n*          *\n*          *\n*          *\n*******'.replace(
          /\s+/g,
          '',
        )

      return cleanedContent === expectedText
    })

    expect(rectangleItem).toBeInTheDocument()
  })
})
