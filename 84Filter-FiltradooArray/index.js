//filter vai modificar o array
//map modificar o array
//reduce vai reduzir o array


//filter não edita o array original
const number  = [5,50,80,1,2,3,4,5,8,7,11,15,22,27]

//temque cria um nova varivel para salvar 
// os dados


// function callbackFilter(value){
//       return value > 10
// }

// const filterNumber = number.filter(callbackFilter)


// console.log(filterNumber)

// Jeito Simplificado
// const novosnumeros = numeros.filter(numero => {return numero > 5})
// console.log(novosnumeros)

// const newNumber = number.filter((value, index, array) => {
//       console.log(value, index, array)
//       return value > 5})


const pessoas = [
      {nome: "Luiz", idade: 62},
      {nome: "Maria", idade: 23},
      {nome: "Eduardo", idade: 55},
      {nome: "Leticia", idade: 19},
      {nome: "Rosane", idade: 32},
      {nome: "Wallace", idade: 47},
]

const pessoasComNomeGrande = pessoas.filter(pessoa => pessoa.nome.length >= 50)
const pessoasComMaisDe50Anos= pessoas.filter(pessoa => pessoa.idade >= 50)
const pessoasQueRetornaa = pessoas.filter(pessoa => {
      return pessoa.nome.toLowerCase().endsWith('a')})


console.log(pessoasQueRetornaa)