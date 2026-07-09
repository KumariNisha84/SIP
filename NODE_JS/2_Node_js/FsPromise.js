const { readFile } = require("fs");
const fs = require("fs/promises");


// read file

// const data = fs.readFile('file1.txt','utf-8')
//    .then((data) =>{
//     console.log(data);
// })
// .catch((err) =>{
//     console.log(err)
// })

// async function name() {
//     try{
//         const data = await fs.readFile('file1.txt','utf-8')
//         console.log(data);
//     }
//     catch{
//         console.log(err)
//     }
// }
// name();

/**************Write file **************/
let data1 =[11,22,33,44];
let data2 = [ 1,2,3,4];
// fs.writeFile('file3.txt',JSON.stringify(data2))
// .then(() =>{
//     console.log("file create ho gai ");
// })
// .catch((err) =>{
//     console.log(err);
// })

async function dj() {
    try {
    const arr = await fs.writeFile('file6.txt', JSON.stringify(data1)+(data2))
    console.log("file created");
    
}
catch (err){
    console.log(err)
}
}
dj();