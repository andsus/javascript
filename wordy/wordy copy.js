/*
//https://github.com/exercism/website-copy/blob/main/tracks/javascript/exercises/wordy/mentoring.md
const OPERATIONS = {
  'plus': (value, operand) => value + operand,
  'minus': (value, operand) => value - operand,
  'multiplied by': (value, operand) => value * operand,
  'divided by': (value, operand) => value / operand,

  // optional
  'cubed': (value) => value ** 2
}



class BinaryOperator {
  constructor(action) {
    this.action = action
  }

  call(context) {
    return this.action(context.value, context.next)
  }
}

const OPERATIONS = {
  plus: new BinaryOperator((value, next) => value() + next()),
  minus: new BinaryOperator((value, next) => value() - next()),
  //...
}

export const answer = () => {
  throw new Error('Remove this statement and implement this function');
};

*/

/*

export class WordProblem {
  token:Token;

  constructor(question:string) {
      this.token = new Token(question);
  }

  public answer():number {
      const token = this.token;
      var type = token.getToken();
      if (type != TokenType.WhatIs){
          throw new ArgumentError();
      }

      type = token.getToken();
      if (type != TokenType.Number){
          throw new ArgumentError();
      }
      var left = Number(token.token);

      while ((type = token.getToken()) != TokenType.Question){
          var f:(l:number, r:number) => number;

          switch (type){
              case TokenType.Plus:
                  f = (l, r) => l + r;
                  break;
              case TokenType.Minus:
                  f = (l, r) => l - r;
                  break;
              case TokenType.Multiply:
                  f = (l, r) => l * r;
                  break;
              case TokenType.Divide:
                  f = (l, r) => l / r;
                  break;
              default:
                  throw new ArgumentError();
          }
          type = token.getToken();
          if (type != TokenType.Number){
              throw new ArgumentError();
          }
          const right = Number(token.token);

          left = f(left, right);
      }

      return left;
  }
}

enum TokenType {
  Number,
  Plus,
  Minus,
  Multiply,
  Divide,
  WhatIs,
  Question,
}

class Token {
  text:string;
  token:string;
  patterns: [RegExp, TokenType][] = [
      [ /^-?[0-9]+/, TokenType.Number ],
      [ /^plus/, TokenType.Plus ],
      [ /^minus/, TokenType.Minus ],
      [ /^multiplied by/, TokenType.Multiply ],
      [ /^divided by/, TokenType.Divide ],
      [ /^What is/, TokenType.WhatIs ],
      [ /^\?/, TokenType.Question ],
  ];

  constructor(text:string) {
      this.text = text;
      this.token = '';
  }

  public getToken():TokenType {
      var text = this.text;
      var result = text.match(/^ +/);
      if (result){
          text = text.substr(result[0].length);
      }

      for (var pattern of this.patterns){
          result = text.match(pattern[0]);
          if (result){
              this.token = result[0];
              text = text.substr(result[0].length);
              this.text = text;
              return pattern[1];
          }
      }

      result = text.match(/^-?[0-9]+/);
      if (result){
          this.token = result[0];
          text = text.substr(result[0].length);
          this.text = text;
          return TokenType.Number;
      }
      throw new ArgumentError();
  }
}

export class ArgumentError extends Error {
}

*/
/*
const OPERATIONS = {
  'plus': (num1, num2) => Number(num1) + Number(num2),
  'minus': (num1, num2) => Number(num1) - Number(num2),
  'multiplied': (num1, num2) => Number(num1) * Number(num2),
  'divided': (num1, num2) => Number(num1) / Number(num2),
}

export const answer = (question) => {
  let questionArr = question.replace(/\?|What is|by\s/g, '').trim().split(' ');
  
  let answer = Number(questionArr[0]) || NaN;

  for (let i = 1; i < questionArr.length; i+=2) {
      if (!Number.isInteger(Number(questionArr[i]))) {
        // check if questionArr entry is valid operator. if not -> error
        if(!(questionArr[i] in OPERATIONS)) throw new Error('Unknown operation');
        // evaluate calculation
        answer = OPERATIONS[questionArr[i]](questionArr[i-1], questionArr[i+1]);
        // skip the next questionArr entry cause it has already been evaluated
        questionArr[i+1] = answer;
    } else if(Number.isInteger(Number(questionArr[i-1])) && Number.isInteger(Number(questionArr[i]))) throw new Error('Syntax error'); //check if two numbers in a row
  }

  // question contains unallowed words
  if(!Number.isInteger(answer)) throw new Error('Syntax error');

  return answer;
};
*/

// Match anything that starts with "What is"
// Followed by any operations (or nothing) + whitespace
// Then numbers and a question mark at the end
const isValidOperation = /^What is(plus|minus|multiplied by|divided by|\s|-?\d)*\?$/
// Match anything that starts with "What is"
// Followed by numbers (including negative)
// Then operators and a number (optional)
// Then a question mark at the end
const isValidSyntax = /^What is (-?\d+)(?: (plus|minus|multiplied by|divided by) (-?\d+))*\?$/;
// Match any negative sign 0-1x or just match any group of numbers
const numberPattern = /(-?\d+)/g;
// Match any of the operations text
const operationPattern = /(plus|minus|multiplied by|divided by)/g;

// An key-value object that assigns the mathematical function to each operation
const OPERATIONS = {
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
  "multiplied by": (a, b) => a * b,
  "divided by": (a, b) => a / b,
  "cubed": (a) => a ** 2
};

export const answer = (question) => {
  // If the input does not have the known operations, throw an error
  if (!isValidOperation.test(question)) throw new Error("Unknown operation")
  // If the input does not have the valid syntax, throw an error
  if (!isValidSyntax.test(question)) throw new Error("Syntax error")

  // Expand into an array and match each occurance of a number (will result in an object)
  // Create a new array and populate the results with the number equivalent of matched number
  const numbers = [...question.matchAll(numberPattern)].map(([num]) => Number(num))
  // Find matches for the operations (Returns regex iterator)
  // const operationNames = question.matchAll(operationPattern)

  const operationNames = [...question.matchAll(operationPattern)].map(([opName]) => OPERATIONS[opName])
/*
  // Start the total with the first matched value from the numbers array
  let total = numbers[0];
  // Start the index at 1
  let i = 1;
  // For each operation in the regex matched operations iterator,
  for (const operationName of operationNames) {
    // Get the function equivalent to the operation text that was matched
    // Perform calculations on the total and use the rest of the numbers in the array
    // total = OPERATIONS[operationName](total, numbers[i]);
    total = operationName(total, numbers[i])
    // Increment the index
    i++;
  }
  Return the calculated total
  return total
  */
  return numbers.reduce((acc, v, i) => operationNames[i - 1](acc,v))
  
};