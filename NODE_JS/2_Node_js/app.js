//requiring fs module 
const fs = require ("fs");

//Reading file using synchronous way
const data = fs.readFileSync(
    "file.txt", //file name
    "utf-8"
);
console.log(data);
// const data = fs.readFileSync('')


//Asynchronous way
const { error } = require("console");
// const fs = require("fs");
// const file = __dirname
// console.log(file);
// console.log("fileName",__filename)



console.log("starting")
fs.readFile('file.txt','utf-8',(error,data) =>{
    if(error){
        console.log(error);
        return;
    }else{
        console.log(data);
    }
})
console.log("mid");
console.log("ending");

// write in file

let data1 = {
    batch: 2024,
    course: "BCA",
    date: Date.now()
}

fs.writeFileSync('file.txt',"magic");

fs.writeFile('file1.txt',JSON.stringify(data1),(err) =>{
    if(err){
        console.log(err)
        return;
    }else{
        console.log("file created");
    }
});

fs.appendFileSync('file.txt',"\nNEw Line Added");

fs.unlinkSync("file.txt");

fs.mkdirSync("student");

const files = fs.readdirSync("../");
console.log(files)