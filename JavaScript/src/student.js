import Person from "./person.js"

class Student extends Person{
    constructor(name,email,id){
        super(name,email);
        this.id = id;
    };

    printt(){
        super.print();
        console.log(`ID: ${this.id}`);
    }
}

export default Student;
