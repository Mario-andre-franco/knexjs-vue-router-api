class UserController {
    async index(req,res) {}

    async create(req,res) {
        var {email,name,password} = req.body;

        if(email || name == undefined) {
            res.status(400);
            res.json({erro: "Verifique os campos email e nome!"})
        }

        res.status(200);
    }
}

module.exports = new UserController();