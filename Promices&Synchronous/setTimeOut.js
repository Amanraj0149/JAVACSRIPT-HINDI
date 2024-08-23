// setTimeout= function in javascript that allows you to schedule the execution of a function after an amount of time (millisecond)

// setTimeout(callback,delay)

function greet(){
    console.log("heloo Eveyone")
}
setTimeout(greet,4000);

setTimeout(function(){
    console.log("hello Eveyone")
},3000)

//clear TimeOut()=can cancel a timeout before it triggers
const timeoutId= setTimeout(function(){
    console.log("gupi hello gupi")
},3000)
clearTimeout(timeoutId);
