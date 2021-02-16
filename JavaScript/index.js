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


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        // console.log(this.responseText);
        var data = this.responseText;
        jsonData(data);
    }
};

xmlhttp.open('GET',"data.json",true);
xmlhttp.send();

function jsonData(data){
    // console.log(data);
    var js_obj = JSON.parse(data);
    // console.log(js_obj);
    for (i in js_obj.person){
        var person = js_obj.person;
        for (j in person[i])
        {
            console.log(person[i][j]);
        }
    }
};
