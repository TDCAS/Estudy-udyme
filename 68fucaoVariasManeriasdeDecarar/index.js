//hosting seria quando não importa de onde ele é chamado ele vai ser 
//executado des que esteja no mesmo "escopo"
function  falaOi(){
      console.log("oie")
}

//funcao é uma objeto de primeira classe ou Fisrt-Class object
//Seria considerar a funcao como um dado
//function Expression
const souUmDado = function() {
      console.log("Sou um dado")
}

function executadoFuncao(funcao){
      funcao()
}
executadoFuncao(souUmDado)


//Arrow function
const funcaoArrow = () => {
      console.log("Sou uma Arrow function")
}

//Dentro de um objeto

const object = {
      falar(){
            console.log("Sou um object")
      }
}
object.falar()

//OR

const object2 = {
      falar2:function(){
            console.log("Sou um object")
      }
}

object2.falar2()
