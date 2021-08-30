const RANDOM_KEY_LENGTH = 200
const A_CHAR_CODE = 'a'.charCodeAt(0)
const ALPHABET_LENGTH = 26

const randomChar = () => String.fromCharCode(
  Math.floor(Math.random() * ALPHABET_LENGTH) + A_CHAR_CODE
)

const makeRandomKey = () => Array.from(Array(RANDOM_KEY_LENGTH), randomChar).join('')

export class Cipher {
  constructor(key) {
    this.key =  key || makeRandomKey()
  }

  encode = (input) => this.transpose(1, input)

  decode = (input) => this.transpose(-1, input)

  shiftBy = (index) => this.key.charCodeAt(index % this.key.length) - A_CHAR_CODE

  shiftCharCode = (charCode, direction, index) => {
    const shiftValue = direction * this.shiftBy(index)
    const shiftCharCode = charCode - A_CHAR_CODE + shiftValue + ALPHABET_LENGTH 
    return (shiftCharCode % ALPHABET_LENGTH) + A_CHAR_CODE
  }

  transpose = (direction, input) =>
    [...input]
      .map((letter, i) => 
          String.fromCharCode(
            this.shiftCharCode(letter.charCodeAt(0), direction, i)
          )
        )
      .join('')
    


}
