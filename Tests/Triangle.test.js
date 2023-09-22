import { render } from '@testing-library/react'
import { test, expect } from 'vitest'
import Triangle from '.././src/Components/Triangle'

test('renders a triangle on the screen', async () => {
  const { getByText } = render(<Triangle />)
  const triangleItem = getByText('*\n**\n***\n****\n*****')
  expect(triangleItem).toBeInTheDocument()
})
