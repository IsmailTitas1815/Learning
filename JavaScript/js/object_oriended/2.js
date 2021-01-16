function Person(name,email){
    this.name = name;
    this.email = email;
    this.print = function () {
        console.log(this.email);
    }
        
}

var p1 = new Person('titas','gmail');
var p2 = new Person('titasss','sddsgmail');
var p3 = new Person('titasdsfsdfsd','kkkkkkkkkkkkgmail');
console.log(p1.constructor);

// var p = [p1,p2,p3];

// p.forEach(function(people){
//     people.print();
// })
