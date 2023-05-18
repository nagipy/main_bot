const { client } = require("discord.js")
require("dotenv").config()
const client = new Client()

client.on("ready", () => {
 console.log(`login ${client.user.tag}`)
 
 // online(オンライン) idle(退席中) dnd(取り込み中) invisible(オフライン)
 client.user.setPresence({
  status: "online",
  activity: {
   name: "Otonari no Tenshi-sama",
   type: "WATCHING"
  }
 })
  
 const files = require("./files")
 files(client)
})

client.login(process.env.token)
