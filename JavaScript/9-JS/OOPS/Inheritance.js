class Person{
    constructor(name){
        this.name = name;
        
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}

//Creating a child
class Student extends Person{
    constructor(name,course){
        super(name); // super is used to access constructor from parent class 
        
        this.course = course;
    }
    study(){
        console.log(`${this.name}  studies ${this.course}`);
    }
}

//Object Creation
const student1  = new Student ("Khushboo", "MERN");
console.log(student1);

// Child object has access to own and all methods from parents class
student1.greet();
student1.study();