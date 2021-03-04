class Titas{

    constructor(name, email) {
        this.name = name;
        this.email = email;


    }
}


var person = {
    name: "ismail",
    print: function(){
        console.log(this);
    }
}

var myprint = person.print;
console.log(myprint);
myprint();


class Topu extends Titas{
    constructor(name,age,email){
        super(name, email);
        this.age = age;
    }

}
let obj = new Topu(20,"titas","something.email");
console.log(obj);