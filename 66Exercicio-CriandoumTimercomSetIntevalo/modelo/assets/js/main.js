const date = new Date()
let second, minuts, hours, newdate, timerStart, timercon
date.setSeconds((second = 0))
date.setMinutes((minuts = 0))
date.setHours((hours = 0))

const idTimer = window.document.getElementById("idTimer")
const buttonStart  = window.document.getElementById("buttonStart")
const buttonPause = window.document.getElementById("buttonPause")
addEventListener("load",events)



function events(){

      buttonStart.addEventListener("click",function() {timerCont(true)})
      buttonPause.addEventListener("click",function() {timerCont(false)})
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
            hours:false
      })
}

function timerCont(bolean){
      bolean === true ?timercon = setInterval(function() {addDate()},100):setTimeout(function() {clearInterval(timercon)},100)

      
      
}
