const server = require('./urls').server;
const settings = require('./settings');

process.env.date_now = settings.date_now;


server.listen(settings.port, () => {
  console.log(`Server listening on port ${settings.port}`)
})

