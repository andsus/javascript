export class Robot {
    #name  = RobotNameGenerator.makeName() 
    constructor() {  }
  
    get name() {
      return this.#name
    }
  
    reset() {
      this.#name = RobotNameGenerator.makeName()
    }
  
    static releaseNames() {
      RobotNameGenerator.clearUsedNames()
    }
  }
  
  class RobotNameGenerator {
  
    static randLetter = () => String.fromCharCode(Math.round(26 * Math.random() + 65))
    
    static randHundred = () => Math.round(999 * Math.random()).toString()
        
    static usedNames = new Set()
    static generateSerialName() {
      return this.randLetter() + this.randLetter() + this.randHundred()
    } 
  
    static makeName() {
      
      let newName = this.generateSerialName()
      
      while (this.usedNames.has(newName)) { 
        newName = this.generateSerialName() 
      }
      this.usedNames.add(newName)
      return newName
    }
    static clearUsedNames() {
      this.usedNames.clear()
    }
  }
  
