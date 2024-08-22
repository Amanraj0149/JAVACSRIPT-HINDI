//pROMISES mai ya to resolve hoga ya reject hoga , like ola book kiye to ,ya to cancel hoga , ya to ride hoga
// async:- I/o request , ya phir bhara se data fetch kar rhe hai

// PROMISES

//  const myPromise= new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async Task")
//         resolve()
//     },2000)
//  })

//  myPromise.then(function(){
//      console.log("Promise Resolved");
//  })

const myPromise= new Promise(function(resolve,reject){
let fileLoader= false;
 if(fileLoader){
    resolve("File Loaded")
 } else{
    reject("File Not Loaded")
 }
})

myPromise.then(function(value){ // RESOLVE KO HANDLE karte hai .then se
 console.log(value)
}).catch(error => console.log(error)); // reject ko handle ke liye



 // PROMISE KE 3 state hoti hai
   // i) PENDING
   // II) RESOLVE
   //III) REJECT



















