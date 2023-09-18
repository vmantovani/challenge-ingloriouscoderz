function drawTriangle(heightTri) {
  const triangle = []

  for (let i = 1; i <= heightTri; i++) {
    triangle.push('*'.repeat(i))
  }

  return triangle.map((line, index) => <div key={index}>{line}</div>)
}

const Triangle = () => {
  const heightTri = 5

  return <div>{drawTriangle(heightTri)}</div>
}

export default Triangle
