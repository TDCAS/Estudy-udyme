const numeros  = [1,2,3,4,5,6,7]
console.log("continue")
for(let numero of numeros){
    if(numero ===3){
        continue;
    }

    console.log(numero)
}


console.log("break")
for(let numero of numeros){
    if(numero ===3){
        break;
    }

    console.log(numero)
}
