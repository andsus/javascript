// Setup Regex Patterns

// Valid operations
const isValidOperation = /^What is(plus|minus|multiplied by|divided by|\s|-?\d)*\?$/

// Valid syntax 
const isValidSyntax = /^What is (-?\d+)(?: (plus|minus|multiplied by|divided by|cubed) (-?\d+))*\?$/;

const digitPattern = /(-?\d+)/g;

const operationPattern = /(plus|minus|multiplied by|divided by)/g;

const OPERATIONS = {
  'plus': (a, b) => a + b,
  'minus': (a, b) => a - b,
  'multiplied by': (a, b) => a * b,
  'divided by': (a, b) => a / b,
}

const charToNumber = ([ch]) => Number(ch)

export const answer = (question) => {

  if (!isValidOperation.test(question)) throw new Error("Unknown operation")

  if (!isValidSyntax.test(question)) throw new Error("Syntax error")

  // Extract digits
  const digits = [...question.matchAll(digitPattern)].map(charToNumber)

  // Extract operations text
  const operations = [...question.matchAll(operationPattern)].map(([opName]) => OPERATIONS[opName])

  return digits.reduce((acc, v, i) => operations[i - 1](acc, v))
}