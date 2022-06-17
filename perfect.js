let a = parseInt(process.argv[2])
let sum = 0
for(let i=1;i<a;i++)
{
if(a%i==0){
sum= sum+i}

}
if(sum==a){
console.log("perfect number")
}
else{
console.log("Not a perfect number")
}
