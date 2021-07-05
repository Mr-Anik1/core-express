const router=require('express').Router();
const controlar=require('./controlar');

router.delete('/:todoId',controlar.delet);

router.patch('/:todoId',controlar.patch);

router.put('/:todoId',controlar.put);

router.get('/:todoId',controlar.getFindId);

router.get('/',controlar.getFindAll);

router.post('/',controlar.post);

module.exports=router;