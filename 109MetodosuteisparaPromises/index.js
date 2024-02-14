//Simulando um sistema de banco onde algumas partes podem demorar aleatoriamente

function rand(min,max){
      min *= 1000
      max *= 1000 
      return Math.floor(Math.random() *(max-min) +min) 
  }
  
  //mostando com call back
  function pleaseWait(msg, timer) {
        //retorna um construtor da Promise
        //obrigado a retornar um resolve ou um reject
        return new Promise((resolve, reject)=>{
              if(typeof msg !=="string") return reject('BAD VALUE')
              setTimeout(() =>{
                    resolve(msg)
              },timer)
        })
  }
  
  
  
  const promise = [
        pleaseWait("Ola mundo",3000),
        pleaseWait("Vou",500),
        pleaseWait("hey",2000)
  ]
  
  
  Promise.all(promise)
      .then((value)=>{
            console.log(value)
      })