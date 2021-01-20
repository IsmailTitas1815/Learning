function Person() {
    this.name = 'Ismail Titas';
}

function Student() {
    Person.call(this);
    this.email = 'IsmailTitas@gmail.com';
}

var studentObj = new Student();

var name = studentObj.name;

console.log(name);