export function createInnerLine(width, character) {
  if (width < 3) return character.repeat(width)
  return (
    character + String.fromCharCode(160).repeat((width - 2) * 2) + character
  )
}

export function createFullLine(width, character) {
  return character.repeat(width)
}
