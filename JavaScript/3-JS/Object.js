// let student = {
//     name : "Nisha",
//     age : 16,
//     cource: "BCA",
//     sem : 5,
//     skills: "Boo se baat krna"
// //     greet : function(){
// //     console.log(`Hello ! My name is ${this.name} and my age is ${this.age}`);
// // }
// }


// //Print Object
// console.log(student);

// //get value
// console.log(student.name); //Accessing value using key
// console.log(student["age"]);

// //update value
// student.skills = "Frontend";
// console.log(student.skills);
// // console.log(student);

// //Add new key
// student.city = "Indore";
// console.log(student);

// //Add Function
// student.greet = function(){
//     console.log("Hello");
// }
// console.log(student.greet());

// //second example
// let student2 = {
//     name : "Khsuboo",
//     age : 12,
//     cource: "BCA",
//     sem : 5,
//     skills: "sirf sona",
//     greet : function(){
//     console.log(`Hello ! My name is ${this.name} and my age is ${this.age}`);
// }
// }
// console.log(student2.greet())


let std = {
    name:"Nisha"
}
console.log(std);


//Add value
std.age = 10;
console.log(std);

std.course = "BCA"
console.log(std);

//Add function
std.greet = function (){
    console.log(`Welcome Back! My name is ${this.name} and age is ${this.age}`);
}
console.log(std.greet()); //calling function
// console.log(std);







