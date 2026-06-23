function greet () {
    console.log("Hello");
}

function processUser (callback){
    callback();
}
processUser(greet);

//Example-2
function welcome (){
    console.log("Hello");
}

function user (wish, name){
    wish();
    return name;
}

user(welcome, "Nisha");
console.log(user(welcome, "Nisha"));



//Example-3
function paymentSuccess(){
    console.log("Payment Successful");
}

function paymentProcessing(amount, msg){
    console.log(`${amount} amount  deducted from your bank account`);
    msg();
}
paymentProcessing(15000, paymentSuccess);


//Multiple of callback create (pyramid doom) structure which decreases the readibility of the code so we use PROMISE to solve the problem of callback hell. 