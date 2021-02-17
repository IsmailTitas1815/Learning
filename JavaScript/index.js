// import something from './component.js'; 

// let obj1 = new something();
// console.log(obj1.hello());

// console.log("before error");
// try{
//     throw "too cheap";
// }catch(err){
//     console.log(err);
// }finally{

//     console.log("I'm inside finally");
// }

//regular expression
// let re;
// re = /H*llo/;

// let str  = "Hello";

// let fi;
// fi = re.exec(str);
// console.log(fi);


document.getElementById("get_data").addEventListener('click',loadData);

function loadData(){

    let xhr = new XMLHttpRequest();


    xhr.open('GET','data.json',true);


    xhr.onload = function (){
        if(this.status === 200){
            console.log(this.responseText);
            document.getElementById("element").innerHTML=`<h4>${this.responseText}</h4>`
        }
    }

    xhr.send();
    console.log(xhr);


}