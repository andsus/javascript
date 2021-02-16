

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
        r.push( result[row-2][col-1] + result[row-2][col] )
      }
    }
    result.push(r)
  }
  return result
}
