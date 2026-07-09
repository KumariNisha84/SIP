const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

//request
// 1 params

app.get("/student:name",(req,res)=>{
    res.send(`Hello this side ${req.params.name} student of SAGE University.`)
})


app.get("/city:name",(req,res)=>{
    res.send(`${req.params.name} is the beautiful city.`)
})

app.listen(port,()=>{
    console.log(`Server is running on port number ${port}`);
})

