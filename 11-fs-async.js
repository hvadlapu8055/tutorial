const {readFile,writeFile} = require('fs')
console.log('task started');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        return ;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
       if(err){
        return ;
       }
       const second = result;
       const s = 'Here is the result' + first +','+second;
       writeFile('./content/result-sync.txt',s,(err,result)=>{
        if(err){
            return ;
        }
        console.log(result);
        console.log('task completed');
       })
    })
})
console.log('let us move to other task');