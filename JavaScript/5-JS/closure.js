// function init (){
//     var name = "Mozilla";
//     function displayName(){
//         console.log(name);
//     }
//     displayName();
// }
// init();

// function outer(){
//     var x = 1;
//     function inner(){
//         x++;
//         console.log(x);
//     }
//     inner();
// }
// outer();


function outer(){
    var a = 1;
   function inner(){
        a++;
        console.log(a)
    }
    inner();
}
outer();
outer();
outer();

//closure
function outer1(){
    var b = 1;
   return function inner1(){
        b++;
        console.log(b)
    }
}
const ans = outer1();
ans();
ans();
ans();



//multiple closure
function outer2(){
    var x =1;
    return function inner2(){
        x++;
    
    return function inner3(){
        x++;
        console.log(x);
    }

}
}
const ans1 = outer2();
const ans3 = ans1();
ans3();
ans3();
ans3();


