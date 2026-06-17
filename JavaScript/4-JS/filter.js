//filter() method
//syntax - array.filter(callback);

const ages = [10, 20, 30];
const adults = ages.filter (age => age>=18);
console.log(adults);