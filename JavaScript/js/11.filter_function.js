var arr = [1,2,3434,23,423,3534,4234,2345,32424,4,242,2,4];

// var new_arr = arr.filter(function (element) {
//    return element%2==1; 
// });

// console.log(new_arr);

function newF(arr,callback){
    var newarr = [];

    arr.forEach(element => {
        if(callback(element)){
            newarr.push(element);
        }
    });

    return newarr;

}


var my = newF(arr,function (ele) {
    return ele%2==0;
});

console.log(my);



