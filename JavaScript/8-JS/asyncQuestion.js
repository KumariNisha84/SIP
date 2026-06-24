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






//Question - OTP Verification 

function verifyNumber(num){
    return new Promise((res1, rej1) =>{
        console.log("We are verifying your credentials!!!!!")
        setTimeout(()=>{
        if(num == "98949524"){
           res1(8004);
        }else{
            rej1("Invalid number");
        }
         },2000)
    })
}


function verify (userOtp, actualOtp){
    return new Promise ((resolve, reject)=>{
        if(userOtp == actualOtp){
            console.log("Verification Done!!");
            resolve();
        }else{
            reject("Wrong otp");
        }
    })
}

async function Result(){
    try{
        const otp = await verifyNumber("98949524");
        console.log(otp);
        const welcome = await verify(8004, otp)
    }
    catch(err){
        console.log(err);
    }
}
Result();


//question - Ride booking & assigning rider
function bookRide(){
    return new Promise((res, rej)=>{
        console.log("We welcome you too book a ride");
        setTimeout(()=>{
            console.log("Ride booked");
            res();
        },1000)
    })
}

function assignRider(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log("You have been assigned a rider");
            res();
        },2000);
    })
}

function rideComplete (){
    return new Promise ((res, rej)=>{
        
        setTimeout(()=>{
            console.log(("Journey Completed"));
            res();
        }, 1000);
    })
}

function payment (){
    return new Promise((res, rej) =>{
        setTimeout(()=>{
            console.log("Payment Done");
            console.log("Have a nice day!!");
        })
    })
}

async function ride(){
    try{
        
        const ride1 = await bookRide();
        const ride2 = await assignRider();
        const ride3 = await rideComplete();
        const ride4 = await payment();
    }
    catch(err){
        console.log(err);
    }
}
ride();
