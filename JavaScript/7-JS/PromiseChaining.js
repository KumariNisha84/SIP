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
//     // console.log(userData);
//     return userData; // if we use return then we have to print it in another.then()
// })
// .then((data)=>{
//     console.log(data);
//     return data.name
//     // return data.id
// })
// .then((info) =>{
//     console.log(info);
// })
// .catch((err) =>{
//     console.log(err);
// });


//Example:

// function loginUser(profile){
//     console.log("Aap login ho rahe...");
   
//     setTimeout(()=>{
//         console.log("Aap login ho chuke")
//     },1000)
//     profile();
// }

// function getProfile(order){
//     console.log("Aapki profile fetch ho rhi h.⏱");
    
//     setTimeout(()=>{
//         console.log("Aapki profile fetch ho gyi")
//     },1000)
//     order();
// }

// function getOrder(pay){
//     console.log("Aapka order ready ho rha");
    
//     setTimeout(()=>{
//         console.log("Aapka order ready ho chuka h🍕🍔🥤")
//     },1000)
//     pay();
// }
// function payment(){
//     console.log("Payment process ho rhi h");
    
//     setTimeout(()=>{
//         console.log("Payment successful✅")
//     },1000)
//     ;
// }
// //callback hell
// loginUser(()=>{
//     getProfile(()=>{
//         getOrder(()=>{
//             payment();
//         })
//     })
// });


//Problem Handled using Promise
function loginUser(){
    return new Promise((res, rej) =>{
console.log("Aap login ho rahe...");
   
    setTimeout(()=>{
        console.log("Aap login ho chuke")
        res();
    },2000)
  
    })
    
}

function getProfile(){
    return new Promise((res, rej)=>{
console.log("Aapki profile fetch ho rhi h.⏱");
    
    setTimeout(()=>{
        console.log("Aapki profile fetch ho gyi")
        res();
    },2000)
    
    })
    
}

function getOrder(){
    return new Promise((res, rej)=>{
console.log("Aapka order ready ho rha");
    
    setTimeout(()=>{
        console.log("Aapka order ready ho chuka h🍕🍔🥤")
        res();
    },1000)
   
    })
    
}
function payment(){
    return new Promise((res, rej)=>{
console.log("Payment process ho rhi h");
    
    setTimeout(()=>{
        console.log("Payment successful✅")
        res();
    },1000)
    
    })   
}

loginUser()
.then(getProfile)
.then(getOrder)
.then(payment)
.catch((err) =>{
    console.log("Something went wrong");
});