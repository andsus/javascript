/*  
  1 giga: 1000000000000 (1 follow by 12 zeros). 
  Short hand exponential math notation 1 * 10^12 : 10e11
*/  
const GIGA_MSEC = 10e11 
// convert startDate to number: Number(startDate) or use unary operator +startDate
export const gigasecond = (startDate) => new Date(+startDate + GIGA_MSEC)
