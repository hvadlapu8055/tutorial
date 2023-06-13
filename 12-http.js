const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('welcome to our homepage');
    }
    if(req.url=='/about'){
        res.end('this is hemanth how can i help you');
    }
    res.end('<h1>Hemanth hiii</h1>')
})
server.listen(5000)