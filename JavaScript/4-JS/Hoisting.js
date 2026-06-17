//Hoisting - Function calling before declaration (IMPORTANT - only declarartion are hoisted)

//Function hoisting
greet();
function greet () {
    console.log("Hello")
}

//Variable(var)
console.log(name);
var name= "Nisha"; //output: undefined (declaration is hoisted but the value assignment is not)

 //(let  & const will show REFRENCE ERROR)
// console.log(age);
// let name= 18;