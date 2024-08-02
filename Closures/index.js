console.log('aman raj');
//normal fumction
function f(a,b){
    const sum=(a+b);
    //sum=3 nhi de sakte, const variable ke value dubara change nhi kar sakte
    return sum;
}
console.log(f(2,4));

//anonymous function
                            //let and var similar hota hai , let scope :-block  level ka hota hai
                                                                 // var ka scope:= global hota hai
let g=function(a,b){
    const sum=(a+b);
    return sum;
}
console.log(g(3,5));

//immediate invoke :-function karte hai chalta hai 

let r=function(a,b){  // function ko define karte waqt , jo value dalte hai usko bolte hai parameters
    const sum=(a+b)
    return sum;
}(2,7)                // call karte samay jo value dalte hai usko bolte hai arguments
console.log(r)

//arrow function
let v= (a,b) =>{
    const sum=a+b;
    return sum;
}
console.log(v(7,2))


