//memoization   // hum object mai ek baar ans store karwa lenge , phir agar same function ka n agar cache mai hoga to bahut kaam time mai result return kardega

function square(n){
    return n*n
}
function memoize(func){
    let cache={}
    return function(...args){
        let n=args[0]
        if(n in cache){
            return cache[n]
        }else{
            let result=func(n)
            cache[n]=result  // cache bahar hai , lekin hum function ke ander use kar parhe hai , yhi hai closure property, lexical environment se koi bhi variable ko function mai use kar sakte hai
            return result
        }
    }
}

console.time()
// console.log(square(5))
let result=memoize(square)
console.log(result(5))
console.timeEnd()

console.time()
console.log(result(5))
console.timeEnd()

   // output
// 25
// default: 10.627ms
// 25
// default: 0.299ms