//Date:29 Jan 2022(Given on 22 Jan 2022)
//Author: Souparna Dutta

//Question-> Let us try to create a web server on port 8448 instead of 8080.

const http = require('http')

let port=8448

const server = http.createServer((req,res)=>{
   //res.writeHead(200,{'Content-type':'text/csv'})
   res.write(JSON.stringify({firstWord:'hello',secondWord:'world'})) //Content of response
   
   res.end()   //end of response

   console.log('Server started')
})

server.listen(port) //server created at localhost:8448
