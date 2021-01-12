// function outer() {
//     function inner() {
//         console.log("This is inner function");
//     }
//     inner();
//     console.log("This is outer function");
// }

// outer();




function random(a,b) {
    function sum() {
        return a+b;
    }

    function sub() {
        return a-b;
    }

    function mul() {
        return a*b;
    }

    function div() {
        return a/b;
    }

    return sum()+sub()+mul()+div();
}

console.log(random(5,6));