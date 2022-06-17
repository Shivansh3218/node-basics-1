let a = parseInt(process.argv[2])
let dig =0
for(let i=1;i<=a;i++){

    if(a%i==0){
        dig++
    }
    }if(dig==2){
        console.log("PRIME NUMBER")
    }else{
        console.log("NOT A PRIME NUMBER")
    }