// function hello(name,print) {
//     print(name);
// }


// hello("ismail",function(na) {
//     console.log(na);
// });

// function print(name){
//     console.log(name);
// }

// hello("ismail",print);

//  var me = {
//     name: 'Ismail Hasan',
//     age: 22,
//     email: 'hasan.m.nayem@gmail.com'
// }

// function printMySelf(person, callback) {
//     Object.values(person).forEach(function (a) {
//         console.log(a);
//     })

//     if (person.age >= 18) {
//         callback(person.email);
//     } else {
//         console.log('You are too little...');
//     }
// }

// printMySelf(me, function(email){
//     console.log('Email sent to ' + email);
// });


// function print(data, callback1, callback2) {
//     console.log('Original Data: ' + data);
//     console.log('Length: ' + data.length);
//     callback1(data);
//     callback2(data);
// }

// print('Twinkle Cats is Awesome Channel for Beginners',upper, lower);


// function upper(data){
//     var data = data.toUpperCase();
//     console.log('Uppercase: ' + data);
//     console.log('Length: ' + data.length);
// }
// function lower(data){
//     var data = data.toLowerCase();
//     console.log('lowercase: ' + data);
//     console.log('Length: ' + data.length);
// }

function print(data, callback1, callback2) {
    console.log('Original Data: ' + data);
    callback1(data);
    callback2(data);
}

print('Twinkle Cats is Awesome Channel for Beginners', function(data){
    var data = data.toUpperCase();
    console.log('Uppercase: ' + data);
    
}, function(data){
    var data = data.toLowerCase();
    console.log('Lowercase: ' + data);
    console.log('Length: ' + data.length);
    
});