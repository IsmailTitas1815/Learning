var arr = [1,2,3434,23,423,3534,4234,2345,32424,4,242,2,4];

// arr.forEach(function(element,index,ab){
//     console.log(element,index,ab);
// })


function loop(arr, callback) {
    for (var i=0; i<arr.length; i++) {
       callback(arr[i], i);
    }
}

loop(arr, function(element, i) {
    console.log('Element is ' + element + ' index = ' + i);
});