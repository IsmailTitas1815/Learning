// var arr = [2,3,4,2,34,5,56,34,234,235,34,524];
// arr.sort();
// console.log(arr);

// arr.sort(function (a,b) {
//     return a-b;
// })


// console.log(arr);

// arr.sort(function (a,b) {
//     return b-a;
// })


// console.log(arr);



var people = [
    {name: "ismail", age:21},
    {name: "titas", age:23},
    {name: "topu", age:22},
];

people.sort(function (a,b) {
    // return a.age-b.age;
    if (a.name>b.name){
        return 1;
    }
    else if (b.name>a.name){
        return -1;
    }
    else{
        return 0;
    }
});
console.log(people);