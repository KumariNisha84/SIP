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
    },3000)
    
    })  
}

function getOrder(){
    return new Promise((res, rej)=>{
console.log("Aapka order ready ho rha");
    
    setTimeout(()=>{
        console.log("Aapka order ready ho chuka h🍕🍔🥤")
        res();
    },3000)
   
    })   
}

function payment(){
    return new Promise((res, rej)=>{
console.log("Payment process ho rhi h");
    
    setTimeout(()=>{
        console.log("Payment successful✅")
        res();
    },3000)
    })   
}

async function final() {
    try{
        await loginUser();
        await Promise.all([
            getProfile(),
            getOrder(),
            payment()
        ]);
    }
    catch(err){
        console.log(err);
    }
}
final();