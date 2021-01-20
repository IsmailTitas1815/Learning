function printMe(email) {
    this.email = email;
    console.log("hello, " + this.name,this.email);
}


var obj1 = {
    name: 'Ismail',
    age : 22
}
var obj2 = {
    name: 'Titas',
    age : 23
}

// var binded1 = printMe.bind(obj1);
// binded1('gmail');
// var binded2 = printMe.bind(obj2);
// binded2();
// printMe.call(obj1,'gmail')
printMe.apply(obj1,['gmail.com'])


