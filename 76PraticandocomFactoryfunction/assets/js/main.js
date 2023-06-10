//variaveis
const buttons = document.querySelectorAll("#button")
const buttonClear = document.getElementById("buttonClear")
const buttonResult = document.getElementById("buttonResult")
let input = document.getElementById("inputView")
const calculator = calculatorReal()

//eventos
calculator.start()
//funcao que fazeram as tarefas

function calculatorReal(){
      return {
            start(){
                  return this.clickButtons()
            },
            clickButtons(){
                  document.addEventListener("click",function(event){
                        const arrayButton = Array.from(buttons)
                        if(arrayButton.indexOf(event.target) !== -1) return calculator.displayView(event.target.textContent)
                        else if(event.target === buttonClear) return calculator.inputClear()
                        else if(event.target === buttonResult) return calculator.result(arrayButton)
                  })

            },
            displayView(newButton){
                  return input.value += newButton
            },
            inputClear(){
                  return input.value = " "
            },
            result(arrayButton){
                  return input.value = eval(input.value)  
            }
      }
}
