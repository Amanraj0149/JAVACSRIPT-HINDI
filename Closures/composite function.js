function add(a,b){
    return a+b
}
function multwo(val){
 return val*2
}
function square(val){
    return val*val
}
// function addsquare(a,b){
//     return square(add(a,b))
// }


// const result=add(2,3)
// console.log(square(result));

// console.log(addsquare(3,4))


function compose(f1,f2){
    return function(a,b){
        return f2(f1(a,b))
    }
}
const result=compose(add,multwo)
console.log(result(2,3))

//modern javascript
const composeTwo =(f1,f2)=>(a,b)=> f2(f1(a,b)) //pehle f1 execute hoga fir , f2 , right to left 
const result1= composeTwo(add,multwo)
console.log(result(4,5))

// composition of unlimited function
function composeAll(...funs){
    return function(...values){
        return funs.reduce((val,fn) => fn(val),values)
    }
}

// const composeAll=
// (...funs)=>
// (...values)=>
//     funs.reduce((val,fn)=> funs(val),values)

const result3= composeAll(add,multwo,square)
console.log(result3(4,5))