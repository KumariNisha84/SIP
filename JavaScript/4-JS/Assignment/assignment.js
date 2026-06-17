//map() method
//ques - 1 : convert prices to discounted price

const prices = [1000, 2000,3000];
const final = prices.map(i => i * 0.9);
console.log(final);

//ques - 2: 
const users = [{id:1, name: "Nisha"}, {id:2, name: "Khushboo"}, {id:3, name: "Prisha"}];
const finalUser = users.map (i=> i.name);
console.log(finalUser);

//ques-3
const product = [
    {name: "Laptop", price: 50000},
    {name: "Phone", price: 30000}
];
const finalProduct = product.map ( i => `${i.name} - ${i.price}`);
console.log(finalProduct);


//filter
//ques-1
const products = [
    {name: "Laptop", price: 50000},
    {name: "Mouse", price: 500},
    {name: "Phone", price: 30000}
];

const expensiveProduct = products.filter (i=> i.price >20000);
console.log(expensiveProduct);

//ques - 2 
const user = [
    {name: "Nisha",active:true},
     {name: "khushboo",active:false},
      {name: "prisha",active:true}
]

const userActive = user.filter ( i=> i.active == true);
console.log(userActive);

//ques - 3
const product1 = ["iphone" , "Headphone","Laptop","Phone Case"];

const ans1 = product1.filter ( products => products.includes("phone"))
console.log(ans1)


//reduce
//ques- 1
const price = [1000, 2000, 3000];
const p = price.reduce ((i , j) => i + j);
console.log(p);


//ques- 2
const cart = [
    {name: "Laptop", quantity: 2},
    {name:"Mouse", quantity: 3}
];

const totalQuantity = cart.reduce((sum , item) =>{
    return sum + item.quantity
},0);
console.log(totalQuantity);


//Problem : Cart Checkout
const product2 = [
    {
        name:"Laptop",
        price: 50000,
        available:true,
        quantity:2
    },
    {
        name:"Phone",
        price: 30000,
        available:false,
        quantity:7
    },
    {
        name:"Mouse",
        price: 1000,
        available:true,
        quantity:12
    }
];

