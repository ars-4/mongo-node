const MongoClient = require('mongodb').MongoClient
const settings = require('./settings')

class Model {
    constructor(base_obj) {
        
        this.converted_obj = {}
        this.data = []
        this.base_obj = base_obj;

        this.get_converted_obj = function () {
            let x = Object.entries(this.base_obj);
            for (let i = 0; i < x.length; i++) {
                this.converted_obj[x[i][0]] = x[i][1];
            }
            return this.converted_obj;
        }
        this.get_base_obj = function () {
            return base_obj;
        }

        this.create_object = async function () {
            await MongoClient.connect(settings.database.url, { useUnifiedTopology: true })
                .then(client => {
                    console.log(`Connected to ${settings.database.db}`)
                    const db = client.db(settings.database.db)
                    const coll = db.collection(this.constructor.name)
                    let object = this.get_converted_obj();
                    coll.insertOne(object)
                })
        }

        this.get_all = async function () {
            this.data = await MongoClient.connect(settings.database.url, { useUnifiedTopology: true })
                .then(client => {
                    console.log('Connected to Database')
                    const db = client.db(settings.database.db)
                    const coll = db.collection(this.constructor.name)
                    return coll.find({}).toArray()
                })
            return this.data
        }

    }
}


let get_all_objects = async function (collection) {
    this.data = await MongoClient.connect(settings.database.url, { useUnifiedTopology: true })
        .then(client => {
            console.log('Connected to Database')
            const db = client.db(settings.database.db)
            const coll = db.collection(collection)
            return coll.find({}).toArray()
        })
    return this.data
}


module.exports.Model = Model;
module.exports.get_all_objects = get_all_objects;