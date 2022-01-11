/**
 * Arrow Function
 */
// Ham truyen thong
function SayHelllo () {
    console.log("Hello world");
}
SayHelllo();
const SayHi = function(){
    console.log("Hi everybody");
}
SayHi();
//đinh nghĩa hàm mũi tên (Arrow function)
const Saywelcom=() =>{
    console.log(" Welcome");
}
Saywelcom();
const sum=(a,b) => a+b;
console.log(sum(4,5));