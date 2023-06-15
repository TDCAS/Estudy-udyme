//usando os tres ao mesmo tempo 
//    .filter
//    .map
//    .reduce
const number = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 20 ,27]

const numberPar = number
      .filter((value)=> value% 2 ==0)
      .map((value)=> value*2)
      .reduce((ac, value)=> ac+value)


console.log(numberPar)