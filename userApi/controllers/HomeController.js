class HomeController{

    async index(req, res){
        res.send("ok rodando");
    }

}

module.exports = new HomeController();