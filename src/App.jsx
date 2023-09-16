import React from 'react'

function Rectangle() {
  const widthRec = 7
  const heightRec = 5
  const rectangle = []

  // Create the line inside the rectangle with blank spaces
  const createInnerLine = () => {
    return <pre>{'*' + ' '.repeat(widthRec - 2) + '*'}</pre>
  }

  // Create the full line (first and last lines)
  const createFullLine = () => {
    rectangle.push('*'.repeat(widthRec))
  }

  const drawRectangle = () => {
    // First line
    createFullLine()

    for (let i = 0; i < heightRec - 2; i++) {
      rectangle.push(createInnerLine())
    }

    // Last line
    createFullLine()

    return rectangle.map((line, index) => <div key={index}>{line}</div>)
  }

  return <div>{drawRectangle()}</div>
}

const App = () => {
  return (
    <div>
      <div>{Rectangle()}</div>
    </div>
  )
}

export default App
