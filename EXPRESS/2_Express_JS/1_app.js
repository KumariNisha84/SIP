const express = require('express');
const app = express();
const path = require('path');

const port = 3001;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));

// app.get('/submit',(req,res)=>{
//     // res.send("You have been registered");
//     res.send(`<h1>You have been registered <br>Name: ${req.query.username} <br> City: ${req.query.city}</h1>`)

//     // const {username, city} = req.query;
// })

//post method 
app.post('/submit',(req,res)=>{
    // res.send("You have been registered");
    res.send(`<h1>You have been registered <br>Name: ${req.body.username} <br> City: ${req.body.city}</h1>`)

    // const {username, city} = req.query;
})

app.listen(port, ()=>{
    console.log(`Server is listening at port ${port}`);
});