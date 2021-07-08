const router=require('express').Router();
const controlar=require('./controlar');



router.delete('/:todoId',controlar.delet);

router.patch('/:todoId',controlar.patch);

router.put('/:todoId',controlar.put);

router.get('/:todoId',controlar.getFindId);

router.get('/',controlar.getFindAll);
/*
  Eivebe na kore globally app.use() e middleware set kore 
  diachi.
  Fole jinista automatic nicher moto kaj korbe:-

  router.get('/',myMiddleware,controlar.getFindAll);  

  middleware set korar karone ei route ta te "controlar" hit 
  korar purbe "myMiddleware" hit korbe
*/

router.post('/',controlar.post);

module.exports=router;