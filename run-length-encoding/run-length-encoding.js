
export const encode = (input) => 
  // use replace regex with group binding
  input.replace(/(.)\1+/g, (charGroup,char) => charGroup.length + char )
  

export const decode = (input) => input.replace(/(\d+)(.)/g, ( _, count, char) => char.repeat(count))
