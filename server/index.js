// const { db } = require('./db')
const PORT = process.env.PORT || 8080
const app = require('./app')
// const seed = require('../script/seed');

const init = async () => {
  try {
    // start listening (and create a 'server' object representing our server)
    app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))
  } catch (ex) {
    console.log(ex)
  }
}

init()
