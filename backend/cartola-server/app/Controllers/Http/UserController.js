'use strict'

const User = use("App/Models/User")

class UserController {
    async list({response}){
        const data = await User.all();

        response.send(data);
    }
    async create({request}){
        const data = request.only(["username", "email","password","type"]);
        
        const user = await User.create(data);

        return user;
    }
    async find({params}){
        const user = await User.findOrFail(params.id);

        return user;
    }
}

module.exports = UserController
