//Multiple Object creation & accessing values

const products = [
    {
    id: 1,
    name:"Laptop",
    price:60000
    },

    {
    id: 2,
    name:"claw-clip",
    price:1500
    },

     {
    id: 3,
    name:"Bottle",
    price:2000
    },

     {
    id: 4,
    name:"Clothes",
    price:10000
    },
]

//Accessing values usinf for loop
// console.log(products);
products.forEach(i =>{
    console.log( i.name)
});
products.forEach(i =>{
    console.log(i.id , i.name, i.price)
});

//Total price of the products
let j = 0;
products.forEach(i=> {
    return j =  j + i.price;
});
console.log(j);
