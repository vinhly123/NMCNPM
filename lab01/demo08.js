/**
 * định nghĩa hàm(function) trong ES
 */
let a=1;
let b=2;
let c = a + b;
//console.log(c);
function Cong(a,b){
    let c=a+b;
    return c;
}
let d=Cong(a,b);
console.log("d",d);
let e = Cong("8",9);
console.log(e)
//Truyền tham chiếu
//Định nghĩa hàm tăng gấp đôi --> Truyền tham chiếu (Pass by reference)-->Object
function NhanDoi(x) {
    x=2*x;
    console.log("x--->",x);
}
let f=10;
console.log(f);
NhanDoi(f);
console.log("f=",e)
function NhanDoi_2(x){
    console.log("x--->",x);
    x.value=2*x.value;
    console.log("x.value--->",x.value);
}
let g={value:10};
console.log("g=",g);
NhanDoi_2(g);
console.log("g=",g)