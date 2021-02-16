//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1
    this.side2 = side2
    this.side3 = side3
    this.isValidTriangle = this.isValidTriangle()
  }
  isValidTriangle() {
    return !this.isAllZero() && this.checkInequality()
  }
  checkInequality() {
    return Math.max(this.side1, this.side2, this.side3) * 2 < this.side1 + this.side2 + this.side3
  }
  isAllZero() {
    return (this.side1 + this.side2 + this.side3 == 0)
  }
  isEquilateral() {
    return  this.isValidTriangle
      && this.side1 == this.side2 
      && this.side2 == this.side3 
  }

  isIsosceles() {
    return this.isValidTriangle
    && (this.side1 == this.side2 
    || this.side2 == this.side3  
    || this.side1 == this.side3) 
  }

  isScalene() {
    return this.isValidTriangle && !this.isEquilateral() && !this.isIsosceles() //this.side1 == this.side3
  }
}
