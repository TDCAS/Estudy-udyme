//Factory function (fabrica de funcao)

//
function criaPessoa(nome, sobrenome, a, p){
      return {
            nome, 
            sobrenome,
            //Getter quando colocado o get na frente  ele finge ser um
            //Parametro/varivael
            get nomeCompleto(){
                  return `${this.nome} ${this.sobrenome}`
            },

            /* Setter consegue setar um valor dontro dentro do parametro
            exemplo nomeCompleto = "novo valor" 
            essa string vai para variavel valor
            */
            set nomeCompleto(valor) {
                  valor = valor.split(' ')
                  this.nome = valor.shift()
                  this.sobrenome = valor.join(' ')
            },
            fala(assunto) {
                  return `${this.nome} esta ${assunto}.`;
            },
            altura: a,
            peso: p,
            //Gettet
            get imc() {
                  const indice = this.peso / (this.altura ** 2)
                  return indice.toFixed(2)
            }
            
      };
}

const p1 = criaPessoa("Luiz", "Otavio", 1.8,80)
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.nomeCompleto)
console.log(p1.nomeCompleto = "Maria eduarda")


// const p2 = criaPessoa("Maria", "Joaquina")
// console.log(p2.fala("fala sobre JS",1.5,40))
