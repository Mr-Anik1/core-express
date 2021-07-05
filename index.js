const express=require('express');
//express import korlam

var cookieParser = require('cookie-parser');
//cookies er jonno cookie-parser install kore import kore nilam

const app=express();
//express call kore app create korlam

app.use(cookieParser());



app.get('/',(req,res)=>{
    console.log(req.cookies);
    res.send('<h1>Hello Anik</h1>');
});
/*
  kono route visit korte chile get() babohar korte hoi. get()
  er prothom argument e kon route e visit korte chacchi seta
  dita hoi.jamon eikhane amra '/' route e visit korte chacchi.
*/


app.listen(4000,()=>{
    console.log('Express is listening on port 4000');
});
//app listen korlam