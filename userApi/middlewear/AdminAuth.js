var jwt = require('jsonwebtoken')
var dotenv = require('dotenv')
dotenv.config()

module.exports = function(req,res,next) {

    const auth = req.headers['authorization']

    if(auth != undefined) {
        const bearer = auth.split(' ');
        var token = bearer[1]

        try {
            var decode = jwt.verify(token,process.env.SECRET)

            if(decode.role == 1) {
                next()
            } else {
                res.status(403).send("Não está autorizado")
                return
            }
            
        } catch (error) {
            res.status(403).send("Não está autenticado")
            return
        }

    } else {
        res.status(403).send("Não está autenticado")
        return
    }

}