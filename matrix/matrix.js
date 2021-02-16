const chToNumber = (ch) => Number(ch)
const lineParse = (line) => line.split(' ').map(chToNumber)

export class Matrix {
  
  constructor(input) { 
    this.matrix = input.split('\n').map( lineParse )
    this.transpose = this.matrix[0].map( (_,idx) => 
        this.matrix.map(row => row[idx]))  // row[idx] returns the column idx of all rows
  }

  get rows() {
    return this.matrix
  }

  get columns() {
    return this.transpose
  }
}
