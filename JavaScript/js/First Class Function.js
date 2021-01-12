function sayName(name) {
    return "Hello, " + name;
}
// 1
// var hello = sayName;
// var anotherHello = hello;

// var arr = [1,2,3];
// console.log(arr);
// arr.push(anotherHello);
// console.log(arr);

// 2
// var person = {
//     name : "ismail",
//     okname : sayName,
//     hi: function() {
//         console.log("HI");
//     }
// }

// console.log(person);

// 3

// var num = 10 + function () {return 10**3}();
// console.log(num);

// 4

// function newOne(name, callback) {
//     var newName = "Mr. " + name;
//     var call = callback(newName);
//     return call;
// }


// var result = newOne("Ismail",sayName);
// console.log(result);

// 5

// function base(b) {

//     return function(p) {
//         let result = 1;
//         for (var i = 0; i < p; i++) {
            
//             result *=b;
            
//         }
//      return result;
//     }
    
// }

// var a = base(4)(5);
// console.log(a);