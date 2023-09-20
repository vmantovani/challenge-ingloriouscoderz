export function createInnerLine(width, character) {
  return <pre>{character + ' '.repeat(width - 2) + character}</pre>
}

export function createFullLine(width, character) {
  return character.repeat(width)
}
