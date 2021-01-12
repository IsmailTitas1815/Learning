// function host() {
//     console.log('I am host function..');
//     return function() {
//         console.log('I am Chiled');   
//     }
// }

// var a = host();
// a();

function greeting(msg) {
    return function (name) {
        console.log(msg + ' ' + name);
    }

}

var good = greeting('Good Morning')('Twinkle Cats');
var hello = greeting('Hello')('Twinkle Cats');

// hello('Twinkle Cats');
// good('Twinkle Cats');