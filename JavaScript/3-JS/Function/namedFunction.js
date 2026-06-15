//Define a function

function sunstone (){
    console.log("Welcome to 100% placement community.");
}

sunstone(); //Calling function


//single parameter and argument
function sunstone1(batch){
    console.log(`Welcome to 100% placed ${batch} batch`)
}
sunstone1 (2024);

//with two parameters and arguments
 function sunstone2(course, batch){
    console.log(`Welcome to 100% placed ${course}-${batch} batch`)
}
sunstone2("BCA", 2024);

//return type function
function totalStudent(BCA, BTECH, MBA, MCA){
    return BCA + BTECH + MBA + MCA 
}
console.log(totalStudent(120, 267, 150, 45));