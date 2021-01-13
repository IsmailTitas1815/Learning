var arr = [1,2,3434,23,423,3534,4234,2345,32424,4,242,2,4];

// var new_arr = arr.filter(function (element) {
//    return element%2==1; 
// });

// console.log(new_arr);

function myfilter(arr,callback) {
    var newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]))
        {
            newArr.push(arr[i])
        }
    }

    return newArr;
}

var myArr = myfilter(arr,function(ele){
    return ele%2==0;
});

console.log(myArr);