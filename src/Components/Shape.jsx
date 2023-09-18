import PropTypes from 'prop-types'

const Shape = ({ type }) => {
  const createShape = (character, width, height) => {
    const shape = []

    for (let i = 1; i <= height; i++) {
      if (type === 'rectangle') {
        if (i === 1 || i === height) {
          shape.push(character.repeat(width))
        } else {
          shape.push('*' + ' '.repeat(width - 2) + '*')
        }
      } else if (type === 'triangle') {
        shape.push('*'.repeat(i))
      }
    }

    return shape
  }

  const renderShape = () => {
    const width = type === 'rectangle' ? 7 : 5
    const height = 5
    const shape = createShape('*', width, height)

    return shape.map((line, index) => (
      <div key={index}>
        <pre>{line}</pre>
      </div>
    ))
  }

  return <div>{renderShape()}</div>
}

Shape.propTypes = {
  type: PropTypes.oneOf(['rectangle, triangle']),
}

export default Shape
