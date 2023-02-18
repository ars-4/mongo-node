const Student = require('./models').User
const get_all_objects = require('./model').get_all_objects;


async function get_object() {
    let users = await get_all_objects("User")
    return users;
}


function create_user(req) {
    let user = new User(
        req.body['username'],
        req.body['first_name'],
        req.body['last_name'],
        req.body['email'],
        req.body['password']
    )
    user.create_object()
    return user.get_base_obj()
}




module.exports.get_object = get_object;
module.exports.create_user = create_user;