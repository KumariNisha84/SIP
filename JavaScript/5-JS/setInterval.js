//setInterval() - executes multiple times after a fixed delay
//Syntax - setTime(callback, delay)

// setInterval(function() {
//     console.log("Hiee")
// }, 1000);


//Countdown Timer (digital clock)
// let count = 5;
// const timer = setInterval(() =>{
//     console.log(count);
//     count--;
//     if(count<0){
//         clearInterval(timer); //used to stop repeates task
//     }
// }, 1000);


//Example- 2 ( Increasing seconds timer)
// let count = 0
// const timer = setInterval(() =>{
//     let now = new Date();
//     console.log(now.toLocaleTimeString());
//     count++;
//     if(count >=10){
//         clearInterval(timer);
//     }
// },1000);


//Table - 2
let count = 1
const timer = setInterval(()=>{
    
    console.log(2 * count);
    count++;
    if(count >=11){
        clearInterval(timer);
    }
}, 1000);
