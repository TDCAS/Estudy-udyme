exports.paginaInicial_get = (req, res) => {
    res.render('index.ejs')
}

exports.paginaInicial_post = (req,res) => {
    res.send(`Seu nome é ${req.body.username}`)

}