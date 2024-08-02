//objects is a collection of key value pairs

   // OBJECT LITERALS
 var obj={
    name:"aman",
    age:18,
    great(){
        return "good morning"
    }
 }
 console.log(obj);
 console.log(obj.great());
   //

 var obje={
    name1:"jeetu",
    age:16,
    greet(){
        return "good morning"+this.name1
    }

 }
 console.log(obje.greet()) 

 // objects within function

 function Calc(val){
   return{
        add(val1){ 
            var a=val+val1
            return a 
        },
        sub(val1){
            var b=val-val1
            return b
        }
    }
    
 }
 console.log(Calc(5).add(2))
 console.log(Calc(4).sub(2))

 function Cal(val){
    
        function add(val1){ 
             var a=val+val1
             return a 
         }
        function sub(val1){
             var b=val-val1
             return b
         }
         return obj={   // ek se jayda function ho to object  bana padta hai , taki return kar sake
            add,sub
         }
     
  }
  console.log(Cal(5).add(2))
  console.log(Cal(4).sub(2))
