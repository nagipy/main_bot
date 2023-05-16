module.exports = client => {
 const lobby = require("./logs/lobby")
 lobby(client)
 const voice = require("./logs/voice")
 voice(client)
 const user = require("./logs/user")
 user(client)
 
 console.log("code loading end")
}
