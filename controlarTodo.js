const express=require('express');
const morgan=require('morgan');
/*
   morgan install(yarn add morgan) kore import kore nilam.
   morgan ekta middlewar jeta request log kore.Mane amader 
   request er sokol information provide kore.
   
   Erokom:-
   ::ffff:127.0.0.1 - - [Thu, 08 Jul 2021 05:35:27 GMT] "GET /
   todos HTTP/1.1" 200 2 "-" "Thunder Client (https://www.
   thunderclient.io)

   Eikhane IP,kokhon req pathaichi tar Date,kothai theke req
   pathaihi[user agent]<=>(Thander client naki browser) Ek
   kothai sokol information show kore ei morgan middleware.
*/
const myMiddleware=require('./middleware');

const app=express();
app.use(express.json()); 
app.use(myMiddleware);
/*
   globally myMiddleware set kore diachi fole sob route e 
   automatic middleware ti add hoia jabe.
*/

app.use(morgan('dev'));
/*
  morgan er onekgula log ache er moddhe amra 'dev' log ta babohar
  korchi.
*/



app.use('/todos',require('./routes'));

app.get('/',(req,res)=>{
    res.send('<h1>Hello Control ToDo</h1>');
});

app.listen(4000,()=>{
    console.log('app is running port 4000');
});