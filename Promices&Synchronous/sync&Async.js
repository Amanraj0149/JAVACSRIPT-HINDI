//synchronous:- Execute line by line consectively in a sequential manner
                // code that waits for an operation to complete;

//asynchronous:- Allows multiple operation to be performed concurrently
               // without waiting,
               //Doesn't Block the execution flow and allows the program to continue.
               //(I/O) OPERATION,NETWORK REQUEST, FETCHING DATA, HANDLED WITH cALLBACKS, pROMISES, aSYNC/aWAIT
               
setTimeout(function(){   //  ye settimeout 2 parameter leta hai , pehla function , 
    console.log("Task-1"),3000
})
// console.log("Task-1");
console.log("Task-2");
console.log("Task-3");

//settimeout(syncronous hai) ko handle karne ke liye promises ka use karte hai