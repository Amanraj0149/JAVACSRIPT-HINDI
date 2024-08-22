// Async/ Await = Async = makes a function return a promise
                //Await =makes an async function wait for a promise

function Loadfile(){
   return myPromise= new Promise(function(resolve,reject){
        let fileLoader= false;
         if(fileLoader){
            resolve("File Loaded")
         } else{
            reject("File Not Loaded")
         }
        })
}

async function myFunction(){
    try {const value =await Loadfile()
     console.log(value)} catch(error){
        console.log(error);
     }
}

myFunction()