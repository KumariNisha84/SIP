//Promises
//Creating a Promise
// const orderFood = new Promise((res, rej) => //first value will be always fulfilled and the second will be reject one (the names can be different)
//     {
//         const delivered = false;
//         if(delivered){
//             res("Food Delivered");
//         }else{
//             rej("Order Cancelled");
//         }
// });

//Consuming (calling) a Promise
// orderFood
// .then((resolve)=> { //.then() - Handles the resolve condition only
// console.log(resolve);
// })
// .catch((error) =>{ //.catch() - Handles the reject condition only
//     console.log(error);
// });

//Example-2
//1st Way
// let connection = new Promise((res, rej) =>{
//     console.log("Connect ho raha hai db se");
//     console.log("Khushboo !! Thora wait kr..")
//     setTimeout(()=>{
//         console.log("Connect ho gaya ✔");
//         res()
//     }, 2000);
// })
// connection
// .then(()=>{
//     console.log("Promise fullfilled ho gaya");
// })
// .catch(() => {
//     console.log("Promise reject ho gyi...");
// });

//2nd way
// new Promise((res, rej) =>{
//     console.log("Connect ho raha hai db se");
//     console.log("Khushboo !! Thora wait kr..")
//     setTimeout(()=>{
//         //console.log("Connect ho gaya ✔");
//         res("Connect ho gaya ✔")
//     }, 2000);
// })

// .then((msg)=>{
//     console.log(msg, "Promise fullfilled ho gaya");
// })
// .catch(() => {
//     console.log("Promise reject ho gyi...");
// });


//3rd way
function connection(){
return new Promise((res, rej) =>{
    console.log("Connect ho raha hai db se");
    console.log("Khushboo !! Thora wait kr..")
    setTimeout(()=>{
        console.log("Connect ho gaya ✔");
        res()
    }, 2000);
})
}
connection()
.then(()=>{
    console.log("Promise fullfilled ho gyi");
})
.catch(() => {
    console.log("Promise reject ho gyi...");
});