// var arr = [1,2,3,4,5,6,7,8,9,10];

// arr.forEach(function(a){
//     console.log(a);
// })


function caller(name) {
    return function (name) {
        return "hello mr. "+name;
    }
}

var x = caller('titas')("ismail");
console.log(x);