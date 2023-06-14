//map tu consegue modificar o objeto

const number = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 20 ,27]
const doubleNumber = number.map((value,index)=>{
      return `Luiz -> ${value} ${ index}`;
})


const pessoas = [
      {nome: "Luiz", idade: 62},
      {nome: "Maria", idade: 23},
      {nome: "Eduardo", idade: 55},
      {nome: "Leticia", idade: 19},
      {nome: "Rosane", idade: 32},
      {nome: "Wallace", idade: 47},
]

const nomes = pessoas.map(obj=>obj.nome)
const idades = pessoas.map(obj=>{
      delete obj.nome
      return obj.idade
} )
const ids = pessoas.map((obj,index)=>{
      const newobj = {... obj}
      newobj.id = index
      return newobj
}) 
console.log(pessoas)
