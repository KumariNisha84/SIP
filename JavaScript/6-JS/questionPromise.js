
// function login (email, password){
//     return new Promise((res, rej) =>{
//         console.log("We are verifying your credentials!!!!!")
//         setTimeout(()=>{

//         if(email == "test@gmail.com" && password == "123"){
//             res({
//                 id: 1,
//                 name: "Nisha"
//             });
//         }else{
//             rej ("Invalid Credentials");
//         }
//          }, 2000)
//     })
// }
// login("test@gmail.com", "123")
// .then((userData)=>{
//     console.log(userData);
//     // console.log(userData.name);
// })
// .catch((err) =>{
//     console.log(err);
// });

//question - 1

// let foodDelievery = new Promise((res, rej)=> {
//     console.log("Delievery takes 2 seconds")
//     setTimeout(() => {
//         const available = true;
//         if(available){
//             res("Pizza delivered")
//         }else{
//             rej("Order cancelled");
//         }
//     },2000);
// })
// foodDelievery
// .then((res)=>{
//     console.log(res);
// })
// .catch((rej) =>{
//     console.log(rej);
// });


//question - 2
// function processPayment(amount) {
//     return new Promise((res, rej) =>{
        
//         if(amount > 0){
//             res("Payment succeeds");
//         }else{
//             rej("Payment Declined")
//         }
//     })
// }
// processPayment(1000)
// .then((res) =>{
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });


//question -3
function processPayment(balance){
    return new Promise((resolve, reject) => {
        if(balance >= 500){
            resolve("Payment successful");
        }else{
            reject("Insufficient balance");
        }
    })
}
processPayment(100)
.then((res) => {
    console.log(res);
})
.catch((err) =>{
    console.log(err);
});