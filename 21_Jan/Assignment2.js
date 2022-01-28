//Date:28 Jan 2022(Given on 21 Jan 2022)
//Author: Souparna Dutta

//Explore setTimeout and setInterval and write a program that would make use of setTimeout and
// call a function after 10 sec once the app starts, 
//and setInterval would print number 1 to 10 after interval of 5 secs and then it should stop.


//A function that print numbers from 1 to 10
let printNumbers=()=>{
    for(let i=1;i<=10;i++)
    console.log(i);
}

//clears interval after 10s from the start of execution
setTimeout(()=>{clearInterval(myInterval)},10000)

//setInterval function that prints 1 to 10 every 5 seconds 
const myInterval = setInterval(()=>{printNumbers()},5000)

//Final output will be :-

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
