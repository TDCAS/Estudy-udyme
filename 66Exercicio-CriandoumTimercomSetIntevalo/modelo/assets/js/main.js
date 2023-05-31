const date = new Date()
let second, minuts, hours, newdate, timerStart, timercon
date.setSeconds((second = 0))
date.setMinutes((minuts = 0))
date.setHours((hours = 0))

const idTimer = window.document.getElementById("idTimer")
const buttonStart  = window.document.getElementById("buttonStart")
const buttonPause = window.document.getElementById("buttonPause")
const buttonReset = window.document.getElementById("buttonReset")
addEventListener("load",events)



function events(){

      buttonStart.addEventListener("click",function() {timerCont(true)})
      buttonPause.addEventListener("click",function() {timerCont(false)})
      buttonReset.addEventListener("click",function() {
            timerCont(false)
            idTimer.style.color="black"
            date.setSeconds((second = 0))
            date.setMinutes((minuts = 0))
            date.setHours((hours = 0))

            return idTimer.innerHTML = date.toLocaleTimeString("pt-br",{
                  hour12:false
            })
      })
}

       


function timerCalculator() {
      second +=1
      if(second >= 60) { 
            minuts += 1 
            second = 0
      }else if(minuts >= 60) {
            hours += 1
            minuts = 0
      }
}
function addDate(){
      timerCalculator()
      date.setSeconds((second))
      date.setMinutes((minuts))
      date.setHours((hours))
      return idTimer.innerHTML = date.toLocaleTimeString("pt-br",{
            hour12:false
      })
}

function timerCont(bolean){
      if(bolean === true){
            idTimer.style.color="black"

            if(!timercon){
                  timercon = setInterval(addDate,100)

            }

            

      } else{
            idTimer.style.color="red"

            clearInterval(timercon)
            timercon = null
      }
      
      

      
      
}
