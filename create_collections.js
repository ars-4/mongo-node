const user_models = require('./models').models
const settings = require('./settings')
const MongoClient = require('mongodb').MongoClient

create_collection = async function (name) {
    await MongoClient.connect(settings.database.url, { useUnifiedTopology: true })
        .then(client => {
            console.log(`Connected to ${settings.database.db}`)
            const db = client.db(settings.database.db)
            const coll = db.createCollection(name)
            console.log(`${name} Created`)
        })
}


user_models.forEach(model => {
    create_collection(model.name)
})