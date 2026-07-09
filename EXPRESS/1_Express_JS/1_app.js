const express = require ("express"); //express always returns a function 
const app = express();
const path = require('path')


// const nisha = require ("express");
// const app = nisha();

const port = 3000;
app.use(express.static(path.join(__dirname, 'Public')))

app.get("/",(req, res)=>{
    res.send("Welcome to Express");
});


app.get('/MERN',(req, res)=> {
    // res.send("<h1 style='color:red;'>Hello Everyone!!!</h1>")
    res.sendFile(path.join(__dirname, 'index.html'))
})



app.listen(port, () =>{
    console.log("Server is running..");
});

