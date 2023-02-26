//importando o modulo express express
const express =  require('express')
//chamando a função express() e guardando dentro da varialvel app
const app = express()
//imporntando o arquivo de rotas e guardando  dentro de routes
const routes = require("./routes.js")
//importando o modulo path = caminho ,  e guardando dentro de path
const path = require('path')



app.use(express.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname,'public')))

app.set('views', path.resolve(__dirname,'src','views'))
app.set('view engine', 'ejs')
app.use(routes)

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
    console.log(__dirname,'src','views')
   

})

