

// PORT
const port = 8000;


// Database
const database = {
    "url":"mongodb+srv://ars-1:qwerty234@cluster0.0xtox.mongodb.net/?retryWrites=true&w=majority",
    "db":'Management',
    "user":"",
    "password":""
}


// Date
let date_obj = new Date()
let date_now = date_obj.getDate().toString() + "/" + date_obj.getMonth().toString() + "/" + date_obj.getFullYear().toString()


module.exports.database = database;
module.exports.date_now = date_now;
module.exports.port = port;