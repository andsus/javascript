
const atoz = "abcdefghijklmnopqrstuvwxyz"
export const isPangram = (input) => {
  let inputLowcase = input.toLowerCase()
  return [...atoz].every( chr => inputLowcase.includes(chr))
};
