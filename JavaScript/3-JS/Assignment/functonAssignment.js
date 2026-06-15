//question-1 (Create a simple function problem)

function greet (name){
    console.log(`Hello ${name}`);
}
greet ("Nisha");


//question -2 (Calculate Total Price)
function totalPrice(price , quantity){
    return price*quantity;
}
console.log(totalPrice(500, 3));

//question- 3 (Default Parameters problem)
function foodDelievery (amount,fees = 40){
    return amount + fees;
}
console.log(foodDelievery(180));
console.log(foodDelievery(180, 50));

//question - 4 (Check Eligibility Problem)
function vote (age){
    if (age >=18){
        return "user can vote";
    }else{
         return "user cannot vote";
    }
}
console.log(vote(18));

//question-5 (Function Expression problem)
const calculator = function (MP, SP){
    return MP - SP;
}
console.log(calculator(1000, 700));

//Question - 6 (Arrow Function Problem)
const convert = (rupees, exchangeRate) => {
    return rupees/exchangeRate;
}
console.log(convert(2000, 94.6));