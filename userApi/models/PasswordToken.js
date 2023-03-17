var knex = require('../database/connection')
var User = require('./User')

class PasswordToken {

    async create(email) {
        var user = await User.findByEmail(email);

        if(user != undefined) {

            try {

                var token = Date.now();

                await knex.insert({
                    id:user.id,
                    user_id: user.id,
                    used:0,
                    token: token
                }).table("passwordtoken")

                return {status:true, token: token}
                
            } catch (error) {
                console.log(error)
                return {status:false, err: "Email não existe"}
            }


        } else {
            return {status:false, err: "Email não existe"}
        }



    }

}

module.exports = new PasswordToken();