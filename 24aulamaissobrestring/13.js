let umaString = "Um \"texto\""

console.log(umaString[1])
//umaString[1] pega o que estiver na posicao 1 da string

//Concatenacao
//umaString.concat(' em', ' um',' lindo dia ') ele junta todas string
//umaString + ' em um lindo dia.' 
//${umaString} em um lindo dia.

//pesquisa de indice
//umaString.indexOf('texto') ele pesquisa o texto dentro da string trazendo o indice
//umaString.indexOf('texto',3) aqui ele procura para frente do indice 3
///umaString.lastindexOf('texto')
//umaString.match(/[a-z]/g)  
//umaString.seanch('m') procura o m na string retornando o indice
//umaString.replace('Uma', 'Outra) ele subistitui uma string por outra

//Fatiação
//umaString =  "O rato roeu a roupa do rei de roma."  umaString.slice(2, 6)  R: rat

//Separamento
//umaString =  "O rato roeu a roupa do rei de roma." umaString.splice(' ') R: "Oratoroeuaroupadoreideroma."