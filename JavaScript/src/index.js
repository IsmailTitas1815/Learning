// import Student from './student.js';

// let st1 = new Student('ismail','gmail','1815');
// st1.printt();


// console.log("first");

// setTimeout(function(){
//     console.log("second");
// },2000)
// console.log("third");
// setTimeout(function(){
//     console.log("fourth");
// },1000)


// let firstPromise = new Promise((resolve,reject)=>
// {
//     let name = 'ismail';

//     setTimeout(()=> resolve(name));
// },5000)

// firstPromise
//     .then((name)=>
//     {
//         console.log("we are "+name);
//     })

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((body)=>{
        
//         const lis = body.map(data=>{
//             let li = document.createElement('li');
//             let text = `Name: ${data.name}, Email: ${data.email}`
//             let textNode = document.createTextNode(text);
//             li.appendChild(textNode)

//             return li;
//         })

//         lis.forEach((li) => {
//              document.getElementById('mylist').appendChild(li)

//         });
        
//     })
//     .catch((err) => console.log(err))


let arr = [1,2,3,4,5,6,7];

let a = arr.map(function(bal){
    return bal*bal;
});

console.log(a);