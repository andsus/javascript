
// (1,5), (2,5), (3,5), (4,5), (5,5) 
const range = (size, startAt = 1) => [...Array(size).keys()].map(i => [i + startAt, size])
const pascal = (c,r) => {
  if (c === 1 || r===c) return 1
  else return pascal(c - 1, r - 1)  + pascal(c,r-1)
}

//https://codereview.stackexchange.com/questions/191295/pascal-triangle-implementation-in-javascript

//https://dev.to/alisabaj/solving-pascal-s-triangle-in-javascript-4e59
export const rows = (numRows) => {
  if (numRows === 0) return []
  if (numRows === 1) return [[1]]
  let result = []
  for (let row = 1; row <= numRows; row++) {
    let r = [] // each row
    for (let col = 0; col < row; col++) {
      if (col === 0 || col === row - 1 ) {
        r.push(1) // outer edge of triangle
      } else {  
        // prev 2 row,prev col + prev 2 row, current col
        // 2 because outer loop start at 1, but result array is 0-indexed 
        r.push( (result[row-2][col-1] + result[row-2][col]) )
      }
    }
    result.push(r)
  }
  return result
}
