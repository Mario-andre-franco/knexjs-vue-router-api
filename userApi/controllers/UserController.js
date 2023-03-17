var User = require("../models/User")



class UserController {
    
    async index(req,res) {
        var users = await User.findAll()
        res.json(users)
    }

    async findUser(req,res) {
        var id = req.params.id
        var user = await User.findById(id)

        if(user == undefined) {
            res.status(404).json({})
        } else {
            res.status(200).json(user)
        }
    }

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