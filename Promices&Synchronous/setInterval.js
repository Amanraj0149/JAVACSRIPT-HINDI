function test(){
    console.log("Learn with Aman")
}
setInterval(test,1000) // har 1000 sec ke interval pe print  hoga ("learn with chirag")


setTimeout(()=>{
    clearInterval(stop) //  6000 sec ke interval pe baand hojayega
},6000)