//Date:29 Jan 2022(Given on 22 Jan 2022)
//Author: Souparna Dutta

// Question -> Let us try to return a 400 error message!

const http =require('http')

let port =3000

const server=http.createServer((req,res)=>{

    res.writeHead(400,'Bad Request')
    //res.write('Page not Found :(')
    res.end()
})

server.listen(port,()=>{
    console.log(`Server running at port number ${port}`)
})