let string="this is js file";
console.log("string:",string);
let un;
console.log(un);
const lenovoobject={
    name:"lenovo",
    color:"black"
};
console.log("objects:",lenovoobject);
const array=["apple","banana"];
console.log('arrays:',array);
console.log('arraysize:',array.length);
let a=3;
let b="3";
if (a===b){
    console.log("match");
}

else{
    console.log("not match");
}
console.log(array.join(" | "));
const laptop={
    screens:{
        resolution:1080,
        displaytype:"LCD",
    touchEnabled:"false"    
    },
    pointingDevice:"trackpad",
    ram:"16GB",
    wifi:true,
    Storage:"512ssd",
    wifistatus:function(wifii){
        this.wifi=wifii
        
    }


};
laptop.wifistatus(false);
console.log(laptop);
function doaddition(a,b){
    let c=a+b;
    return c;

}
console.log(doaddition(4,7));
const domultiplication=function(a,b){
    let c=a*b;
    return c;
}
console.log(domultiplication(5,2))
(function(m,n){
    let k=domultiplication(m,n);
    console.log("The multi : ${k}"  );

})();
