function fun(){
    var a=6   // clousre hota , lexical environment jo variable hota un sabko  refrence lega
    function f(b){
        const sum=a+b;
        return sum;
    }
    a=5;
    return f;
}
var numsum=fun();
console.log(numsum(2));

// lexical environment :- function ke aas pass ka ilaka