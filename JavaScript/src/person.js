class Person {
    constructor(name,email){
        this.name = name;
        this.email = email;

    };

    print(){
        console.log(`name: ${this.name}, email: ${this.email}`);
    };
}


export default Person;