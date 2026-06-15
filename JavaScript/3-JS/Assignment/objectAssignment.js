//question -1(Create and Access Object properties)

let student = {
    name: "Nisha",
    age: 16,
    class: "BCA",
    city:"Indore"
}
console.log(student.name, student.age);


//question - 2 (Update Object Properties)
student.city = "Delhi"
student.age = 20

console.log(student);

//question - 3 (Add and Delete Propertis)
let app = {
    name:"Ahana",
    city:"Delhi",
    ID: 11809,
    temporaryToken:84
}

app.phone = 8789856235
console.log(app);

//delete
delete app.temporaryToken;
console.log(app);

//question - 4 (Dynamic Property Access Problem)
let demo = {
    user: "Khushboo",
    email: "khushboo43@gmail.com",
    age:18,
    getValue: function (){
        console.log(`My name is ${this.user} and this is my mail-id ${this.email}`);
    }
}
console.log(demo.getValue());



