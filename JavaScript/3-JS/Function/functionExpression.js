//Define a function expression
//store function name in variables 

const  sunstone  = function(){
    console.log("Welcome to 100% placement community.");
}
sunstone(); //Calling function


//single parameter and argument
const sunstone1 = function (batch){
    console.log(`Welcome to 100% placed ${batch} batch`)
}
sunstone1 (2024);

// with two parameters and arguments
const sunstone2 = function (course, batch){
    console.log(`Welcome to 100% placed ${course}-${batch} batch`)
}
sunstone2("BCA", 2024);

//return type function
const totalStudent = function (BCA, BTECH, MBA, MCA){
    return BCA + BTECH + MBA + MCA 
}
console.log(totalStudent(120, 267, 150, 45));