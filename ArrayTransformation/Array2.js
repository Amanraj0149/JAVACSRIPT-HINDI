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