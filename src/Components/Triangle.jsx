import { createFullLine } from '../Utils/shapeUtils'
const Triangle = () => {
  const heightTri = 5
  const character = '*'

  let triangle = ''

  for (let i = 1; i <= heightTri; i++) {
    const line = createFullLine(i, character)
    triangle += line + '\n'
  }

  return triangle
}

export default Triangle
