const sum = 0.1 + 0.2;
console.log(sum.toFixed(3)); //0.300

let a = 345.56734289;
console.log(a.toPrecision(5)); //345.57 (precision(5)gives total 5 elements)

//Math Function
let b = 2.5;
console.log(Math.floor(b)); // (2)floor returns the least number
console.log(Math.ceil(b)); // (3)ceil returns nearest largest number


console.log(Math.random()) // gives number in 0.value -> 0.564278
console.log(Math.random() * 10) // 5.235566
console.log(Math.floor(Math.random() * 10))

console.log(Math.min(2, -3, 0 , 8, 9, 5)); // give smallest no.
console.log(Math.max(2, -3, 0 , 8, 9, 5)); //gives largest no.


//example - 1
let goodBoy = true;
if (goodBoy){
    console.log("Khusbhoo")
}else{
    console.log("Khushbaa");
}

//example - 2
let age = 18;
if(age >= 18){
    console.log("Eligible to vote.")
}else{
    console.log("Complain pi  kr aa.");
}


//Multiple of 2
for(let i = 1; i <= 10;i++){
console.log(2 * i);
}


//boolean
let y = true;
console.log(y);

const c = Number(y); //gives 1 as it is true
console.log(c);
