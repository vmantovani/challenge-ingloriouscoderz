import { createFullLine } from '../Utils/shapeUtils'

const Triangle = () => {
  const heightTri = 5
  const character = '*'

  const triangle = []

  for (let i = 1; i <= heightTri; i++) {
    triangle.push(createFullLine(i, character))
  }

  return triangle.map((line, index) => <div key={index}>{line}</div>)
}

export default Triangle
