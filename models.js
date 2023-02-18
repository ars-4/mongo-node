const Model = require('./model').Model;

class Student extends Model {
    constructor(name, clss, age) {
        super({
            "name":name,
            "class":clss,
            "age":age,
            "date_created":process.env.date_now
        });
    }
}


class User extends Model {
    constructor(username, first_name, last_name, email) {
        super({
            "username":username,
            "first_name":first_name,
            "last_name":last_name,
            "email":email,
            "password":password
        });
    }
}


let models = [
    User,
    Student
]

module.exports.User = User
module.exports.models = models
