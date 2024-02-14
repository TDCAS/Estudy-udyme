const pessoa = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 30,
    endereco: {
        rua:"AV Brasil",
        numero: 320
    }
};

// chamando via desetruturacao normal
// const {nome,sobrenome} = pessoa

// console.log(nome,sobrenome)


//criando uma varival nova dentro de pessoa funciona no array
// const {nome,sobrenome,cep = "93265030" } = pessoa

// console.log(nome,sobrenome,cep)


//reatibuindo outra variavel para o valor nome
// const {nome: n = "oloko ",sobrenome} = pessoa

// console.log(n,sobrenome)

// Acessar o objeto dentro do objeto

// const {endereco: {rua,numero}} = pessoa

// console.log(rua,numero)

// Pegando o rest

//const {nome, sobrenome, ...resto} = pessoa
//console.log(nome, resto)




