const express = require('express');
const app = express();
const path = require ('path');

const port = 3001;

app.get("/profile", (req,res)=>{
    // res.send("<h1> Nisha </h1>");
    res.sendFile(path.join(__dirname, 'index.html'));
})

//Params (get name in response using params)
app.get('/about:name', (req,res)=>{
    res.send(`Hello this side ${req.params.name}`);
});

//query parameter
app.get('/city', (req,res)=>{
    res.send(`<h1>You are welcome in ${req.query.n}, ${req.query.address}</h1>`)
    // res.json({
    //     city:req.query.name,
    //     locality:req.query.address
    // })
})


app.get('/student',(req,res)=>{
    res.send(`<h1> Hello!! My name is ${req.query.name} pursuing ${req.query.course} at ${req.query.college},Indore </h1>`);
})

app.listen(port, ()=>{
    console.log(`Server is listening at port ${port}`);
});