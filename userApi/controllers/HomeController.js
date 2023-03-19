class HomeController{

    async index(req, res){
        res.send("ok rodando");
    }

    async validation(req,res) {
        res.send({status: "ok"})
    }

}

module.exports = new HomeController();