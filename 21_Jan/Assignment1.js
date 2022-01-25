//Date:25 Jan 2022(Given on 21 Jan 2022)
//Author: Souparna Dutta

//Write a nodeJS program that would read content from the file and also append new content into the file.

const fs=require('fs');

//Reading a file asynchronously by using fs.readFile()

//The following code will execute in the end after the new data has been appended and will show the final contents of the file

fs.readFile('Assignment1.txt','utf8',(err,data)=>{
   if(err)
   {console.log(err);
    return}    
   else
   {   console.log();
       console.log('reading asynchronously and getting executed in the end and the final data is')
       console.log(data);
   }
})

//Reading a file synchronously by using fs.readFileSync()
console.log('reading synchronously')
const data=fs.readFileSync('Assignment1.txt','utf8')
console.log(data);
console.log();

//Appending a file synchronously by using fs.appendFileSync()

const appendedData=fs.appendFileSync('Assignment1.txt','\nAppended data synchronously')


//-----------------------------------------------------------------------------------------

// //Appending a file asynchronously by using fs.appendFile()

// fs.appendFile('Assignment1.txt','\nAppended data asyncronously ',(err)=>{
//     if(err)
//     {throw err;}
//     console.log('Data appended successfully and the final content of the file is')
//     console.log(fs.readFileSync('Assignment1.txt','utf8'))
// })

