var User = require("../models/User")



class UserController {
    async index(req,res) {}

    async create(req,res) {
        var {email,name,password} = req.body;

        if(email == undefined) {
            res.status(400);
            res.json({erro: "Verifique os campos email e nome!"})
            return
        }

        var emailExist = await User.findEmail(email);
        
        if(emailExist) {
            return res.status(406).json({error: "Usuário já cadastrado"})
        }
        await User.new(email,password,name);
        res.status(200).json("salvo com sucesso");
    }
}

module.exports = new UserController();