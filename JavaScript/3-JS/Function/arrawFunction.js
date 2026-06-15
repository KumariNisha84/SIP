const sunstone = () => {
    console.log("Welcome to 100% placement community.");
}
sunstone();

//single parameter and argument
const sunstone1 = (batch) => {
    console.log(`Welcome to 100% placed ${batch} batch`)
}
sunstone1 (2024);

// with two parameters and arguments
const sunstone2 = (course, batch) => {
    console.log(`Welcome to 100% placed ${course}-${batch} batch`)
}
sunstone2("BCA", 2024);

//return type function
// const totalStudent = (BCA, BTECH, MBA, MCA) => {
//     return BCA + BTECH + MBA + MCA 
// }

//or
const totalStudent= (BCA, BTECH, MBA, MCA) => BCA + BTECH + MBA + MCA
console.log(totalStudent(120, 267, 150, 45));