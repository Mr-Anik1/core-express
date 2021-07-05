/*
  *http protocol er maddhome system ta chole
  *http verbs/Methods gula babohar korte hoi jekono operation
  ghotanor jonno.
  



  **----Rest Api toirir jonno ei Method gula jante hoi----**

  * -get()//kono Data dekhar jonno 
  * -post()//Jekono data create kora 
  * -put()//Update whole Object
  * -patch()//Update specific properties
  * -delet()//delet korar jonno
  




  **----Rest Api er jonno Resources URI jana proyojon----**

  * -get('/books')//Puro boier list ta pate chacchi
  * -post('/books')//Boi er list e notun boi add korar jonno(update)
  * -get('books/:bookId)//sob boi er moddhe specific boi khuje ber korar jonno[get a single property]
  * -put/patch('/books/:bookId)//Specific item update er jonno
  * -delet('/books/:bookId)//Specific item delet korar jonno
  
  CRUD Operation er jonno ei Jula Jothesto
*/




const express=require('express');
const todos=[];

const shortid=require('shortid');
//shortid install[yarn add shortid] kore import kore nilam


const app=express();

app.use(express.json());
//Middlewar 


app.delete('/todos/:todoId',(req,res)=>{
  const {todoId}=req.params;
  const index=todos.findIndex(todo=>todo.id===todoId);
  todos.splice(index,1);
  /*
    oi todos er ukto index delet kore dilam splice() method
    babohar kore.
  */
  
  return res.status(204).send();
  //kono kichu Delet er status code holo 204
});






app.patch('/todos/:todoId',(req,res)=>{
   const {todoId}=req.params;
   const {text,isCompleted}=req.body;
 
   const index=todos.findIndex(todo=>todo.id===todoId);
  
   if(index===-1){//findIndex kono index na pele -1 return kore
     return res.status(404).json({message:'ToDo Not Found'});
   }


   //index thakle
   todos[index].text=text||todos[index].text;
   /*
     todos theke ukto index khuje ber kore tar text soman(=)
     text(mane amra jdi new text dei) seta bosabe OR(||) 
     todos[index] e age j text chilo setai bosabe.
   */

   todos[index].isCompleted=isCompleted || todos[index].isCompleted;


   return res.status(201).json({message:'ToDo Updated Succesfully',...todos[index]});

});





app.put('/todos/:todoId',(req,res)=>{
    const {todoId}=req.params;
    const {text,isCompleted}=req.body;

    const todo=todos.find(todo=>todo.id===todoId);
    
    if(!todo){//jdi kono todo na thake tahole ei block kaj korbe
       const todo={
        //  id:shortid(),
         id:todoId,//amra j name e id dibo seta show korbe
         text,
         isCompleted:false,
         created:new Date()
        };

        todos.push(todo);//todos e Notun todo ta push kore dilam
        res.status(201).json({message:'ToDo created Succesfully',...todo});
         

    }else{
      todo.text=text||todo.text;
      todo.isCompleted=isCompleted||todo.isCompleted;
    
      const index=todos.findIndex(todo=>todo.id===todoId);
      todos[index]=todo;
      /*
        todos array er ukto index e notun todo ta bosia dibo 
        fole update todo pabo
      */

      res.status(201).json({message:'ToDo Updated Succesfully',...todo});

    }
});
/*
  put() er kaj:-
    1.Jdi age theke todo na thake tahole notun todo toiri korbe 
    2.Age todo thakle seta k update korbe.
*/









app.get('/todos/:todoId',(req,res)=>{
    const {todoId}=req.params;
    const findId=todos.find(todo=>todo.id===todoId);
    res.status(201).json(findId);
});
/*
  todoId to ek ek bar ek ek rokom hote pare tai todoId er samne
  : babohar kore todoId ta k dinamic kora hoice.
*/







app.get('/todos',(req,res)=>{
  const result=todos.map((todo)=>({id:todo.id,text:todo.text}));
  //map() er maddhome shudhu id ar text ber korlam
  return res.status(200).json(result);
});






app.post('/todos',(req,res)=>{
    const {text}=req.body;
    const todo={
        id:shortid(),
        text,
        isCompleted:false,
        created:new Date()
    }
    todos.push(todo);//Uporer todos Array te push kore diam
    res.status(201).json({message:'ToDo created Succesfully',...todo});
    //create er status code 201

});
/*
  todos er vitore todoId gula royecha tai '/todos/:todoId' upore
  daya hoice.Jdi todoId er vitore aro kichu thakto tahole segula
  todoId er upore deya hoto.Jdi '/todos/:todoId/reviews' erokom
  thakto tahole '/todos/:todoId'er upore '/todos/:todoId/reviews'
  dita hoto.Erokom na korle Error aste pare.Karon Route gula 
  match kora hoi regular expression babohar kore.

  N.B. Express er site e eirokom kore routing korte bola ace.
  
*/






app.get('/',(req,res)=>{
    res.send('<h1>Hello ToDo</h1>');
});

app.listen(4000,()=>{
    console.log('app is running port 4000');
});