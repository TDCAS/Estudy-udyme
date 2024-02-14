//Ele é usado para quando se precisa reduzir o array em um valor so

//SOme todos os numeros
//Retorne um array com os pares( FIlter)
//Retorne um array com o dobro dos valores(map)

const number = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 20 ,27]

const total = number.reduce((acumulator, value, index, array)=>{
      acumulator+=value
      return acumulator
}, [])


// ele pode ter o segundos parametros acumulator, value, index, array

const pessoas = [
      {nome: "Luiz", idade: 62},
      {nome: "Maria", idade: 23},
      {nome: "Eduardo", idade: 55},
      {nome: "Leticia", idade: 70},
      {nome: "Rosane", idade: 32},
      {nome: "Wallace", idade: 47},
]

const maioridade = pessoas.reduce((previousValue,currectValue,CurrectIndex,array) => {
      return previousValue.idade <=currectValue.idade?previousValue =currectValue:previousValue

})
console.log(maioridade)