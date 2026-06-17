//reduce() function
//syntax - array.reduce (callback, initialValue)

// Parameters :
// accumulator: stores the result
// current : current element
// initialValue: starting point


const nums = [10,20,50];
const sum = nums.reduce((acc , curr) => { // acc, curr are variables 
    return acc + curr;
}, 0);

console.log(sum);


//Real- world cart problem
const cart= [{price : 200} , {price : 800}];
const total = cart.reduce((sum, item) =>{
    return sum + item.price;
},10);
console.log(total);



//Question (Applying all three methods - map , filter, reduce)

let arr = [-2, 3, 5, 8, -9]

let newArr = arr.map (i => i + 2);
console.log(newArr)

let newArr1 = newArr.filter(value => value >= 0);
console.log(newArr1)

let finalArr = newArr1.reduce((i ,j) => i + j);// using arrow function and still not using return becuse not using curly{} braces
console.log(finalArr); 

//All in one line
const ans = arr.map(i => i +2).filter(i => i>0).reduce((sum,item) => sum + item);
console.log(ans);