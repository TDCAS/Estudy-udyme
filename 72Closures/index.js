function retornafuncao(name){
      return function(){
            return name
      }
}

const funcao = retornafuncao("allan")
const funcao2 = retornafuncao("Fortes")

console.log(funcao())
console.log(funcao2())
