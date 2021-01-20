function Person(name,email){
    this.name = name;
    this.email = email;
    
}

Person.prototype.hello = function () {
    console.log("Hello: " + this.name);
}
  
Person.prototype.age = 22;


var p1 = new Person('titas','gmail');
var p2 = new Person('titas topu','ok gmail');

// console.log(p1.constructor);

console.log(p1);
console.log(p2);