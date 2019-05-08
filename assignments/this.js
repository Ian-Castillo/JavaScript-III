/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - When you're inside the global scope, "this" will be the cosole object.
* 2. Implicit Binding - What is ever left of the object, the thing before the function is "this".
* 3. New Binding - whatever is created and returned by a constructor function, that is "this".
* 4. Explicit Binding - "this" is defined when the apply or call method is used
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function hello(name) {
    return name;
}
hello("Newman");
console.log (this);

// Principle 2

// code example for Implicit Binding

const wizard = {
    name: "Gandolf",
    age: 1000,
    beard: "white",
    mission: function(name) {
        return '${this.name} is going to shave ${this.beard}';
    }
}

console.log(wizard.mission())

// Principle 3

// code example for New Binding

function character(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const drEvil = new character('jamesBond');
  const jamesBond = new character('drEvil');
  
  drEvil.speak();
  jamesBond.speak();

// Principle 4

// code example for Explicit Binding

const humanName = {
    "name":"Ian", 
    "nickname": "Michael"
  }
  function introduction(javascript, html, css) {
    return `Hello my name is ${this.nickname} and I like to programming ${javascript}, ${html} and ${css}`
  }

console.log(introduction.call(humanName, "javascript", "html", "css"))
