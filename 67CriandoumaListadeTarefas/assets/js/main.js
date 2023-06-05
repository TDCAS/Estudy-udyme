const textInputTaks = document.getElementById("textInputTaks")
const addButtonTask = document.getElementById("addButtonTask")
const listTask = document.getElementById("listTask")


document.addEventListener("click",function(e) {
      const events = e.target.id
      switch(events){
            case addButtonTask.id:
                  addTask()
                  break;
            case "removeButton":
                  
                  break;
            default:

      }
})


function objct(){
      
      addTask()


}

function addTask(){
      
      const createLi = document.createElement('li')
      const createBr = document.createElement('br')
      const  createButton = document.createElement("button")
      createButton.textContent = `Remover Task`
      createButton.id = `removeButton`
      createLi.textContent = `${textInputTaks.value}`
      console.log(createLi)
      listTask.appendChild(createLi)
      createLi.appendChild(createButton) 

}

function removeTask(events){
      
}