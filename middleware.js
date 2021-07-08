function myMiddleware(req,res,next){
    console.log('I am middleware');
    next();
    /*
      middleware er guruttopurno bishoy holo next() call korte 
      hobe.next() call na korle se porborti middleware/controlr
      e jabe na.
    */
}
module.exports=myMiddleware;