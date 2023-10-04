export function createInnerLine(width, character) {
  if (width < 3) return character.repeat(width)
  return character + ' '.repeat(width - 2) + character
}

export function createFullLine(width, character) {
  return character.repeat(width)
}

export function createInnerLines(height, width, character) {
  const innerLine = createInnerLine(width, character)
  return createInnerLine(height - 2, innerLine + '\n')
}
