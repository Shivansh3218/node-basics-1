let num = parseInt(process.argv[2])
for(i=num;i>0;i=i){
   
    console.log(i%10)
    i = Math.floor(i/10)

} 