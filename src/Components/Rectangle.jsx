function createInnerLine(widthRec) {
  return <pre>{'*' + ' '.repeat(widthRec - 2) + '*'}</pre>
}

function createFullLine(widthRec) {
  return '*'.repeat(widthRec)
}

function drawRectangle(widthRec, heightRec) {
  const rectangle = []

  rectangle.push(createFullLine(widthRec))

  for (let i = 0; i < heightRec - 2; i++) {
    rectangle.push(createInnerLine(widthRec))
  }

  rectangle.push(createFullLine(widthRec))

  return rectangle.map((line, index) => <div key={index}>{line}</div>)
}

const Rectangle = () => {
  const widthRec = 7
  const heightRec = 5

  return <div>{drawRectangle(widthRec, heightRec)}</div>
}

export default Rectangle
