const shortid=require('shortid');
const todos=[];

exports.post=(req,res)=>{
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

};


exports.getFindAll=(req,res)=>{
    const result=todos.map((todo)=>({id:todo.id,text:todo.text}));
    //map() er maddhome shudhu id ar text ber korlam
    return res.status(200).json(result);
};


exports.getFindId=(req,res)=>{
    const {todoId}=req.params;
    const findId=todos.find(todo=>todo.id===todoId);
    res.status(201).json(findId);
};
/*
  todoId to ek ek bar ek ek rokom hote pare tai todoId er samne
  : babohar kore todoId ta k dinamic kora hoice.
*/




exports.put=(req,res)=>{
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
};
/*
  put() er kaj:-
    1.Jdi age theke todo na thake tahole notun todo toiri korbe 
    2.Age todo thakle seta k update korbe.
*/







exports.patch=(req,res)=>{
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
 
 };
 
 





 exports.delet=(req,res)=>{
    const {todoId}=req.params;
    const index=todos.findIndex(todo=>todo.id===todoId);
    todos.splice(index,1);
    /*
      oi todos er ukto index delet kore dilam splice() method
      babohar kore.
    */
    
    return res.status(204).send();
    //kono kichu Delet er status code holo 204
  };
 


