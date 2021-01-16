var arr = [1,2,3434,23,423,3534,4234,2345,32424,4,242,2,4];


// var arr2 = arr.map(function(value){
//     return value+2;
// });

// console.log(arr2);

function mymap(arr,callback) {
    var newarr =[];

    for (let i = 0; i < arr.length; i++) {
        newarr.push(callback(arr[i]));
        
    }
    return newarr;
}


var data = mymap(arr,function(value) {
    return value*-1;
});

console.log(data);