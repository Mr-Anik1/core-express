const express=require('express');


const app=express();
app.use(express.json());
app.use('/todos',require('./routes'));

app.get('/',(req,res)=>{
    res.send('<h1>Hello Control ToDo</h1>');
});

app.listen(4000,()=>{
    console.log('app is running port 4000');
});