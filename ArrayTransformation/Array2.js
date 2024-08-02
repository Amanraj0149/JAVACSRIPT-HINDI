var num=[1,2,3,4,5]
var a = num.map(fun)   // map function ek naya array banata hai
function fun(n){
    return n+1;
}
console.log(a);

var numi=[1,3,4,5]
var b=numi.map((n) =>{
   return n+1;
})

console.log(b);

//  filter method in array

const ages=[19,12,31,11,5]

const result=ages.filter(checkAdult)

function checkAdult(age){
    return age>18
}
console.log(ages)
console.log(result)

// Reduce method in array
let arr=[1,2,3,4,5]
let sum=arr.reduce(addNum)

function addNum(a,b){
    console.log(a)
    console.log(b)
    
    return a+b
}
console.log(sum)
//array.reduce(function(total,currentValues,currentIndex,arr))