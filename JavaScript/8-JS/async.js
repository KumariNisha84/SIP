// function greet(){
//     return new Promise((res, rej)=>{
//         let delivered = true;
//         if(delivered){
//             res("It is delivered");
//         }else{
//             rej("Not delivered");
//         }
//     })
// }

// greet()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.group(err);
// });


// async await
// async function print() {
//     try{
//         const msg = await greet();
//         console.log(msg);
//         console.log("Hello");
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// print();




//Example-2
// function connection (){
//  return new Promise((res, rej) =>{
//     console.log("Connect ho raha hai db se");
//     // console.log("Khushboo !! Thora wait kr..")
//     setTimeout(()=>{
//         console.log("Connect ho gaya ✔");
//         res("Yayyyy");
//     }, 2000);
// });
// }
// connection
// .then(()=>{
//     console.log("Promise fullfilled ho gaya");
// })
// .catch(() => {
//     console.log("Promise reject ho gyi...");
// });

// async function result(){
//    const res = await connection()
//     console.log(res);
//    }
// result();



//question - 2 (process payment)

// function processPayment(amount) {
//     return new Promise((res, rej) =>{
        
//         if(amount > 0){
//             res("Payment succeeds");
//         }else{
//             rej("Payment Declined")
//         }
//     })
// }
// // processPayment(1000)
// // .then((res) =>{
// //     console.log(res);
// // })
// // .catch((err) => {
// //     console.log(err);
// // });

// async function ans(){
//     try{
//         const msg1 = await processPayment();
//         console.log(msg1);

//     }
//     catch(err){
//         console.log(err);
//     }
// }
// ans();

//question-3 (login - email, password)
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
//          },2000)
//     })
// }

// async function ans1 (){
//     try{
//         const msg2 = await login("test@gmail.com", "123");
//         console.log(msg2);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// ans1();


//question -4 

// function loginUser(){
//     return new Promise((res, rej) =>{
// console.log("Aap login ho rahe...");
   
//     setTimeout(()=>{
//         console.log("Aap login ho chuke")
//         res();
//     },1000)
  
//     })
    
// }
// function getProfile(){
//     return new Promise((res, rej)=>{
// console.log("Aapki profile fetch ho rhi h.⏱");
    
//     setTimeout(()=>{
//         console.log("Aapki profile fetch ho gyi")
//         res();
//     },2000)
//     })
// }

// function getOrder(){
//     return new Promise((res, rej)=>{
// console.log("Aapka order ready ho rha");
    
//     setTimeout(()=>{
//         console.log("Aapka order ready ho chuka h🍕🍔🥤")
//         res();
//     },3000)
   
//     })
    
// }
// function payment(){
//     return new Promise((res, rej)=>{
// console.log("Payment process ho rhi h");
    
//     setTimeout(()=>{
//         console.log("Payment successful✅")
//         res();
//     },4000)
//     })   
// }

// // loginUser()
// // .then(getProfile)
// // .then(getOrder)
// // .then(payment)
// // .catch((err) =>{
// //     console.log("Something went wrong");
// // });

// async function delivery(){
//     try{
//        const result1 = await loginUser();
//        const result2 = await getProfile();
//        const result3 =await getOrder();
//        const result4 = await payment();
        
//         }
//         catch(err){
//             console.log(err);
//         }
// }
// delivery();


//question - Movie Ticket Booking Problem 

function selectMovie(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Movie Selected");
            res();
        },1000)
    })
}


function selectSeat(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log("Seats Booked");
        res();
        },1000)
    })
}

function payment(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log("Payment Successful");
        res();
        },1000)
    })
}

function generateTicket(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log("Ticket generated");
        res({
                name:"Avengers",
                seats: 2,
                amount:600
            });
        },1000)
    })
}

// selectMovie()
// .then(selectSeat)
// .then(payment)
// .then(generateTicket)
// .catch((err)=>{
//     console.log("Something went wrong");
// });


async function ticket (){
    try{
        await selectMovie();
        await selectSeat();
        await payment();
        await generateTicket();

    }
    catch(err){
        console.log(err);

    }
}
ticket();