import { createInnerLine, createFullLine } from '../Utils/shapeUtils'

const Rectangle = () => {
  const widthRec = 7
  const heightRec = 5
  const character = '*'

  let rectangle = ''

  // Create a full line on the top of the rectangle
  rectangle += createFullLine(widthRec, character) + '\n'

  for (let i = 1; i < heightRec - 1; i++) {
    // Internal lines with blank space
    rectangle += createInnerLine(widthRec, character) + '\n'
  }

  // Create a full line on the bottom of the rectangle
  rectangle += createFullLine(widthRec, character)

  return rectangle
}

export default Rectangle
