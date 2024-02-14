//Escopo lexico = seria buscar em arvore procurando a variavel/funcao
const variavel = "Paulo"

function funcao(){
      const variavel = "Otavio"
      namedafuncao(variavel)
}
function namedafuncao(variavel){
      console.log(variavel)
}
namedafuncao("oloko")