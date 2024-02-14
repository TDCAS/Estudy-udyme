//Tramaneto de erros

// try {
//     console.log(nãoExisto)
// } catch(err){
//     console.log("essa variavel não existe")
// }




function soma(x,y) {
    if (typeof x !== 'number'  ||  typeof y !== 'number' ){
        throw('x e y precisam ser numeros.')
    }
    return x + y
}


try{
    console.log(soma('oloko',2))
    console.log(soma(1,2))

} catch(error){5
    console.log('erro')
}

//Não mostra erro para o usuraio colocar um texto 