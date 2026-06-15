console.log("Hie 🤗");

// let (values can be reassigned)
let x = "Nisha";
console.log(x);

ab = "Khushboo🌸"
console.log(ab);


ac = 3;
// console.log(a + " October");
console.log(ac);
console.log(`${ac} November`) //${} this will print the value


//const 
 const ad = "Thank You 😀";
 console.log(ad);

//  ab = Welcome;
//  console.log(ab);(Cannot reassigned values in const)


// BLOCK SCOPE of let & var
let a = 10;
console.log(a)

var b = 30
console.log(b);


const c = 60;
console.log(c);
{
    let a = 20
    console.log(a);

    console.log(b)
    var b = 40
    console.log(b);

    const c = 90;
    console.log(c);
}
console.log(a)// let block k bahar aa kr wapas a = 10 print krega
console.log(b)  // var mein dubara change nahi kar paayenge(global scope)

// const c = 90; block k bahar const reassigned nahi ho skta
console.log(c);