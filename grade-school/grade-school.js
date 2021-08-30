export class GradeSchool {
/*
db = {
  3: [Kyle],
  4: [Christopher, Jennifer],
  6: [Kareem]
}
*/
  constructor() {
    this.db = {}
  }
  roster() {
    // Alternative to construct db json structure
    return JSON.parse(JSON.stringify(this.db))
    // return Object.keys(this.db)
    //   .reduce( (acc, g) => {
    //     acc[g] = [ ...this.db[g] ]
    //     return acc
    //     }, {})
  }

  add(name, grade) {
    this.removeDuplicate(name) 
    if (!this.db[grade])
      this.db[grade] = [name]
    else
      this.db[grade].push(name)
    this.db[grade].sort()  
  }

  grade(grade) {
    return [ ...(this.db[grade] || []) ]
  }


  // test(a student can't be in two different grades)
  removeDuplicate(name) {
    //for (let grade in this.db) {
    for (let grade of Object.values(this.db)) {
      //let names = this.db[grade]
      if (grade.includes(name)) {
        grade.pop(name)
        break
      }
      // if (names.indexOf(name) != -1) { 
      //   names.splice(names.indexOf(name), 1)
      //   break 
      // }
    }
  }
}

export default GradeSchool