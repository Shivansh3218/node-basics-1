let n = parseInt(process.argv[2])
let dig = 0
while(n>0){
   dig = n%10
   console.log(dig)
   n = Math.floor(n/10)
}
