//JS behaves Synchronously

// console.log("Morning");
// console.log("Afternoon");
// console.log("Evening");


// function greet(){
//     console.log("Hello");
// }
// greet();

// function greet1(){
//     console.log("Hello everyone");
// }
// greet1();

// console.log("Good night")


//JS behave A
// synchronously
console.log("Morning");
console.log("Afternoon");
console.log("Evening");

// setTimeout(()=>{
//     console.log("Khushboo chocolate kam khao")
// }, 2000);

let count = 8
let time = setInterval(() =>{
    console.log("Chutti hone wali hai");
    console.log(count);
    count--;
    if(count < 1){
        clearInterval(time)
        setTimeout(() =>{
            console.log("Chutti ho gyi");
        },3000)
    }
}, 1000)

// function greet(){
//     console.log("Hello");
// }
// greet();

// function greet1(){
//     console.log("Hello everyone");
// }
// greet1();
// console.log("Good night")






