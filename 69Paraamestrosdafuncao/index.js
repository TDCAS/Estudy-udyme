//ele não quevbra se for uma funcao void e tu coloca algum valor como re-
//torno na execucao, fica guardado em "arguments".

//Se executar o arguments vai retorna o valor  SO FUNCIONA EM FUNCTION E NÂO COM ARROW FUNCTION
function funcao(){
      console.log("Oie")
}
funcao("Valor");
//R OIE

function funcao2(a,b,c,d,e,f){
      console.log(a,b,c,d,e,f)
}

funcao2(1,2,3)
// R 1 2 3 undefined undefined  undefined 
function funcao3(a,b=2,c=0){
      console.log(a+b+c)
}
funcao3(2,2,2)
//R 6
//funcao com parametros com via desetruturação 
function funcao4({nome, sobrenome, idade}){
      console.log(nome, sobrenome, idade)
}
funcao4({nome: "Luiz", sobrenome: "Otavio", idade: 20})

//OR
function funcao4({nome, sobrenome, idade}){
      console.log(nome, sobrenome, idade)
}
const obj = {nome: "Luiz", sobrenome: "Otavio", idade: 20}
funcao4(obj)

//funcao parametros por lista
function funcao5([valor1, valor2, valor3]){
      console.log(valor1, valor2, valor3)
}

funcao5(["Luiz Otavio", "Miranda", 30])
//function com rest operator ele funciona em qualquer funcao

function funcao6(operador, ...numeros){ 
      console.log(operador,numeros)
}
funcao6(1,3,5,4,6,7)