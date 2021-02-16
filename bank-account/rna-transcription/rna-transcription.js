
const dnaMap = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
}

export const toRna = (dna) => {
  // use split('') or spread operator 
  return [...dna].map( ch => dnaMap[ch] ).join("")
};
