let arr = [2,4,6,8,10]
console.log(arr)

//forEach (to print whole loop)
// arr.forEach(i =>{
//     console.log(i)
// });

//Push
arr.push(12);
console.log("After push operation: " + arr);
//pop
arr.pop();
console.log("After push operation: " + arr);

///Shift & Unshift
arr.unshift(25); //add element at the beginning
console.log("After unshift operation: " + arr)
arr.shift(); //removes the first element
console.log("After unshift operation: " + arr)

console.log(arr.indexOf(6)); //returns index of the value
console.log(arr[4]); //returns value of the index

//Merge two arrays using push (but includes brackets)
let arr2 = [3,6,9,12]
// arr.push(arr2);
// console.log(arr)

//Merge two arrays using spread method
let arr3 = [...arr, ...arr2]; //doesnot include brackets
console.log(arr3);


