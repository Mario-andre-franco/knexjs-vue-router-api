const knex = require("../database/connection")
var User = require("../models/User")
var PasswordToken = require("../models/PasswordToken")



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

    async edit(req,res) {
        var {id,name,role,email} = req.body;
        var result = await User.update(id,email,name,role)
        
        if(result != undefined) {
            if(result.status) {
                res.status(200)
                res.send("tudo ok")
            } else {
                res.status(406).send(result.err)
            }
        }
        else {
            res.status(406).send("Ocorreu erro no servidor")
        }
    }

    async remove(req,res) {
        var id = req.params.id
        
        var result = await User.delete(id);

        if(result.status) {
            res.status(200).send("deletado")
        } else {
            res.status(406).send(result.err)
        }
    }

    async recoveryPassword(req,res) {
        var email = req.body.email
        var result = await PasswordToken.create(email)

        if(result.status) {
            res.status(200).send("token enviado")
            console.log("token criado")

        } else {
            res.status(406).send(result.err)
        }
    }
    
}

module.exports = new UserController();