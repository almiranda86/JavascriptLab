class Person {
    constructor(name = "pessoa sem nome") {
      this.name = name;
    }
  
    toString() {
      return JSON.stringify(this);
    }
  }
  
  module.exports = Person;