const { client } = require("discord.js")
require("dotenv").config()
const client = new Client()

client.on("ready", () => {
 console.log(`login ${client.user.tag}`)
  
 client.user.setStatus("idel")
  
 const files = require("./files")
 files(client)
})

client.login(process.env.token)
