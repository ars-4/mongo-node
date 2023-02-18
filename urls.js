const express = require('express');
const bodyParser = require('body-parser');
const views = require('./views');

const server = express();
server.use(bodyParser.urlencoded({
    extended: true
  }));
server.use(bodyParser.json());


server.get('/', (req, res) => {
    res.send("Congratulations")
})


server.get('/users', async (req, res) => {
    let data = await views.get_object()
    res.send(data)
})


server.post('/users', async (req, res) => {
    let data = await views.create_user(req)
    res.send(data)
})


module.exports.server = server;
