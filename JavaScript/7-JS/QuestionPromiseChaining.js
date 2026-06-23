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

selectMovie()
.then(selectSeat)
.then(payment)
.then(generateTicket)
.catch((err)=>{
    console.log("Something went wrong");
});