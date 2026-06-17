
// syntax - array.map(callbackFunction);
const numbers = [1,2,3,4,5];
const doubled = numbers.map (num => {
    return (num * 2 ) + 2;
});
console.log(doubled)