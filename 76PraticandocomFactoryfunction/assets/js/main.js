//variaveis
const buttons = document.querySelectorAll("button")
let input = document.getElementById("inputView")

//eventos
document.addEventListener("click",function(event){ 
      
      for(let button of buttons){
            
            button === event.target?verify(button.textContent,input):console.log(" ")
      }
})

//funcao que fazeram as tarefas
function verify(button,input){

      
      if(button === "C")return input.value = button
      else if(button === "(")return input.value = button
      else if(button === ")")return input.value = button
      else if(button === "/")return input.value = button
      else if(button === "9")return input.value = button
      else if(button === "8")return input.value = button
      else if(button === "7")return input.value = button
      else if(button === "*")return input.value = button
      else if(button === "6")return input.value = button
      else if(button === "5")return input.value = button
      else if(button === "4")return input.value = button
      else if(button === "+")return input.value = button
      else if(button === "3")return input.value = button
      else if(button === "2")return input.value = button
      else if(button === "1")return input.value = button
      else if(button === "-")return input.value = button
      else if(button === ".")return input.value = button
      else if(button === "0")return input.value = button
      else if(button === "#")return input.value = button
      else if(button === "=")return input.value = button



      





      
}

function value(value){
      return {
            clearInput(){
                  return input.value = " "
            }
      }
      
}