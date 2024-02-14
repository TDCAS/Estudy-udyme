//Chamado tag id da section
const sectioncontainer = document.getElementById("sectioncontainer")
//criando lista de objetos
const elements = [
    {tag:'p', text: 'Frase 1'},
    {tag:'div',text: 'Frase 2'},
    {tag:'footer', text: 'Frase 3'},
    {tag:'section', text: 'Frase 4'},
]

//criando for que tem,
for(let cont = 0;cont < elements.length;cont++){
    const {tag,text} = elements[cont]
    tagCreator(tag,text)
}
function tagCreator(tag,text){
    const tagCreate = document.createElement(tag)
    tagCreate.textContent = text
    sectioncontainer.appendChild(tagCreate)
}

//outra forma de function
/*
function tagCreator(tag,text){
    const tagCreate = document.createElement(tag)
    const textCreate = document.createTextNode(text)
    tagCreate.appendChild(textCreate)
    sectioncontainer.appendChild(tagCreate)
}
*/


