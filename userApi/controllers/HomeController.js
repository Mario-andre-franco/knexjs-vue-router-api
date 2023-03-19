class HomeController{

    async index(req, res){
        res.send("ok rodando");
    }

    async validation(req,res) {
        res.send('ok')
    }

}

module.exports = new HomeController();