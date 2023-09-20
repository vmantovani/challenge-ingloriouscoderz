import { createInnerLine, createFullLine } from '../Utils/shapeUtils'

const Rectangle = () => {
  const widthRec = 7
  const heightRec = 5
  const character = '*'

  const rectangle = []

  rectangle.push(createFullLine(widthRec, character))

  for (let i = 1; i < heightRec - 1; i++) {
    rectangle.push(createInnerLine(widthRec, character))
  }

  rectangle.push(createFullLine(widthRec, character))

  return rectangle.map((line, index) => <div key={index}>{line}</div>)
}

export default Rectangle
