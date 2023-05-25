
//Estrutura de repeticao ou vetor de uma dimecao
// const frutas = ['Pera','Maça','Uva'];

// for(let i in frutas){
//     console.log(i)
//     console.log(frutas[i])
// }

// R:
// 0
// 6
// Pera
// 7
// 1
// 6
// Maça
// 7


//Para objetos

const pessoa = {
    nome:'Luiz ',
    sobrenome:'Otavio',
    idade: 30
}

//acesso rapido

// console.log(pessoa.nome)
// //ou
// console.log(pessoa['nome'])

//com For in
for( let key in pessoa){
    console.log(key,pessoa[key])
}