const express = require('express');
const app = express();
const path = require('path');
const port = 3002;


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));

app.get('/addTask',(req,res)=>{
    res.send(`TASK: ${req.query.inpt}`);
})

app.post('/addTask',(req,res)=>{
    res.send(`Task: ${req.body.inpt}`)
})

app.listen(port, ()=>{
    console.log(`Server is running on port${port}`);
})